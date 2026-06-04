// Storefront API response shapes (only the fields we actually request).

export interface ShopifyImage {
    url: string;
    altText: string | null;
    width: number;
    height: number;
}

export interface ShopifyMoney {
    amount: string;
    currencyCode: string;
}

export interface ShopifyPriceRange {
    minVariantPrice: ShopifyMoney;
    maxVariantPrice: ShopifyMoney;
}

export interface ShopifySelectedOption {
    name: string;
    value: string;
}

export interface ShopifyVariant {
    id: string;
    title: string;
    availableForSale: boolean;
    price: ShopifyMoney;
    selectedOptions: ShopifySelectedOption[];
    image: ShopifyImage | null;
}

export interface ShopifyProductOption {
    id: string;
    name: string;
    values: string[];
}

// Extended product with collection/tag info for filtering
export interface ShopifyProductSummary {
    id: string;
    handle: string;
    title: string;
    productType: string;
    description: string;
    availableForSale: boolean;
    featuredImage: ShopifyImage | null;
    priceRange: ShopifyPriceRange;
    tags?: string[];
    collections?: string[]; // Collection handles for filtering
}

export interface ShopifyProduct extends ShopifyProductSummary {
    descriptionHtml: string;
    images: ShopifyImage[];
    options: ShopifyProductOption[];
    variants: ShopifyVariant[];
}

export interface ShopifyCart {
    id: string;
    checkoutUrl: string;
}

// Collection types
export interface ShopifyCollection {
    id: string;
    handle: string;
    title: string;
    description: string;
    image: ShopifyImage | null;
    productsCount?: number;
}

// Filter types for shop UI
export interface ShopFilters {
    collection?: string;
    productType?: string;
    minPrice?: number;
    maxPrice?: number;
    availability?: 'all' | 'in-stock' | 'out-of-stock';
    sortBy?:
        | 'best-selling'
        | 'price-asc'
        | 'price-desc'
        | 'newest'
        | 'title-asc';
    search?: string;
}
