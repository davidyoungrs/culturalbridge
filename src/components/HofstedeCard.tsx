import { HOFSTEDE_DATA, HOFSTEDE_LABELS } from "../constants/hofstedeData";

interface HofstedeCardProps {
    homeCountryName: string;
    targetCountryName: string;
}

const HofstedeCard = ({ homeCountryName, targetCountryName }: HofstedeCardProps) => {
    const homeScores = HOFSTEDE_DATA[homeCountryName];
    const targetScores = HOFSTEDE_DATA[targetCountryName];

    if (!homeScores || !targetScores) {
        return (
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                <p className="text-sm text-slate-400 text-center">Hofstede data not available for one or both countries.</p>
            </div>
        );
    }

    const dimensions = Object.entries(HOFSTEDE_LABELS);

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 bg-slate-50/30">
                <h2 className="text-lg font-bold flex items-center gap-2">
                    Hofstede Dimensions
                    <span className="text-xs font-normal bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full uppercase tracking-wider">
                        6-D Model
                    </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">Geert Hofstede's cultural dimensions theory (0–100 scale)</p>
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

                <div className="space-y-5">
                    {dimensions.map(([key, label]) => {
                        const homeVal = homeScores[key];
                        const targetVal = targetScores[key];
                        const diff = Math.abs(homeVal - targetVal);
                        const isSignificant = diff >= 25;

                        return (
                            <div key={key}>
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-slate-700">{label.full}</span>
                                        <span className="text-[10px] font-bold text-slate-300">{label.short}</span>
                                        {isSignificant && (
                                            <span className="text-[9px] font-bold bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full">
                                                Δ{diff}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold">
                                        <span className="text-indigo-500">{homeVal}</span>
                                        <span className="text-emerald-500">{targetVal}</span>
                                    </div>
                                </div>

                                {/* Scale labels */}
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[9px] text-slate-400 font-medium">{label.low}</span>
                                    <span className="text-[9px] text-slate-400 font-medium">{label.high}</span>
                                </div>

                                {/* Dual bar */}
                                <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="absolute top-0 left-0 h-1/2 rounded-tl-full rounded-bl-full transition-all duration-700"
                                        style={{ width: `${homeVal}%`, backgroundColor: "#6366f1", opacity: 0.7 }}
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 h-1/2 rounded-tl-full rounded-bl-full transition-all duration-700"
                                        style={{ width: `${targetVal}%`, backgroundColor: "#10b981", opacity: 0.7 }}
                                    />
                                    {/* Midline */}
                                    <div className="absolute top-0 left-1/2 w-px h-full bg-slate-300/60" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HofstedeCard;
