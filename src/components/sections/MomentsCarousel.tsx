'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import type { StudioMoment } from '@/types';

interface MomentsCarouselProps {
    moments: StudioMoment[];
}

export default function MomentsCarousel({ moments }: MomentsCarouselProps) {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // Dynamically import Swiper to avoid SSR issues
        Promise.all([
            import('swiper'),
            import('swiper/modules'),
            import('swiper/swiper-bundle.css'),
        ]).then(
            ([
                { default: Swiper },
                {
                    Autoplay,
                    EffectCoverflow,
                    Navigation,
                    Pagination,
                    Keyboard,
                    A11y,
                },
            ]) => {
                new Swiper('.moments-swiper', {
                    modules: [
                        Autoplay,
                        EffectCoverflow,
                        Navigation,
                        Pagination,
                        Keyboard,
                        A11y,
                    ],
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    },
                    coverflowEffect: {
                        rotate: 28,
                        stretch: 0,
                        depth: 180,
                        modifier: 1,
                        slideShadows: true,
                    },
                    pagination: { el: '.moments-pagination', clickable: true },
                    navigation: {
                        nextEl: '.moments-next',
                        prevEl: '.moments-prev',
                    },
                    keyboard: { enabled: true },
                    a11y: {
                        prevSlideMessage: 'Previous moment',
                        nextSlideMessage: 'Next moment',
                    },
                });
            },
        );
    }, []);

    return (
        <section
            id='moments'
            className='py-[90px] overflow-hidden bg-studio-base'
        >
            <div className='max-w-7xl mx-auto px-[5%]'>
                <FadeUp>
                    <SectionHeader
                        label='On the Dance Floor'
                        title='Studio Moments'
                    />
                </FadeUp>
            </div>

            <FadeUp className='pb-16'>
                <div className='swiper moments-swiper w-full py-5'>
                    <div className='swiper-wrapper'>
                        {moments.map((moment) => (
                            <div
                                key={moment.id}
                                className='swiper-slide !w-[380px] rounded-lg overflow-hidden bg-studio-card border border-gold/10 transition-[border-color,box-shadow] duration-300'
                            >
                                <div className='relative h-65 overflow-hidden'>
                                    {moment.image ? (
                                        <Image
                                            src={moment.image}
                                            alt={moment.title}
                                            fill
                                            sizes='380px'
                                            className='object-cover object-top'
                                        />
                                    ) : (
                                        <div
                                            className='w-full h-full flex items-center justify-center text-[5rem]'
                                            style={{
                                                background: moment.gradient,
                                            }}
                                        >
                                            {moment.emoji}
                                        </div>
                                    )}
                                </div>
                                <div className='p-7'>
                                    <span className='inline-block text-[0.68rem] tracking-[0.15em] uppercase text-gold border border-gold/35 px-2.5 py-0.5 rounded-full mb-3'>
                                        {moment.tag}
                                    </span>
                                    <h3 className='font-display text-[1.2rem] text-cream mb-2'>
                                        {moment.title}
                                    </h3>
                                    <p className='text-[0.85rem] text-cream/60 leading-relaxed'>
                                        {moment.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='swiper-button-prev moments-prev' />
                    <div className='swiper-button-next moments-next' />
                    <div className='swiper-pagination moments-pagination' />
                </div>
            </FadeUp>
        </section>
    );
}
