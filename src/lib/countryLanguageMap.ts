export function getLanguageForCountry(countryName: string): 'en' | 'es' | 'fr' | 'de' {
    const languageMap: Record<string, 'en' | 'es' | 'fr' | 'de'> = {
        // Spanish
        "Argentina": "es",
        "Bolivia": "es",
        "Chile": "es",
        "Colombia": "es",
        "Costa Rica": "es",
        "Cuba": "es",
        "Ecuador": "es",
        "El Salvador": "es",
        "Guatemala": "es",
        "Honduras": "es",
        "Mexico": "es",
        "Nicaragua": "es",
        "Panama": "es",
        "Paraguay": "es",
        "Peru": "es",
        "Spain": "es",
        "Uruguay": "es",
        "Venezuela": "es",

        // French
        "Belgium": "fr",
        "Cameroon": "fr",
        "France": "fr",
        "Ivory Coast": "fr",
        "Senegal": "fr",

        // German
        "Austria": "de",
        "Germany": "de",
        "Switzerland": "de"
    };

    return languageMap[countryName] || 'en';
}
