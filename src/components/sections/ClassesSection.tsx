import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import type { DanceClass } from '@/types';

interface ClassesSectionProps {
    classes: DanceClass[];
}

export default function ClassesSection({ classes }: ClassesSectionProps) {
    return (
        <section id='classes' className='py-[90px] px-[5%] bg-studio-base'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <SectionHeader
                        label='What We Teach'
                        title='Our Dance Programs'
                    />
                </FadeUp>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {classes.map((cls, i) => (
                        <FadeUp key={cls.id} delay={i * 100}>
                            <div className='bg-studio-card rounded-lg border border-gold/10 overflow-hidden group hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-250 h-full flex flex-col'>
                                {/* Card image */}
                                <div
                                    className='h-[180px] flex items-center justify-center text-[3.5rem]'
                                    style={{
                                        background: `linear-gradient(135deg, ${cls.gradientFrom}, ${cls.gradientTo})`,
                                    }}
                                >
                                    {cls.emoji}
                                </div>

                                {/* Card body */}
                                <div className='p-6 flex flex-col flex-1'>
                                    <span className='inline-block text-[0.7rem] tracking-[0.12em] uppercase text-gold border border-gold/40 px-2.5 py-0.5 rounded-full mb-3 self-start'>
                                        {cls.category}
                                    </span>
                                    <h3 className='font-display text-[1.25rem] text-cream mb-2'>
                                        {cls.name}
                                    </h3>
                                    <p className='text-[0.85rem] text-cream/65 mb-4 flex-1'>
                                        {cls.description}
                                    </p>
                                    <div className='flex gap-4 text-[0.78rem] text-studio-grey'>
                                        <span className="before:content-['•'] before:text-gold before:mr-1.5">
                                            {cls.level}
                                        </span>
                                        <span className="before:content-['•'] before:text-gold before:mr-1.5">
                                            {cls.durationMinutes} min
                                        </span>
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
