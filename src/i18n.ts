import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import zh from './locales/zh.json';
import hi from './locales/hi.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import it from './locales/it.json';
import tr from './locales/tr.json';
import vi from './locales/vi.json';
import pl from './locales/pl.json';
import id from './locales/id.json';
import nl from './locales/nl.json';
import th from './locales/th.json';
import sv from './locales/sv.json';
import el from './locales/el.json';
import cs from './locales/cs.json';
import ro from './locales/ro.json';
import hu from './locales/hu.json';
import da from './locales/da.json';
import fi from './locales/fi.json';
import no from './locales/no.json';
import tl from './locales/tl.json';
import bg from './locales/bg.json';
import et from './locales/et.json';
import is from './locales/is.json';
import lv from './locales/lv.json';
import lt from './locales/lt.json';
import sr from './locales/sr.json';
import sk from './locales/sk.json';
import uk from './locales/uk.json';
import hy from './locales/hy.json';
import ka from './locales/ka.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            fr: { translation: fr },
            de: { translation: de },
            zh: { translation: zh },
            hi: { translation: hi },
            ar: { translation: ar },
            pt: { translation: pt },
            ru: { translation: ru },
            ja: { translation: ja },
            ko: { translation: ko },
            it: { translation: it },
            tr: { translation: tr },
            vi: { translation: vi },
            pl: { translation: pl },
            id: { translation: id },
            nl: { translation: nl },
            th: { translation: th },
            sv: { translation: sv },
            el: { translation: el },
            cs: { translation: cs },
            ro: { translation: ro },
            hu: { translation: hu },
            da: { translation: da },
            fi: { translation: fi },
            no: { translation: no },
            tl: { translation: tl },
            bg: { translation: bg },
            et: { translation: et },
            is: { translation: is },
            lv: { translation: lv },
            lt: { translation: lt },
            sr: { translation: sr },
            sk: { translation: sk },
            uk: { translation: uk },
            hy: { translation: hy },
            ka: { translation: ka }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;
