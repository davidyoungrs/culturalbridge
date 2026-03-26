import React, { useState, useCallback } from 'react';
import {
    ShieldAlert,
    Stethoscope,
    FileText,
    ExternalLink,
    Loader2,
    AlertTriangle,
    CheckCircle2,
    Globe,
    ArrowLeft,
    Search,
    Info,
    MapPin,
    Newspaper,
    Syringe,
} from 'lucide-react';
import { COUNTRIES } from '../constants/cultureData';
import SearchableSelect from './SearchableSelect';
import { getTravelAdvice } from '../lib/travelService';
import type { CountryTravelData } from '../lib/travelService';
import { cn } from '../lib/utils';
import { WeatherForecast } from './WeatherForecast';
import { TravelerEssentials } from './TravelerEssentials';
import SiteFooter from './SiteFooter';


const countryOptions = COUNTRIES.map((c) => ({ value: c.name, label: c.name }));

const STATUS_CONFIG: Record<string, { bg: string; border: string; text: string; icon: string; badge: string }> = {
    'Exercise Normal Precautions': {
        bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800',
        icon: 'text-emerald-500', badge: 'bg-emerald-100 text-emerald-700',
    },
    'Exercise Increased Caution': {
        bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800',
        icon: 'text-amber-500', badge: 'bg-amber-100 text-amber-700',
    },
    'Reconsider Travel': {
        bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800',
        icon: 'text-orange-500', badge: 'bg-orange-100 text-orange-700',
    },
    'Do Not Travel': {
        bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800',
        icon: 'text-rose-500', badge: 'bg-rose-100 text-rose-700',
    },
};

const VAX_BADGE: Record<string, string> = {
    Mandatory: 'bg-rose-100 text-rose-700 border-rose-200',
    Recommended: 'bg-amber-100 text-amber-700 border-amber-200',
    Optional: 'bg-slate-100 text-slate-600 border-slate-200',
};

