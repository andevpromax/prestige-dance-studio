import 'server-only';

import {
    filterMockProducts,
    getMockCollection,
    getMockCollections,
    getMockProduct,
    getMockProducts,
    getMockProductsByCollection,
    getMockProductTypes,
    searchMockProducts,
} from './mock-data';
import {
    CART_CREATE_MUTATION,
    PRODUCT_BY_HANDLE_QUERY,
    PRODUCTS_QUERY,
} from './queries';
import type {
    ShopFilters,
    ShopifyCart,
    ShopifyCollection,
    ShopifyImage,
    ShopifyProduct,
    ShopifyProductOption,
    ShopifyProductSummary,
    ShopifyVariant,
} from './types';

const STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = process.env.SHOPIFY_API_VERSION || '2025-01';

export function isShopifyConfigured(): boolean {
    return Boolean(STORE_DOMAIN && STOREFRONT_TOKEN);
}

function endpoint(): string {
    if (!STORE_DOMAIN || !STOREFRONT_TOKEN) {
        // Callers should guard with isShopifyConfigured() before reaching here.
        throw new Error(
            'Shopify env vars are not configured. Set NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN.',
        );
    }
    const domain = STORE_DOMAIN.replace(/^https?:\/\//, '').replace(/\/$/, '');
    return `https://${domain}/api/${API_VERSION}/graphql.json`;
}

interface GraphQLResponse<T> {
    data?: T;
    errors?: { message: string }[];
}

interface ShopifyFetchOptions {
    // Server-side cache window in seconds. Use 0 to disable.
    revalidate?: number;
    cache?: RequestCache;
}

async function shopifyFetch<T>(
    query: string,
    variables: Record<string, unknown> = {},
    options: ShopifyFetchOptions = {},
): Promise<T> {
    const { revalidate = 60, cache } = options;

    const res = await fetch(endpoint(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // STOREFRONT_TOKEN is checked in endpoint() above.
            'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN as string,
        },
        body: JSON.stringify({ query, variables }),
        ...(cache ? { cache } : { next: { revalidate } }),
    });

    if (!res.ok) {
        throw new Error(
            `Shopify request failed: ${res.status} ${res.statusText}`,
        );
    }

    const json = (await res.json()) as GraphQLResponse<T>;
    if (json.errors?.length) {
        throw new Error(
            `Shopify GraphQL errors: ${json.errors.map((e) => e.message).join('; ')}`,
        );
    }
    if (!json.data) {
        throw new Error('Shopify response missing data.');
    }
    return json.data;
}

// ── Normalizers ────────────────────────────────────────────

interface EdgeList<T> {
    edges: { node: T }[];
}

function flatten<T>(list: EdgeList<T> | null | undefined): T[] {
    if (!list?.edges) return [];
    return list.edges.map((e) => e.node);
}

interface RawProduct extends ShopifyProductSummary {
    descriptionHtml?: string;
    images?: EdgeList<ShopifyImage>;
    options?: ShopifyProductOption[];
    variants?: EdgeList<ShopifyVariant>;
}

function normalizeProduct(raw: RawProduct): ShopifyProduct {
    return {
        id: raw.id,
        handle: raw.handle,
        title: raw.title,
        productType: raw.productType,
        description: raw.description,
        availableForSale: raw.availableForSale,
        featuredImage: raw.featuredImage,
        priceRange: raw.priceRange,
        descriptionHtml: raw.descriptionHtml ?? '',
        images: flatten(raw.images),
        options: raw.options ?? [],
        variants: flatten(raw.variants),
    };
}

// ── Public API ─────────────────────────────────────────────

export async function getProducts(
    first = 24,
): Promise<ShopifyProductSummary[]> {
    if (!isShopifyConfigured()) {
        // Return mock data for development
        return getMockProducts(first);
    }
    const data = await shopifyFetch<{
        products: EdgeList<ShopifyProductSummary>;
    }>(PRODUCTS_QUERY, { first });
    return flatten(data.products);
}

export async function getProduct(
    handle: string,
): Promise<ShopifyProduct | null> {
    if (!isShopifyConfigured()) {
        // Return mock data for development
        return getMockProduct(handle);
    }
    const data = await shopifyFetch<{ product: RawProduct | null }>(
        PRODUCT_BY_HANDLE_QUERY,
        { handle },
    );
    return data.product ? normalizeProduct(data.product) : null;
}

export async function createCart(
    variantId: string,
    quantity = 1,
): Promise<ShopifyCart> {
    if (!isShopifyConfigured()) {
        throw new Error(
            'Shopify is not configured. Please set the Shopify environment variables.',
        );
    }
    const data = await shopifyFetch<{
        cartCreate: {
            cart: ShopifyCart | null;
            userErrors: { field: string[] | null; message: string }[];
        };
    }>(
        CART_CREATE_MUTATION,
        { lines: [{ merchandiseId: variantId, quantity }] },
        { cache: 'no-store' },
    );

    const { cart, userErrors } = data.cartCreate;
    if (userErrors.length) {
        throw new Error(
            `Shopify cart errors: ${userErrors.map((e) => e.message).join('; ')}`,
        );
    }
    if (!cart) {
        throw new Error('Shopify did not return a cart.');
    }
    return cart;
}

export function formatPrice(amount: string, currencyCode: string): string {
    const value = Number.parseFloat(amount);
    if (Number.isNaN(value)) return `${amount} ${currencyCode}`;
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
        }).format(value);
    } catch {
        return `${value.toFixed(2)} ${currencyCode}`;
    }
}

// ── Collections ────────────────────────────────────────────

export async function getCollections(): Promise<ShopifyCollection[]> {
    if (!isShopifyConfigured()) {
        return getMockCollections();
    }
    // TODO: Implement Shopify collections query
    return getMockCollections();
}

export async function getCollection(
    handle: string,
): Promise<ShopifyCollection | null> {
    if (!isShopifyConfigured()) {
        return getMockCollection(handle);
    }
    // TODO: Implement Shopify collection query
    return getMockCollection(handle);
}

export async function getProductsByCollection(
    collectionHandle: string,
    first = 24,
): Promise<ShopifyProductSummary[]> {
    if (!isShopifyConfigured()) {
        return getMockProductsByCollection(collectionHandle, first);
    }
    // TODO: Implement Shopify products by collection query
    return getMockProductsByCollection(collectionHandle, first);
}

// ── Search & Filtering ─────────────────────────────────────

export async function searchProducts(
    query: string,
    first = 24,
): Promise<ShopifyProductSummary[]> {
    if (!isShopifyConfigured()) {
        return searchMockProducts(query, first);
    }
    // TODO: Implement Shopify search query
    return searchMockProducts(query, first);
}

export async function getFilteredProducts(
    filters: ShopFilters,
    first = 24,
): Promise<ShopifyProductSummary[]> {
    if (!isShopifyConfigured()) {
        return filterMockProducts(filters, first);
    }
    // TODO: Implement Shopify filtered products query
    return filterMockProducts(filters, first);
}

export async function getProductTypes(): Promise<string[]> {
    if (!isShopifyConfigured()) {
        return getMockProductTypes();
    }
    // TODO: Implement Shopify product types query
    return getMockProductTypes();
}
