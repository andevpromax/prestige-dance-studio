export default function Loading() {
    return (
        <section className='py-[120px] px-[5%] bg-studio-base min-h-[80vh]'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-14 text-center'>
                    <div className='mx-auto mb-3 h-3 w-28 animate-pulse rounded bg-gold/20' />
                    <div className='mx-auto mb-6 h-10 w-72 animate-pulse rounded bg-cream/10' />
                    <div className='mx-auto h-0.5 w-15 bg-gold/40' />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton placeholders
                            key={i}
                            className='overflow-hidden rounded-lg border border-gold/10 bg-studio-card'
                        >
                            <div className='aspect-square w-full animate-pulse bg-studio-dark' />
                            <div className='space-y-3 p-5'>
                                <div className='h-3 w-20 animate-pulse rounded bg-gold/20' />
                                <div className='h-5 w-3/4 animate-pulse rounded bg-cream/10' />
                                <div className='h-4 w-24 animate-pulse rounded bg-cream/10' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
