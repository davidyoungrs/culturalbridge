// Global map to hold rate-limiting data across warm instances
const rateLimitMap = new Map<string, { count: number, timestamp: number }>();

export default async function handler(req: any, res: any) {
    // 1. Check HTTP Method
    if (req.method !== 'POST' && req.method !== 'OPTIONS') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

    // 2. STRICT CORS (Cross-Origin Resource Sharing) Protection
    const origin = req.headers.origin;
    
    const allowedOrigins = [
        'https://cultural-assist.vercel.app',
        'https://the-cultural-bridge.vercel.app',
        // Dynamically allow Vercel production/preview environments provided by process.env
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '' 
    ];

    const isDevelopment = process.env.NODE_ENV !== 'production';
    
    let isAllowed = false;
    if (origin) {
        // Allow localhost ONLY in development mode
        if (isDevelopment && origin.startsWith('http://localhost')) {
            isAllowed = true;
        } 
        // Allow whitelisted production domains
        else if (allowedOrigins.includes(origin)) {
            isAllowed = true;
        } 
        // Fallback: Allow any Vercel preview domain branching from this project
        else if (origin.endsWith('.vercel.app') && origin.includes('cultural-')) {
            isAllowed = true;
        }
    }

    if (!isAllowed) {
        console.warn(`Blocked unauthorized request from origin: ${origin || 'UNKNOWN'}`);
        return res.status(403).json({ success: false, error: 'Forbidden' });
    }

    // 3. Set standard CORS headers (Browser Requirement)
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Respond successfully to CORS pre-flight requests (OPTIONS method)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // --- 4. RATE LIMITING ---
    // Extract IP address (Vercel uses x-forwarded-for)
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown_ip';
    
    const now = Date.now();
    const WINDOW_MS = 60 * 60 * 1000; // 1 hour window
    const MAX_REQUESTS = 2; // Strict limit: 2 successful submissions per hour per IP

    if (rateLimitMap.has(ip)) {
        const data = rateLimitMap.get(ip);
        if (data && now - data.timestamp < WINDOW_MS) {
            if (data.count >= MAX_REQUESTS) {
                console.warn(`Rate limit completely exhausted for IP: ${ip}`);
                return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
            }
            data.count++;
        } else {
            // Window expired, reset counter
            rateLimitMap.set(ip, { count: 1, timestamp: now });
        }
    } else {
        // First request from this IP
        rateLimitMap.set(ip, { count: 1, timestamp: now });
    }
    // --- END RATE LIMITING ---

    const { firstName, email, phoneNumber } = req.body;

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

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Airtable API error:", errorText);
            return res.status(500).json({ success: false, error: 'Airtable API error' });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error submitting to Airtable:", error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
}
