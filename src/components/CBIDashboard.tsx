import React from "react";
import type { Country } from "../constants/cultureData";
import { calculateCBI, CBI_DESCRIPTIONS } from "../lib/culturalWeights";
import { Info, BarChart3, Radar as RadarIcon } from "lucide-react";
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

interface CBIDashboardProps {
    homeCountry: Country;
    targetCountry: Country;
    isDark?: boolean;
}

const CBIDashboard = ({ homeCountry, targetCountry, isDark = false }: CBIDashboardProps) => {
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
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <h4 className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight">{label}</h4>
                    <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{description}</p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold">
                    <span className="text-indigo-500">{homeVal}</span>
                    <span className="text-emerald-500">{targetVal}</span>
                </div>
            </div>

            <div className="relative h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
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

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-950/20 flex items-center justify-between">
                <div>
                    <h2 className="text-sm font-bold flex items-center gap-2 dark:text-slate-200">
                        {t('dashboard.cbi_title', 'Cultural Bridge Index (CBI)')}
                        <span className="text-[10px] font-normal bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 py-0.5 px-2 rounded-full uppercase tracking-wider font-bold">{t('dashboard.proprietary', 'Proprietary')}</span>
                    </h2>
                    <p className="text-[10px] text-slate-500 dark:text-slate-500 font-medium">{t('dashboard.cbi_subtitle', 'Derived High-Level Meta-Dimensions')}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setView('radar')}
                        className={`p-1.5 rounded-md transition-all ${view === 'radar' ? 'bg-indigo-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
                    >
                        <RadarIcon className="w-3.5 h-3.5" />
                    </button>
                    <button
                        onClick={() => setView('bars')}
                        className={`p-1.5 rounded-md transition-all ${view === 'bars' ? 'bg-indigo-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}
                    >
                        <BarChart3 className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="p-4 flex-1">
                {view === 'radar' ? (
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                                <PolarGrid stroke={isDark ? "#334155" : "#e2e8f0"} />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: isDark ? '#94a3b8' : '#64748b', fontSize: 9, fontWeight: 700 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                                <Radar name={homeCountry.name} dataKey={homeCountry.name} stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} strokeWidth={2.5} />
                                <Radar name={targetCountry.name} dataKey={targetCountry.name} stroke="#10b981" fill="#10b981" fillOpacity={0.5} strokeWidth={2.5} />
                                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '11px', backgroundColor: isDark ? '#1e293b' : '#fff', color: isDark ? '#f1f5f9' : '#1e293b' }} />
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
                                label={t(`dashboard.chart.${key}`, key.replace(/([A-Z])/g, ' $1').trim()) as string}
                                homeVal={(homeCBI as any)[key]}
                                targetVal={(targetCBI as any)[key]}
                                description={desc}
                            />
                        ))}
                    </div>
                )}

                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 flex items-start gap-3">
                    <Info className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <p className="text-[9px] text-slate-400 dark:text-slate-500 leading-relaxed italic">
                        {t('dashboard.info', 'The Cultural Bridge Index (CBI) analyzes proprietary meta-dimensions derived from a weighted synthesis of 5 peer-reviewed frameworks. This model provides original comparative analysis for educational and research purposes.')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CBIDashboard);
