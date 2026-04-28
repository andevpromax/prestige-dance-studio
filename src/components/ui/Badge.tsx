import { cn } from '@/lib/utils';
import type { ScheduleEntry } from '@/types';

const levelStyles: Record<ScheduleEntry['level'], string> = {
    Beginner: 'bg-gold/15 text-gold-light',
    Intermediate: 'bg-ruby/25 text-[#e07090]',
    Advanced: 'bg-[rgba(100,50,200,0.2)] text-[#b090f0]',
    'All Levels': 'bg-[rgba(50,150,50,0.15)] text-[#80d080]',
};

interface BadgeProps {
    level: ScheduleEntry['level'];
    className?: string;
}

export default function Badge({ level, className }: BadgeProps) {
    return (
        <span
            className={cn(
                'inline-block px-3 py-0.5 rounded-full text-[0.72rem] font-bold tracking-[0.05em]',
                levelStyles[level],
                className,
            )}
        >
            {level}
        </span>
    );
}
