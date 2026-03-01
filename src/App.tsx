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
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import { COUNTRIES, INDUSTRIES, SCALE_LABELS } from "./constants/cultureData";
import { HOFSTEDE_DATA, HOFSTEDE_LABELS } from "./constants/hofstedeData";
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
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
      label: d.subject,
      value: (d[targetCountry.name] as number) - (d[homeCountry.name] as number),
    }));
  }, [chartData, homeCountry.name, targetCountry.name]);

  // Hofstede friction points for the sidebar
  const hofstedeFrictions = useMemo(() => {
    const homeScores = HOFSTEDE_DATA[homeCountry.name];
    const targetScores = HOFSTEDE_DATA[targetCountry.name];
    if (!homeScores || !targetScores) return [];
    return Object.entries(HOFSTEDE_LABELS)
      .map(([key, label]) => ({
        key,
        label: label.full,
        diff: Math.abs(homeScores[key] - targetScores[key]),
        homeVal: homeScores[key],
        targetVal: targetScores[key],
        low: label.low,
        high: label.high,
      }))
      .filter((f) => f.diff >= 25)
      .sort((a, b) => b.diff - a.diff)
      .slice(0, 3);
  }, [homeCountry.name, targetCountry.name]);

  const generateSummary = async () => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setAiSummary("Note: Gemini API Key not found. Add VITE_GEMINI_API_KEY to your .env file.");
      return;
    }
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Analyze the cultural gap between ${homeCountry.name} and ${targetCountry.name} in the ${industry} industry. Focus on these deltas: ${JSON.stringify(deltas)}. Provide 3 actionable management tips for someone from ${homeCountry.name} leading a team in ${targetCountry.name}. Keep it professional, concise, and high-impact.`;
      const result = await model.generateContent(prompt);
      setAiSummary(result.response.text());
    } catch (error) {
      console.error("Error generating AI summary:", error);
      setAiSummary("Failed to generate AI summary. Check your connection and API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 font-sans text-slate-900">
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Globe2 className="w-7 h-7 text-indigo-600" />
          <h1 className="text-2xl font-bold tracking-tight">CultureBridge</h1>
        </div>
        <p className="text-slate-500 font-medium text-sm mb-4">Cross-Cultural Gap Analysis for Global Teams</p>

        {/* Selectors — under the heading */}
        <div className="flex flex-wrap items-end gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-200 w-fit">
          <SearchableSelect label="Home Base" options={countryOptions} value={homeCountry.name} onChange={(val) => setHomeCountry(COUNTRIES.find((c) => c.name === val)!)} />
          <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block mb-2" />
          <SearchableSelect label="Target Region" options={countryOptions} value={targetCountry.name} onChange={(val) => setTargetCountry(COUNTRIES.find((c) => c.name === val)!)} />
          <div className="w-px h-8 bg-slate-200 hidden md:block mx-1" />
          <SearchableSelect label="Industry Context" options={industryOptions} value={industry} onChange={(val) => setIndustry(val)} />
        </div>
      </header>

      {/* ── MAIN GRID ──────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* ── ROW 1: Radar Chart (8) + Critical Gaps Sidebar (4) ── */}
        <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-50 bg-slate-50/30 flex items-center justify-between">
            <h2 className="text-sm font-bold flex items-center gap-2">
              Cultural Profile Overlay
              <span className="text-[10px] font-normal bg-indigo-100 text-indigo-700 py-0.5 px-2 rounded-full uppercase tracking-wider">Erin Meyer</span>
            </h2>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight">
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500" /><span className="text-slate-500">{homeCountry.name}</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-500">{targetCountry.name}</span></div>
            </div>
          </div>
          <div className="flex-1 min-h-[400px] p-3 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 10]} axisLine={false} tick={false} />
                <Radar name={homeCountry.name} dataKey={homeCountry.name} stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2.5} />
                <Radar name={targetCountry.name} dataKey={targetCountry.name} stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2.5} />
                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ── Sidebar: Critical Gaps + Hofstede Frictions + AI ── */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Critical Gaps + Friction Points merged */}
          <div className="bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <TrendingUp className="w-3 h-3" /> Critical Gaps & Friction Points
            </h3>

            {/* Meyer gaps */}
            <div className="space-y-2.5">
              {deltas.filter(d => Math.abs(d.value) >= 3).map((delta, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className={cn("p-1.5 rounded-md shrink-0", delta.value > 0 ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600")}>
                    {delta.value > 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-tight">{delta.label.split('(')[0]}</h4>
                    <p className="text-[10px] text-slate-500 leading-snug font-medium">
                      {Math.abs(delta.value)}pt gap
                    </p>
                  </div>
                </div>
              ))}
              {deltas.filter(d => Math.abs(d.value) >= 3).length === 0 && (
                <p className="text-xs font-medium text-slate-400 text-center py-2">No major Meyer gaps detected.</p>
              )}
            </div>

            {/* Hofstede friction points */}
            {hofstedeFrictions.length > 0 && (
              <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg p-3">
                <h4 className="text-[9px] font-bold uppercase tracking-widest text-amber-600 mb-1.5">⚡ Hofstede Friction</h4>
                <div className="space-y-1.5">
                  {hofstedeFrictions.map((f) => (
                    <p key={f.key} className="text-[10px] text-amber-800 font-medium leading-snug">
                      <strong>{f.label}</strong> — Δ{f.diff} ({homeCountry.name}: {f.homeVal}, {targetCountry.name}: {f.targetVal})
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* AI Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-4 shadow-xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-white/20 p-1.5 rounded-lg"><Zap className="w-4 h-4" /></div>
                <h3 className="text-sm font-bold">AI Strategic Summary</h3>
              </div>
              {aiSummary ? (
                <div className="text-xs font-medium leading-relaxed mb-4 bg-white/10 p-3 rounded-lg backdrop-blur-sm max-h-[200px] overflow-y-auto">
                  {aiSummary.split('\n').map((line, i) => <p key={i} className="mb-1.5">{line}</p>)}
                </div>
              ) : (
                <p className="text-indigo-100 text-xs font-medium mb-4">Generate AI-powered management tips for this cultural corridor.</p>
              )}
              <button onClick={generateSummary} disabled={loading} className="w-full bg-white text-indigo-600 font-bold py-2 px-3 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm">
                {loading ? "Synthesizing..." : "Generate AI Insights"}
              </button>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Lewis Model (6) + Hofstede (6) side by side ── */}
        <div className="lg:col-span-6">
          <LewisModelCard homeCountry={homeCountry} targetCountry={targetCountry} />
        </div>
        <div className="lg:col-span-6">
          <HofstedeCard homeCountryName={homeCountry.name} targetCountryName={targetCountry.name} />
        </div>

        {/* ── ROW 3: GLOBE (6) + Schwartz (6) side by side ── */}
        <div className="lg:col-span-6">
          <GlobeCard homeCountryName={homeCountry.name} targetCountryName={targetCountry.name} />
        </div>
        <div className="lg:col-span-6">
          <SchwartzCard homeCountryName={homeCountry.name} targetCountryName={targetCountry.name} />
        </div>

        {/* ── ROW 4: Cultural Quiz (full width) ── */}
        <div className="lg:col-span-12">
          <CulturalQuiz />
        </div>
      </main>

      <footer className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between text-slate-400 gap-2">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
          <Info className="w-3.5 h-3.5" /> Based on Meyer, Lewis, Hofstede, GLOBE & Schwartz Frameworks
        </div>
        <div className="text-[10px] font-medium">&copy; 2026 The Cultural Bridge. Built for Global Professionals.</div>
      </footer>
    </div>
  );
};

export default App;
