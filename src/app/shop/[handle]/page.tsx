import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/shop/ProductDetail';
import FadeUp from '@/components/ui/FadeUp';
import { getProduct } from '@/lib/shopify/client';

interface PageProps {
    params: Promise<{ handle: string }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { handle } = await params;
    const product = await getProduct(handle);
    if (!product) {
        return { title: 'Product not found — Prestige Dance Studio' };
    }
    return {
        title: `${product.title} — Prestige Dance Studio`,
        description:
            product.description?.slice(0, 160) ||
            `Shop ${product.title} at Prestige Dance Studio.`,
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { handle } = await params;
    const product = await getProduct(handle);

    if (!product) {
        notFound();
    }

    return (
        <section className='py-[120px] px-[5%] bg-studio-base min-h-[80vh]'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <Link
                        href='/shop'
                        className='inline-block mb-8 font-body text-[0.75rem] tracking-[0.2em] uppercase text-studio-grey hover:text-gold transition-colors duration-250'
                    >
                        ← Back to shop
                    </Link>
                </FadeUp>
                <FadeUp>
                    <ProductDetail product={product} />
                </FadeUp>
            </div>
        </section>
    );
}
