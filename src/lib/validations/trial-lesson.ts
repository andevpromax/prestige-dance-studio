import { z } from 'zod';

export const trialLessonSchema = z.object({
    firstName: z
        .string()
        .min(1, 'First name is required')
        .max(50, 'First name is too long'),
    lastName: z
        .string()
        .min(1, 'Last name is required')
        .max(50, 'Last name is too long'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(1, 'Phone number is required'),
    danceStyle: z.string().optional(),
    experienceLevel: z.string().optional(),
    message: z.string().optional(),
});

export type TrialLessonData = z.infer<typeof trialLessonSchema>;
