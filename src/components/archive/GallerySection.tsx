// 'use client';

// import { useRef } from 'react';
// import FadeUp from '@/components/ui/FadeUp';
// import SectionHeader from '@/components/ui/SectionHeader';

// const GALLERY_ITEMS = [
//     {
//         id: 'dance-couple',
//         emoji: '💃🕺',
//         gradient: 'linear-gradient(135deg, #1a0a20, #4a1a5a)',
//         span: 'col-span-2 row-span-2',
//     },
//     {
//         id: 'rose',
//         emoji: '🌹',
//         gradient: 'linear-gradient(135deg, #200000, #6a1010)',
//         span: '',
//     },
//     {
//         id: 'music',
//         emoji: '🎶',
//         gradient: 'linear-gradient(135deg, #0a1530, #1a3070)',
//         span: '',
//     },
//     {
//         id: 'trophy',
//         emoji: '🏆',
//         gradient: 'linear-gradient(135deg, #151500, #504000)',
//         span: '',
//     },
//     {
//         id: 'sparkle',
//         emoji: '✨',
//         gradient: 'linear-gradient(135deg, #001020, #004060)',
//         span: 'col-span-2',
//     },
//     {
//         id: 'theater',
//         emoji: '🎭',
//         gradient: 'linear-gradient(135deg, #200a00, #704020)',
//         span: '',
//     },
// ];

// export default function GallerySection() {
//     const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

//     function handleMouseMove(e: React.MouseEvent<HTMLDivElement>, idx: number) {
//         const el = itemRefs.current[idx];
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const dx =
//             (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
//         const dy =
//             (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
//         el.style.transform = `perspective(700px) rotateY(${dx * 9}deg) rotateX(${-dy * 9}deg) scale3d(1.04,1.04,1.04)`;
//         el.style.zIndex = '2';
//         el.style.boxShadow = '0 24px 60px rgba(0,0,0,0.65)';
//     }

//     function handleMouseLeave(idx: number) {
//         const el = itemRefs.current[idx];
//         if (!el) return;
//         el.style.transform = '';
//         el.style.zIndex = '';
//         el.style.boxShadow = '';
//     }

//     return (
//         <section id='gallery' className='py-[90px] px-[5%] bg-studio-base'>
//             <div className='max-w-7xl mx-auto'>
//                 <FadeUp>
//                     <SectionHeader label='Our Studio Life' title='Gallery' />
//                 </FadeUp>

//                 <FadeUp>
//                     <div className='grid grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[200px]'>
//                         {GALLERY_ITEMS.map((item, i) => (
//                             <div
//                                 key={item.id}
//                                 ref={(el) => {
//                                     itemRefs.current[i] = el;
//                                 }}
//                                 role='img'
//                                 className={`relative overflow-hidden rounded-lg cursor-pointer group transition-transform duration-300 ${item.span}`}
//                                 style={{ transformStyle: 'preserve-3d' }}
//                                 onMouseMove={(e) => handleMouseMove(e, i)}
//                                 onMouseLeave={() => handleMouseLeave(i)}
//                             >
//                                 <div
//                                     className='w-full h-full flex items-center justify-center text-[2.5rem] transition-transform duration-400 group-hover:scale-105'
//                                     style={{
//                                         background: item.gradient,
//                                         fontSize: i === 0 ? '4rem' : undefined,
//                                     }}
//                                 >
//                                     {item.emoji}
//                                 </div>

//                                 {/* Hover overlay */}
//                                 <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                                     <span className='text-2xl'>🔍</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </FadeUp>
//             </div>
//         </section>
//     );
// }

// import Image from 'next/image';
// import FadeUp from '@/components/ui/FadeUp';
// import SectionHeader from '@/components/ui/SectionHeader';

// const GALLERY_ITEMS = [
//     {
//         id: 'gallery-1',
//         src: '/images/gallery/poli-1.jpg',
//         alt: 'Elegant ballroom dance moment',
//         className: 'md:col-span-2 md:row-span-2',
//         imagePosition: 'object-center',
//     },
//     {
//         id: 'gallery-2',
//         src: '/images/gallery/poli-2.jpg',
//         alt: 'Dance studio atmosphere',
//         className: 'md:col-span-1 md:row-span-1',
//         imagePosition: 'object-center',
//     },
//     {
//         id: 'gallery-3',
//         src: '/images/gallery/poli-winner.jpg',
//         alt: 'Latin dance performance',
//         className: 'md:col-span-1 md:row-span-1',
//         imagePosition: 'object-center',
//     },
//     {
//         id: 'gallery-4',
//         src: '/images/gallery/eva.jpg',
//         alt: 'Ballroom dance couple',
//         className: 'md:col-span-2 md:row-span-1',
//         imagePosition: 'object-center',
//     },
//     {
//         id: 'gallery-5',
//         src: '/images/gallery/gallery-5.jpg',
//         alt: 'Dance class moment',
//         className: 'md:col-span-1 md:row-span-1',
//         imagePosition: 'object-center',
//     },
//     {
//         id: 'gallery-6',
//         src: '/images/gallery/gallery-6.jpg',
//         alt: 'Dance competition atmosphere',
//         className: 'md:col-span-1 md:row-span-1',
//         imagePosition: 'object-center',
//     },
// ];

// export default function GallerySection() {
//     return (
//         <section id='gallery' className='py-[90px] px-[5%] bg-studio-base'>
//             <div className='max-w-7xl mx-auto'>
//                 <FadeUp>
//                     <SectionHeader label='Our Studio Life' title='Gallery' />
//                 </FadeUp>

//                 <FadeUp>
//                     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[240px] gap-4'>
//                         {GALLERY_ITEMS.map((item) => (
//                             <article
//                                 key={item.id}
//                                 className={`relative overflow-hidden rounded-2xl bg-studio-dark shadow-[0_24px_70px_rgba(0,0,0,0.35)] ${item.className}`}
//                             >
//                                 <Image
//                                     src={item.src}
//                                     alt={item.alt}
//                                     fill
//                                     sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
//                                     className={`object-cover ${item.imagePosition}`}
//                                 />

//                                 <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent' />

//                                 <div className='absolute inset-0 ring-1 ring-inset ring-gold/10' />
//                             </article>
//                         ))}
//                     </div>
//                 </FadeUp>
//             </div>
//         </section>
//     );
// }

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
