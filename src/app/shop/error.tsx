'use client';

import Button from '@/components/ui/Button';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ShopError({ error, reset }: ErrorProps) {
    return (
        <section className='py-[120px] px-[5%] bg-studio-base min-h-[80vh] flex items-center'>
            <div className='max-w-md mx-auto rounded-lg border border-gold/15 bg-studio-card p-10 text-center'>
                <p className='font-body text-[0.75rem] tracking-[0.25em] uppercase text-gold mb-2'>
                    Something went wrong
                </p>
                <h2 className='font-display text-[1.6rem] text-cream mb-3'>
                    We couldn't load the shop
                </h2>
                <p className='text-cream/65 text-[0.9rem] mb-6'>
                    {error.message ||
                        'Please try again in a moment, or contact us if the problem persists.'}
                </p>
                <Button onClick={reset}>Try again</Button>
            </div>
        </section>
    );
}
