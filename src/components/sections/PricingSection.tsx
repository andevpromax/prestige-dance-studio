import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';
import type { PricingPlan } from '@/types';

interface PricingSectionProps {
    plans: PricingPlan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
    return (
        <section id='pricing' className='py-[90px] px-[5%] bg-studio-base'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <SectionHeader
                        label='Membership Plans'
                        title='Simple, Transparent Pricing'
                    />
                </FadeUp>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {plans.map((plan, i) => (
                        <FadeUp key={plan.id} delay={i * 130}>
                            <div
                                className={cn(
                                    'relative rounded-lg border px-8 py-10 text-center flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-250',
                                    plan.featured
                                        ? 'border-gold bg-[linear-gradient(160deg,#1f1a0f,#1f1f1f)]'
                                        : 'border-gold/10 bg-studio-card',
                                )}
                            >
                                {plan.featured && (
                                    <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-studio-base text-[0.7rem] font-bold tracking-[0.1em] uppercase px-4 py-1 rounded-full whitespace-nowrap'>
                                        Most Popular
                                    </span>
                                )}

                                <div className='font-display text-[1.1rem] text-cream mb-3'>
                                    {plan.name}
                                </div>
                                <div className='font-display text-[3rem] text-gold leading-none'>
                                    <sup className='text-[1.2rem] align-top mt-2'>
                                        $
                                    </sup>
                                    {plan.price}
                                </div>
                                <div className='text-[0.8rem] text-studio-grey mb-6'>
                                    per month
                                </div>

                                <ul className='list-none text-left mb-8 flex-1'>
                                    {plan.features.map(
                                        ({ label, included }) => (
                                            <li
                                                key={label}
                                                className={cn(
                                                    'flex gap-3 text-[0.85rem] py-2 border-b border-white/5',
                                                    included
                                                        ? 'text-cream'
                                                        : 'text-studio-grey',
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        'shrink-0 font-bold',
                                                        included
                                                            ? 'text-gold'
                                                            : 'text-studio-grey',
                                                    )}
                                                >
                                                    {included ? '✓' : '–'}
                                                </span>
                                                {label}
                                            </li>
                                        ),
                                    )}
                                </ul>

                                <Button
                                    href='/#contact'
                                    variant={
                                        plan.featured ? 'primary' : 'outline'
                                    }
                                    className='w-full ml-0'
                                >
                                    Get Started
                                </Button>
                            </div>
                        </FadeUp>
                    ))}
                </div>

                <p className='text-center mt-6 text-[0.85rem] text-studio-grey'>
                    All plans include a{' '}
                    <strong className='text-gold'>free trial class</strong>. No
                    contracts. Cancel anytime.
                </p>
            </div>
        </section>
    );
}
