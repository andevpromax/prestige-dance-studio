import Link from 'next/link';

const FOOTER_LINKS = [
    { href: '/#about', label: 'About' },
    { href: '/#classes', label: 'Classes' },
    { href: '/#schedule', label: 'Schedule' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#contact', label: 'Contact' },
];

const SOCIALS = [
    { label: 'f', ariaLabel: 'Facebook' },
    { label: 'in', ariaLabel: 'LinkedIn' },
    { label: '▶', ariaLabel: 'YouTube' },
    { label: '◎', ariaLabel: 'Instagram' },
];

export default function Footer() {
    return (
        <footer className='bg-[#080808] px-[5%] py-12 border-t border-gold/15'>
            <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6'>
                <Link href='/' className='font-display text-[1.2rem] text-gold'>
                    Prestige{' '}
                    <span className='text-cream italic'>Dance Studio</span>
                </Link>

                <nav className='flex flex-wrap gap-6'>
                    {FOOTER_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className='text-[0.8rem] text-studio-grey hover:text-gold transition-colors duration-250'
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className='flex gap-3'>
                    {SOCIALS.map(({ label, ariaLabel }) => (
                        <button
                            type='button'
                            key={ariaLabel}
                            aria-label={ariaLabel}
                            className='w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[0.85rem] text-cream hover:border-gold hover:bg-gold/10 transition-all duration-250 cursor-pointer bg-transparent'
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <p className='text-[0.78rem] text-studio-grey w-full text-center md:w-auto md:text-left'>
                    © {new Date().getFullYear()} Prestige Dance Studio. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
}
