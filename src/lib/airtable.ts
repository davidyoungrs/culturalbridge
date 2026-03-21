export async function submitToAirtable(firstName: string, email: string, phoneNumber?: string, profileData?: any) {
    try {
        // LOCALHOST DEVELOPMENT FALLBACK:
        // Because "npm run dev" doesn't run Vercel's backend /api directory, we directly hook into Airtable
        // strictly for local testing using the insecure VITE_ keys present in your local computer.
        if (import.meta.env.DEV) {
            console.log("Local Dev environment detected: hitting Airtable directly.");
            
            const pat = import.meta.env.VITE_AIRTABLE_PAT;
            const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
            const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

            if (!pat || !baseId || !tableName) {
                console.warn("Airtable environment variables are missing locally.");
                return { success: false, error: "Missing config" };
            }

            if (phoneNumber && phoneNumber.trim() !== '') {
                console.warn('Local Dev: Spam bot honeypot tripped.');
                return { success: true };
            }

            const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${pat}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [{ fields: { "First Name": firstName, "Email": email } }]
                })
            });

            if (!response.ok) return { success: false, error: "Airtable API error" };
            return { success: true };
        }

        // PRODUCTION SECURE PROXY
        const response = await fetch('/api/submit-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, email, phoneNumber, profileData })
        });

        // Safely parse JSON to prevent SyntaxErrors if a 404 HTML page is returned
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (!response.ok || !data.success) {
                console.error("Server API error:", data.error);
                if (typeof window !== 'undefined') window.alert(`SERVER DATA ERROR: ${data.error}`);
                return { success: false, error: data.error };
            }
            return { success: true };
        } else {
            const errText = await response.text();
            if (typeof window !== 'undefined') window.alert(`VERCEL FATAL 500 ERROR: The Vercel server crashed entirely. Text: ${errText.substring(0, 100)}`);
            return { success: false, error: `Invalid response from server: ${response.status}` };
        }

    } catch (error) {
        console.error("Error submitting lead:", error);
        if (typeof window !== 'undefined') window.alert(`CRITICAL NETWORK CATCH: ${error}`);
        return { success: false, error };
    }
}
