import React, { useState, useEffect } from 'react';
import { Phone, Coins, Zap, Car, Info, ShieldAlert, Siren, Flame, X, TrendingUp, Loader2 } from 'lucide-react';
import type { TravelerEssentials as EssentialsType } from '../constants/travelCountryData';
import { fetchLiveRates, type FXResult } from '../lib/fxService';

// Mapping of plug types to local verified images
const PLUG_IMAGES: Record<string, string> = {
    'A': '/images/plugs/Type_A.jpg',
    'B': '/images/plugs/Type_B.jpg',
    'C': '/images/plugs/Type_C.jpg',
    'D': '/images/plugs/Type_D.jpg',
    'E': '/images/plugs/Type_E.jpg',
    'F': '/images/plugs/Type_F.jpg',
    'G': '/images/plugs/Type_G.jpg',
    'H': '/images/plugs/Type_H.jpg',
    'I': '/images/plugs/Type_I.jpg',
    'J': '/images/plugs/Type_J.jpg',
    'K': '/images/plugs/Type_K.jpg',
    'L': '/images/plugs/Type_L.jpg',
    'M': '/images/plugs/Type_M.jpg',
    'N': '/images/plugs/Type_N.jpg',
    'O': '/images/plugs/Type_O.jpg',
};

const PLUG_DESCRIPTIONS: Record<string, string> = {
    'A': 'Two flat parallel pins. Primarily used in North and Central America, and Japan.',
    'B': 'Two flat parallel pins and a round grounding pin. Used in USA, Mexico, Canada, and Japan.',
    'C': 'Two round pins. Known as the "Europlug". Used throughout Europe and parts of Asia/Africa.',
    'F': 'Two round pins with side earthing clips. Known as "Schuko". Used in Europe and Russia.',
    'G': 'Three rectangular pins in a triangular pattern. Used in UK, Ireland, UAE, and Singapore.',
    'I': 'Two flat pins in a V-shape and a grounding pin. Used in Australia, New Zealand, China, and Argentina.',
    'M': 'Three large round pins in a triangular pattern. Used in South Africa and Namibia.',
    'N': 'Two round pins and a grounding pin in a distinct hexagonal or rounded socket. Used in Brazil.',
    'O': 'Three round pins in a triangular pattern. Exclusively used in Thailand.',
    'D': 'Three large round pins in a triangular pattern. Used in India, Sri Lanka, Nepal, and Namibia.',
    'E': 'Two round pins and a hole for the socket\'s male earthing pin. Used in France, Belgium, and Poland.',
    'H': 'Three flat pins in a Y-shape. Unique to Israel and the Palestinian Territories.',
    'J': 'Two round pins and a grounding pin. Used in Switzerland, Liechtenstein, and Rwanda.',
    'L': 'Three round pins in a row. Used in Italy, San Marino, and Chile.',
};

interface TravelerEssentialsProps {
    essentials?: EssentialsType;
}

