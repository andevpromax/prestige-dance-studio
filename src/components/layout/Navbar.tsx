'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
    { href: '/#about', label: 'About' },
    { href: '/#classes', label: 'Classes' },
    { href: '/#schedule', label: 'Schedule' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#moments', label: 'Moments' },
    { href: '/#pricing', label: 'Pricing' },
    { href: '/#contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile nav is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 flex items-center justify-between',
                    'bg-studio-base/85 backdrop-blur-[12px] border-b border-gold/15',
                    'transition-[padding] duration-300',
                    scrolled ? 'px-[5%] py-3' : 'px-[5%] py-5',
                )}
            >
                <Link
                    href='/'
                    className='font-display text-[1.4rem] text-gold tracking-[0.05em]'
                >
                    Prestige{' '}
                    <span className='text-cream italic'>Dance Studio</span>
                </Link>
                {/* Desktop links */}
                <ul className='hidden lg:flex items-center gap-6 xl:gap-8 list-none'>
                    {NAV_LINKS.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className='font-body text-[0.85rem] tracking-[0.1em] uppercase text-cream hover:text-gold transition-colors duration-250'
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href='/#contact'
                    className='hidden md:inline-flex items-center bg-gold text-studio-base font-body text-[0.8rem] font-bold tracking-[0.1em] uppercase px-5 py-2.5 rounded-lg hover:bg-gold-light transition-colors duration-250'
                >
                    Book a Trial
                </Link>
                {/* Hamburger */}
                <button
                    type='button'
                    aria-label='Open menu'
                    className='flex xl:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1'
                    onClick={() => setMobileOpen(true)}
                >
                    <span className='block w-6 h-0.5 bg-cream transition-all duration-300' />
                    <span className='block w-6 h-0.5 bg-cream transition-all duration-300' />
                    <span className='block w-6 h-0.5 bg-cream transition-all duration-300' />
                </button>
            </nav>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div className='fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-studio-base/97'>
                    <button
                        type='button'
                        aria-label='Close menu'
                        className='absolute top-6 right-[5%] text-2xl text-cream cursor-pointer bg-transparent border-0'
                        onClick={() => setMobileOpen(false)}
                    >
                        ✕
                    </button>

                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className='font-display text-[1.8rem] text-cream hover:text-gold transition-colors duration-200'
                            onClick={() => setMobileOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}

                    <Link
                        href='/#contact'
                        className='inline-flex items-center bg-gold text-studio-base font-body text-[0.85rem] font-bold tracking-[0.12em] uppercase px-9 py-3.5 rounded-lg hover:bg-gold-light transition-colors'
                        onClick={() => setMobileOpen(false)}
                    >
                        Book a Trial
                    </Link>
                </div>
            )}
        </>
    );
}
