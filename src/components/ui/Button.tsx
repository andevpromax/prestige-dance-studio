import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline';

interface ButtonProps {
    href?: string;
    variant?: ButtonVariant;
    className?: string;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
}

const base =
    'inline-flex items-center justify-center px-9 py-3.5 font-body text-[0.85rem] font-bold tracking-[0.12em] uppercase rounded-lg transition-all duration-250 cursor-pointer border-0';

const variants: Record<ButtonVariant, string> = {
    primary:
        'bg-gold text-studio-base hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]',
    outline:
        'bg-transparent text-cream border border-cream/40 ml-4 hover:border-gold hover:text-gold hover:-translate-y-0.5',
};

export default function Button({
    href,
    variant = 'primary',
    className,
    children,
    type = 'button',
    disabled,
    onClick,
}: ButtonProps) {
    const classes = cn(base, variants[variant], className);

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    );
}
