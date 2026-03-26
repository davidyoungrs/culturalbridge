import React from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck, Info, Handshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AffiliateProgram: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Nav */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 px-4 py-3">
                <div className="max-w-3xl mx-auto flex items-center gap-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 flex items-center gap-2 text-sm font-bold"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                    </button>
                    <div className="h-5 w-px bg-slate-200" />
                    <h1 className="text-base font-black tracking-tight flex items-center gap-2 text-slate-900">
                        <Handshake className="w-5 h-5 text-indigo-600" />
                        Affiliate Programme Disclosure
                    </h1>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-4 pt-12">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-200/80">
                    <div className="mb-10">
                        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-indigo-100">
                            <ShieldCheck className="w-3 h-3" /> Transparency & Compliance
                        </span>
                        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Affiliate Disclosure</h2>
                        
                        <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-lg mb-8">
                            <p className="text-lg font-bold leading-relaxed italic">
                                "As an Amazon Associate I earn from qualifying purchases."
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        <section>
                            <h3 className="text-xl font-black flex items-center gap-2 text-slate-900 mb-4">
                                <Info className="w-5 h-5 text-indigo-500" /> About Our Partnerships
                            </h3>
                            <p className="text-slate-600 font-medium leading-relaxed">
                                The Cultural Bridge (Cultural Assist) is an educational and non-commercial research project. To help sustain the hosting costs and continued data aggregation for this portal, we participate in various affiliate marketing programs. 
                            </p>
                            <p className="text-slate-600 font-medium leading-relaxed mt-4">
                                This means that when you click on certain links to products or services (such as travel gear, books, or insurance) and make a purchase, we may receive a small commission at no additional cost to you.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-slate-100">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Amazon Associates Programme</h4>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.co.uk and affiliated sites.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Operating Agreement</p>
                                    <p className="text-xs font-semibold text-slate-600 mb-3">Our participation is governed by the Amazon Associates Operating Agreement.</p>
                                    <a 
                                        href="https://affiliate-program.amazon.co.uk/help/operating/agreement" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-1 hover:text-indigo-700"
                                    >
                                        View Full Agreement <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">EU Compliance</p>
                                    <p className="text-xs font-semibold text-slate-600 mb-3">We adhere to the consumer protection guidelines of the UK's Competition and Markets Authority (CMA).</p>
                                </div>
                            </div>
                        </section>

                        <section className="pt-8 border-t border-slate-100">
                            <h3 className="text-xl font-black text-slate-900 mb-4">Key Terms for Visitors</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                                    <p className="text-sm text-slate-600 font-medium">Prices remain exactly the same for you whether you use an affiliate link or go directly to the merchant's site.</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                                    <p className="text-sm text-slate-600 font-medium">We only recommend products and services that we believe add value to international travellers and cultural researchers.</p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                                    <p className="text-sm text-slate-600 font-medium">Your support through these links helps keep this project's independent data aggregation free for the global community.</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                        Last Updated: March 2026
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AffiliateProgram;
