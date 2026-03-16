export function getLanguageForCountry(countryName: string): string {
    const languageMap: Record<string, string> = {
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
        "Switzerland": "de",

        // Mandarin Chinese (zh)
        "China": "zh",
        "Taiwan": "zh",

        // Hindi (hi)
        "India": "hi",

        // Arabic (ar)
        "Egypt": "ar",
        "UAE": "ar",
        "Saudi Arabia": "ar",
        "Kuwait": "ar",
        "Qatar": "ar",
        "Bahrain": "ar",
        "Morocco": "ar",
        "Tunisia": "ar",
        "Iraq": "ar",
        "Jordan": "ar",
        "Lebanon": "ar",
        "Oman": "ar",
        "Libya": "ar",

        // Portuguese (pt)
        "Brazil": "pt",
        "Portugal": "pt",

        // Russian (ru)
        "Russia": "ru",
        "Belarus": "ru",
        "Kazakhstan": "ru",
        "Kyrgyzstan": "ru",
        "Uzbekistan": "ru",
        "Azerbaijan": "ru",

        // Japanese (ja)
        "Japan": "ja",

        // Korean (ko)
        "South Korea": "ko",

        // Italian (it)
        "Italy": "it",

        // Turkish (tr)
        "Turkey": "tr",

        // Vietnamese (vi)
        "Vietnam": "vi",

        // Polish (pl)
        "Poland": "pl",

        // Indonesian (id)
        "Indonesia": "id",

        // Dutch (nl)
        "Netherlands": "nl",

        // Thai (th)
        "Thailand": "th",

        // Swedish (sv)
        "Sweden": "sv",

        // Greek (el)
        "Greece": "el",
        "Cyprus": "el",

        // Czech (cs)
        "Czech Republic": "cs",

        // Romanian (ro)
        "Romania": "ro",

        // Hungarian (hu)
        "Hungary": "hu",

        // Danish (da)
        "Denmark": "da",

        // New Languages
        "Finland": "fi",
        "Norway": "no",
        "Philippines": "tl",
        "Bulgaria": "bg",
        "Estonia": "et",
        "Iceland": "is",
        "Latvia": "lv",
        "Lithuania": "lt",
        "Serbia": "sr",
        "Slovakia": "sk",
        "Ukraine": "uk",
        "Armenia": "hy",
        "Georgia": "ka"
    };

    return languageMap[countryName] || 'en';
}
