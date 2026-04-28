import type { PricingPlan } from '@/types';

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: 'starter',
        name: 'Starter',
        price: 79,
        features: [
            { label: '4 Group Classes / Month', included: true },
            { label: 'Access to Open Practice', included: true },
            { label: 'Studio Lounge Access', included: true },
            { label: 'Private Lessons', included: false },
            { label: 'Competition Prep', included: false },
            { label: 'Priority Booking', included: false },
        ],
    },
    {
        id: 'prestige',
        name: 'Prestige',
        price: 149,
        featured: true,
        features: [
            { label: 'Unlimited Group Classes', included: true },
            { label: 'Access to Open Practice', included: true },
            { label: 'Studio Lounge Access', included: true },
            { label: '2 Private Lessons / Month', included: true },
            { label: 'Competition Prep', included: false },
            { label: 'Priority Booking', included: true },
        ],
    },
    {
        id: 'champion',
        name: 'Champion',
        price: 249,
        features: [
            { label: 'Unlimited Group Classes', included: true },
            { label: 'Access to Open Practice', included: true },
            { label: 'Studio Lounge Access', included: true },
            { label: '4 Private Lessons / Month', included: true },
            { label: 'Competition Prep', included: true },
            { label: 'Priority Booking', included: true },
        ],
    },
];
