import React from "react";
import type { Country } from "../constants/cultureData";
import { calculateCBI, CBI_DESCRIPTIONS } from "../lib/culturalWeights";
import { Info, BarChart3, Radar as RadarIcon, Activity } from "lucide-react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
} from "recharts";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CCUB_DATA } from "../constants/ccubData";
import { Sparkles, ArrowRight } from "lucide-react";

interface CBIDashboardProps {
    homeCountry: Country;
    targetCountry: Country;
    industry?: string;
}

const CBIDashboard = ({ homeCountry, targetCountry, industry, }: CBIDashboardProps) => {
    const { t } = useTranslation();
    const [view, setView] = useState<'radar' | 'bars'>('radar');
    const homeCBI = calculateCBI(homeCountry);
    const targetCBI = calculateCBI(targetCountry);

    const chartData = [
        { subject: t('dashboard.chart.relationshipTrust', "Trust & Relationship"), [homeCountry.name]: homeCBI.relationshipTrust, [targetCountry.name]: targetCBI.relationshipTrust, fullMark: 100 },
        { subject: t('dashboard.chart.adaptiveAgility', "Adaptive Agility"), [homeCountry.name]: homeCBI.adaptiveAgility, [targetCountry.name]: targetCBI.adaptiveAgility, fullMark: 100 },
        { subject: t('dashboard.chart.processConsensus', "Process Consensus"), [homeCountry.name]: homeCBI.processConsensus, [targetCountry.name]: targetCBI.processConsensus, fullMark: 100 },
        { subject: t('dashboard.chart.performanceVelocity', "Performance Velocity"), [homeCountry.name]: homeCBI.performanceVelocity, [targetCountry.name]: targetCBI.performanceVelocity, fullMark: 100 },
        { subject: t('dashboard.chart.communicationDirectness', "Communication Directness"), [homeCountry.name]: homeCBI.communicationDirectness, [targetCountry.name]: targetCBI.communicationDirectness, fullMark: 100 },
        { subject: t('dashboard.chart.strategicFocus', "Strategic Focus"), [homeCountry.name]: homeCBI.strategicFocus, [targetCountry.name]: targetCBI.strategicFocus, fullMark: 100 },
        { subject: t('dashboard.chart.empoweredEquality', "Empowered Equality"), [homeCountry.name]: homeCBI.empoweredEquality, [targetCountry.name]: targetCBI.empoweredEquality, fullMark: 100 },
    ];

    const MetricBar = ({
        label,
        homeVal,
        targetVal,
        description
    }: {
        label: string;
        homeVal: number;
        targetVal: number;
        description: string;
    }) => (
        <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">{label}</h4>
                    <p className="text-[11px] text-slate-400 leading-tight mt-1 truncate">{description}</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs font-black">
                    <span className="text-indigo-500">{homeVal}</span>
                    <span className="text-emerald-500">{targetVal}</span>
                </div>
            </div>

            <div className="relative h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full bg-indigo-500 opacity-60 transition-all duration-1000 ease-out"
                    style={{ width: `${homeVal}%` }}
                />
                <div
                    className="absolute top-0 left-0 h-full bg-emerald-500 opacity-60 transition-all duration-1000 ease-out"
                    style={{ width: `${targetVal}%` }}
                />
            </div>
        </div>
    );


    const CulturalVisualDNA = ({ countryName }: { countryName: string }) => {
        const artifacts = CCUB_DATA[countryName];
        if (!artifacts) return null;

        return (
            <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-4 h-4 text-indigo-500" />
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                        Visual Cultural DNA <span className="text-indigo-600/50 ml-1">Powered by CCUB</span>
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {artifacts.map((art) => (
                        <div key={art.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 border border-slate-200/50 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                            <img 
                                src={art.imageUrl} 
                                alt={art.description} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-md text-[9px] font-black uppercase tracking-widest text-white mb-2">
                                    {art.category}
                                </span>
                                <p className="text-[10px] text-slate-100 font-bold leading-snug line-clamp-2">
                                    {art.description}
                                </p>
                                {art.cbiDimension && (
                                    <div className="mt-2 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowRight className="w-3 h-3 text-indigo-400" />
                                        <span className="text-[9px] font-black text-indigo-300 uppercase tracking-tighter">
                                            Maps to {art.cbiDimension.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/60 border border-white/50 h-full flex flex-col relative overflow-hidden">
            {/* Visual background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 relative z-10">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/20">
                            <Activity className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter text-slate-900">
                            {t('dashboard.comparison', 'Cultural DNA Comparison')}
                        </h2>
                    </div>
                    <p className="text-slate-500 font-bold px-1 flex items-center gap-2">
                        {homeCountry.name} 
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        {targetCountry.name}
                        {industry !== "None" && industry && (
                            <>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                <span className="text-indigo-600">{industry}</span>
                            </>
                        )}
                    </p>
                </div>

                <div className="flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-sm">
                    <button
                        onClick={() => setView('radar')}
                        className={`p-2.5 min-w-[44px] min-h-[44px] rounded-xl transition-all flex items-center justify-center ${view === 'radar' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 ring-4 ring-indigo-50' : 'text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm'}`}
                        aria-label="Radar View"
                    >
                        <RadarIcon className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setView('bars')}
                        className={`p-2.5 min-w-[44px] min-h-[44px] rounded-xl transition-all flex items-center justify-center ${view === 'bars' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 ring-4 ring-indigo-50' : 'text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm'}`}
                        aria-label="Bar View"
                    >
                        <BarChart3 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex-1 relative z-10">
                {view === 'radar' ? (
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 700 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                                <Radar name={homeCountry.name} dataKey={homeCountry.name} stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} strokeWidth={2.5} />
                                <Radar name={targetCountry.name} dataKey={targetCountry.name} stroke="#10b981" fill="#10b981" fillOpacity={0.5} strokeWidth={2.5} />
                                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', backgroundColor: '#fff', color: '#1e293b' }} />
                                <defs>
                                    <linearGradient id="colorHome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(CBI_DESCRIPTIONS).map(([key, desc]) => (
                            <MetricBar
                                key={key}
                                label={String(t(`dashboard.chart.${key}`, key.replace(/([A-Z])/g, ' $1').trim()))}
                                homeVal={(homeCBI as any)[key]}
                                targetVal={(targetCBI as any)[key]}
                                description={desc}
                            />
                        ))}
                    </div>
                )}


                                <div className="mt-4 p-4 rounded-xl bg-slate-50/50 border border-slate-100 flex items-start gap-3">
                    <Info className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <p className="text-[11px] text-slate-500 leading-relaxed italic font-medium">
                        {String(t('dashboard.info', 'The Cultural Bridge Index (CBI) analyzes proprietary meta-dimensions derived from a weighted synthesis of 5 peer-reviewed frameworks. This model provides original comparative analysis for educational and research purposes.'))}
                    </p>
                </div>

                <CulturalVisualDNA countryName={targetCountry.name} />
            </div>
        </div>
    );
};

export default React.memo(CBIDashboard);
