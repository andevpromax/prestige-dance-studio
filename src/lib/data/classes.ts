import type { DanceClass } from '@/types';

export const DANCE_CLASSES: DanceClass[] = [
    {
        id: 'waltz',
        name: 'Waltz',
        category: 'Ballroom',
        level: 'All Levels',
        description:
            'The dance of romance. Glide across the floor with flowing movements and graceful turns.',
        durationMinutes: 60,
        emoji: '🌹',
        gradientFrom: '#1a0a30',
        gradientTo: '#3d1a6e',
    },
    {
        id: 'tango',
        name: 'Tango',
        category: 'Ballroom',
        level: 'Beg – Adv',
        description:
            'Dramatic, passionate, and precise. Master the sharp staccato movements of this iconic dance.',
        durationMinutes: 60,
        emoji: '🔥',
        gradientFrom: '#2a0000',
        gradientTo: '#8b1b1b',
    },
    {
        id: 'foxtrot',
        name: 'Foxtrot',
        category: 'Ballroom',
        level: 'All Levels',
        description:
            'Smooth, sophisticated elegance. Perfect for social dancing and competitions alike.',
        durationMinutes: 60,
        emoji: '🎩',
        gradientFrom: '#0a1a20',
        gradientTo: '#1a4a5a',
    },
    {
        id: 'quickstep',
        name: 'Quickstep',
        category: 'Ballroom',
        level: 'Intermediate',
        description:
            'Fast, fun, and energetic. A lively dance full of hops, skips, and chassés.',
        durationMinutes: 60,
        emoji: '⚡',
        gradientFrom: '#1a1500',
        gradientTo: '#5a4a00',
    },
    {
        id: 'viennese-waltz',
        name: 'Viennese Waltz',
        category: 'Ballroom',
        level: 'Intermediate+',
        description:
            'The original ballroom dance. Fast rotations and a dazzling sense of movement.',
        durationMinutes: 60,
        emoji: '🌀',
        gradientFrom: '#001a10',
        gradientTo: '#006644',
    },
    {
        id: 'latin-fusion',
        name: 'Latin Fusion',
        category: 'Latin',
        level: 'All Levels',
        description:
            'Cha-cha, Samba, Rumba & Paso Doble. Vibrant rhythms and expressive hip action.',
        durationMinutes: 60,
        emoji: '💃',
        gradientFrom: '#200a00',
        gradientTo: '#8b3b00',
    },
];
