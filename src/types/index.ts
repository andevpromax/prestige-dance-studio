export interface DanceClass {
    id: string;
    name: string;
    category: 'Ballroom' | 'Latin';
    level: string;
    description: string;
    durationMinutes: number;
    emoji: string;
    gradientFrom: string;
    gradientTo: string;
}

export interface ScheduleEntry {
    id: string;
    day: string;
    time: string;
    className: string;
    instructor: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    durationMinutes: number;
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    meta: string;
    emoji: string;
}

export type PricingFeature = {
    label: string;
    included: boolean;
};

export interface PricingPlan {
    id: string;
    name: string;
    price: number;
    featured?: boolean;
    features: PricingFeature[];
}

export interface StudioMoment {
    id: string;
    tag: string;
    title: string;
    description: string;
    emoji: string;
    gradient: string;
    image?: string;
}

export interface HeroStat {
    count: number;
    suffix: string;
    label: string;
}

export interface ContactDetail {
    icon: string;
    heading: string;
    lines: string[];
}
