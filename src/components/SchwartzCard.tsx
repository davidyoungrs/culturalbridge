import { SCHWARTZ_DATA, SCHWARTZ_LABELS, SCHWARTZ_POLES } from "../constants/schwartzData";
import { useTranslation } from "react-i18next";

interface SchwartzCardProps {
    homeCountryName: string;
    targetCountryName: string;
    citation?: string;
}

const SchwartzCard = ({ homeCountryName, targetCountryName, citation }: SchwartzCardProps) => {
    const { t } = useTranslation();
    const homeScores = SCHWARTZ_DATA[homeCountryName];
    const targetScores = SCHWARTZ_DATA[targetCountryName];

    if (!homeScores || !targetScores) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                <p className="text-sm text-slate-400 text-center">{t('schwartz.noData', 'Schwartz data not available for one or both countries.')}</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 bg-slate-50/30">
                <h2 className="text-lg font-bold flex items-center gap-2">
                    {t('schwartz.title', 'Schwartz Values')}
                    <span className="text-xs font-normal bg-purple-100 text-purple-700 py-0.5 px-2 rounded-full uppercase tracking-wider">
                        {t('schwartz.subtitle', '7 Orientations')}
                    </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">{t('schwartz.description', "Shalom Schwartz's Theory of Basic Cultural Values (1–7 scale)")}</p>
            </div>

            <div className="p-5">
                {/* Legend */}
                <div className="flex items-center gap-4 mb-5 text-[10px] font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                        <span className="text-slate-500">{homeCountryName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-slate-500">{targetCountryName}</span>
                    </div>
                </div>

                {/* Bipolar Tensions */}
                <div className="space-y-5 mb-5">
                    {SCHWARTZ_POLES.map((pole, i) => {
                        const home1 = pole.keys1.reduce((s, k) => s + homeScores[k], 0) / pole.keys1.length;
                        const home2 = pole.keys2.reduce((s, k) => s + homeScores[k], 0) / pole.keys2.length;
                        const target1 = pole.keys1.reduce((s, k) => s + targetScores[k], 0) / pole.keys1.length;
                        const target2 = pole.keys2.reduce((s, k) => s + targetScores[k], 0) / pole.keys2.length;

                        // Balance = pole1 - pole2 mapped to -3..+3 → percentage 0..100
                        const homeBalance = ((home1 - home2 + 3) / 6) * 100;
                        const targetBalance = ((target1 - target2 + 3) / 6) * 100;

                        return (
                            <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-slate-700">{t(`schwartz.pole.${pole.pole1}`, pole.pole1)}</span>
                                    <span className="text-[10px] font-bold text-slate-400">{t('schwartz.vs', 'vs')}</span>
                                    <span className="text-xs font-bold text-slate-700">{t(`schwartz.pole.${pole.pole2}`, pole.pole2)}</span>
                                </div>

                                <div className="relative h-5 bg-gradient-to-r from-violet-100 via-slate-100 to-amber-100 rounded-full overflow-visible mb-1">
                                    {/* Center line */}
                                    <div className="absolute top-0 left-1/2 w-px h-full bg-slate-300" />

                                    {/* Home marker */}
                                    <div
                                        className="absolute top-0 h-full flex items-center transition-all duration-700"
                                        style={{ left: `${homeBalance}%` }}
                                    >
                                        <div className="w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-md -ml-2" />
                                    </div>

                                    {/* Target marker */}
                                    <div
                                        className="absolute top-0 h-full flex items-center transition-all duration-700"
                                        style={{ left: `${targetBalance}%` }}
                                    >
                                        <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-md -ml-2" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-[9px] text-slate-400 font-medium">
                                    <span>← {t(`schwartz.pole.${pole.pole1}`, pole.pole1)}</span>
                                    <span>{t(`schwartz.pole.${pole.pole2}`, pole.pole2)} →</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Individual value scores */}
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">{t('schwartz.valueBreakdown', 'Value Breakdown')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(SCHWARTZ_LABELS).map(([key, label]) => {
                        const homeVal = homeScores[key];
                        const targetVal = targetScores[key];
                        const pctHome = ((homeVal - 1) / 6) * 100;
                        const pctTarget = ((targetVal - 1) / 6) * 100;

                        return (
                            <div key={key} className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: label.color }} />
                                        <span className="text-[11px] font-bold text-slate-600">{t(`schwartz.dim.${key}`, label.full)}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold">
                                        <span className="text-indigo-500">{homeVal.toFixed(1)}</span>
                                        <span className="text-emerald-500">{targetVal.toFixed(1)}</span>
                                    </div>
                                </div>
                                <div className="relative h-2 bg-slate-200/60 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-700"
                                        style={{ width: `${pctHome}%`, backgroundColor: "#6366f1", opacity: 0.5 }}
                                    />
                                    <div
                                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-700"
                                        style={{ width: `${pctTarget}%`, backgroundColor: "#10b981", opacity: 0.5 }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {citation && (
                <div className="px-5 py-2 border-t border-slate-50 bg-slate-50/20 text-[9px] text-slate-400 italic leading-tight">
                    {citation}
                </div>
            )}
        </div>
    );
};

export default SchwartzCard;
