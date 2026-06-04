# Trial Lesson Booking System - Implementation Guide

## ✅ What Was Implemented

A complete trial lesson booking system with:

- ✅ Form validation with Zod
- ✅ Email notifications via Resend
- ✅ Telegram notifications via Bot API
- ✅ Server-side API route handling
- ✅ Loading, success, and error states
- ✅ Form auto-reset after successful submission
- ✅ Client-side validation error display
- ✅ Secure environment variable usage
- ✅ Production-ready error handling

## 📁 Files Created/Modified

### Created Files:
- `src/lib/validations/trial-lesson.ts` - Zod validation schema
- `src/lib/notifications/email.ts` - Email notification service (Resend)
- `src/lib/notifications/telegram.ts` - Telegram notification service
- `src/app/api/trial-lesson/route.ts` - API route handler

### Modified Files:
- `src/components/sections/ContactSection.tsx` - Form with full UX states
- `.env.example` - Environment variables template
- `package.json` - Added zod and resend dependencies

## 🔧 Setup Instructions

### 1. Install Dependencies

Already done! The following packages were installed:
```bash
pnpm add zod resend
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# ── Trial Lesson Notifications ────────────────────────────────

# Resend API Key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Email Addresses
TRIAL_LESSON_TO_EMAIL=your-studio-email@example.com
TRIAL_LESSON_FROM_EMAIL=onboarding@resend.dev

# Telegram Configuration
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

### 3. Get Resend API Key

1. Go to https://resend.com
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into `RESEND_API_KEY`

**For Testing:**
- Use `TRIAL_LESSON_FROM_EMAIL=onboarding@resend.dev` (Resend's test email)
- Send to any email address

**For Production:**
- Verify your domain in Resend
- Use your domain email (e.g., `notifications@yourdomain.com`)

### 4. Set Up Telegram Bot

#### Step 1: Create a Bot
1. Open Telegram and search for `@BotFather`
2. Send `/newbot`
3. Follow instructions (name your bot)
4. Copy the bot token
5. Paste into `TELEGRAM_BOT_TOKEN`

#### Step 2: Get Chat ID

**For personal notifications:**
1. Send a message to your bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Find `"chat":{"id":123456789` in the response
4. Copy the number and paste into `TELEGRAM_CHAT_ID`

**For group/channel notifications:**
1. Add your bot to a group or channel
2. Make the bot an admin (for channels)
3. Send a message in the group/channel
4. Visit the same URL as above
5. Find the chat ID (will be negative, e.g., `-1001234567890`)

## 🧪 Testing

### 1. Test Locally

```bash
pnpm dev
```

Navigate to `http://localhost:3000/#contact` and fill out the form.

### 2. What to Expect

**On Form Submission:**
1. Button shows "⏳ Sending..."
2. Form is disabled
3. API validates data
4. Email is sent via Resend
5. Telegram message is sent
6. Success message appears: "🎉 Thank you! We'll be in touch..."
7. Form resets after 5 seconds

**On Success:**
- You receive an email with all form details
- You receive a Telegram message with all details
- User sees success message

**On Validation Error:**
- Red error messages appear below invalid fields
- User is prompted to fix errors

**On Network/Server Error:**
- User sees a friendly error message
- Error is logged to console for debugging

## 📊 API Endpoint

### POST /api/trial-lesson

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+1 (555) 000-0000",
  "danceStyle": "Waltz",
  "experienceLevel": "Complete Beginner",
  "message": "Looking forward to my first lesson!"
}
```

**Success Response (200):**
```json
{
  "message": "Trial lesson request received successfully!",
  "warnings": {
    "email": false,
    "telegram": false
  }
}
```

**Validation Error (400):**
```json
{
  "error": "Validation failed",
  "details": {
    "email": ["Please enter a valid email address"],
    "phone": ["Phone number is required"]
  }
}
```

**Server Error (500):**
```json
{
  "error": "Failed to send notifications. Please try again or contact us directly."
}
```

## 🔒 Security Features

- ✅ All API keys stored in environment variables
- ✅ No secrets exposed to client-side
- ✅ Server-side validation with Zod
- ✅ Request body parsing with error handling
- ✅ Proper HTTP status codes
- ✅ Input sanitization via Zod schema

## 📧 Email Template

The email notification includes:
- Styled HTML email with brand colors
- All form fields nicely formatted
- Clickable email and phone links
- Timestamp of submission
- Fallback plain text version

## 💬 Telegram Message Format

```
🎭 *New Trial Lesson Request*

👤 *Name:* Jane Smith
📧 *Email:* jane@example.com
📞 *Phone:* +1 (555) 000-0000
💃 *Interested In:* Waltz
📊 *Experience:* Complete Beginner

💬 *Message:*
Looking forward to my first lesson!

🕐 *Received:* Jun 2, 2026, 3:45 PM
```

## 🚀 Deployment

Before deploying to production:

1. **Add environment variables to your hosting platform:**
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   
2. **Verify your domain with Resend** (for production emails)

3. **Test all notifications** in staging environment

4. **Monitor logs** for any errors

## 🐛 Troubleshooting

### Email Not Sending
- Check `RESEND_API_KEY` is correct
- Verify `TRIAL_LESSON_FROM_EMAIL` is allowed (use `onboarding@resend.dev` for testing)
- Check Resend dashboard for delivery status

### Telegram Not Working
- Verify `TELEGRAM_BOT_TOKEN` is correct
- Ensure bot has been started (send `/start` to your bot)
- Check `TELEGRAM_CHAT_ID` is correct
- Visit `https://api.telegram.org/bot<TOKEN>/getUpdates` to debug

### Form Submission Fails
- Check browser console for errors
- Check server logs for API route errors
- Verify all required environment variables are set
- Test API endpoint directly with curl/Postman

### Validation Errors
- Ensure all required fields (firstName, lastName, email, phone) are filled
- Email must be valid format
- Phone number is required

## 📝 Customization

### Change Validation Rules
Edit `src/lib/validations/trial-lesson.ts`

### Modify Email Template
Edit `src/lib/notifications/email.ts` (lines 18-94)

### Customize Telegram Message
Edit `src/lib/notifications/telegram.ts` (lines 13-27)

### Adjust Form Fields
Edit `src/components/sections/ContactSection.tsx`

## ✨ Features

- **Smart Error Handling:** If one notification fails, the other still sends
- **User-Friendly Messages:** Clear feedback for all states
- **Auto-Reset:** Form clears after successful submission
- **Loading State:** Button disabled during submission
- **Field Validation:** Real-time error messages
- **Responsive Design:** Works on all devices
- **Production Ready:** Proper error logging and handling

---

**Need help?** Check the console logs or contact support.
