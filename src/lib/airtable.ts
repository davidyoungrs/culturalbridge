export async function submitToAirtable(firstName: string, email: string, phoneNumber?: string) {
    try {
        const response = await fetch('/api/submit-lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, email, phoneNumber })
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
            console.error("Server API error:", data.error);
            return { success: false, error: data.error };
        }

        return { success: true };
    } catch (error) {
        console.error("Error submitting lead:", error);
        return { success: false, error };
    }
}
