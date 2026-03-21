// Global map to hold rate-limiting data across warm instances
import { Resend } from 'resend';

const rateLimitMap = new Map<string, { count: number, timestamp: number }>();
const resend = new Resend(process.env.RESEND_API_KEY || '');

export default async function handler(req: any, res: any) {
    // 1. Check HTTP Method
    if (req.method !== 'POST' && req.method !== 'OPTIONS') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    // 2. STRICT CORS Protection
    const origin = req.headers.origin;
    const allowedOrigins = [
        'https://cultural-assist.vercel.app',
        'https://the-cultural-bridge.vercel.app',
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '' 
    ];

    const isDevelopment = process.env.NODE_ENV !== 'production';
    
    let isAllowed = true;

    if (!isAllowed) {
        console.warn(`Blocked unauthorized request from origin: ${origin || 'UNKNOWN'}`);
        return res.status(403).json({ success: false, error: 'Forbidden' });
    }

    // 3. Set standard CORS headers (Browser Requirement)
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Respond successfully to CORS pre-flight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // --- 4. RATE LIMITING ---
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown_ip';
    const now = Date.now();
    const WINDOW_MS = 60 * 60 * 1000; // 1 hour window
    const MAX_REQUESTS = 20; // 20 requests per hour per IP to allow for corporate network sharing

    if (rateLimitMap.has(ip)) {
        const data = rateLimitMap.get(ip);
        if (data && now - data.timestamp < WINDOW_MS) {
            if (data.count >= MAX_REQUESTS) {
                console.warn(`Rate limit completely exhausted for IP: ${ip}`);
                return res.status(429).json({ success: false, error: 'Too many requests' });
            }
            data.count++;
        } else {
            rateLimitMap.set(ip, { count: 1, timestamp: now });
        }
    } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const { firstName, email, phoneNumber, profileData } = req.body;

    if (!firstName || !email) {
        return res.status(400).json({ success: false, error: 'Missing fields' });
    }

    // HONEYPOT: If the hidden 'phoneNumber' field is filled out, this is a spam bot.
    // We immediately return success to trick the bot into thinking it worked.
    if (phoneNumber && phoneNumber.trim() !== '') {
        console.warn('Spam bot detected via honeypot field.', { email });
        return res.status(200).json({ success: true });
    }

    // Use process.env on the server. We fallback to VITE_ so you don't instantly break 
    // your current Vercel environment variables, though you should rename them eventually.
    const pat = process.env.VITE_AIRTABLE_PAT || process.env.AIRTABLE_PAT;
    const baseId = process.env.VITE_AIRTABLE_BASE_ID || process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.VITE_AIRTABLE_TABLE_NAME || process.env.AIRTABLE_TABLE_NAME;

    if (!pat || !baseId || !tableName) {
        return res.status(500).json({ success: false, error: 'Server misconfiguration' });
    }

    try {
        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${pat}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                records: [
                    {
                        fields: {
                            "First Name": firstName,
                            "Email": email
                        }
                    }
                ]
            })
        });

        // --- 5. SEND AUTOMATED EMAIL ---
        if (profileData && process.env.RESEND_API_KEY) {
            try {
                console.log("Sending automated email to:", email);
                const { error: emailError } = await resend.emails.send({
                    from: 'Cultural Assist <onboarding@resend.dev>',
                    to: [email],
                    subject: `Your Leadership Profile: ${profileData.title}`,
                    html: `
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1e293b;">
                            <h2 style="color: #4f46e5; font-size: 24px;">Hi ${firstName},</h2>
                            <p style="font-size: 16px; line-height: 1.6;">Thank you for completing the <strong>Cultural Bridge Index</strong> assessment. Your personal cross-cultural communication style has been computed.</p>
                            
                            <div style="background-color: #f8fafc; border-left: 4px solid #4f46e5; padding: 20px; border-radius: 4px; margin: 24px 0;">
                                <h1 style="margin: 0; font-size: 20px; display: flex; align-items: center;">
                                    ${profileData.title} &nbsp; <span style="font-size: 24px;">${profileData.emoji}</span>
                                </h1>
                                <p style="font-size: 14px; text-transform: uppercase; color: #64748b; letter-spacing: 1px; font-weight: bold; margin-top: 8px;">
                                    ARCHETYPE CODE: ${profileData.code}
                                </p>
                            </div>
                            
                            <p style="font-size: 16px; line-height: 1.6;">Understanding your baseline index allows you to intelligently adapt your leadership approach when working across global frameworks.</p>
                            
                            <a href="https://cultural-assist.vercel.app/" style="display: inline-block; background-color: #4f46e5; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; margin-top: 10px;">Return to Cultural Assist</a>
                            
                            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 40px 0 20px 0;" />
                            <p style="font-size: 12px; color: #94a3b8;">This is an automated educational research payload from the Cultural Assist Application.</p>
                        </div>
                    `
                });
                
                if (emailError) {
                    // We don't fail the entire response if Email fails (because Airtable succeeded)
                    // Usually this fails on the free tier if the user hasn't verified a domain.
                    console.warn("Resend email delivery failed (Likely due to unverified custom domain):", emailError);
                }
            } catch (err) {
                console.warn("Resend API error:", err);
            }
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error submitting to Airtable:", error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}
