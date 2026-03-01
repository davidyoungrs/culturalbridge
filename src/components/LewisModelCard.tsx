import { LEWIS_DESCRIPTIONS, type Country } from "../constants/cultureData";

interface LewisModelCardProps {
    homeCountry: Country;
    targetCountry: Country;
}

const LewisModelCard = ({ homeCountry, targetCountry }: LewisModelCardProps) => {
    const homeLewis = homeCountry.lewis;
    const targetLewis = targetCountry.lewis;

    const TriangleBar = ({ label, homeVal, targetVal }: { label: string; homeVal: number; targetVal: number }) => (
        <div className="mb-4 last:mb-0">
            <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-600">{label}</span>
                <div className="flex items-center gap-3 text-xs font-bold">
                    <span style={{ color: "#6366f1" }}>{homeVal}%</span>
                    <span style={{ color: "#10b981" }}>{targetVal}%</span>
                </div>
            </div>
            <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                    className="absolute top-0 left-0 h-full rounded-full opacity-60 transition-all duration-700"
                    style={{ width: `${homeVal}%`, backgroundColor: "#6366f1" }}
                />
                <div
                    className="absolute top-0 left-0 h-full rounded-full opacity-60 transition-all duration-700"
                    style={{ width: `${targetVal}%`, backgroundColor: "#10b981" }}
                />
                <div
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-700"
                    style={{
                        width: `${Math.min(homeVal, targetVal)}%`,
                        background: "linear-gradient(90deg, #6366f1, #10b981)",
                        opacity: 0.4,
                    }}
                />
            </div>
        </div>
    );

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 bg-slate-50/30">
                <h2 className="text-lg font-bold flex items-center gap-2">
                    Lewis Model
                    <span className="text-xs font-normal bg-amber-100 text-amber-700 py-0.5 px-2 rounded-full uppercase tracking-wider">
                        When Cultures Collide
                    </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">Richard Lewis's cultural typology triangle</p>
            </div>

            <div className="p-5">
                {/* Primary types */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                        { country: homeCountry, lewis: homeLewis, accent: "#6366f1" },
                        { country: targetCountry, lewis: targetLewis, accent: "#10b981" },
                    ].map(({ country, lewis, accent }) => (
                        <div
                            key={country.name}
                            className="rounded-xl p-3 border transition-all"
                            style={{ borderColor: accent + "30", backgroundColor: accent + "08" }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                                <span className="text-sm font-bold text-slate-800">{country.name}</span>
                            </div>
                            <div
                                className="text-xs font-bold mb-2 px-2 py-0.5 rounded-md inline-block"
                                style={{
                                    color: LEWIS_DESCRIPTIONS[lewis.primary].color,
                                    backgroundColor: LEWIS_DESCRIPTIONS[lewis.primary].color + "15",
                                }}
                            >
                                {lewis.primary}
                            </div>
                            <ul className="space-y-1">
                                {lewis.traits.map((trait, i) => (
                                    <li key={i} className="text-[11px] text-slate-500 font-medium flex items-start gap-1.5">
                                        <span className="text-slate-300 mt-0.5">›</span>
                                        {trait}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Triangle bars */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Cultural Blend</h4>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-[10px] font-bold">
                                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                <span className="text-slate-500">{homeCountry.name}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-bold">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-slate-500">{targetCountry.name}</span>
                            </div>
                        </div>
                    </div>

                    <TriangleBar
                        label="Linear-Active"
                        homeVal={homeLewis.linearActive}
                        targetVal={targetLewis.linearActive}
                    />
                    <TriangleBar
                        label="Multi-Active"
                        homeVal={homeLewis.multiActive}
                        targetVal={targetLewis.multiActive}
                    />
                    <TriangleBar
                        label="Reactive"
                        homeVal={homeLewis.reactive}
                        targetVal={targetLewis.reactive}
                    />
                </div>

                {/* Descriptions */}
                <div className="mt-4 space-y-2">
                    {Object.entries(LEWIS_DESCRIPTIONS).map(([key, desc]) => (
                        <details key={key} className="group">
                            <summary className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors py-1">
                                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: desc.color }} />
                                {desc.label}
                                <span className="ml-auto text-slate-300 group-open:rotate-90 transition-transform">›</span>
                            </summary>
                            <p className="text-[11px] text-slate-400 leading-relaxed ml-4 mt-1 mb-2 font-medium">
                                {desc.description}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LewisModelCard;
