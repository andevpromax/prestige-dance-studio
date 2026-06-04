'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import type { ShopFilters, ShopifyCollection } from '@/lib/shopify/types';

interface ActiveFiltersProps {
    currentFilters: ShopFilters;
    collections: ShopifyCollection[];
    productTypes?: string[];
    totalResults: number;
}

export default function ActiveFilters({
    currentFilters,
    collections,
    totalResults,
}: ActiveFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const removeFilter = useCallback(
        (key: keyof ShopFilters) => {
            const params = new URLSearchParams(searchParams.toString());
            if (key === 'minPrice' || key === 'maxPrice') {
                params.delete('minPrice');
                params.delete('maxPrice');
            } else {
                params.delete(key);
            }
            startTransition(() => {
                router.push(`/shop?${params.toString()}`, { scroll: false });
            });
        },
        [router, searchParams],
    );

    const clearAll = useCallback(() => {
        startTransition(() => {
            router.push('/shop', { scroll: false });
        });
    }, [router]);

    const activeFilters: { key: keyof ShopFilters; label: string }[] = [];

    if (currentFilters.collection) {
        const col = collections.find(
            (c) => c.handle === currentFilters.collection,
        );
        activeFilters.push({
            key: 'collection',
            label: col?.title || currentFilters.collection,
        });
    }

    if (currentFilters.productType) {
        activeFilters.push({
            key: 'productType',
            label: currentFilters.productType,
        });
    }

    if (
        currentFilters.minPrice !== undefined ||
        currentFilters.maxPrice !== undefined
    ) {
        let priceLabel = '';
        if (
            currentFilters.minPrice !== undefined &&
            currentFilters.maxPrice !== undefined
        ) {
            priceLabel = `$${currentFilters.minPrice} - $${currentFilters.maxPrice}`;
        } else if (currentFilters.minPrice !== undefined) {
            priceLabel = `Over $${currentFilters.minPrice}`;
        } else if (currentFilters.maxPrice !== undefined) {
            priceLabel = `Under $${currentFilters.maxPrice}`;
        }
        activeFilters.push({ key: 'minPrice', label: priceLabel });
    }

    if (currentFilters.availability && currentFilters.availability !== 'all') {
        activeFilters.push({
            key: 'availability',
            label:
                currentFilters.availability === 'in-stock'
                    ? 'In Stock'
                    : 'Out of Stock',
        });
    }

    if (currentFilters.search) {
        activeFilters.push({
            key: 'search',
            label: `"${currentFilters.search}"`,
        });
    }

    if (activeFilters.length === 0) {
        return (
            <div className='text-sm text-cream/60'>
                {totalResults} {totalResults === 1 ? 'product' : 'products'}
            </div>
        );
    }

    return (
        <div
            className={`flex flex-wrap items-center gap-2 ${isPending ? 'opacity-60' : ''}`}
        >
            <span className='text-sm text-cream/60 mr-1'>
                {totalResults} {totalResults === 1 ? 'result' : 'results'}:
            </span>
            {activeFilters.map((filter) => (
                <button
                    key={filter.key}
                    type='button'
                    onClick={() => removeFilter(filter.key)}
                    className='inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs text-gold hover:bg-gold/20 transition-colors group'
                >
                    <span>{filter.label}</span>
                    <svg
                        className='w-3 h-3 opacity-60 group-hover:opacity-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>
            ))}
            {activeFilters.length > 1 && (
                <button
                    type='button'
                    onClick={clearAll}
                    className='text-xs text-cream/50 hover:text-cream underline underline-offset-2 transition-colors ml-1'
                >
                    Clear all
                </button>
            )}
        </div>
    );
}
