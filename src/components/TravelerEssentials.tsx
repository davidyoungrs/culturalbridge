import React from 'react';
import { Phone, Coins, Zap, Car, Info, ShieldAlert, Siren, Flame } from 'lucide-react';
import type { TravelerEssentials as EssentialsType } from '../constants/travelCountryData';

interface TravelerEssentialsProps {
    essentials?: EssentialsType;
}

export const TravelerEssentials: React.FC<TravelerEssentialsProps> = ({ essentials }) => {
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
                <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-500 uppercase">{essentials.currency.code}</span>
                    <span className="text-lg font-black text-emerald-600">{essentials.currency.symbol}</span>
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
                        <div key={type} className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl font-black text-slate-700">
                            {type}
                        </div>
                    ))}
                </div>
                <p className="mt-3 text-[9px] font-bold text-slate-400 uppercase tracking-wider">Universal Adapter Rec.</p>
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
        </div>
    );
};
