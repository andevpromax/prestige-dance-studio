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
        lines: ['Some interesting street in Prague, Czech Republic'],
    },
    { icon: '📞', heading: 'Phone', lines: ['+380971911400', '+420606587616'] },
    { icon: '✉️', heading: 'Email', lines: ['tanyapositko@gmail.com'] },
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

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
    [key: string]: string[];
}

export default function ContactSection() {
    const [formState, setFormState] = useState<FormState>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [validationErrors, setValidationErrors] = useState<FormErrors>({});

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('loading');
        setErrorMessage('');
        setValidationErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            danceStyle: formData.get('danceStyle') as string,
            experienceLevel: formData.get('experienceLevel') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/trial-lesson', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 400 && result.details) {
                    // Validation errors
                    setValidationErrors(result.details);
                    setFormState('error');
                } else {
                    // Other errors
                    setErrorMessage(
                        result.error ||
                            'Something went wrong. Please try again.',
                    );
                    setFormState('error');
                }
                return;
            }

            // Success!
            setFormState('success');
            // Reset form after 3 seconds
            setTimeout(() => {
                e.currentTarget.reset();
                setFormState('idle');
            }, 5000);
        } catch (error) {
            console.error('Form submission error:', error);
            setErrorMessage(
                'Network error. Please check your connection and try again.',
            );
            setFormState('error');
        }
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
                                        htmlFor='firstName'
                                        className={labelClass}
                                    >
                                        First Name *
                                    </label>
                                    <input
                                        id='firstName'
                                        name='firstName'
                                        type='text'
                                        placeholder='Jane'
                                        required
                                        className={cn(
                                            inputClass,
                                            validationErrors.firstName &&
                                                'border-red-500/50',
                                        )}
                                    />
                                    {validationErrors.firstName && (
                                        <p className='text-red-400 text-xs mt-1'>
                                            {validationErrors.firstName[0]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor='lastName'
                                        className={labelClass}
                                    >
                                        Last Name *
                                    </label>
                                    <input
                                        id='lastName'
                                        name='lastName'
                                        type='text'
                                        placeholder='Smith'
                                        required
                                        className={cn(
                                            inputClass,
                                            validationErrors.lastName &&
                                                'border-red-500/50',
                                        )}
                                    />
                                    {validationErrors.lastName && (
                                        <p className='text-red-400 text-xs mt-1'>
                                            {validationErrors.lastName[0]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5'>
                                <div>
                                    <label
                                        htmlFor='email'
                                        className={labelClass}
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        placeholder='jane@example.com'
                                        required
                                        className={cn(
                                            inputClass,
                                            validationErrors.email &&
                                                'border-red-500/50',
                                        )}
                                    />
                                    {validationErrors.email && (
                                        <p className='text-red-400 text-xs mt-1'>
                                            {validationErrors.email[0]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor='phone'
                                        className={labelClass}
                                    >
                                        Phone Number *
                                    </label>
                                    <input
                                        id='phone'
                                        name='phone'
                                        type='tel'
                                        placeholder='+1 (555) 000-0000'
                                        required
                                        className={cn(
                                            inputClass,
                                            validationErrors.phone &&
                                                'border-red-500/50',
                                        )}
                                    />
                                    {validationErrors.phone && (
                                        <p className='text-red-400 text-xs mt-1'>
                                            {validationErrors.phone[0]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='mb-5'>
                                <label
                                    htmlFor='danceStyle'
                                    className={labelClass}
                                >
                                    Interested In
                                </label>
                                <select
                                    id='danceStyle'
                                    name='danceStyle'
                                    className={cn(inputClass, 'bg-studio-dark')}
                                >
                                    <option value=''>
                                        — Select a dance style —
                                    </option>
                                    {DANCE_STYLES.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='mb-5'>
                                <label
                                    htmlFor='experienceLevel'
                                    className={labelClass}
                                >
                                    Experience Level
                                </label>
                                <select
                                    id='experienceLevel'
                                    name='experienceLevel'
                                    className={cn(inputClass, 'bg-studio-dark')}
                                >
                                    <option value=''>
                                        — Select your level —
                                    </option>
                                    {EXPERIENCE_LEVELS.map((l) => (
                                        <option key={l} value={l}>
                                            {l}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='mb-5'>
                                <label htmlFor='message' className={labelClass}>
                                    Message (Optional)
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
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
                                disabled={
                                    formState === 'loading' ||
                                    formState === 'success'
                                }
                            >
                                {formState === 'loading' && '⏳ Sending...'}
                                {formState === 'success' && '✓ Request Sent!'}
                                {(formState === 'idle' ||
                                    formState === 'error') &&
                                    'Book My Free Trial →'}
                            </Button>

                            {/* Success Message */}
                            {formState === 'success' && (
                                <div className='mt-4 p-4 bg-[rgba(50,150,50,0.15)] border border-[rgba(50,150,50,0.3)] rounded-lg text-[0.9rem] text-[#80d080] text-center'>
                                    🎉 Thank you! We&apos;ll be in touch within
                                    24 hours to confirm your trial class.
                                </div>
                            )}

                            {/* Error Message */}
                            {formState === 'error' && errorMessage && (
                                <div className='mt-4 p-4 bg-[rgba(150,50,50,0.15)] border border-[rgba(150,50,50,0.3)] rounded-lg text-[0.9rem] text-[#d08080] text-center'>
                                    ⚠️ {errorMessage}
                                </div>
                            )}
                        </form>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
