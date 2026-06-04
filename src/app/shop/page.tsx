import type { Metadata } from 'next';
import { Suspense } from 'react';
import ActiveFilters from '@/components/shop/ActiveFilters';
import CategoryNav from '@/components/shop/CategoryNav';
import FilterPanel from '@/components/shop/FilterPanel';
import MobileFilterDrawer from '@/components/shop/MobileFilterDrawer';
import ProductGrid from '@/components/shop/ProductGrid';
import SearchBar from '@/components/shop/SearchBar';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import {
    getCollections,
    getFilteredProducts,
    getProductTypes,
} from '@/lib/shopify/client';
import type { ShopFilters } from '@/lib/shopify/types';

export const metadata: Metadata = {
    title: 'Shop — Prestige Dance Studio',
    description:
        'Dancewear, accessories, and signature pieces curated by Prestige Dance Studio.',
};

interface ShopPageProps {
    searchParams: Promise<{
        collection?: string;
        productType?: string;
        minPrice?: string;
        maxPrice?: string;
        availability?: string;
        sortBy?: string;
        search?: string;
    }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
    const params = await searchParams;

    // Parse filters from URL
    const filters: ShopFilters = {
        collection: params.collection,
        productType: params.productType,
        minPrice: params.minPrice ? Number(params.minPrice) : undefined,
        maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
        availability:
            (params.availability as ShopFilters['availability']) || 'all',
        sortBy: (params.sortBy as ShopFilters['sortBy']) || 'best-selling',
        search: params.search,
    };

    // Fetch data in parallel
    const [products, collections, productTypes] = await Promise.all([
        getFilteredProducts(filters, 48),
        getCollections(),
        getProductTypes(),
    ]);

    return (
        <section className='pt-25 pb-20 px-[5%] bg-studio-base min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <FadeUp>
                    <SectionHeader label='Our Boutique' title='Prestige Shop' />
                </FadeUp>

                <FadeUp>
                    <p className='max-w-2xl mx-auto text-center text-cream/70 -mt-4 mb-10'>
                        Elegant dancewear, accessories, and signature pieces —
                        crafted with the same care we bring to the dance floor.
                    </p>
                </FadeUp>

                {/* Category Navigation */}
                <FadeUp delay={100}>
                    <div className='flex justify-center mb-8'>
                        <CategoryNav
                            collections={collections}
                            activeCollection={filters.collection}
                        />
                    </div>
                </FadeUp>

                {/* Search & Mobile Filter Row */}
                <FadeUp delay={150}>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6'>
                        <Suspense
                            fallback={
                                <div className='h-10 w-full max-w-md bg-studio-card/50 rounded-lg animate-pulse' />
                            }
                        >
                            <SearchBar initialQuery={filters.search} />
                        </Suspense>
                        <Suspense fallback={null}>
                            <MobileFilterDrawer
                                collections={collections}
                                productTypes={productTypes}
                                currentFilters={filters}
                            />
                        </Suspense>
                    </div>
                </FadeUp>

                {/* Active Filters */}
                <FadeUp delay={200}>
                    <div className='mb-6'>
                        <Suspense fallback={null}>
                            <ActiveFilters
                                currentFilters={filters}
                                collections={collections}
                                productTypes={productTypes}
                                totalResults={products.length}
                            />
                        </Suspense>
                    </div>
                </FadeUp>

                {/* Main Content */}
                <div className='flex gap-8'>
                    {/* Desktop Sidebar */}
                    <div className='hidden lg:block w-56 shrink-0'>
                        <FadeUp delay={250}>
                            <div className='sticky top-28'>
                                <Suspense
                                    fallback={
                                        <div className='h-96 bg-studio-card/30 rounded-lg animate-pulse' />
                                    }
                                >
                                    <FilterPanel
                                        collections={collections}
                                        productTypes={productTypes}
                                        currentFilters={filters}
                                    />
                                </Suspense>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Product Grid */}
                    <div className='flex-1 min-w-0'>
                        <ProductGrid
                            products={products}
                            emptyMessage={
                                filters.search
                                    ? `No results for "${filters.search}"`
                                    : 'No products found'
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
