import { NextResponse } from 'next/server';
import { sendTrialLessonEmail } from '@/lib/notifications/email';
import { sendTelegramNotification } from '@/lib/notifications/telegram';
import { trialLessonSchema } from '@/lib/validations/trial-lesson';

export async function POST(request: Request) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate data with Zod
        const validationResult = trialLessonSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    error: 'Validation failed',
                    details: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 },
            );
        }

        const data = validationResult.data;

        // Send notifications in parallel
        const results = await Promise.allSettled([
            sendTrialLessonEmail(data),
            sendTelegramNotification(data),
        ]);

        // Check if both notifications failed
        const emailResult = results[0];
        const telegramResult = results[1];

        const emailFailed = emailResult.status === 'rejected';
        const telegramFailed = telegramResult.status === 'rejected';

        // If both failed, return error
        if (emailFailed && telegramFailed) {
            console.error('Both notifications failed:', {
                email: emailResult.reason,
                telegram: telegramResult.reason,
            });
            return NextResponse.json(
                {
                    error: 'Failed to send notifications. Please try again or contact us directly.',
                },
                { status: 500 },
            );
        }

        // Log warnings for partial failures
        if (emailFailed) {
            console.warn('Email notification failed:', emailResult.reason);
        }
        if (telegramFailed) {
            console.warn(
                'Telegram notification failed:',
                telegramResult.reason,
            );
        }

        // Return success even if one notification failed (better UX)
        return NextResponse.json(
            {
                message: 'Trial lesson request received successfully!',
                warnings: {
                    email: emailFailed,
                    telegram: telegramFailed,
                },
            },
            { status: 200 },
        );
    } catch (error) {
        console.error('Unexpected error in trial-lesson API:', error);
        return NextResponse.json(
            {
                error: 'An unexpected error occurred. Please try again later.',
            },
            { status: 500 },
        );
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
