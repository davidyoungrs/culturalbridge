import { useState, useMemo, useEffect, useCallback, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  Globe2,
  Info,
  ChevronRight,
  TrendingUp,
  Zap,
  Sun,
  Moon,
  ClipboardCheck,
} from "lucide-react";
import { COUNTRIES, INDUSTRIES } from "./constants/cultureData";
import { generateCBIInsights } from "./lib/insightGenerator";
import { calculateCBI } from "./lib/culturalWeights";
import { cn } from "./lib/utils";
import { getLanguageForCountry } from "./lib/countryLanguageMap";
import SearchableSelect from "./components/SearchableSelect";
import CBIDashboard from "./components/CBIDashboard";
import CulturalQuiz from "./components/CulturalQuiz";
import DemoOne from "./components/DemoOne";

const AssessmentResultsView = lazy(() => import("./components/AssessmentResultsView"));
const PrivacyModal = lazy(() => import("./components/PrivacyModal"));
const TermsModal = lazy(() => import("./components/TermsModal"));

const countryOptions = COUNTRIES.map((c) => ({ value: c.name, label: c.name }));

const App = () => {
  const [homeCountry, setHomeCountry] = useState(COUNTRIES[0]);
  const [targetCountry, setTargetCountry] = useState(COUNTRIES[1]);
  const [industry, setIndustry] = useState("None");
  const [isDark, setIsDark] = useState(false);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizResult, setQuizResult] = useState<{ scores: Record<string, number>, profile: any, code: string } | null>(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const { t, i18n } = useTranslation();

  const handleHomeCountryChange = useCallback((val: string) => {
    const matched = COUNTRIES.find((c) => c.name === val);
    if (matched) {
      setHomeCountry(matched);
    }
  }, []);

  useEffect(() => {
    const newLang = getLanguageForCountry(homeCountry.name);
    if (i18n.language !== newLang) {
      i18n.changeLanguage(newLang);
    }
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  }, [homeCountry.name, i18n]);

  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/geo.json')
      .then(res => res.json())
      .then(data => {
        if (data.country) {
          const countryName = data.country === 'United Kingdom' ? 'UK' :
            data.country === 'United States' ? 'USA' :
              data.country;

          const matchedCountry = COUNTRIES.find(c =>
            c.name.toLowerCase() === countryName.toLowerCase() ||
            c.name.toLowerCase().includes(countryName.toLowerCase()) ||
            countryName.toLowerCase().includes(c.name.toLowerCase())
          );
          if (matchedCountry) {
            setHomeCountry(matchedCountry);
          }
        }
      })
      .catch((err) => console.log('Could not fetch location:', err));
  }, []);

  const handleQuizComplete = useCallback((scores: Record<string, number>, profile: any, code: string) => {
    setQuizResult({ scores, profile, code });
    setShowQuizResults(true);
  }, []);

  // Apply dark mode class to root for Tailwind selector
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleOpenPrivacy = () => setShowPrivacy(true);
    const handleOpenTerms = () => setShowTerms(true);
    window.addEventListener('openPrivacyPolicy', handleOpenPrivacy);
    window.addEventListener('openTermsAndConditions', handleOpenTerms);
    return () => {
        window.removeEventListener('openPrivacyPolicy', handleOpenPrivacy);
        window.removeEventListener('openTermsAndConditions', handleOpenTerms);
    };
  }, []);

  const culturalInsights = useMemo(() => {
    const homeCBI = calculateCBI(homeCountry);
    const targetCBI = calculateCBI(targetCountry);
    return generateCBIInsights(homeCBI, targetCBI);
  }, [homeCountry, targetCountry]);

  return (
    <div className={cn(
      "min-h-screen font-sans transition-colors duration-300 overflow-x-hidden",
      isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    )}>
      {/* 🚀 New Landing Experience */}
      <DemoOne />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 dark:border-slate-800 pb-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-600/20">
                  <Globe2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900 dark:from-white dark:via-indigo-400 dark:to-white">
                  {t('title', 'Cultural Assist')}
                </h1>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-bold text-lg leading-tight opacity-80 max-w-sm">
                {t('subtitle', 'The comparative cultural research project.')}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 p-2.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col gap-1">
                  <SearchableSelect label={t('labels.home', 'Home')} options={countryOptions} value={homeCountry.name} onChange={handleHomeCountryChange} />

                </div>

                <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 hidden md:block" />

                <div className="flex flex-col gap-1">
                  <SearchableSelect label={t('labels.target', 'Target')} options={countryOptions} value={targetCountry.name} onChange={(val) => setTargetCountry(COUNTRIES.find((c) => c.name === val)!)} />

                </div>

                <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 hidden md:block mx-1" />
                <SearchableSelect label={t('labels.industry', 'Industry')} options={[
                  { value: "None", label: t('options.baseline', 'Baseline') },
                  ...Object.keys(INDUSTRIES).map((ind) => ({ value: ind, label: ind }))
                ]} value={industry} onChange={(val) => setIndustry(val)} />
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all shadow-sm bg-white dark:bg-slate-950 hover:scale-105 active:scale-95"
              >
                {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 h-full">
            <CBIDashboard homeCountry={homeCountry} targetCountry={targetCountry} isDark={isDark} />
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  setShowQuiz(true);
                  setTimeout(() => {
                    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={cn(
                  "group flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:scale-105 active:scale-95",
                  showQuiz 
                    ? "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed shadow-none" 
                    : "bg-indigo-600 text-white shadow-indigo-600/20 hover:bg-indigo-700"
                )}
                disabled={showQuiz}
              >
                <ClipboardCheck className="w-5 h-5" />
                {t('quiz.take_assessment', 'Take Personal Assessment')}
              </button>
            </div>
          </div>

          {/* Critical Gaps Sidebar moved here for top alignment */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex-1 overflow-hidden flex flex-col max-h-[505px]">
              <h3 className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                <TrendingUp className="w-3 h-3" /> {t('gaps.title', 'Critical Gaps & Recommendations')}
              </h3>

              <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                {culturalInsights.map((insight, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-1.5 p-3 rounded-xl border transition-all",
                    insight.severity === 'high'
                      ? (isDark ? "bg-rose-950/20 border-rose-900/40" : "bg-rose-50/50 border-rose-100 shadow-sm")
                      : (isDark ? "bg-slate-950/40 border-slate-800" : "bg-slate-50 border-slate-100")
                  )}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-md tracking-wider shadow-sm">
                        {insight.framework}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">Δ {insight.gap}</span>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        {t(`dashboard.chart.${insight.key}`, insight.dimension)}
                        {insight.severity === 'high' && <Zap className="w-2.5 h-2.5 text-rose-500 fill-rose-500" />}
                      </h4>
                      <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-snug mt-1 italic">
                        "{t(`insights.${insight.key}.${insight.direction}`, insight.meaning)}"
                      </p>
                    </div>

                    <div className="mt-1 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                      <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-300 flex items-center gap-1.5 mb-1">
                        <ChevronRight className="w-2.5 h-2.5 text-indigo-500" /> {t('gaps.tactical', 'Tactical Execution')}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                        {t(`insights.${insight.key}.${insight.direction}Cons`, insight.consideration)}
                      </p>
                    </div>
                  </div>
                ))}
                {culturalInsights.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-10 opacity-40">
                    <Globe2 className="w-8 h-8 mb-2" />
                    <p className="text-xs font-medium">{t('gaps.aligned', 'Cultural profiles are highly aligned.')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>


          {showQuiz && (
            <div id="quiz-section" className="lg:col-span-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <CulturalQuiz onComplete={handleQuizComplete} />
            </div>
          )}
        </main>

        <Suspense fallback={null}>
          {showQuizResults && quizResult && (
            <AssessmentResultsView
              userScores={quizResult.scores}
              profile={quizResult.profile}
              code={quizResult.code}
              homeCountry={homeCountry}
              targetCountry={targetCountry}
              industry={industry}
              onClose={() => setShowQuizResults(false)}
              isDark={isDark}
            />
          )}

          <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} isDark={isDark} />
          <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} isDark={isDark} />
        </Suspense>

        <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-slate-400 dark:text-slate-500 gap-4">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
            <Info className="w-4 h-4" /> {t('footer.frameworks', '5 Peer-Reviewed Frameworks')}
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setShowTerms(true)} className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors hidden sm:block">Terms</button>
            <button onClick={() => setShowPrivacy(true)} className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Privacy Policy</button>
            <div className="text-[10px] font-bold uppercase tracking-widest">{t('footer.copyright', '© 2026 Cultural Assist. Educational / Non-Commercial Research Project.')}</div>
          </div>
        </footer>
      </div >
    </div >
  );
};

export default App;
