import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';

const FEATURES = [
    {
        title: 'World-Class Instructors',
        description:
            'Certified professionals with international competition experience.',
    },
    {
        title: 'All Levels Welcome',
        description: 'From beginners to advanced competitors.',
    },
    {
        title: 'Spacious Ballroom',
        description: 'Professional sprung floor with full-length mirrors.',
    },
    {
        title: 'Private & Group Classes',
        description: 'Flexible formats tailored to your goals.',
    },
];

export default function AboutSection() {
    return (
        <section id='about' className='py-[90px] px-[5%] bg-studio-dark'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
                {/* Image placeholder */}
                <FadeUp>
                    <div className='relative'>
                        <div
                            className='w-full min-h-[420px] aspect-[3/4] rounded-lg flex items-center justify-center text-[6rem]'
                            style={{
                                background:
                                    'linear-gradient(135deg, #9b1b30 0%, #3a0a14 100%)',
                            }}
                        >
                            💃
                        </div>
                        <div className='absolute -bottom-5 -right-5 w-40 h-40 rounded-lg bg-gold opacity-[0.12]' />
                        <div className='absolute -top-3 -left-3 right-3 bottom-3 border border-gold/30 rounded-lg pointer-events-none' />
                    </div>
                </FadeUp>

                {/* Text */}
                <FadeUp>
                    <SectionHeader
                        label='Our Story'
                        title='More Than a Studio — A Dance Family'
                        centered={false}
                    />

                    <p className='text-cream/75 mb-4'>
                        Prestige Dance Studio was founded on the belief that
                        dance is for everyone. Whether you are stepping onto the
                        floor for the very first time or preparing for a
                        competition, our world-class instructors will guide you
                        every step of the way.
                    </p>
                    <p className='text-cream/75 mb-8'>
                        Our studio blends the timeless grace of classical
                        ballroom with the passion of Latin dance, offering a
                        truly immersive experience in an elegant, supportive
                        atmosphere.
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                        {FEATURES.map(({ title, description }) => (
                            <div key={title} className='flex items-start gap-3'>
                                <span className='text-gold text-lg mt-0.5 shrink-0'>
                                    ✦
                                </span>
                                <div>
                                    <h4 className='font-display text-[0.9rem] text-cream mb-1'>
                                        {title}
                                    </h4>
                                    <p className='text-[0.82rem] text-studio-grey'>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button href='/#contact' variant='primary'>
                        Meet Our Team
                    </Button>
                </FadeUp>
            </div>
        </section>
    );
}
