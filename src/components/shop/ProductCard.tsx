import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/shopify/client';
import type { ShopifyProductSummary } from '@/lib/shopify/types';

interface ProductCardProps {
    product: ShopifyProductSummary;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { handle, title, productType, featuredImage, priceRange } = product;
    const price = formatPrice(
        priceRange.minVariantPrice.amount,
        priceRange.minVariantPrice.currencyCode,
    );
    const showFromPrefix =
        priceRange.minVariantPrice.amount !== priceRange.maxVariantPrice.amount;

    return (
        <Link
            href={`/shop/${handle}`}
            className='group flex h-full flex-col overflow-hidden rounded-lg border border-gold/10 bg-studio-card transition-all duration-250 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]'
        >
            <div className='relative aspect-square w-full overflow-hidden bg-studio-dark'>
                {featuredImage ? (
                    <Image
                        src={featuredImage.url}
                        alt={featuredImage.altText ?? title}
                        fill
                        sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                        className='object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                    />
                ) : (
                    <div className='flex h-full w-full items-center justify-center text-gold/30 text-4xl font-display'>
                        ✦
                    </div>
                )}
                {!product.availableForSale && (
                    <span className='absolute top-3 left-3 inline-block rounded-full border border-cream/30 bg-studio-base/80 px-2.5 py-0.5 text-[0.65rem] tracking-[0.15em] uppercase text-cream/80'>
                        Sold out
                    </span>
                )}
            </div>

            <div className='flex flex-1 flex-col p-5'>
                {productType && (
                    <span className='mb-2 inline-block self-start rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.65rem] tracking-[0.12em] uppercase text-gold'>
                        {productType}
                    </span>
                )}
                <h3 className='mb-2 font-display text-[1.1rem] text-cream group-hover:text-gold transition-colors duration-250'>
                    {title}
                </h3>
                <div className='mt-auto flex items-center justify-between pt-3'>
                    <span className='font-body text-[0.95rem] text-cream'>
                        {showFromPrefix && (
                            <span className='mr-1 text-[0.7rem] uppercase tracking-[0.1em] text-studio-grey'>
                                From
                            </span>
                        )}
                        {price}
                    </span>
                    <span className='font-body text-[0.7rem] tracking-[0.15em] uppercase text-gold opacity-0 transition-opacity duration-250 group-hover:opacity-100'>
                        View →
                    </span>
                </div>
            </div>
        </Link>
    );
}
