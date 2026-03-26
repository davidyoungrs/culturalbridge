import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudLightning, Wind, Calendar, MapPin, Loader2, AlertCircle } from 'lucide-react';

interface WeatherForecastProps {
    countryName: string;
    capital?: string;
    coordinates?: { lat: number; lng: number };
}

interface DailyForecast {
    date: string;
    maxTemp: number;
    minTemp: number;
    weatherCode: number;
}

const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-6 h-6 text-amber-500" />;
    if (code <= 3) return <Cloud className="w-6 h-6 text-slate-400" />;
    if (code <= 48) return <Wind className="w-6 h-6 text-slate-400" />;
    if (code <= 67 || code <= 82) return <CloudRain className="w-6 h-6 text-blue-500" />;
    if (code <= 99) return <CloudLightning className="w-6 h-6 text-indigo-600" />;
    return <Cloud className="w-6 h-6 text-slate-400" />;
};

const getWeatherDesc = (code: number) => {
    if (code === 0) return 'Clear Sky';
    if (code <= 3) return 'Partly Cloudy';
    if (code <= 48) return 'Fog/Mist';
    if (code <= 67) return 'Rain';
    if (code <= 82) return 'Showers';
    if (code <= 99) return 'Thunderstorm';
    return 'Cloudy';
};

export const WeatherForecast: React.FC<WeatherForecastProps> = ({ countryName, capital, coordinates }) => {
    const [forecast, setForecast] = useState<DailyForecast[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                let lat = coordinates?.lat;
                let lng = coordinates?.lng;

                // Geocode if coordinates are missing but capital exists
                if (!lat || !lng) {
                    const searchName = capital || countryName;
                    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchName)}&count=1&language=en&format=json`);
                    const geoData = await geoRes.json();
                    if (geoData.results && geoData.results[0]) {
                        lat = geoData.results[0].latitude;
                        lng = geoData.results[0].longitude;
                    } else {
                        throw new Error(`Could not find coordinates for ${searchName}`);
                    }
                }

                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
                const data = await res.json();
                
                if (data.daily) {
                    const mapped: DailyForecast[] = data.daily.time.map((time: string, i: number) => ({
                        date: time,
                        maxTemp: Math.round(data.daily.temperature_2m_max[i]),
                        minTemp: Math.round(data.daily.temperature_2m_min[i]),
                        weatherCode: data.daily.weathercode[i]
                    }));
                    setForecast(mapped);
                }
            } catch (err) {
                console.error('Weather fetch error:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch weather');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [countryName, capital, coordinates]);

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-8 bg-slate-50/50 rounded-3xl border border-slate-100 min-h-[200px]">
            <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-3" />
            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Fetching Global Forecast...</p>
        </div>
    );

    if (error) return (
        <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 flex items-center gap-4">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <div>
                <p className="font-bold text-amber-900 text-sm">Weather Unavailable</p>
                <p className="text-amber-700 text-xs">{error}</p>
            </div>
        </div>
    );

    return (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Weekly Forecast</h3>
                        <p className="text-sm font-bold text-slate-800">{capital || countryName}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full border border-slate-200">
                    <MapPin className="w-3 h-3 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live API</span>
                </div>
            </div>

            <div className="p-1 sm:p-2">
                <div className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar gap-1 sm:gap-2">
                    {forecast.map((day, i) => (
                        <div key={day.date} className={`flex-shrink-0 w-24 sm:w-32 p-3 sm:p-4 rounded-2xl transition-all ${i === 0 ? 'bg-indigo-50/50 border border-indigo-100' : 'hover:bg-slate-50 border border-transparent'}`}>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                                {i === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </p>
                            <div className="mb-2">
                                {getWeatherIcon(day.weatherCode)}
                            </div>
                            <div className="flex items-end gap-1 mb-1">
                                <span className="text-lg font-black text-slate-800 leading-none">{day.maxTemp}°</span>
                                <span className="text-[10px] font-bold text-slate-400 leading-tight pb-0.5">/ {day.minTemp}°</span>
                                <span className="text-[9px] font-bold text-slate-300 leading-tight pb-0.5 ml-1">
                                    ({Math.round(day.maxTemp * 9/5 + 32)}°F)
                                </span>
                            </div>
                            <p className="text-[9px] font-black uppercase tracking-wider text-slate-500 truncate">
                                {getWeatherDesc(day.weatherCode)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
