import Link from 'next/link';
import type { ShopifyCollection } from '@/lib/shopify/types';

interface CategoryNavProps {
    collections: ShopifyCollection[];
    activeCollection?: string;
}

export default function CategoryNav({
    collections,
    activeCollection,
}: CategoryNavProps) {
    // Show main categories in the nav
    const mainCategories = collections.filter((c) =>
        ['women', 'men', 'kids', 'footwear', 'accessories'].includes(c.handle),
    );

    return (
        <nav className='flex flex-wrap items-center gap-2 sm:gap-4'>
            <Link
                href='/shop'
                className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                    !activeCollection
                        ? 'bg-gold text-studio-base border-gold font-medium'
                        : 'text-cream/80 border-gold/20 hover:border-gold/50 hover:text-cream'
                }`}
            >
                All
            </Link>
            {mainCategories.map((collection) => (
                <Link
                    key={collection.handle}
                    href={`/shop?collection=${collection.handle}`}
                    className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                        activeCollection === collection.handle
                            ? 'bg-gold text-studio-base border-gold font-medium'
                            : 'text-cream/80 border-gold/20 hover:border-gold/50 hover:text-cream'
                    }`}
                >
                    {collection.title}
                </Link>
            ))}
            <Link
                href='/shop?collection=sale'
                className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                    activeCollection === 'sale'
                        ? 'bg-ruby text-cream border-ruby font-medium'
                        : 'text-ruby border-ruby/40 hover:border-ruby hover:bg-ruby/10'
                }`}
            >
                Sale
            </Link>
        </nav>
    );
}
