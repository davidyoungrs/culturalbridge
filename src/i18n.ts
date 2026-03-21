import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Only load English eagerly (it's the fallback language).
// All other locales are fetched on demand via Vite's dynamic import.
import en from './locales/en.json';

// Lazy locale loader map – Vite splits each JSON into its own chunk.
const localeModules = import.meta.glob('./locales/*.json') as Record<string, () => Promise<{ default: Record<string, string> }>>;

/**
 * Dynamically loads a locale JSON and registers it with i18next.
 * Called automatically by the languageChanged event.
 */
async function loadLocale(lng: string) {
    if (lng === 'en') return; // already bundled
    if (i18n.hasResourceBundle(lng, 'translation')) return; // already loaded

    const path = `./locales/${lng}.json`;
    const loader = localeModules[path];
    if (!loader) {
        console.warn(`[i18n] No locale file found for "${lng}"`);
        return;
    }

    try {
        const mod = await loader();
        i18n.addResourceBundle(lng, 'translation', mod.default || mod, true, true);
    } catch (err) {
        console.error(`[i18n] Failed to load locale "${lng}":`, err);
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

// Whenever the language changes, dynamically fetch the matching locale.
i18n.on('languageChanged', loadLocale);

// If the detected language at startup isn't English, load it now.
if (i18n.language && i18n.language !== 'en') {
    loadLocale(i18n.language);
}

export default i18n;

