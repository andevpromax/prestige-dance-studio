'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { buyNowAction } from '@/app/shop/actions';
import type { ShopifyProduct, ShopifyVariant } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';

interface ProductDetailProps {
    product: ShopifyProduct;
}

function formatMoney(amount: string, currencyCode: string): string {
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

function findMatchingVariant(
    variants: ShopifyVariant[],
    selected: Record<string, string>,
): ShopifyVariant | undefined {
    return variants.find((v) =>
        v.selectedOptions.every((o) => selected[o.name] === o.value),
    );
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const initialSelection = useMemo<Record<string, string>>(() => {
        const first = product.variants[0];
        if (!first) return {};
        return Object.fromEntries(
            first.selectedOptions.map((o) => [o.name, o.value]),
        );
    }, [product.variants]);

    const [selectedOptions, setSelectedOptions] =
        useState<Record<string, string>>(initialSelection);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const activeVariant =
        findMatchingVariant(product.variants, selectedOptions) ??
        product.variants[0];

    const [activeImage, setActiveImage] = useState(
        activeVariant?.image?.url ??
            product.featuredImage?.url ??
            product.images[0]?.url ??
            null,
    );

    const gallery = product.images.length
        ? product.images
        : product.featuredImage
          ? [product.featuredImage]
          : [];

    const price = activeVariant
        ? formatMoney(
              activeVariant.price.amount,
              activeVariant.price.currencyCode,
          )
        : formatMoney(
              product.priceRange.minVariantPrice.amount,
              product.priceRange.minVariantPrice.currencyCode,
          );

    const available = activeVariant?.availableForSale ?? false;

    async function handleSubmit(formData: FormData) {
        setError(null);
        setSubmitting(true);
        try {
            await buyNowAction(formData);
            // redirect() throws — control should not return here on success.
        } catch (e) {
            setSubmitting(false);
            setError(
                e instanceof Error
                    ? e.message
                    : 'Could not start checkout. Please try again.',
            );
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14'>
            {/* Gallery */}
            <div>
                <div className='relative aspect-square w-full overflow-hidden rounded-lg border border-gold/10 bg-studio-dark'>
                    {activeImage ? (
                        <Image
                            src={activeImage}
                            alt={product.title}
                            fill
                            sizes='(min-width: 1024px) 50vw, 100vw'
                            className='object-cover'
                            priority
                        />
                    ) : (
                        <div className='flex h-full w-full items-center justify-center text-gold/30 text-6xl font-display'>
                            ✦
                        </div>
                    )}
                </div>
                {gallery.length > 1 && (
                    <div className='mt-4 grid grid-cols-5 gap-3'>
                        {gallery.map((img) => (
                            <button
                                key={img.url}
                                type='button'
                                onClick={() => setActiveImage(img.url)}
                                className={cn(
                                    'relative aspect-square overflow-hidden rounded-md border bg-studio-dark transition-colors',
                                    activeImage === img.url
                                        ? 'border-gold'
                                        : 'border-gold/15 hover:border-gold/40',
                                )}
                                aria-label={`View image: ${img.altText ?? product.title}`}
                            >
                                <Image
                                    src={img.url}
                                    alt={img.altText ?? product.title}
                                    fill
                                    sizes='100px'
                                    className='object-cover'
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Details */}
            <div>
                {product.productType && (
                    <span className='inline-block mb-3 rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.7rem] tracking-[0.12em] uppercase text-gold'>
                        {product.productType}
                    </span>
                )}
                <h1 className='font-display text-[clamp(2rem,4vw,2.8rem)] text-cream mb-3'>
                    {product.title}
                </h1>
                <p className='font-body text-[1.4rem] text-gold mb-6'>
                    {price}
                </p>

                {product.descriptionHtml ? (
                    <div
                        className='prose prose-invert max-w-none text-cream/75 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-gold'
                        // biome-ignore lint/security/noDangerouslySetInnerHtml: Shopify-provided description HTML, sanitized server-side by Shopify.
                        dangerouslySetInnerHTML={{
                            __html: product.descriptionHtml,
                        }}
                    />
                ) : (
                    <p className='text-cream/75 mb-6'>{product.description}</p>
                )}

                {/* Variant options */}
                {product.options.length > 0 &&
                    product.options[0]?.values.length > 1 &&
                    product.options.map((option) => (
                        <div key={option.id} className='mt-6'>
                            <p className='font-body text-[0.75rem] tracking-[0.2em] uppercase text-studio-grey mb-2'>
                                {option.name}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {option.values.map((value) => {
                                    const isActive =
                                        selectedOptions[option.name] === value;
                                    return (
                                        <button
                                            key={value}
                                            type='button'
                                            onClick={() =>
                                                setSelectedOptions((prev) => ({
                                                    ...prev,
                                                    [option.name]: value,
                                                }))
                                            }
                                            className={cn(
                                                'px-4 py-2 rounded-md border text-[0.85rem] transition-all',
                                                isActive
                                                    ? 'border-gold bg-gold/10 text-cream'
                                                    : 'border-gold/20 text-cream/75 hover:border-gold/50',
                                            )}
                                        >
                                            {value}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                {/* Buy form */}
                <form action={handleSubmit} className='mt-8'>
                    {activeVariant && (
                        <input
                            type='hidden'
                            name='variantId'
                            value={activeVariant.id}
                        />
                    )}
                    <input type='hidden' name='quantity' value='1' />

                    <button
                        type='submit'
                        disabled={!available || submitting || !activeVariant}
                        className={cn(
                            'inline-flex items-center justify-center w-full sm:w-auto px-9 py-3.5 font-body text-[0.85rem] font-bold tracking-[0.12em] uppercase rounded-lg transition-all duration-250 cursor-pointer border-0',
                            available && !submitting
                                ? 'bg-gold text-studio-base hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]'
                                : 'bg-studio-card text-studio-grey cursor-not-allowed border border-gold/15',
                        )}
                    >
                        {submitting
                            ? 'Redirecting to checkout…'
                            : available
                              ? 'Buy now'
                              : 'Sold out'}
                    </button>

                    {error && (
                        <p className='mt-3 text-[0.85rem] text-ruby'>{error}</p>
                    )}
                </form>
            </div>
        </div>
    );
}
