'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import type { ShopFilters, ShopifyCollection } from '@/lib/shopify/types';

interface FilterPanelProps {
    collections: ShopifyCollection[];
    productTypes: string[];
    currentFilters: ShopFilters;
}

const SORT_OPTIONS = [
    { value: 'best-selling', label: 'Best Selling' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'title-asc', label: 'A-Z' },
];

const PRICE_RANGES = [
    { label: 'All Prices', min: undefined, max: undefined },
    { label: 'Under $25', min: undefined, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: 'Over $100', min: 100, max: undefined },
];

export default function FilterPanel({
    collections,
    productTypes,
    currentFilters,
}: FilterPanelProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const updateFilters = useCallback(
        (updates: Partial<ShopFilters>) => {
            const params = new URLSearchParams(searchParams.toString());

            // Update or remove each filter
            for (const [key, value] of Object.entries(updates)) {
                if (value === undefined || value === '' || value === 'all') {
                    params.delete(key);
                } else {
                    params.set(key, String(value));
                }
            }

            startTransition(() => {
                router.push(`/shop?${params.toString()}`, { scroll: false });
            });
        },
        [router, searchParams],
    );

    const clearFilters = useCallback(() => {
        startTransition(() => {
            router.push('/shop', { scroll: false });
        });
    }, [router]);

    const hasActiveFilters =
        currentFilters.collection ||
        currentFilters.productType ||
        currentFilters.minPrice !== undefined ||
        currentFilters.maxPrice !== undefined ||
        currentFilters.availability !== 'all';

    return (
        <aside
            className={`space-y-6 ${isPending ? 'opacity-60 pointer-events-none' : ''}`}
        >
            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    type='button'
                    onClick={clearFilters}
                    className='text-sm text-gold hover:text-gold-light transition-colors underline underline-offset-2'
                >
                    Clear all filters
                </button>
            )}

            {/* Categories */}
            <div>
                <h3 className='font-display text-lg text-cream mb-3'>
                    Category
                </h3>
                <ul className='space-y-2'>
                    <li>
                        <button
                            type='button'
                            onClick={() =>
                                updateFilters({ collection: undefined })
                            }
                            className={`text-sm transition-colors ${
                                !currentFilters.collection
                                    ? 'text-gold font-medium'
                                    : 'text-cream/70 hover:text-cream'
                            }`}
                        >
                            All Products
                        </button>
                    </li>
                    {collections.map((collection) => (
                        <li key={collection.handle}>
                            <button
                                type='button'
                                onClick={() =>
                                    updateFilters({
                                        collection: collection.handle,
                                    })
                                }
                                className={`text-sm transition-colors ${
                                    currentFilters.collection ===
                                    collection.handle
                                        ? 'text-gold font-medium'
                                        : 'text-cream/70 hover:text-cream'
                                }`}
                            >
                                {collection.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Product Type */}
            <div>
                <h3 className='font-display text-lg text-cream mb-3'>Type</h3>
                <ul className='space-y-2'>
                    <li>
                        <button
                            type='button'
                            onClick={() =>
                                updateFilters({ productType: undefined })
                            }
                            className={`text-sm transition-colors ${
                                !currentFilters.productType
                                    ? 'text-gold font-medium'
                                    : 'text-cream/70 hover:text-cream'
                            }`}
                        >
                            All Types
                        </button>
                    </li>
                    {productTypes.map((type) => (
                        <li key={type}>
                            <button
                                type='button'
                                onClick={() =>
                                    updateFilters({ productType: type })
                                }
                                className={`text-sm transition-colors ${
                                    currentFilters.productType === type
                                        ? 'text-gold font-medium'
                                        : 'text-cream/70 hover:text-cream'
                                }`}
                            >
                                {type}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range */}
            <div>
                <h3 className='font-display text-lg text-cream mb-3'>Price</h3>
                <ul className='space-y-2'>
                    {PRICE_RANGES.map((range) => {
                        const isActive =
                            currentFilters.minPrice === range.min &&
                            currentFilters.maxPrice === range.max;
                        return (
                            <li key={range.label}>
                                <button
                                    type='button'
                                    onClick={() =>
                                        updateFilters({
                                            minPrice: range.min,
                                            maxPrice: range.max,
                                        })
                                    }
                                    className={`text-sm transition-colors ${
                                        isActive
                                            ? 'text-gold font-medium'
                                            : 'text-cream/70 hover:text-cream'
                                    }`}
                                >
                                    {range.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Availability */}
            <div>
                <h3 className='font-display text-lg text-cream mb-3'>
                    Availability
                </h3>
                <ul className='space-y-2'>
                    {[
                        { value: 'all', label: 'All' },
                        { value: 'in-stock', label: 'In Stock' },
                        { value: 'out-of-stock', label: 'Out of Stock' },
                    ].map((opt) => (
                        <li key={opt.value}>
                            <button
                                type='button'
                                onClick={() =>
                                    updateFilters({
                                        availability:
                                            opt.value as ShopFilters['availability'],
                                    })
                                }
                                className={`text-sm transition-colors ${
                                    (currentFilters.availability || 'all') ===
                                    opt.value
                                        ? 'text-gold font-medium'
                                        : 'text-cream/70 hover:text-cream'
                                }`}
                            >
                                {opt.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sort */}
            <div>
                <h3 className='font-display text-lg text-cream mb-3'>
                    Sort By
                </h3>
                <select
                    value={currentFilters.sortBy || 'best-selling'}
                    onChange={(e) =>
                        updateFilters({
                            sortBy: e.target.value as ShopFilters['sortBy'],
                        })
                    }
                    className='w-full bg-studio-card border border-gold/20 rounded-md px-3 py-2 text-sm text-cream focus:outline-none focus:border-gold/50'
                >
                    {SORT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>
        </aside>
    );
}
