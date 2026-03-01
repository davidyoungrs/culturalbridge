import { useState, useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  Globe2,
  Info,
  ChevronRight,
  TrendingUp,
  Zap,
  Sun,
  Moon,
  ArrowRightLeft,
} from "lucide-react";
import { COUNTRIES, INDUSTRIES, SCALE_LABELS, LEWIS_DESCRIPTIONS } from "./constants/cultureData";
import { HOFSTEDE_DATA } from "./constants/hofstedeData";
import { GLOBE_DATA } from "./constants/globeData";
import { SCHWARTZ_DATA } from "./constants/schwartzData";
import { generateCulturalInsights } from "./lib/insightGenerator";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { cn } from "./lib/utils";
import SearchableSelect from "./components/SearchableSelect";
import LewisModelCard from "./components/LewisModelCard";
import HofstedeCard from "./components/HofstedeCard";
import GlobeCard from "./components/GlobeCard";
import SchwartzCard from "./components/SchwartzCard";
import CulturalQuiz from "./components/CulturalQuiz";

const countryOptions = COUNTRIES.map((c) => ({ value: c.name, label: c.name }));
const industryOptions = [
  { value: "None", label: "Baseline" },
  ...Object.keys(INDUSTRIES).map((ind) => ({ value: ind, label: ind })),
];

