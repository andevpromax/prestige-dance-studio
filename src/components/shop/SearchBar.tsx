'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState, useTransition } from 'react';

interface SearchBarProps {
    initialQuery?: string;
}

export default function SearchBar({ initialQuery = '' }: SearchBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(initialQuery);
    const [isPending, startTransition] = useTransition();

    const handleSearch = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            const params = new URLSearchParams(searchParams.toString());

            if (query.trim()) {
                params.set('search', query.trim());
            } else {
                params.delete('search');
            }

            startTransition(() => {
                router.push(`/shop?${params.toString()}`, { scroll: false });
            });
        },
        [query, router, searchParams],
    );

    const clearSearch = useCallback(() => {
        setQuery('');
        const params = new URLSearchParams(searchParams.toString());
        params.delete('search');
        startTransition(() => {
            router.push(`/shop?${params.toString()}`, { scroll: false });
        });
    }, [router, searchParams]);

    return (
        <form onSubmit={handleSearch} className='relative w-full max-w-md'>
            <div className='relative'>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search products...'
                    className={`w-full bg-studio-card border border-gold/20 rounded-lg pl-10 pr-10 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors ${
                        isPending ? 'opacity-60' : ''
                    }`}
                />
                {/* Search Icon */}
                <svg
                    className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cream/50'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                </svg>
                {/* Clear Button */}
                {query && (
                    <button
                        type='button'
                        onClick={clearSearch}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream transition-colors'
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
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </button>
                )}
            </div>
        </form>
    );
}
