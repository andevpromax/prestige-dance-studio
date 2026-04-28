import Badge from '@/components/ui/Badge';
import FadeUp from '@/components/ui/FadeUp';
import SectionHeader from '@/components/ui/SectionHeader';
import type { ScheduleEntry } from '@/types';

interface ScheduleSectionProps {
    entries: ScheduleEntry[];
}

export default function ScheduleSection({ entries }: ScheduleSectionProps) {
    return (
        <section id='schedule' className='py-[90px] px-[5%] bg-studio-dark'>
            <div className='max-w-7xl mx-auto'>
                <FadeUp>
                    <SectionHeader
                        label='Weekly Timetable'
                        title='Class Schedule'
                    />
                </FadeUp>

                <FadeUp>
                    <div className='overflow-x-auto'>
                        <table className='w-full border-collapse'>
                            <thead>
                                <tr>
                                    {[
                                        'Day',
                                        'Time',
                                        'Class',
                                        'Instructor',
                                        'Level',
                                        'Duration',
                                    ].map((h) => (
                                        <th
                                            key={h}
                                            className='font-body text-[0.75rem] tracking-[0.15em] uppercase text-gold px-3 py-4 border-b border-gold/25 text-left'
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {entries.map((entry) => (
                                    <tr
                                        key={entry.id}
                                        className='border-b border-white/5 hover:bg-gold/5 transition-colors'
                                    >
                                        <td className='px-3 py-3.5 text-[0.88rem] text-cream'>
                                            {entry.day}
                                        </td>
                                        <td className='px-3 py-3.5 text-[0.88rem] text-cream'>
                                            {entry.time}
                                        </td>
                                        <td className='px-3 py-3.5 text-[0.88rem] text-cream'>
                                            {entry.className}
                                        </td>
                                        <td className='px-3 py-3.5 text-[0.88rem] text-cream'>
                                            {entry.instructor}
                                        </td>
                                        <td className='px-3 py-3.5'>
                                            <Badge level={entry.level} />
                                        </td>
                                        <td className='px-3 py-3.5 text-[0.88rem] text-cream'>
                                            {entry.durationMinutes} min
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
