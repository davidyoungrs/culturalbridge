export async function submitToAirtable(firstName: string, email: string) {
    const pat = import.meta.env.VITE_AIRTABLE_PAT;
    const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

    if (!pat || !baseId || !tableName) {
        console.warn("Airtable environment variables are missing. Skipping lead capture. Please configure .env.local");
        return { success: false, error: "Missing config" };
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
            return { success: false, error: "Airtable API error" };
        }

        return { success: true };
    } catch (error) {
        console.error("Error submitting to Airtable:", error);
        return { success: false, error };
    }
}
