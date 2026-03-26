/**
 * Service for fetching real-time exchange rates using the Frankfurter API.
 * Provides both major global pairs and local currency conversions.
 */

export interface FXResult {
    localRates: { code: string; rate: number }[];
    baseSymbol?: string;
}

export async function fetchLiveRates(localCurrency: string): Promise<FXResult> {
    try {
        // Use ExchangeRate-API (Free Tier - 160+ currencies)
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        if (!res.ok) throw new Error('FX API failed');
        const data = await res.json();
        const rates = data.rates || {};

        // Local Currency Conversions vs 7 Base Benchmarks + USD
        let localRates: { code: string; rate: number }[] = [];
        if (localCurrency && rates[localCurrency]) {
            const usdToLocal = rates[localCurrency];
            // Targeted base benchmarks: USD, EUR, GBP, JPY, CHF, AUD
            const targets = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'AUD'];
            localRates = targets
                .filter(t => t !== localCurrency)
                .map(target => {
                    const usdToTarget = rates[target] || 0;
                    const rate = usdToTarget / usdToLocal;
                    return { code: target, rate };
                })
                .filter(item => item.rate > 0);
        }

        return { localRates, baseSymbol: localCurrency };
    } catch (error) {
        console.error('Failed to fetch FX rates:', error);
        return { localRates: [] };
    }
}
