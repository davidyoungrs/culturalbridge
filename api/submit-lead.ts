export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }

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
