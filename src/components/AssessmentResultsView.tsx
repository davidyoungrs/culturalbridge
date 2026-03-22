import React, { useState, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import {
    Sparkles,
    TrendingUp,
    Zap,
    ChevronRight,
    Info,
    ArrowLeft,
    Twitter,
    Linkedin,
    Download
} from "lucide-react";


import { AXES } from "../constants/quizData";
import { calculateCBI, calculateUserCBI } from "../lib/culturalWeights";
import { generateCBIInsights } from "../lib/insightGenerator";
import type { Country } from "../constants/cultureData";
import CBIDashboard from "./CBIDashboard";

import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

interface AssessmentResultsViewProps {
    userScores: Record<string, number>;
    profile: {
        title: string;
        emoji: string;
        description: string;
        bestWith: string;
        watchFor: string;
    };
    code: string;
    targetCountry: Country;
    homeCountry: Country;
    industry?: string;
    onClose: () => void;
}

const AssessmentResultsView: React.FC<AssessmentResultsViewProps> = ({
    userScores,
    profile,
    code,
    targetCountry,
    homeCountry,
    industry: _industry = "None",
    onClose
}) => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownloadPDF = async () => {
        if (!contentRef.current || isGenerating) return;
        
        setIsGenerating(true);

        try {
            // 1. Store original scroll position
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            // 2. Scroll to top to ensure html2canvas starts from correct viewport position
            window.scrollTo(0, 0);

            // 3. Hide UI elements that shouldn't be in the PDF
            const element = contentRef.current;
            const actionElements = element.querySelectorAll('.pdf-exclude');
            actionElements.forEach(el => (el as HTMLElement).style.display = 'none');

            // 4. Wait for GSAP animations to fully complete and for layout to settle
            // Increased from 100ms to 500ms for better reliability
            await new Promise(resolve => setTimeout(resolve, 500));

            const opt = {
                margin:       [0.4, 0.4, 0.4, 0.4] as [number, number, number, number], // Top, Left, Bottom, Right
                filename:     `Cultural_Bridge_Report_${code}.pdf`,
                image:        { type: 'jpeg' as const, quality: 0.98 }, 
                html2canvas:  { 
                    scale: 1.25, // Optimized balance of quality vs memory usage
                    useCORS: true, 
                    allowTaint: true,
                    logging: true, // Enable for easier debugging during testing
                    letterRendering: true,
                    scrollX: 0,
                    scrollY: 0,
                    windowWidth: document.documentElement.offsetWidth,
                    windowHeight: document.documentElement.offsetHeight
                },
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' as const }
            };

            // 5. Dynamic import and generate
            const html2pdf = (await import('html2pdf.js')).default;
            await html2pdf().set(opt).from(element).save();

            // 6. Restore UI elements and scroll position
            actionElements.forEach(el => (el as HTMLElement).style.display = '');
            window.scrollTo(scrollX, scrollY);

        } catch (error) {
            console.error("PDF Generation failed details:", error);
            alert("Sorry, there was an unexpected error generating your PDF report. Please try again or use the browser print function (Cmd+P) as a backup.");
        } finally {
            setIsGenerating(false);
        }
    };

    const userCBI = useMemo(() => calculateUserCBI(userScores), [userScores]);
    const targetCBI = useMemo(() => calculateCBI(targetCountry), [targetCountry]);

    const insights = useMemo(() => {
        return generateCBIInsights(userCBI, targetCBI);
    }, [userCBI, targetCBI]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.from(".animate-header", { y: -20, opacity: 0, duration: 0.6, ease: "power3.out" })
              .from(".animate-hero", { scale: 0.95, opacity: 0, duration: 0.7, ease: "back.out(1.2)" }, "-=0.4")
              .from(".animate-dimension", { x: -20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")
              .from(".animate-insight", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.5")
              .from(".animate-dashboard", { y: 40, opacity: 0, scale: 0.98, duration: 0.8, ease: "power3.out" }, "-=0.4")
              .from(".animate-action-btn", { y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.2");
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 z-[100] overflow-y-auto transition-colors duration-300 bg-slate-50 text-slate-900"
        >
            <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <div className="animate-header flex items-center justify-between mb-10 pdf-exclude">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors group min-h-[44px]"
                        aria-label="Back to Dashboard"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-black uppercase tracking-widest">{t('results.back', 'Back to Dashboard')}</span>
                    </button>
                    <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full text-xs font-black uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" /> {t('results.analysis', 'Result Analysis')}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Profile Summary */}
                    <div className="lg:col-span-12 animate-hero">
                        <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl -ml-24 -mb-24" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-5xl shadow-inner border border-white/20">
                                    {profile.emoji}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h1 className="text-3xl md:text-4xl font-black tracking-tight">{t(`profile.title.${code}`, profile.title)}</h1>
                                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-bold tracking-widest uppercase">
                                            {code}
                                        </span>
                                    </div>
                                    <p className="text-lg md:text-xl text-indigo-100 font-medium leading-relaxed max-w-2xl">
                                        {t(`profile.description.${code}`, profile.description)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Dimension Breakdown */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h2 className="animate-dimension text-xl font-black mb-6 flex items-center gap-2">
                                <Info className="w-5 h-5 text-indigo-500" />
                                {t('results.dimensionBreakdown', 'Dimension Breakdown')}
                            </h2>

                            <div className="space-y-8">
                                {AXES.map((axis) => {
                                    const score = userScores[axis.axis] || 50;
                                    const isLow = score < 50;
                                    return (
                                        <div key={axis.axis} className="animate-dimension group">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-black uppercase tracking-wider text-slate-800">{t(`axis.${axis.axis}.label`, axis.label)}</span>
                                                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md mt-1 w-fit"
                                                        style={{ color: axis.color, backgroundColor: axis.color + "15" }}>
                                                        {isLow ? t(`axis.${axis.axis}.low`, axis.lowLabel) : t(`axis.${axis.axis}.high`, axis.highLabel)}
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-black text-slate-400">{t('results.score', 'SCORE')}: {score}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="text-[10px] text-slate-400 font-bold uppercase w-16 text-right shrink-0">{t(`axis.${axis.axis}.low`, axis.lowLabel)}</span>
                                                <div className="flex-1 relative h-4 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 shadow-sm"
                                                        style={{ width: `${score}%`, backgroundColor: axis.color }}
                                                    />
                                                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-slate-200/40" />
                                                </div>
                                                <span className="text-[10px] text-slate-400 font-bold uppercase w-16 shrink-0">{t(`axis.${axis.axis}.high`, axis.highLabel)}</span>
                                            </div>

                                            <p className="text-xs text-slate-500 leading-relaxed font-medium pl-20 pr-16 bg-slate-50 py-3 rounded-xl border border-transparent group-hover:border-slate-200 transition-all">
                                                {t(`axis.${axis.axis}.desc`, axis.description)}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="animate-insight bg-emerald-50 border border-emerald-100 rounded-3xl p-6">
                                <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t('results.naturalFit', 'Natural Fit With')}
                                </h4>
                                <p className="text-sm text-emerald-800 font-bold leading-relaxed">{t(`profile.bestWith.${code}`, profile.bestWith)}</p>
                            </div>
                            <div className="animate-insight bg-amber-50 border border-amber-100 rounded-3xl p-6">
                                <h4 className="text-xs font-black uppercase tracking-widest text-amber-600 mb-3 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {t('results.adaptationGuide', 'Adaptation Guide')}
                                </h4>
                                <p className="text-sm text-amber-800 font-bold leading-relaxed">{t(`profile.watchFor.${code}`, profile.watchFor)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Insights */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-10">
                            <h2 className="animate-insight text-xl font-black mb-1 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-indigo-500" />
                                {t('results.criticalGaps', 'Critical Gaps')}
                            </h2>
                            <p className="animate-insight text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">
                                {t('results.personalizedFor', 'Personalized for your profile vs. {{country}}', { country: targetCountry.name })}
                            </p>

                            <div className="space-y-4">
                                {insights.map((insight, i) => (
                                    <div key={i} className={cn(
                                        "animate-insight flex flex-col gap-3 p-5 rounded-2xl border transition-all",
                                        insight.severity === 'high'
                                            ? "bg-rose-50/50 border-rose-100"
                                            : "bg-slate-50/80 border-slate-100"
                                    )}>
                                        <div className="flex items-center justify-between gap-2">
                                            <span className="bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase px-2 py-0.5 rounded-md tracking-wider">
                                                {t('results.cbiImpact', 'CBI IMPACT')}
                                            </span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[11px] font-black text-slate-400 uppercase tracking-tighter">{t('results.gapIndex', 'Gap Index')}</span>
                                                <span className="text-sm font-black text-slate-700">{insight.gap}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                                                {t(`dashboard.chart.${insight.key}`, insight.dimension)}
                                                {insight.severity === 'high' && <Zap className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />}
                                            </h4>
                                            <p className="text-[11px] text-slate-600 leading-normal mt-1 italic font-medium">
                                                "{t(`insights.${insight.key}.${insight.direction}`, insight.meaning)}"
                                            </p>
                                        </div>

                                        <div className="mt-1 pt-4 border-t border-slate-200/60">
                                            <p className="text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2 mb-2">
                                                <ChevronRight className="w-3 h-3" /> {t('results.strategy', 'Recommended Strategy')}
                                            </p>
                                            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                                                {t(`insights.${insight.key}.${insight.direction}Cons`, insight.consideration)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {insights.length === 0 && (
                                    <div className="animate-insight flex flex-col items-center justify-center py-16 opacity-30">
                                        <Sparkles className="w-10 h-10 mb-4" />
                                        <p className="text-sm font-black uppercase tracking-widest text-center">{t('results.highlyAligned', 'Profiles Highly Aligned')}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 animate-dashboard">
                    <CBIDashboard homeCountry={homeCountry} targetCountry={targetCountry} />
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 pdf-exclude">
                    <button
                        onClick={onClose}
                        className="w-full sm:w-auto bg-slate-900 text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-900/10"
                    >
                        {t('results.return', 'Return to Dashboard')}
                    </button>

                    <button
                        onClick={handleDownloadPDF}
                        disabled={isGenerating}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rose-600 text-white font-black uppercase tracking-widest text-xs px-10 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-rose-600/20 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                        {isGenerating ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                {t('results.generating')}...
                            </>
                        ) : (
                            <>
                                <Download className="w-4 h-4" /> {t('results.downloadPDF', 'Download PDF Report')}
                            </>
                        )}
                    </button>

                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${t(`profile.title.${code}`, profile.title)} ${profile.emoji}\n${code}\n${t(`profile.description.${code}`, profile.description)}\n\nGet your own Cultural comparison here:`)}&url=${encodeURIComponent(window.location.origin)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1DA1F2] text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#1DA1F2]/20"
                    >
                        <Twitter className="w-4 h-4 fill-current" /> {t('results.shareX', 'Share on X')}
                    </a>

                    <button
                        onClick={async () => {
                            const text = `${t(`profile.title.${code}`, profile.title)} ${profile.emoji}\n${code}\n${t(`profile.description.${code}`, profile.description)}\n\nGet your own Cultural comparison here: ${window.location.origin}`;
                            try {
                                await navigator.clipboard.writeText(text);
                                alert("Your results have been copied to your clipboard!\n\nPaste (Ctrl+V or Cmd+V) them into the LinkedIn post window that is opening now.");
                            } catch (err) {
                                console.error('Failed to auto-copy', err);
                            }
                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`, '_blank');
                        }}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A66C2] text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#0A66C2]/20"
                    >
                        <Linkedin className="w-4 h-4 fill-current text-white" /> {t('results.shareLinkedIn', 'Share on LinkedIn')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AssessmentResultsView;
