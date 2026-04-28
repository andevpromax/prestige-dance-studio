import Button from '@/components/ui/Button';
import StatCounter from '@/components/ui/StatCounter';
import type { HeroStat } from '@/types';

const STATS: HeroStat[] = [
    { count: 15, suffix: '+', label: 'Years of Excellence' },
    { count: 800, suffix: '+', label: 'Students Trained' },
    { count: 30, suffix: '+', label: 'Awards Won' },
    { count: 12, suffix: '', label: 'Expert Instructors' },
];

export default function HeroSection() {
    return (
        <section
            id='hero'
            className='relative min-h-screen flex items-center justify-center text-center overflow-hidden'
        >
            <div
                className='absolute inset-0'
                style={{
                    background: `
                linear-gradient(160deg, rgba(155,27,48,0.45) 0%, rgba(13,13,13,0.85) 50%, rgba(13,13,13,0.95) 100%),
                radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.15) 0%, transparent 60%)
              `,
                }}
            />
            <video
                autoPlay
                muted
                loop
                playsInline
                className='absolute inset-0 w-full h-full object-cover object-top'
                src='/videos/polina.mp4'
            />
            <div className='absolute inset-0 bg-black/45' />
            {/* Animated background orbs */}
            <div
                className='absolute inset-0 pointer-events-none animate-orb-drift'
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(155,27,48,0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 40%)
          `,
                }}
            />
            <div className='relative z-10 max-w-3xl px-4 mx-auto'>
                <p className='font-body text-[0.8rem] tracking-[0.35em] uppercase text-gold mb-6 opacity-0 animate-hero-fade-down [animation-delay:200ms]'>
                    Welcome to Prestige Ballroom Dance Studio
                </p>

                <h1 className='font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.1] mb-6 opacity-0 animate-hero-fade-up [animation-delay:500ms]'>
                    Dance with
                    <em className='text-gold not-italic'>Elegance,</em>
                    <br />
                    Move with Passion
                </h1>

                <p className='text-[1.1rem] text-cream/70 max-w-lg mx-auto mb-10 font-light opacity-0 animate-hero-fade-up [animation-delay:850ms]'>
                    Where every step tells a story. Discover the joy of ballroom
                    dancing in a warm, professional, and inspiring environment.
                </p>

                <div className='flex flex-wrap items-center justify-center gap-4 opacity-0 animate-hero-fade-up [animation-delay:1150ms]'>
                    <Button href='/#contact' variant='primary'>
                        Book a Free Trial
                    </Button>
                    <Button href='/#classes' variant='outline'>
                        Explore Classes
                    </Button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 mt-14 opacity-0 animate-hero-fade-up [animation-delay:1450ms]'>
                    {STATS.map(({ count, suffix, label }) => (
                        <div key={label} className='text-center'>
                            <div className='font-display text-[2rem] text-gold font-bold'>
                                <StatCounter count={count} suffix={suffix} />
                            </div>
                            <div className='font-body text-[0.75rem] tracking-[0.15em] uppercase text-cream/50 mt-1'>
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
