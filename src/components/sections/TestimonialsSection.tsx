import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import type { Testimonial } from '@/types';

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

export default function TestimonialsSection({
    testimonials,
}: TestimonialsSectionProps) {
    return (
        <section id='testimonials' className='py-[90px] px-[5%] bg-studio-dark'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <SectionHeader
                        label='Student Stories'
                        title='What Our Students Say'
                    />
                </FadeUp>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {testimonials.map((t, i) => (
                        <FadeUp key={t.id} delay={i * 130}>
                            <div className='bg-studio-card p-8 rounded-lg border border-gold/10 h-full flex flex-col'>
                                <div className='font-display text-[5rem] text-gold opacity-20 leading-[0.5] mb-4'>
                                    &ldquo;
                                </div>
                                <div className='text-gold text-[0.85rem] tracking-[0.1em] mb-3'>
                                    ★★★★★
                                </div>
                                <p className='text-[0.9rem] text-cream/75 italic mb-6 flex-1'>
                                    {t.quote}
                                </p>
                                <div className='flex items-center gap-4'>
                                    <div
                                        className='w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0'
                                        style={{
                                            background:
                                                'linear-gradient(135deg, #9b1b30, #c9a84c)',
                                        }}
                                    >
                                        {t.emoji}
                                    </div>
                                    <div>
                                        <div className='font-display text-[0.95rem] text-cream'>
                                            {t.name}
                                        </div>
                                        <div className='text-[0.75rem] text-studio-grey'>
                                            {t.meta}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
