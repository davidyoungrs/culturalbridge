import React, { useState, useEffect } from 'react';
import { Phone, Coins, Zap, Car, Info, ShieldAlert, Siren, Flame, X, TrendingUp, Loader2, Moon, Sun, Clock, Wind, Thermometer } from 'lucide-react';
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
    coordinates?: { lat: number; lng: number };
    majorCities?: { name: string; lat: number; lng: number }[];
}

const DEFAULT_ORIGIN_HUBS = [
    // Americas
    { name: 'Honolulu (Hawai\'i)', lat: 21.3069, lng: -157.8583 },
    { name: 'Anchorage (Alaska)', lat: 61.2181, lng: -149.9003 },
    { name: 'Vancouver (Canada)', lat: 49.2827, lng: -123.1207 },
    { name: 'San Francisco (USA)', lat: 37.7749, lng: -122.4194 },
    { name: 'Los Angeles (USA)', lat: 34.0522, lng: -118.2437 },
    { name: 'Denver (USA)', lat: 39.7392, lng: -104.9903 },
    { name: 'Chicago (USA)', lat: 41.8781, lng: -87.6298 },
    { name: 'New York (USA)', lat: 40.7128, lng: -74.0060 },
    { name: 'Toronto (Canada)', lat: 43.6532, lng: -79.3832 },
    { name: 'Mexico City (Mexico)', lat: 19.4326, lng: -99.1332 },
    { name: 'Sao Paulo (Brazil)', lat: -23.5505, lng: -46.6333 },
    { name: 'Buenos Aires (Argentina)', lat: -34.6037, lng: -58.3816 },

    // Europe
    { name: 'London (UK)', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris (France)', lat: 48.8566, lng: 2.3522 },
    { name: 'Zurich (Switzerland)', lat: 47.3769, lng: 8.5417 },
    { name: 'Amsterdam (Netherlands)', lat: 52.3676, lng: 4.9041 },
    { name: 'Frankfurt (Germany)', lat: 50.1109, lng: 8.6821 },
    { name: 'Rome (Italy)', lat: 41.9028, lng: 12.4964 },
    { name: 'Moscow (Russia)', lat: 55.7558, lng: 37.6173 },

    // Middle East / Africa
    { name: 'Istanbul (Turkey)', lat: 41.0082, lng: 28.9784 },
    { name: 'Tel Aviv (Israel)', lat: 32.0853, lng: 34.7818 },
    { name: 'Cairo (Egypt)', lat: 30.0444, lng: 31.2357 },
    { name: 'Riyadh (Saudi Arabia)', lat: 24.7136, lng: 46.6753 },
    { name: 'Dubai (UAE)', lat: 25.2048, lng: 55.2708 },
    { name: 'Doha (Qatar)', lat: 25.2854, lng: 51.5310 },
    { name: 'Lagos (Nigeria)', lat: 6.5244, lng: 3.3792 },
    { name: 'Nairobi (Kenya)', lat: -1.2921, lng: 36.8219 },
    { name: 'Johannesburg (SA)', lat: -26.2041, lng: 28.0473 },
    { name: 'Cape Town (SA)', lat: -33.9249, lng: 18.4241 },

    // Asia / Pacific
    { name: 'Mumbai (India)', lat: 19.0760, lng: 72.8777 },
    { name: 'Delhi (India)', lat: 28.6139, lng: 77.2090 },
    { name: 'Bangkok (Thailand)', lat: 13.7563, lng: 100.5018 },
    { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
    { name: 'Shanghai (China)', lat: 31.2304, lng: 121.4737 },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { name: 'Seoul (South Korea)', lat: 37.5665, lng: 126.9780 },
    { name: 'Tokyo (Japan)', lat: 35.6762, lng: 139.6503 },
    { name: 'Sydney (Australia)', lat: -33.8688, lng: 151.2093 },
    { name: 'Auckland (New Zealand)', lat: -36.8485, lng: 174.7633 },
];

export const TravelerEssentials: React.FC<TravelerEssentialsProps> = ({ essentials, coordinates, majorCities }) => {
    const [selectedPlug, setSelectedPlug] = useState<string | null>(null);
    const [fxData, setFxData] = useState<FXResult | null>(null);
    const [isLoadingRates, setIsLoadingRates] = useState(false);
    
    // City Selectors
    const [originCity, setOriginCity] = useState(DEFAULT_ORIGIN_HUBS[0]);
    const [targetCity, setTargetCity] = useState<{ name: string; lat: number; lng: number } | null>(null);

    useEffect(() => {
        if (majorCities && majorCities.length > 0) {
            setTargetCity(majorCities[0]);
        } else if (coordinates) {
            setTargetCity({ name: 'Capital/Main Hub', lat: coordinates.lat, lng: coordinates.lng });
        }
    }, [majorCities, coordinates]);

    // Environmental / Air Quality Data
    const [envData, setEnvData] = useState<{ aqi: number; label: string; allergen: string; color: string } | null>(null);
    const [isLoadingEnv, setIsLoadingEnv] = useState(false);

    useEffect(() => {
        if (targetCity) {
            const fetchAQI = async () => {
                setIsLoadingEnv(true);
                try {
                    const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${targetCity.lat}&longitude=${targetCity.lng}&current=us_aqi,grass_pollen,ragweed_pollen,birch_pollen`);
                    const data = await res.json();
                    if (data.current) {
                        const aqi = data.current.us_aqi;
                        let label = 'Healthy';
                        let color = 'text-emerald-500';
                        if (aqi > 50) { label = 'Moderate'; color = 'text-amber-500'; }
                        if (aqi > 100) { label = 'Sensitive'; color = 'text-orange-500'; }
                        if (aqi > 150) { label = 'Unhealthy'; color = 'text-rose-500'; }
                        
                        const pollens = [
                            { name: 'Grass', val: data.current.grass_pollen || 0 },
                            { name: 'Ragweed', val: data.current.ragweed_pollen || 0 },
                            { name: 'Birch', val: data.current.birch_pollen || 0 }
                        ].sort((a,b) => b.val - a.val);
                        
                        const topPollen = pollens[0].val > 0.1 ? `${pollens[0].name} (High)` : 'Low / None';

                        setEnvData({ aqi, label, allergen: topPollen, color });
                    }
                } catch (err) {
                    console.error('AQI Error:', err);
                } finally {
                    setIsLoadingEnv(false);
                }
            };
            fetchAQI();
        }
    }, [targetCity]);

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

    // Jet Lag Calculation
    const getJetLagStrategy = () => {
        if (!targetCity) return null;
        const homeLon = originCity.lng;
        const destLon = targetCity.lng;
        const diffHours = Math.round((destLon - homeLon) / 15);
        const absDiff = Math.abs(diffHours);
        
        if (absDiff < 3) return {
            level: 'Low',
            strategy: 'Standard hydration and normal sleep schedule recommended.',
            icon: <Sun className="w-4 h-4 text-emerald-500" />
        };

        if (diffHours > 0) { // Traveling East
            return {
                level: `High (+${absDiff}h East)`,
                strategy: 'Seek bright light in the morning; avoid light in the evening to advance your clock.',
                icon: <Sun className="w-4 h-4 text-amber-500" />
            };
        } else { // Traveling West
            return {
                level: `High (-${absDiff}h West)`,
                strategy: 'Seek bright light in the late afternoon/evening to delay your clock.',
                icon: <Moon className="w-4 h-4 text-indigo-500" />
            };
        }
    };

    const jetLag = getJetLagStrategy();

    // Environmental / Air Quality (Now live)
    const getEnvInsights = () => {
        return envData;
    };

    const env = getEnvInsights();

    if (!essentials) return (
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center">
            <div className="text-center">
                <Info className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Essentials Loading...</p>
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Row 1: Core Essentials (Static) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Emergency Numbers */}
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
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
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-emerald-50 rounded-xl">
                            <Coins className="w-4 h-4 text-emerald-600" />
                        </div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Currency</h3>
                    </div>
                    <div className="mb-1 text-sm font-black text-slate-800 leading-none truncate">{essentials.currency.name}</div>
                    <div className="flex items-center gap-1.5 mb-4">
                        <span className="text-xs font-bold text-slate-500 uppercase">{essentials.currency.code}</span>
                        <span className="text-lg font-black text-emerald-600">{essentials.currency.symbol}</span>
                    </div>

                    <div className="pt-3 border-t border-slate-50">
                        {isLoadingRates ? (
                            <div className="flex items-center gap-2 py-1">
                                <Loader2 className="w-3 h-3 text-slate-300 animate-spin" />
                                <span className="text-[10px] font-bold text-slate-300">Syncing...</span>
                            </div>
                        ) : fxData?.localRates && fxData.localRates.length > 0 ? (
                            <div className="grid grid-cols-1 gap-y-1">
                                {fxData.localRates.slice(0, 2).map((r, i) => (
                                    <div key={i} className="flex items-center justify-between bg-emerald-50/30 px-2 py-0.5 rounded-lg border border-emerald-100/50">
                                        <span className="text-[8px] font-black text-emerald-600">1/{r.code}</span>
                                        <span className="text-[9px] font-black text-emerald-700">
                                            {r.rate < 0.01 ? r.rate.toFixed(4) : r.rate.toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-[8px] font-bold text-slate-300 italic">Live rates unavailable.</p>
                        )}
                    </div>
                </div>

                {/* Electricity */}
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
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
                                className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl font-black text-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:scale-110 transition-all duration-300 shadow-sm"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase text-slate-400 leading-none mb-1">Volts</span>
                            <span className="text-[10px] font-black text-slate-700 leading-none">{essentials.voltage}</span>
                        </div>
                        <div className="w-px h-6 bg-slate-100" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase text-slate-400 leading-none mb-1">Freq</span>
                            <span className="text-[10px] font-black text-slate-700 leading-none">{essentials.frequency}</span>
                        </div>
                    </div>
                </div>

                {/* Driving */}
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-indigo-50 rounded-xl">
                            <Car className="w-4 h-4 text-indigo-600" />
                        </div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Driving</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex-1 text-sm font-black text-slate-800 uppercase leading-none">
                            {essentials.drivingSide}
                        </div>
                        <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center ${essentials.drivingSide === 'left' ? 'border-amber-400 bg-amber-50' : 'border-indigo-400 bg-indigo-50'}`}>
                            <div className={`w-3 h-3 rounded-full ${essentials.drivingSide === 'left' ? 'bg-amber-500' : 'bg-indigo-500'} animate-pulse`} 
                                 style={{ transform: essentials.drivingSide === 'left' ? 'translateX(-4px)' : 'translateX(4px)' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Adaptive Intelligence (Actionable) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* JET Lag Optimizer */}
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 bg-indigo-50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <Clock className="w-3 h-3 text-indigo-400" />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-indigo-50 rounded-xl">
                            <Moon className="w-4 h-4 text-indigo-600 font-bold" />
                        </div>
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">JET Lag</h3>
                            <p className="text-[8px] font-bold text-slate-300">Origin: {originCity.name}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <select 
                            value={originCity.name}
                            onChange={(e) => {
                                const city = DEFAULT_ORIGIN_HUBS.find(h => h.name === e.target.value);
                                if (city) setOriginCity(city);
                            }}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all cursor-pointer"
                        >
                            <optgroup label="Select Origin Hub">
                                {DEFAULT_ORIGIN_HUBS.map(hub => (
                                    <option key={hub.name} value={hub.name}>{hub.name}</option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                    
                    {jetLag ? (
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none text-nowrap">Impact Level</span>
                                <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 uppercase whitespace-nowrap">{jetLag.level}</span>
                            </div>
                            <p className="text-[10px] font-bold text-slate-700 leading-tight">
                                {jetLag.strategy}
                            </p>
                        </div>
                    ) : (
                        <p className="text-[10px] font-bold text-slate-300 italic uppercase">Awaiting Data...</p>
                    )}
                </div>

                {/* Environmental Insights */}
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-emerald-50 rounded-xl">
                            <Wind className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Environment</h3>
                            <p className="text-[8px] font-bold text-slate-300">City: {targetCity?.name || 'Loading...'}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <select 
                            value={targetCity?.name}
                            onChange={(e) => {
                                const cities = [...(majorCities || []), ...(coordinates ? [{ name: 'Capital/Main Hub', lat: coordinates.lat, lng: coordinates.lng }] : [])];
                                const city = cities.find(c => c.name === e.target.value);
                                if (city) setTargetCity(city);
                            }}
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5 text-[10px] font-bold text-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
                        >
                            <optgroup label="Select Target City">
                                {majorCities?.map(city => (
                                    <option key={city.name} value={city.name}>{city.name}</option>
                                ))}
                                {!majorCities?.length && coordinates && (
                                    <option value="Capital/Main Hub">Capital/Main Hub</option>
                                )}
                            </optgroup>
                        </select>
                    </div>
                    
                    {env ? (
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">AQI Index</span>
                                <span className={`text-[9px] font-black ${env.color} bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 uppercase whitespace-nowrap`}>{env.aqi} - {env.label}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-700">
                                <Thermometer className="w-3 h-3 text-amber-500" />
                                <span>{env.allergen}</span>
                            </div>
                            <p className="text-[8px] font-black uppercase tracking-widest text-slate-300 mt-2">Urban Hub Status: Healthy</p>
                        </div>
                    ) : (
                        <p className="text-[10px] font-bold text-slate-300 italic uppercase">Syncing...</p>
                    )}
                </div>
            </div>

            {/* Plug Preview Modal */}
            {selectedPlug && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500">
                    <div 
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300" 
                        onClick={() => setSelectedPlug(null)}
                    />
                    <div className="relative w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden transform animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
                        <button 
                            onClick={() => setSelectedPlug(null)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100/80 text-slate-500 hover:bg-rose-500 hover:text-white transition-all z-10 border border-white"
                        >
                            <X size={16} strokeWidth={3} />
                        </button>
                        
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl font-black shadow-xl ring-4 ring-indigo-50">
                                    {selectedPlug}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 leading-tight">Type {selectedPlug}</h3>
                                    <p className="text-slate-400 font-black tracking-widest text-[8px] uppercase">International Standard</p>
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
                                        <Zap size={48} className="opacity-10" />
                                        <span className="text-[8px] font-black uppercase tracking-widest">Visual Coming Soon</span>
                                    </div>
                                )}
                            </div>

                            <div className="bg-indigo-50/40 rounded-[1.5rem] p-5 border border-indigo-100/50">
                                <p className="text-slate-700 leading-relaxed text-xs font-bold italic">
                                    "{PLUG_DESCRIPTIONS[selectedPlug] || 'Common standard for this region.'}"
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50/50 px-8 py-5 border-t border-slate-100 flex justify-between items-center backdrop-blur-sm">
                            <span className="text-[8px] text-indigo-400 font-black tracking-[0.2em] uppercase">Travel Intelligence</span>
                            <button 
                                onClick={() => setSelectedPlug(null)}
                                className="px-6 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all border border-slate-800"
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
