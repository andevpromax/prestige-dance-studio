'use client';

import { useEffect, useState } from 'react';
import type { ShopFilters, ShopifyCollection } from '@/lib/shopify/types';
import FilterPanel from './FilterPanel';

interface MobileFilterDrawerProps {
    collections: ShopifyCollection[];
    productTypes: string[];
    currentFilters: ShopFilters;
}

export default function MobileFilterDrawer({
    collections,
    productTypes,
    currentFilters,
}: MobileFilterDrawerProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Close drawer on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const activeFilterCount = [
        currentFilters.collection,
        currentFilters.productType,
        currentFilters.minPrice !== undefined ||
            currentFilters.maxPrice !== undefined,
        currentFilters.availability && currentFilters.availability !== 'all',
    ].filter(Boolean).length;

    return (
        <>
            {/* Trigger Button */}
            <button
                type='button'
                onClick={() => setIsOpen(true)}
                className='lg:hidden flex items-center gap-2 px-4 py-2 bg-studio-card border border-gold/20 rounded-lg text-sm text-cream hover:border-gold/40 transition-colors'
            >
                <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
                    />
                </svg>
                <span>Filters</span>
                {activeFilterCount > 0 && (
                    <span className='ml-1 px-1.5 py-0.5 bg-gold text-studio-base text-xs font-medium rounded-full'>
                        {activeFilterCount}
                    </span>
                )}
            </button>

            {/* Overlay */}
            {isOpen && (
                <button
                    type='button'
                    className='fixed inset-0 bg-black/60 z-40 lg:hidden cursor-default'
                    onClick={() => setIsOpen(false)}
                    aria-label='Close filters'
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-studio-base z-50 transform transition-transform duration-300 ease-out lg:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='h-full flex flex-col'>
                    {/* Header */}
                    <div className='flex items-center justify-between px-5 py-4 border-b border-gold/10'>
                        <h2 className='font-display text-xl text-cream'>
                            Filters
                        </h2>
                        <button
                            type='button'
                            onClick={() => setIsOpen(false)}
                            className='p-1 text-cream/70 hover:text-cream transition-colors'
                        >
                            <svg
                                className='w-6 h-6'
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
                    </div>

                    {/* Filter Content */}
                    <div className='flex-1 overflow-y-auto px-5 py-6'>
                        <FilterPanel
                            collections={collections}
                            productTypes={productTypes}
                            currentFilters={currentFilters}
                        />
                    </div>

                    {/* Footer */}
                    <div className='px-5 py-4 border-t border-gold/10'>
                        <button
                            type='button'
                            onClick={() => setIsOpen(false)}
                            className='w-full py-2.5 bg-gold text-studio-base font-medium rounded-lg hover:bg-gold-light transition-colors'
                        >
                            View Results
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
