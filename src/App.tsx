import { useState, useMemo, useEffect, useCallback, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  Globe2,
  ChevronRight,
  TrendingUp,
  Zap,
  ClipboardCheck,
  Info
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
import { AEOFAQ } from "./components/AEOFAQ";

const AssessmentResultsView = lazy(() => import("./components/AssessmentResultsView"));
const PrivacyModal = lazy(() => import("./components/PrivacyModal"));
const TermsModal = lazy(() => import("./components/TermsModal"));

const countryOptions = COUNTRIES.map((c) => ({ value: c.name, label: c.name }));

const App = () => {
  const [homeCountry, setHomeCountry] = useState(COUNTRIES[0]);
  const [targetCountry, setTargetCountry] = useState(COUNTRIES[1]);
  const [industry, setIndustry] = useState("None");
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
        return generateCBIInsights(homeCBI, targetCBI, targetCountry.name);
    }, [homeCountry, targetCountry]);

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 overflow-x-hidden bg-slate-50 text-slate-900">
      {/* 🚀 New Landing Experience */}
      <DemoOne />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-200 pb-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-600/20">
                  <Globe2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-600 to-slate-900">
                  {t('title', 'Cultural Assist')}
                </h1>
              </div>
              <p className="text-slate-500 font-bold text-lg leading-tight opacity-80 max-w-sm">
                {t('subtitle', 'The comparative cultural research project.')}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-wrap items-center gap-3 bg-white/80 backdrop-blur-md p-2.5 rounded-2xl shadow-xl shadow-slate-200/50 border border-white/20">
                <div className="flex flex-col gap-1">
                  <SearchableSelect label={t('labels.home', 'Home')} options={countryOptions} value={homeCountry.name} onChange={handleHomeCountryChange} />

                </div>

                <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />

                <div className="flex flex-col gap-1">
                  <SearchableSelect label={t('labels.target', 'Target')} options={countryOptions} value={targetCountry.name} onChange={(val) => setTargetCountry(COUNTRIES.find((c) => c.name === val)!)} />

                </div>

                <div className="w-px h-10 bg-slate-200 hidden md:block mx-1" />
                <SearchableSelect label={t('labels.industry', 'Industry')} options={[
                  { value: "None", label: t('options.baseline', 'Baseline') },
                  ...Object.keys(INDUSTRIES).map((ind) => ({ value: ind, label: ind }))
                ]} value={industry} onChange={(val) => setIndustry(val)} />
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8 h-full">
            <CBIDashboard homeCountry={homeCountry} targetCountry={targetCountry} />
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
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
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
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl shadow-slate-200/60 border border-white/40 flex-1 overflow-hidden flex flex-col max-h-[505px]">
              <h3 className="text-slate-400 text-[11px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-500" /> {t('gaps.title', 'Critical Gaps & Recommendations')}
              </h3>
 
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {culturalInsights.map((insight, i) => (
                  <div key={i} className={cn(
                    "flex flex-col gap-2 p-4 rounded-2xl border transition-all hover:scale-[1.02] duration-300",
                    insight.severity === 'high'
                      ? "bg-rose-50/80 border-rose-100/50 shadow-sm"
                      : "bg-white/50 border-white/40 shadow-sm"
                  )}>
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-indigo-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg tracking-wider shadow-lg shadow-indigo-200">
                        {insight.framework}
                      </span>
                      <span className="text-[11px] font-black text-slate-400">Δ {insight.gap}</span>
                    </div>
 
                    <div>
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        {t(`dashboard.chart.${insight.key}`, insight.dimension)}
                        {insight.severity === 'high' && <Zap className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-snug mt-2 italic font-semibold opacity-90">
                        "{t(`insights.${insight.key}.${insight.direction}`, insight.meaning)}"
                      </p>
                    </div>
 
                    <div className="mt-2 pt-4 border-t border-slate-100/50">
                      <p className="text-[11px] font-black text-slate-900 flex items-center gap-2 mb-2">
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-500" /> {t('gaps.tactical', 'Tactical Execution')}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-bold">
                        {t(`insights.${insight.key}.${insight.direction}Cons`, insight.consideration)}
                      </p>
                      {insight.anchor && (
                        <div className="mt-3 p-2 bg-slate-50 rounded-xl border border-slate-100 italic text-[10px] text-indigo-600 font-semibold leading-tight">
                          <span className="font-black uppercase text-[8px] tracking-widest block mb-1 opacity-50">Cultural Anchor</span>
                          {insight.anchor}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {culturalInsights.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-16 opacity-30">
                    <Globe2 className="w-12 h-12 mb-3 text-indigo-200" />
                    <p className="text-xs font-black uppercase tracking-widest">{t('gaps.aligned', 'Profiles Highly Aligned')}</p>
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

          <div className="lg:col-span-12">
            <AEOFAQ />
          </div>
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
            />
          )}
          <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
          <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
        </Suspense>

        <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between text-slate-400 gap-4">
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
            <Info className="w-4 h-4" /> {t('footer.frameworks', '5 Peer-Reviewed Frameworks')}
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setShowTerms(true)} className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors hidden sm:block">Terms</button>
            <button onClick={() => setShowPrivacy(true)} className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors">Privacy Policy</button>
            <div className="text-[10px] font-bold uppercase tracking-widest">{t('footer.copyright', '© 2026 Cultural Assist. Educational / Non-Commercial Research Project.')}</div>
          </div>
        </footer>
      </div >
    </div >
  );
};

export default App;
