'use client';

import { type ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeUp({
    children,
    className,
    delay = 0,
}: FadeUpProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('fade-up-visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn('fade-up', className)}
            style={{ transitionDelay: delay > 0 ? `${delay}ms` : undefined }}
        >
            {children}
        </div>
    );
}
