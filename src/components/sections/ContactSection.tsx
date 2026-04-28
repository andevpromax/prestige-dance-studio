'use client';

import { type FormEvent, useState } from 'react';
import Button from '@/components/ui/Button';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const CONTACT_DETAILS = [
    {
        icon: '📍',
        heading: 'Address',
        lines: ['142 Ballroom Avenue, Suite 300', 'New York, NY 10001'],
    },
    { icon: '📞', heading: 'Phone', lines: ['+1 (212) 555-0172'] },
    { icon: '✉️', heading: 'Email', lines: ['hello@prestigedance.com'] },
    {
        icon: '🕐',
        heading: 'Studio Hours',
        lines: ['Mon–Fri: 9 AM – 10 PM', 'Sat–Sun: 9 AM – 8 PM'],
    },
];

const DANCE_STYLES = [
    'Waltz',
    'Tango',
    'Foxtrot',
    'Quickstep',
    'Viennese Waltz',
    'Latin Fusion',
    'Not sure yet',
];
const EXPERIENCE_LEVELS = [
    'Complete Beginner',
    'Some Experience',
    'Intermediate',
    'Advanced',
];

const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-cream font-body text-[0.9rem] outline-none transition-[border-color] duration-250 focus:border-gold placeholder:text-cream/30';

const labelClass =
    'block text-[0.78rem] tracking-[0.1em] uppercase text-studio-grey mb-2';

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <section id='contact' className='py-[90px] px-[5%] bg-studio-dark'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <SectionHeader
                        label='Get In Touch'
                        title='Book Your Free Trial Class'
                    />
                </FadeUp>

                <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start'>
                    {/* Contact info */}
                    <FadeUp>
                        <h3 className='font-display text-[1.4rem] text-cream mb-2'>
                            We&apos;d Love to Meet You
                        </h3>
                        <p className='text-cream/65 text-[0.9rem] mb-8'>
                            Take your first step onto the dance floor. Book a
                            free 60-minute trial class — no experience needed,
                            just bring your enthusiasm.
                        </p>

                        {CONTACT_DETAILS.map(({ icon, heading, lines }) => (
                            <div
                                key={heading}
                                className='flex items-start gap-4 mb-5'
                            >
                                <span className='text-xl text-gold mt-0.5 shrink-0'>
                                    {icon}
                                </span>
                                <div>
                                    <h4 className='text-[0.8rem] tracking-[0.1em] uppercase text-studio-grey mb-1'>
                                        {heading}
                                    </h4>
                                    {lines.map((line) => (
                                        <p
                                            key={line}
                                            className='text-cream text-[0.9rem]'
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className='flex gap-3 mt-6'>
                            {['f', 'in', '▶', '◎'].map((s) => (
                                <button
                                    type='button'
                                    key={s}
                                    className='w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-[0.85rem] text-cream hover:border-gold hover:bg-gold/10 transition-all duration-250 cursor-pointer bg-transparent'
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {/* Form */}
                    <FadeUp>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5'>
                                <div>
                                    <label
                                        htmlFor='fname'
                                        className={labelClass}
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id='fname'
                                        type='text'
                                        placeholder='Jane'
                                        required
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='lname'
                                        className={labelClass}
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id='lname'
                                        type='text'
                                        placeholder='Smith'
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5'>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className={labelClass}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id='email'
                                        type='email'
                                        placeholder='jane@example.com'
                                        required
                                        className={inputClass}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor='phone'
                                        className={labelClass}
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id='phone'
                                        type='tel'
                                        placeholder='+1 (555) 000-0000'
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div className='mb-5'>
                                <label htmlFor='dance' className={labelClass}>
                                    Interested In
                                </label>
                                <select
                                    id='dance'
                                    className={cn(inputClass, 'bg-studio-dark')}
                                >
                                    <option value=''>
                                        — Select a dance style —
                                    </option>
                                    {DANCE_STYLES.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='mb-5'>
                                <label htmlFor='level' className={labelClass}>
                                    Experience Level
                                </label>
                                <select
                                    id='level'
                                    className={cn(inputClass, 'bg-studio-dark')}
                                >
                                    <option value=''>
                                        — Select your level —
                                    </option>
                                    {EXPERIENCE_LEVELS.map((l) => (
                                        <option key={l}>{l}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='mb-5'>
                                <label htmlFor='message' className={labelClass}>
                                    Message (Optional)
                                </label>
                                <textarea
                                    id='message'
                                    placeholder="Tell us anything you'd like us to know…"
                                    className={cn(
                                        inputClass,
                                        'resize-y min-h-[120px]',
                                    )}
                                />
                            </div>

                            <Button
                                type='submit'
                                variant='primary'
                                className='w-full ml-0'
                                disabled={submitted}
                            >
                                {submitted
                                    ? 'Request Sent ✓'
                                    : 'Book My Free Trial →'}
                            </Button>

                            {submitted && (
                                <div className='mt-4 p-4 bg-[rgba(50,150,50,0.15)] border border-[rgba(50,150,50,0.3)] rounded-lg text-[0.9rem] text-[#80d080] text-center'>
                                    🎉 Thank you! We&apos;ll be in touch within
                                    24 hours to confirm your trial class.
                                </div>
                            )}
                        </form>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
