import TextBlockAnimation from "./ui/text-block-animation";
import { ArrowDown, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function DemoOne() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 flex flex-col font-sans">
            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col">

                {/* 1. HERO SECTION: The Hook */}
                <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

                    <div className="max-w-4xl w-full text-center">
                        <TextBlockAnimation
                            blockColor="#6366f1" // Indigo
                            animateOnScroll={false}
                            delay={0.2}
                            duration={0.8}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4">
                                {t('demo.hook', 'Cultural')}<br />
                                <span className="text-indigo-600 dark:text-indigo-400">{t('demo.hook_highlight', 'Bridge.')}</span>
                            </h1>
                        </TextBlockAnimation>

                        <div className="mt-8">
                            <TextBlockAnimation blockColor="#1e293b" delay={0.6}>
                                <p className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                                    {t('demo.subtitle', 'The comparative cultural research project.')}
                                </p>
                            </TextBlockAnimation>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-60">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                            {t('demo.scroll_indicator', 'Explore the framework')}
                        </span>
                        <ArrowDown className="w-5 h-5 text-indigo-500 animate-bounce" />
                    </div>
                </section>

                {/* 2. THE PITCH */}
                <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 py-32 bg-slate-100/50 dark:bg-slate-900/40 backdrop-blur-sm border-y border-slate-200 dark:border-slate-800">
                    <div className="max-w-3xl w-full space-y-20">
                        <TextBlockAnimation blockColor="#10b981" duration={0.7}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                                {t('demo.pitch_title', 'Intelligence pending...')}
                            </h2>
                        </TextBlockAnimation>

                        <TextBlockAnimation blockColor="#f59e0b" delay={0.2}>
                            <p className="text-xl md:text-3xl leading-snug text-slate-700 dark:text-slate-300 font-medium">
                                {t('demo.pitch_1', 'Cross-cultural intelligence for a more connected world. The Cultural Bridge synthesizes five peer-reviewed frameworks to explore the ')}
                                <span className="text-indigo-600 dark:text-indigo-400">{t('demo.pitch_highlight', 'underlying patterns')}</span>
                                {t('demo.pitch_2', ' of global society.')}
                            </p>
                        </TextBlockAnimation>

                        <div className="pl-6 border-l-4 border-indigo-500 dark:border-indigo-400 py-2 space-y-4">
                            <TextBlockAnimation blockColor="#ffffff" duration={0.6}>
                                <p className="text-lg md:text-xl italic font-serif text-slate-500 dark:text-slate-400">
                                    {t('demo.quote_1', '"Turning cross-cultural complexity into your greatest strategic advantage."')}
                                </p>
                            </TextBlockAnimation>
                            <TextBlockAnimation blockColor="#10b981" delay={0.4} duration={0.6}>
                                <p className="text-sm md:text-base font-bold text-slate-400 italic tracking-widest leading-relaxed">
                                    {t('demo.quote_2', '"Includes core datasets for 122 countries, ensuring representation across all major geographic regions."')}
                                </p>
                            </TextBlockAnimation>
                        </div>
                    </div>
                </section>

                {/* 3. FOOTER: Call to Action */}
                <footer className="py-32 flex flex-col items-center justify-center bg-white dark:bg-slate-950">
                    <TextBlockAnimation blockColor="#ef4444" duration={0.8}>
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">{t('demo.cta_title', 'Ready to expand?')}</h3>
                    </TextBlockAnimation>

                    <TextBlockAnimation blockColor="#6366f1" duration={0.9}>
                        <a
                            href="https://github.com/davidyoungrs/culturalbridge"
                            className="group flex items-center gap-4 text-5xl md:text-7xl lg:text-8xl font-black hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer"
                        >
                            {t('demo.cta', 'Contribute')}
                            <Mail className="w-12 h-12 md:w-16 md:h-16 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                        </a>
                    </TextBlockAnimation>

                    <div className="mt-20 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {t('footer.copyright', '© 2026 The Cultural Bridge. Educational / Non-Commercial Research Project.')}
                    </div>
                </footer>
            </div>
        </div>
    );
}
