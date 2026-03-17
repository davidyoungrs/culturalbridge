import fs from 'fs';
import path from 'path';

const localesDir = path.join(process.cwd(), 'src/locales');

const resultsTranslations = {
    'en': { naturalFit: 'Natural Fit With', adaptationGuide: 'Adaptation Guide' },
    'es': { naturalFit: 'Ajuste natural con', adaptationGuide: 'Guía de adaptación' },
    'fr': { naturalFit: 'Compatibilité naturelle avec', adaptationGuide: "Guide d'adaptation" },
    'de': { naturalFit: 'Natürliche Übereinstimmung mit', adaptationGuide: 'Anpassungsleitfaden' },
    'zh': { naturalFit: '自然契合于', adaptationGuide: '适应指南' },
    'hi': { naturalFit: 'इसके साथ प्राकृतिक तालमेल', adaptationGuide: 'अनुकूलन मार्गदर्शिका' },
    'ar': { naturalFit: 'توافق طبيعي مع', adaptationGuide: 'دليل التكيف' },
    'pt': { naturalFit: 'Ajuste natural com', adaptationGuide: 'Guia de adaptação' },
    'ru': { naturalFit: 'Естественная совместимость с', adaptationGuide: 'Руководство по адаптации' },
    'ja': { naturalFit: '自然に適合する対象', adaptationGuide: '適応ガイド' },
    'ko': { naturalFit: '자연스러운 조화', adaptationGuide: '적응 가이드' },
    'it': { naturalFit: 'Sintonia naturale con', adaptationGuide: "Guida all'adattamento" },
    'tr': { naturalFit: 'Doğal Uyum', adaptationGuide: 'Adaptasyon Rehberi' },
    'vi': { naturalFit: 'Phù hợp tự nhiên với', adaptationGuide: 'Hướng dẫn thích nghi' },
    'pl': { naturalFit: 'Naturalne dopasowanie z', adaptationGuide: 'Przewodnik adaptacji' },
    'id': { naturalFit: 'Kecocokan alami dengan', adaptationGuide: 'Panduan adaptasi' },
    'nl': { naturalFit: 'Natuurlijke match met', adaptationGuide: 'Aanpassingsgids' },
    'th': { naturalFit: 'ความเหมาะสมตามธรรมชาติกับ', adaptationGuide: 'คำแนะนำในการปรับตัว' },
    'sv': { naturalFit: 'Naturlig passform med', adaptationGuide: 'Anpassningsguide' },
    'el': { naturalFit: 'Φυσική ταιριαστή με', adaptationGuide: 'Οδηγός προσαρμογής' },
    'cs': { naturalFit: 'Přirozená shoda s', adaptationGuide: 'Průvodce adaptací' },
    'ro': { naturalFit: 'Potrivire naturală cu', adaptationGuide: 'Ghid de adaptare' },
    'hu': { naturalFit: 'Természetes illeszkedés', adaptationGuide: 'Alkalmazkodási útmutató' },
    'da': { naturalFit: 'Naturlig pasform med', adaptationGuide: 'Tilpasningsguide' },
    'fi': { naturalFit: 'Luonnollinen sopivuus', adaptationGuide: 'Sopeutumisopas' },
    'no': { naturalFit: 'Naturlig passform med', adaptationGuide: 'Tilpasningsguide' },
    'tl': { naturalFit: 'Likas na Pag-angkop sa', adaptationGuide: 'Gabay sa Pag-aangkop' },
    'bg': { naturalFit: 'Естествено съответствие с', adaptationGuide: 'Ръководство за адаптация' },
    'et': { naturalFit: 'Loomulik sobivus', adaptationGuide: 'Kohanemisjuhend' },
    'is': { naturalFit: 'Náttúruleg samsvörun við', adaptationGuide: 'Aðlögunarleiðbeiningar' },
    'lv': { naturalFit: 'Dabiska atbilstība ar', adaptationGuide: 'Adaptācijas ceļvedis' },
    'lt': { naturalFit: 'Natūralus atitikimas su', adaptationGuide: 'Prisitaikymo vadovas' },
    'sr': { naturalFit: 'Prirodno uklapanje sa', adaptationGuide: 'Vodič za adaptaciju' },
    'sk': { naturalFit: 'Prirodzená zhoda s', adaptationGuide: 'Sprievodca adaptáciou' },
    'uk': { naturalFit: 'Природна сумісність з', adaptationGuide: 'Посібник з адаптації' },
    'hy': { naturalFit: 'Բնական համապատասխանություն', adaptationGuide: 'Հարմարեցման ուղեցույց' },
    'ka': { naturalFit: 'ბუნებრივი თავსებადობა', adaptationGuide: 'ადაპტაციის სახელმძღვანელო' }
};

const langs = Object.keys(resultsTranslations);

for (const lang of langs) {
    const file = path.join(localesDir, `${lang}.json`);
    if (fs.existsSync(file)) {
        const content = JSON.parse(fs.readFileSync(file, 'utf8'));

        content.results = resultsTranslations[lang]; // Inject the results block

        fs.writeFileSync(file, JSON.stringify(content, null, 4));
        console.log(`Updated ${lang}.json`);
    } else {
        console.warn(`File ${lang}.json does not exist. Skipping.`);
    }
}

console.log('Successfully injected results translations!');
