import Image from 'next/image';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';

const GALLERY_ITEMS = [
    {
        id: 'gallery-1',
        src: '/images/gallery/poli-1.jpg',
        alt: 'Elegant ballroom dance moment',
        ratio: 'aspect-[3/4]',
    },
    {
        id: 'gallery-2',
        src: '/images/gallery/img-3.jpg',
        alt: 'Dance studio atmosphere',
        ratio: 'aspect-[4/3]',
    },
    {
        id: 'gallery-3',
        src: '/images/gallery/img-1.jpg',
        alt: 'Latin dance performance',
        ratio: 'aspect-[3/4]',
    },
    {
        id: 'gallery-4',
        src: '/images/gallery/poli-winner.jpg',
        alt: 'Ballroom dance couple',
        ratio: 'aspect-[16/10]',
    },
    {
        id: 'gallery-5',
        src: '/images/gallery/eva.jpg',
        alt: 'Dance class moment',
        ratio: 'aspect-[4/3]',
    },
    {
        id: 'gallery-6',
        src: '/images/gallery/img-2.jpg',
        alt: 'Dance competition atmosphere',
        ratio: 'aspect-[3/4]',
    },
];

export default function GallerySection() {
    return (
        <section id='gallery' className='py-[90px] px-[5%] bg-studio-base'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <SectionHeader
                        label='Our Studio Life'
                        title='Moments in Motion'
                    />
                </FadeUp>

                <FadeUp>
                    <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4'>
                        {GALLERY_ITEMS.map((item) => (
                            <figure
                                key={item.id}
                                className='break-inside-avoid overflow-hidden rounded-2xl bg-studio-dark shadow-[0_24px_70px_rgba(0,0,0,0.35)] ring-1 ring-gold/10'
                            >
                                <div
                                    className={`relative w-full ${item.ratio}`}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                        className='object-cover object-top'
                                    />

                                    <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
                                </div>
                            </figure>
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
