import React from 'react';
import { HelpCircle, ChevronRight, MessageCircle, ArrowLeft, Globe, ShieldCheck, Zap } from 'lucide-react';
import SiteFooter from '../components/SiteFooter';

const FAQS = [
    {
        question: "How does intercultural coaching help business performance?",
        answer: "Intercultural coaching increases ROI by reducing communication friction, accelerating trust-building in new markets, and preventing costly management misunderstandings in MNE expansion. Organizations with high Cultural Intelligence (CQ) outperform competitors by 35% in ethnically diverse markets.",
        icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
        question: "What are the most common cultural barriers in remote teams?",
        answer: "The most common barriers include divergent communication styles (High-context vs Low-context), differing attitudes toward hierarchy, and misaligned expectations for task-based vs relationship-based trust. Identifying these early through the CBI framework prevents project slippage.",
        icon: <MessageCircle className="w-5 h-5 text-indigo-500" />
    },
    {
        question: "Why is the CBI framework superior for MNE expansion?",
        answer: "The Cultural Bridge Index (CBI) is a proprietary meta-framework that synthesizes five peer-reviewed models (Hofstede, Meyer, etc.) into a weighted 'Execution Insight' profile. This multi-layered approach provides more tactical accuracy than traditional single-framework assessments.",
        icon: <Globe className="w-5 h-5 text-emerald-500" />
    },
    {
        question: "Can Cultural Assist help with German-American team synergy?",
        answer: "Absolutely. We specialize in 'Long-Tail' cultural pairings. For German-American teams, we focus on reconciling 'Task-First' directness with decentralized decision-making styles, providing specific behavioral scripts for better collaboration.",
        icon: <ShieldCheck className="w-5 h-5 text-rose-500" />
    }
];

const FAQPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-4 py-3">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a href="/" className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
                            <ArrowLeft className="w-5 h-5" />
                        </a>
                        <h1 className="text-sm font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                            <HelpCircle className="w-4 h-4 text-indigo-600" /> Knowledge Center
                        </h1>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
                <header className="mb-16 text-center">
                    <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
                        <Zap className="w-3 h-3" /> Answer Engine Optimized
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                        Strategic Intercultural <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-600">Intelligence FAQs</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Deep answers to the most critical questions facing global operations managers and HR directors today.
                    </p>
                </header>

                <div className="space-y-6">
                    {FAQS.map((faq, index) => (
                        <section 
                            key={index} 
                            className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200/60 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-[1.01] transition-all group"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 transition-colors">
                                    {faq.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                                        {faq.question}
                                    </h3>
                                    <div className="h-px w-12 bg-slate-100 mb-6 transition-all group-hover:w-24 group-hover:bg-indigo-200" />
                                    <p className="text-slate-600 font-medium leading-relaxed text-lg">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="relative z-10">
                        <h4 className="text-3xl font-black mb-4 tracking-tight">Ready to optimize your global team?</h4>
                        <p className="text-slate-400 font-medium mb-8 max-w-lg mx-auto">
                            The Cultural Bridge Index provides the depth and precision required for true MNE synergy.
                        </p>
                        <a href="/" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all">
                            Start Your Assessment <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
};

export default FAQPage;
