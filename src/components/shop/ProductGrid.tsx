import FadeUp from '@/components/ui/FadeUp';
import type { ShopifyProductSummary } from '@/lib/shopify/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
    products: ShopifyProductSummary[];
    emptyMessage?: string;
}

export default function ProductGrid({
    products,
    emptyMessage = 'No products found',
}: ProductGridProps) {
    if (products.length === 0) {
        return (
            <FadeUp>
                <div className='mx-auto max-w-md rounded-lg border border-gold/15 bg-studio-card p-10 text-center'>
                    <p className='font-display text-[1.4rem] text-cream mb-2'>
                        {emptyMessage}
                    </p>
                    <p className='text-cream/65 text-[0.9rem]'>
                        Try adjusting your filters or search to find what you're
                        looking for.
                    </p>
                </div>
            </FadeUp>
        );
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product, i) => (
                <FadeUp key={product.id} delay={i * 40}>
                    <ProductCard product={product} />
                </FadeUp>
            ))}
        </div>
    );
}
