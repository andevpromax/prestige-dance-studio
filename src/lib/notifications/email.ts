import { Resend } from 'resend';
import type { TrialLessonData } from '@/lib/validations/trial-lesson';

export async function sendTrialLessonEmail(data: TrialLessonData) {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TRIAL_LESSON_TO_EMAIL;
    const fromEmail = process.env.TRIAL_LESSON_FROM_EMAIL;

    if (!apiKey) {
        throw new Error('RESEND_API_KEY environment variable is not set.');
    }

    if (!toEmail || !fromEmail) {
        throw new Error(
            'Email configuration is missing. Please set TRIAL_LESSON_TO_EMAIL and TRIAL_LESSON_FROM_EMAIL environment variables.',
        );
    }

    const resend = new Resend(apiKey);

    const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #c9a84c; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                .header h1 { margin: 0; font-size: 24px; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 20px; }
                .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
                .value { color: #1a1a1a; font-size: 16px; }
                .message-box { background: white; padding: 15px; border-left: 4px solid #c9a84c; border-radius: 4px; margin-top: 10px; }
                .footer { text-align: center; margin-top: 30px; color: #888; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎭 New Trial Lesson Request</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Full Name</div>
                        <div class="value">${data.firstName} ${data.lastName}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">Email</div>
                        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                    </div>
                    
                    <div class="field">
                        <div class="label">Phone</div>
                        <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
                    </div>
                    
                    ${
                        data.danceStyle
                            ? `
                    <div class="field">
                        <div class="label">Interested In</div>
                        <div class="value">${data.danceStyle}</div>
                    </div>
                    `
                            : ''
                    }
                    
                    ${
                        data.experienceLevel
                            ? `
                    <div class="field">
                        <div class="label">Experience Level</div>
                        <div class="value">${data.experienceLevel}</div>
                    </div>
                    `
                            : ''
                    }
                    
                    ${
                        data.message
                            ? `
                    <div class="field">
                        <div class="label">Message</div>
                        <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
                    </div>
                    `
                            : ''
                    }
                    
                    <div class="footer">
                        Received on ${new Date().toLocaleString('en-US', {
                            dateStyle: 'full',
                            timeStyle: 'short',
                        })}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    const emailText = `
New Trial Lesson Request

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
${data.danceStyle ? `Interested In: ${data.danceStyle}` : ''}
${data.experienceLevel ? `Experience Level: ${data.experienceLevel}` : ''}
${data.message ? `\nMessage:\n${data.message}` : ''}

Received on ${new Date().toLocaleString()}
    `.trim();

    try {
        const result = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: '🎭 New Trial Lesson Request',
            html: emailHtml,
            text: emailText,
        });

        return result;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw new Error('Failed to send email notification');
    }
}