export const TravelerEssentials: React.FC<TravelerEssentialsProps> = ({ essentials }) => {
    const [selectedPlug, setSelectedPlug] = useState<string | null>(null);
    const [fxData, setFxData] = useState<FXResult | null>(null);
    const [isLoadingRates, setIsLoadingRates] = useState(false);

    useEffect(() => {
        if (essentials?.currency?.code) {
            const getRates = async () => {
                setIsLoadingRates(true);
                const data = await fetchLiveRates(essentials.currency.code);
                setFxData(data);
                setIsLoadingRates(false);
            };
            getRates();
        }
    }, [essentials?.currency?.code]);

    if (!essentials) return (
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center">
            <div className="text-center">
                <Info className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Essentials Loading...</p>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Emergency Numbers */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-rose-50 rounded-xl">
                        <ShieldAlert className="w-4 h-4 text-rose-600" />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Emergency</h3>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                            <Siren className="w-3.5 h-3.5 text-rose-500" /> Police
                        </div>
                        <span className="text-sm font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-100">{essentials.emergencyNumbers.police}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                            <Phone className="w-3.5 h-3.5 text-blue-500" /> Ambulance
                        </div>
                        <span className="text-sm font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">{essentials.emergencyNumbers.ambulance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                            <Flame className="w-3.5 h-3.5 text-orange-500" /> Fire
                        </div>
                        <span className="text-sm font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-100">{essentials.emergencyNumbers.fire}</span>
                    </div>
                </div>
            </div>

            {/* Currency */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-emerald-50 rounded-xl">
                        <Coins className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Currency</h3>
                </div>
                <div className="mb-1 text-sm font-black text-slate-800">{essentials.currency.name}</div>
                <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase">{essentials.currency.code}</span>
                    <span className="text-lg font-black text-emerald-600">{essentials.currency.symbol}</span>
                </div>

                <div className="pt-4 border-t border-slate-50">
                    <p className="text-[9px] font-black uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-1.5 leading-none">
                        <TrendingUp className="w-2.5 h-2.5 text-emerald-500" /> vs Major Benchmarks
                    </p>
                    
                    {isLoadingRates ? (
                        <div className="flex items-center gap-2 py-2">
                            <Loader2 className="w-3 h-3 text-slate-300 animate-spin" />
                            <span className="text-[10px] font-bold text-slate-300">Syncing Rates...</span>
                        </div>
                    ) : fxData?.localRates && fxData.localRates.length > 0 ? (
                        <div className="grid grid-cols-1 gap-y-1.5">
                            {fxData.localRates.map((r, i) => (
                                <div key={i} className="flex items-center justify-between bg-emerald-50/30 px-2 py-1 rounded-lg border border-emerald-100/50">
                                    <span className="text-[8px] font-black text-emerald-600">1 {essentials.currency.code}/{r.code}</span>
                                    <span className="text-[9px] font-black text-emerald-700">
                                        {r.rate < 0.01 ? r.rate.toFixed(4) : r.rate.toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : !isLoadingRates && (
                        <p className="text-[8px] font-bold text-slate-300 italic px-1">Live benchmark data unavailable.</p>
                    )}
                </div>
            </div>

            {/* Electricity */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-amber-50 rounded-xl">
                        <Zap className="w-4 h-4 text-amber-600" />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Plugs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {essentials.plugTypes.map(type => (
                        <button 
                            key={type} 
                            onClick={() => setSelectedPlug(type)}
                            className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl font-black text-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:scale-110 transition-all duration-300 shadow-sm group"
                            title={`View Details for Type ${type}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="mt-3 flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Voltage</span>
                        <span className="text-[10px] font-black text-slate-700">{essentials.voltage}</span>
                    </div>
                    <div className="w-px h-6 bg-slate-100" />
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Frequency</span>
                        <span className="text-[10px] font-black text-slate-700">{essentials.frequency}</span>
                    </div>
                </div>
                <p className="mt-3 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Click for preview</p>
                <div className="mt-4 pt-3 border-t border-slate-50">
                    <a href="https://amzn.to/4bz2Gj9" target="_blank" rel="noopener noreferrer" 
                       className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors flex items-center gap-1.5 leading-tight">
                        Need an adapter - try here
                    </a>
                </div>
            </div>

            {/* Driving */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-indigo-50 rounded-xl">
                        <Car className="w-4 h-4 text-indigo-600" />
                    </div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Driving</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex-1 text-sm font-black text-slate-800 uppercase">
                        {essentials.drivingSide} Side
                    </div>
                    <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center ${essentials.drivingSide === 'left' ? 'border-amber-400 bg-amber-50' : 'border-indigo-400 bg-indigo-50'}`}>
                        <div className={`w-4 h-4 rounded-full ${essentials.drivingSide === 'left' ? 'bg-amber-500' : 'bg-indigo-500'} animate-pulse`} 
                             style={{ transform: essentials.drivingSide === 'left' ? 'translateX(-8px)' : 'translateX(8px)' }}></div>
                    </div>
                </div>
            </div>

            {/* Plug Preview Modal */}
            {selectedPlug && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-500">
                    <div 
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300" 
                        onClick={() => setSelectedPlug(null)}
                    />
                    <div className="relative w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden transform animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                        <button 
                            onClick={() => setSelectedPlug(null)}
                            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100/80 text-slate-500 hover:bg-rose-500 hover:text-white transition-all active:scale-90 z-10 backdrop-blur-sm border border-white"
                        >
                            <X size={18} strokeWidth={3} />
                        </button>
                        
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-indigo-200 ring-4 ring-indigo-50">
                                    {selectedPlug}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-900 leading-tight">Type {selectedPlug}</h3>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                        <p className="text-slate-400 font-black tracking-widest text-[10px] uppercase">International Standard</p>
                                    </div>
                                </div>
                            </div>

                            <div className="aspect-square w-full rounded-[2rem] bg-slate-50 border border-slate-100 mb-8 overflow-hidden flex items-center justify-center shadow-inner group relative">
                                {PLUG_IMAGES[selectedPlug] ? (
                                    <img 
                                        src={PLUG_IMAGES[selectedPlug]} 
                                        alt={`Plug Type ${selectedPlug}`} 
                                        className="w-full h-full object-cover p-4 transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="text-slate-300 flex flex-col items-center gap-3">
                                        <Zap size={64} className="opacity-10" strokeWidth={1} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Visual Coming Soon</span>
                                    </div>
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50/80 to-transparent pointer-events-none" />
                            </div>

                            <div className="bg-indigo-50/40 rounded-[1.5rem] p-6 border border-indigo-100/50 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 opacity-20" />
                                <p className="text-slate-700 leading-relaxed text-sm font-bold italic relative z-10">
                                    "{PLUG_DESCRIPTIONS[selectedPlug] || 'Common standard for this region.'}"
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50/50 px-8 py-6 border-t border-slate-100 flex justify-between items-center backdrop-blur-sm">
                            <div className="flex flex-col">
                                <span className="text-[8px] text-slate-300 font-black tracking-[0.2em] uppercase">The Cultural Bridge</span>
                                <span className="text-[8px] text-indigo-400 font-black tracking-[0.2em] uppercase">Travel Intelligence</span>
                            </div>
                            <button 
                                onClick={() => setSelectedPlug(null)}
                                className="px-8 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-200 transition-all active:scale-95 border border-slate-800"
                            >
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
