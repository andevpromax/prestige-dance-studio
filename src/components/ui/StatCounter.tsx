'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
    count: number;
    suffix?: string;
}

export default function StatCounter({ count, suffix = '' }: StatCounterProps) {
    const [displayed, setDisplayed] = useState(count);
    const hasRun = useRef(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true;
                    observer.disconnect();

                    const duration = 1800;
                    const startTime = performance.now();
                    setDisplayed(0);

                    function step(now: number) {
                        const progress = Math.min(
                            (now - startTime) / duration,
                            1,
                        );
                        const eased = 1 - (1 - progress) ** 3;
                        setDisplayed(Math.round(eased * count));
                        if (progress < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [count]);

    return (
        <span ref={ref}>
            {displayed}
            {suffix}
        </span>
    );
}
