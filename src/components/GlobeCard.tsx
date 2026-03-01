import { useState } from "react";
import { GLOBE_DATA, GLOBE_LABELS } from "../constants/globeData";
import { ChevronDown } from "lucide-react";

interface GlobeCardProps {
    homeCountryName: string;
    targetCountryName: string;
}

const GlobeCard = ({ homeCountryName, targetCountryName }: GlobeCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const homeScores = GLOBE_DATA[homeCountryName];
    const targetScores = GLOBE_DATA[targetCountryName];

    if (!homeScores || !targetScores) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                <p className="text-sm text-slate-400 text-center">GLOBE data not available for one or both countries.</p>
            </div>
        );
    }

    const dimensions = Object.entries(GLOBE_LABELS);
    const visibleDims = expanded ? dimensions : dimensions.slice(0, 5);

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 bg-slate-50/30">
                <h2 className="text-lg font-bold flex items-center gap-2">
                    GLOBE Study
                    <span className="text-xs font-normal bg-teal-100 text-teal-700 py-0.5 px-2 rounded-full uppercase tracking-wider">
                        9 Dimensions
                    </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">Global Leadership & Organizational Behavior (House et al., 2004) — 1–7 scale</p>
            </div>

            <div className="p-5">
                {/* Legend */}
                <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                        <span className="text-slate-500">{homeCountryName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-slate-500">{targetCountryName}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {visibleDims.map(([key, label]) => {
                        const homeVal = homeScores[key];
                        const targetVal = targetScores[key];
                        const diff = Math.abs(homeVal - targetVal);
                        const pctHome = ((homeVal - 1) / 6) * 100;
                        const pctTarget = ((targetVal - 1) / 6) * 100;

                        return (
                            <div key={key}>
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-slate-700">{label.full}</span>
                                        {diff >= 0.8 && (
                                            <span className="text-[9px] font-bold bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full">
                                                Δ{diff.toFixed(1)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold">
                                        <span className="text-indigo-500">{homeVal.toFixed(1)}</span>
                                        <span className="text-emerald-500">{targetVal.toFixed(1)}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[9px] text-slate-400 font-medium">{label.low}</span>
                                    <span className="text-[9px] text-slate-400 font-medium">{label.high}</span>
                                </div>

                                <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                                    {/* Home marker */}
                                    <div
                                        className="absolute top-0 h-full w-2.5 rounded-full bg-indigo-500 transition-all duration-700"
                                        style={{ left: `calc(${pctHome}% - 5px)`, opacity: 0.7 }}
                                    />
                                    {/* Target marker */}
                                    <div
                                        className="absolute top-0 h-full w-2.5 rounded-full bg-emerald-500 transition-all duration-700"
                                        style={{ left: `calc(${pctTarget}% - 5px)`, opacity: 0.7 }}
                                    />
                                    {/* Gap highlight */}
                                    {diff >= 0.8 && (
                                        <div
                                            className="absolute top-1 h-1 bg-rose-300 rounded-full transition-all duration-700"
                                            style={{
                                                left: `${Math.min(pctHome, pctTarget)}%`,
                                                width: `${Math.abs(pctHome - pctTarget)}%`,
                                                opacity: 0.5,
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Tooltip on hover */}
                                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{label.description}</p>
                            </div>
                        );
                    })}
                </div>

                {dimensions.length > 5 && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full mt-4 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors py-2"
                    >
                        {expanded ? "Show less" : `Show all ${dimensions.length} dimensions`}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default GlobeCard;