const TravelAdviceDashboard: React.FC = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [report, setReport] = useState<CountryTravelData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleCountryChange = useCallback(async (val: string) => {
        setSelectedCountry(val);
        setReport(null);
        setIsLoading(true);
        try {
            const data = await getTravelAdvice(val);
            setReport(data as CountryTravelData);
        } catch (error) {
            console.error('Failed to fetch travel advice:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const status = report?.security.overallStatus ?? 'Exercise Normal Precautions';
    const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG['Exercise Normal Precautions'];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Sticky Nav */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-4 py-3">
                <div className="max-w-5xl mx-auto flex items-center gap-4">
                    <a href="/" className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 flex items-center gap-2 text-sm font-bold">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">The Cultural Bridge</span>
                    </a>
                    <div className="h-5 w-px bg-slate-200" />
                    <h1 className="text-base font-black tracking-tight flex items-center gap-2 text-slate-900">
                        <Globe className="w-5 h-5 text-indigo-600" />
                        Global Travel Advice Portal
                    </h1>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-4 pt-12">
                {/* Search Area */}
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-indigo-100">
                        <Globe className="w-3 h-3" /> Sovereign Government Data
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-none">Official Travel Intelligence</h2>
                    <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                        Aggregated travel advice, security, health, and visa requirements from<br className="hidden sm:block" /> international sovereign agencies and the WHO.
                    </p>

                    <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 flex items-center gap-2 max-w-sm mx-auto">
                        <div className="flex-1">
                            <SearchableSelect
                                label=""
                                options={countryOptions}
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                placeholder="Search country name..."
                            />
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-24">
                        <div className="relative">
                            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                        </div>
                        <p className="text-sm font-black uppercase tracking-widest text-slate-400 mt-4">Syncing Official Sources…</p>
                        <p className="text-xs font-semibold text-slate-300 mt-1">INTERPOL · WHO · TuGo · US Dept · FCDO · Canada · NZ</p>
                    </div>
                )}

                {/* Report */}
                {!isLoading && report && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">

                        <WeatherForecast 
                            countryName={report.countryName} 
                            capital={report.capital} 
                            coordinates={report.coordinates} 
                        />

                        <div className={cn('rounded-3xl border-2 p-6 flex flex-col md:flex-row items-start md:items-center gap-5', cfg.bg, cfg.border)}>
                            <div className={cn('p-4 rounded-2xl border bg-white/60', cfg.border)}>
                                <AlertTriangle className={cn('w-9 h-9', cfg.icon)} />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className={cn('text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border', cfg.badge)}>
                                        Advisory Level
                                    </span>
                                </div>
                                <p className={cn('text-2xl font-black leading-tight', cfg.text)}>{report.security.overallStatus}</p>
                                <p className={cn('text-xs font-bold mt-1 flex items-center gap-1.5 opacity-70', cfg.text)}>
                                    <MapPin className="w-3 h-3" /> {report.countryName}
                                </p>
                            </div>
                            <div className="text-right shrink-0 hidden md:block">
                                <p className={cn('text-[10px] font-black uppercase tracking-widest opacity-50', cfg.text)}>Last Synced</p>
                                <p className={cn('text-sm font-black', cfg.text)}>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Security Section */}
                            <section className="bg-white rounded-3xl p-7 shadow-lg shadow-slate-100 border border-slate-100">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4 text-rose-500" /> Security Highlights
                                </h4>
                                <ul className="space-y-3 mb-6">
                                    {report.security.highlights.map((h, i) => (
                                        <li key={i} className="flex gap-3 text-sm font-semibold text-slate-700 leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {report.security.interpolNotices.length > 0 && (
                                    <>
                                        <div className="pt-5 border-t border-slate-50">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-1.5">
                                                <Newspaper className="w-3 h-3" /> INTERPOL Notices
                                            </p>
                                            <div className="space-y-2">
                                                {report.security.interpolNotices.map((n, i) => (
                                                    <a key={i} href={n.url} target="_blank" rel="noopener noreferrer"
                                                        className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-rose-50 hover:border-rose-100 border border-transparent transition-all group">
                                                        <span className="text-xs font-semibold text-slate-600 truncate mr-2 group-hover:text-rose-700">{n.title}</span>
                                                        <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </section>

                            {/* Visa & Entry Section */}
                            <section className="bg-white rounded-3xl p-7 shadow-lg shadow-slate-100 border border-slate-100">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-indigo-500" /> Visa & Entry Requirements
                                </h4>

                                <div className="space-y-4">
                                    <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100/80">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-1">Passport Validity</p>
                                        <p className="text-sm font-bold text-indigo-900">{report.visaEntry.passportValidity}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {report.visaEntry.visaRequired
                                            ? <span className="bg-amber-100 text-amber-700 border border-amber-200 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest">Visa Required</span>
                                            : <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Visa-Free Entry</span>
                                        }
                                    </div>

                                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{report.visaEntry.visaInfo}</p>

                                {report.visaEntry.entryNotes && report.visaEntry.entryNotes.length > 0 && (
                                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                                            {report.visaEntry.entryNotes.map((note, i) => (
                                                <p key={i} className="text-xs text-slate-500 font-semibold flex gap-2">
                                                    <Info className="w-3 h-3 shrink-0 text-slate-400 mt-0.5" /> {note}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 space-y-2">
                                    <a href={report.visaEntry.iataReference} target="_blank" rel="noopener noreferrer"
                                        className="w-full py-3.5 bg-slate-900 text-white rounded-2xl font-black text-center text-[11px] uppercase tracking-widest hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow">
                                        Verify with IATA Timatic <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                    <div className="grid grid-cols-2 gap-2">
                                        <a href={`https://www.ivisa.com/${report.countryName.toLowerCase().replace(/\s+/g, '-')}`}
                                            target="_blank" rel="noopener noreferrer"
                                            className="py-2.5 bg-indigo-50 text-indigo-700 rounded-xl font-bold text-center text-[10px] uppercase tracking-widest hover:bg-indigo-100 transition-all flex items-center justify-center gap-1">
                                            iVisa Check <ExternalLink className="w-2.5 h-2.5" />
                                        </a>
                                        <a href="https://apply.joinsherpa.com/travel-restrictions"
                                            target="_blank" rel="noopener noreferrer"
                                            className="py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold text-center text-[10px] uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-1">
                                            Sherpa Entry <ExternalLink className="w-2.5 h-2.5" />
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Health Section (full width) */}
                        <section className="bg-white rounded-3xl p-7 shadow-lg shadow-slate-100 border border-slate-100">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                                <Stethoscope className="w-4 h-4 text-emerald-500" /> Health Precautions
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Vaccinations */}
                                <div className="md:col-span-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-3">Vaccination Requirements</p>
                                    <div className="space-y-2">
                                        {report.health.vaccinations.map((v, i) => (
                                            <div key={i} className="flex items-start justify-between gap-2 py-2 border-b border-slate-50 last:border-0">
                                                <div>
                                                    <p className="text-xs font-bold text-slate-800">{v.name}</p>
                                                    {v.notes && <p className="text-[10px] text-slate-400 font-medium mt-0.5">{v.notes}</p>}
                                                </div>
                                                <span className={cn('text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest border shrink-0', VAX_BADGE[v.requirement])}>
                                                    {v.requirement}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="md:col-span-2 space-y-3">
                                    {/* Yellow Fever Risk */}
                                    {(() => {
                                        const yfVax = report.health.vaccinations.find(v =>
                                            v.name.toLowerCase().includes('yellow fever'));
                                        const yfRisk = report.health.yellowFeverRisk;
                                        const yfText = yfRisk ||
                                            (yfVax?.requirement === 'Mandatory'
                                                ? `Mandatory — ${yfVax.notes ?? 'Required for entry or exit to certain countries.'}`
                                                : yfVax?.requirement === 'Recommended'
                                                ? `Recommended — ${yfVax.notes ?? 'Consider vaccination before travel.'}`
                                                : 'No Yellow Fever risk for this destination.');
                                        const isMandatory = yfText.toLowerCase().startsWith('mandatory') || yfVax?.requirement === 'Mandatory';
                                        const isRecommended = !isMandatory && (yfText.toLowerCase().startsWith('recommended') || yfVax?.requirement === 'Recommended');
                                        return (
                                            <div className={cn(
                                                'p-4 rounded-2xl border',
                                                isMandatory ? 'bg-rose-50 border-rose-200' : isRecommended ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200'
                                            )}>
                                                <p className={cn('text-[10px] font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5',
                                                    isMandatory ? 'text-rose-600' : isRecommended ? 'text-amber-600' : 'text-emerald-600')}>
                                                    <Syringe className="w-3 h-3" /> Yellow Fever
                                                    {isMandatory && <span className="bg-rose-100 text-rose-700 border border-rose-200 px-1.5 rounded-full text-[8px] font-black uppercase">Mandatory</span>}
                                                    {isRecommended && <span className="bg-amber-100 text-amber-700 border border-amber-200 px-1.5 rounded-full text-[8px] font-black uppercase">Recommended</span>}
                                                    {!isMandatory && !isRecommended && <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-1.5 rounded-full text-[8px] font-black uppercase">No Risk</span>}
                                                </p>
                                                <p className={cn('text-xs font-semibold leading-relaxed',
                                                    isMandatory ? 'text-rose-700' : isRecommended ? 'text-amber-700' : 'text-emerald-700')}>
                                                    {yfText}
                                                </p>
                                            </div>
                                        );
                                    })()}

                                    {/* Malaria */}
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 flex items-center gap-1.5">
                                            <AlertTriangle className="w-3 h-3 text-amber-500" /> Malaria Risk
                                        </p>
                                        <p className="text-sm font-semibold text-slate-700 leading-relaxed mb-3">{report.health.malariaRisk}</p>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {report.health.whoCountryUrl && (
                                                <a href={report.health.whoCountryUrl} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 bg-white border border-slate-200 rounded-xl gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                                                    WHO Site <ExternalLink className="w-2.5 h-2.5" />
                                                </a>
                                            )}
                                            {report.health.cdcUrl && (
                                                <a href={report.health.cdcUrl} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 bg-white border border-slate-200 rounded-xl gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                                                    CDC Advice <ExternalLink className="w-2.5 h-2.5" />
                                                </a>
                                            )}
                                            {report.health.travelHealthProUrl && (
                                                <a href={report.health.travelHealthProUrl} target="_blank" rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 bg-white border border-slate-200 rounded-xl gap-2 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all sm:col-span-2 mt-1">
                                                    TravelHealthPro (UK) <ExternalLink className="w-2.5 h-2.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Polio Alert */}
                                    {report.health.polioAlert && (
                                        <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex items-center gap-3">
                                            <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" />
                                            <div>
                                                <p className="text-xs font-black text-rose-700 uppercase tracking-widest">Active Polio Transmission Alert</p>
                                                <p className="text-xs text-rose-600 font-medium mt-0.5">Ensure you have an up-to-date polio booster before travel.</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Health Notes */}
                                    {report.health.healthNotes && report.health.healthNotes.length > 0 && (
                                        <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/80 space-y-2">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Additional Health Notes</p>
                                            {report.health.healthNotes.map((note, i) => (
                                                <p key={i} className="text-xs font-semibold text-slate-600 flex gap-2 items-start leading-relaxed">
                                                    <Info className="w-3 h-3 shrink-0 text-emerald-500 mt-0.5" /> {note}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Traveler Essentials & Weather */}
                        <section className="space-y-6">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1 flex items-center gap-2">
                                <Info className="w-4 h-4 text-indigo-500" /> Destination Intelligence
                            </h4>
                            <TravelerEssentials essentials={report.essentials} />
                        </section>

                        {/* Official Sources */}
                        <section>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-1">Official Agency Resource Directory</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {report.officialSources.map((s, i) => (
                                    <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                                        className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:-translate-y-0.5 transition-all group flex flex-col gap-2">
                                        <span className="text-xl">{s.flag ?? '🌐'}</span>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-700 group-hover:text-indigo-600 leading-tight">{s.agency}</p>
                                            <p className="text-[9px] font-bold text-slate-400 mt-0.5">Official Portal</p>
                                        </div>
                                        <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-indigo-400 mt-auto self-end" />
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* Empty State */}
                {!isLoading && !report && (
                    <div className="py-24 text-center">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search className="w-10 h-10 text-slate-300" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-400">Select a country to generate your travel intelligence report</h3>
                        <p className="text-sm text-slate-300 font-medium mt-2">Data sourced from INTERPOL, WHO, US State Dept, FCDO, and more.</p>
                    </div>
                )}
            </main>

            {/* Footer Information & Site Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-20 opacity-90">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 pb-12 border-b border-slate-200">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-3">Content Licensing</p>
                        <p className="text-[10px] leading-relaxed font-semibold">
                            Aggregated from official government and WHO sources.
                            Provided under the{' '}
                            <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/igo" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">
                                Creative Commons BY-NC-SA 3.0 IGO
                            </a>{' '}
                            license.
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-3">Source Accuracy & Liability</p>
                        <p className="text-[10px] leading-relaxed font-semibold">
                            Always verify directly with embassies or official portals before travel.
                            The Cultural Bridge project assumes no liability for disruptions based on this data.
                        </p>
                    </div>
                </div>
                <SiteFooter />
            </div>
        </div>
    );
};

export default TravelAdviceDashboard;

