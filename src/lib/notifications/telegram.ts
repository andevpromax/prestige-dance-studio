import type { TrialLessonData } from '@/lib/validations/trial-lesson';

export async function sendTelegramNotification(data: TrialLessonData) {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        throw new Error(
            'Telegram configuration is missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables.',
        );
    }

    // Format message with proper Telegram markdown
    const message = `
🎭 *New Trial Lesson Request*

👤 *Name:* ${data.firstName} ${data.lastName}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}
${data.danceStyle ? `💃 *Interested In:* ${data.danceStyle}` : ''}
${data.experienceLevel ? `📊 *Experience:* ${data.experienceLevel}` : ''}
${data.message ? `\n💬 *Message:*\n${data.message}` : ''}

🕐 *Received:* ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
    `.trim();

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            },
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            throw new Error('Failed to send Telegram notification');
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to send Telegram notification:', error);
        throw new Error('Failed to send Telegram notification');
    }
}