const App = () => {
  const [homeCountry, setHomeCountry] = useState(COUNTRIES[0]);
  const [targetCountry, setTargetCountry] = useState(COUNTRIES[1]);
  const [industry, setIndustry] = useState("None");
  const [aiSummary, setAiSummary] = useState<{
    narrative: string;
    focusTags: string[];
    advice: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode class to root for Tailwind selector
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const chartData = useMemo(() => {
    return Object.keys(SCALE_LABELS).map((key) => {
      const scaleKey = key as keyof typeof SCALE_LABELS;
      let homeScore = homeCountry.scores[scaleKey];
      let targetScore = targetCountry.scores[scaleKey];

      if (industry !== "None" && INDUSTRIES[industry][scaleKey]) {
        const modifier = INDUSTRIES[industry][scaleKey]!;
        homeScore = Math.max(1, Math.min(10, homeScore + modifier));
        targetScore = Math.max(1, Math.min(10, targetScore + modifier));
      }

      return {
        subject: SCALE_LABELS[key],
        [homeCountry.name]: homeScore,
        [targetCountry.name]: targetScore,
        fullMark: 10,
      };
    });
  }, [homeCountry, targetCountry, industry]);

  const deltas = useMemo(() => {
    return chartData.map((d) => ({
      label: d.subject as string,
      value: (d[targetCountry.name] as number) - (d[homeCountry.name] as number),
    }));
  }, [chartData, homeCountry.name, targetCountry.name]);

  const culturalInsights = useMemo(() => {
    return generateCulturalInsights(
      homeCountry,
      targetCountry,
      deltas,
      HOFSTEDE_DATA,
      GLOBE_DATA,
      SCHWARTZ_DATA
    );
  }, [homeCountry, targetCountry, deltas]);

  const generateSummary = async () => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setAiSummary({
        narrative: "Note: Gemini API Key not found. Add VITE_GEMINI_API_KEY to your .env file.",
        focusTags: ["Config Error"],
        advice: "API Key Required"
      });
      return;
    }
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: 'v1' });
      const prompt = `Analyze the cultural corridor between ${homeCountry.name} and ${targetCountry.name} in the ${industry} industry. 
      Synthesize insights from five key frameworks: Meyer (deltas: ${JSON.stringify(deltas)}), Hofstede, GLOBE, Schwartz, and the Lewis Model. 
      
      Your analysis must:
      1. Identify the most critical **Focus Areas** for bridging these cultures.
      2. Provide a high-impact narrative describing the transition.
      3. Offer sharp, actionable strategic advice.

      Return a JSON object with exactly these fields:
      - narrative: A 1-2 sentence high-level summary (e.g., "Transitioning from a Linear-Active environment to a highly Reactive and Relationship-oriented one..."). Use markdown bolding for keywords.
      - focusTags: An array of 3-4 labels identifying specific Focus Areas (e.g., ["Focus: Relationship Building", "Focus: Direct Communication", "Focus: Risk Mitigation"]).
      - advice: A single concise string with 2-3 short, impactful strategic recommendations for a business leader.
      
      Keep it professional and high-impact. Return ONLY the JSON object.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const cleanJson = text.replace(/```json|```/g, "").trim();
      setAiSummary(JSON.parse(cleanJson));
    } catch (error: any) {
      console.error("Error generating AI summary:", error);
      setAiSummary({
        narrative: "Analysis temporarily unavailable.",
        focusTags: ["Error"],
        advice: `Error: ${error.message || "Unknown error"}. Please check your network connection and API key.`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn(
      "min-h-screen p-4 md:p-6 font-sans transition-colors duration-300",
      isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
    )}>
      <header className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500 rounded-xl shadow-lg shadow-indigo-500/20">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-300 dark:to-white">
                CultureBridge
              </h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium ml-14">
              Synthesizing cross-cultural insights for global leadership.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-slate-900 p-2.5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-1">
                <SearchableSelect label="Home" options={countryOptions} value={homeCountry.name} onChange={(val) => setHomeCountry(COUNTRIES.find((c) => c.name === val)!)} />
                <div className="flex items-center gap-1.5 ml-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: LEWIS_DESCRIPTIONS[homeCountry.lewis.primary].color }} />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                    {homeCountry.lewis.primary}
                  </span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 hidden md:block" />

              <div className="flex flex-col gap-1">
                <SearchableSelect label="Target" options={countryOptions} value={targetCountry.name} onChange={(val) => setTargetCountry(COUNTRIES.find((c) => c.name === val)!)} />
                <div className="flex items-center gap-1.5 ml-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: LEWIS_DESCRIPTIONS[targetCountry.lewis.primary].color }} />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                    {targetCountry.lewis.primary}
                  </span>
                </div>
              </div>

              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800 hidden md:block mx-1" />
              <SearchableSelect label="Industry" options={industryOptions} value={industry} onChange={(val) => setIndustry(val)} />
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
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-fit">
          <div className="p-4 border-b border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 flex items-center justify-between">
            <h2 className="text-sm font-bold flex items-center gap-2 dark:text-slate-200">
              Cultural Profile Overlay
              <span className="text-[10px] font-normal bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 py-0.5 px-2 rounded-full uppercase tracking-wider">Erin Meyer</span>
            </h2>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight">
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500" /><span className="text-slate-500">{homeCountry.name}</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-500">{targetCountry.name}</span></div>
            </div>
          </div>
          <div className="p-3 flex items-center justify-center">
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid stroke={isDark ? "#334155" : "#e2e8f0"} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 10, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 10]} axisLine={false} tick={false} />
                  <Radar name={homeCountry.name} dataKey={homeCountry.name} stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2.5} />
                  <Radar name={targetCountry.name} dataKey={targetCountry.name} stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2.5} />
                  <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Critical Gaps Sidebar moved here for top alignment */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex-1 overflow-hidden flex flex-col max-h-[505px]">
            <h3 className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <TrendingUp className="w-3 h-3" /> Critical Gaps & Recommendations
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
                    <span className={cn(
                      "text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-md tracking-wider shadow-sm",
                      insight.framework === 'Meyer' ? "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300" :
                        insight.framework === 'Hofstede' ? "bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300" :
                          insight.framework === 'GLOBE' ? "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300" : "bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300"
                    )}>
                      {insight.framework}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">Δ {insight.gap}</span>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      {insight.dimension}
                      {insight.severity === 'high' && <Zap className="w-2.5 h-2.5 text-rose-500 fill-rose-500" />}
                    </h4>
                    <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-snug mt-1 italic">
                      "{insight.meaning}"
                    </p>
                  </div>

                  <div className="mt-1 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    <p className="text-[10px] font-semibold text-slate-800 dark:text-slate-300 flex items-center gap-1.5 mb-1">
                      <ChevronRight className="w-2.5 h-2.5 text-indigo-500" /> Tactical Execution
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug">
                      {insight.consideration}
                    </p>
                  </div>
                </div>
              ))}
              {culturalInsights.length === 0 && (
                <div className="flex flex-col items-center justify-center py-10 opacity-40">
                  <Globe2 className="w-8 h-8 mb-2" />
                  <p className="text-xs font-medium">Cultural profiles are highly aligned.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Unified Strategic Summary relocated here */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          <div className={cn(
            "rounded-3xl p-6 shadow-2xl relative overflow-hidden group border transition-all duration-500",
            isDark ? "bg-slate-900 border-slate-800" : "bg-gradient-to-br from-indigo-600 to-violet-700 border-indigo-500 text-white"
          )}>
            {!isDark && <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />}

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg backdrop-blur-sm", isDark ? "bg-indigo-500/20 text-indigo-400" : "bg-white/20 text-white")}>
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold tracking-tight text-white">Unified Strategic Summary</h2>
                </div>
                <button
                  onClick={generateSummary}
                  disabled={loading}
                  className={cn(
                    "px-5 py-2 rounded-xl font-bold transition-all flex items-center gap-2 text-[10px] uppercase tracking-wider",
                    isDark
                      ? "bg-indigo-600 text-white hover:bg-indigo-500"
                      : "bg-white text-indigo-600 hover:bg-indigo-50"
                  )}
                >
                  <Zap className={cn("w-3.5 h-3.5", loading && "animate-pulse")} />
                  {loading ? "Synthesizing Advice..." : "Generate Briefing"}
                </button>
              </div>

              {aiSummary ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-2">
                    <p className={cn("text-base leading-relaxed mb-4", isDark ? "text-slate-300" : "text-indigo-50")} dangerouslySetInnerHTML={{ __html: aiSummary.narrative.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white dark:text-indigo-400">$1</strong>') }} />
                    <div className="flex flex-wrap gap-2">
                      {aiSummary.focusTags.map((tag, i) => (
                        <span key={i} className={cn("border px-3 py-1 rounded-full text-[10px] font-semibold backdrop-blur-sm", isDark ? "bg-slate-950/50 border-slate-800 text-indigo-400" : "bg-white/10 border-white/20 text-white")}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={cn("p-5 rounded-2xl backdrop-blur-md border", isDark ? "bg-slate-950/40 border-slate-800" : "bg-white/5 border-white/10")}>
                    <p className={cn("text-[9px] font-bold uppercase tracking-widest mb-2", isDark ? "text-indigo-400" : "text-indigo-200")}>Strategic Advice</p>
                    <p className={cn("text-xs italic leading-relaxed", isDark ? "text-slate-300" : "text-indigo-50")}>"{aiSummary.advice}"</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center py-4 bg-white/5 dark:bg-slate-950/40 rounded-2xl border border-white/10 dark:border-slate-800/50">
                  <div className="flex flex-col items-center mb-6 opacity-80">
                    <p className="text-sm italic font-medium mb-1 text-white">Cross-Framework Intelligence pending...</p>
                    <p className="text-[10px] text-indigo-100/60">Click "Generate Briefing" to synthesize 5 peer-reviewed cultural models.</p>
                  </div>

                  {!import.meta.env.VITE_GEMINI_API_KEY && (
                    <div className="w-full max-w-md p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-indigo-200 mb-2 flex items-center gap-1.5">
                        <Info className="w-3 h-3" /> Setup Required
                      </h4>
                      <p className="text-[11px] text-indigo-100/80 leading-relaxed mb-3">
                        To enable AI synthesis, you must add your Google Gemini API Key to the project environment.
                      </p>
                      <div className="bg-slate-950/50 p-3 rounded-lg border border-white/5 font-mono text-[10px] text-indigo-300 select-all mb-3">
                        VITE_GEMINI_API_KEY=your_key_here
                      </div>
                      <ol className="text-[10px] text-indigo-200/70 space-y-1 ml-4 list-decimal">
                        <li>Create a <code className="text-white">.env</code> file in the project root.</li>
                        <li>Paste your key using the format above.</li>
                        <li>Restart the development server.</li>
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="lg:col-span-6">
          <LewisModelCard homeCountry={homeCountry} targetCountry={targetCountry} />
        </div>
        <div className="lg:col-span-6">
          <HofstedeCard homeCountryName={homeCountry.name} targetCountryName={targetCountry.name} />
        </div>

        <div className="lg:col-span-6">
          <GlobeCard homeCountryName={homeCountry.name} targetCountryName={targetCountry.name} />
        </div>
        <div className="lg:col-span-6">
          <SchwartzCard homeCountryName={homeCountry.name} targetCountryName={targetCountry.name} />
        </div>

        <div className="lg:col-span-12">
          <CulturalQuiz />
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-slate-400 dark:text-slate-500 gap-2">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
          <Info className="w-3.5 h-3.5" /> Based on 5 Peer-Reviewed Frameworks
        </div>
        <div className="text-[10px] font-medium">&copy; 2026 The Cultural Bridge. Professional Edition.</div>
      </footer>
    </div>
  );
};

export default App;
