import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    label: string;
    title: string;
    centered?: boolean;
    className?: string;
}

export default function SectionHeader({
    label,
    title,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn(centered && 'text-center', className)}>
            <p className='font-body text-[0.75rem] tracking-[0.25em] uppercase text-gold mb-2'>
                {label}
            </p>
            <h2 className='font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-cream mb-4'>
                {title}
            </h2>
            <div
                className={cn(
                    'relative overflow-hidden h-0.5 w-15 bg-gold mb-10',
                    centered ? 'mx-auto' : 'ml-0',
                    'after:absolute after:inset-0 after:w-1/2 after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent after:animate-shimmer',
                )}
            />
        </div>
    );
}
