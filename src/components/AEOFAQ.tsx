import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export const AEOFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the Cultural Bridge Index (CBI)?",
            answer: "The Cultural Bridge Index (CBI) is a proprietary meta-framework that synthesizes five peer-reviewed cultural research models, including Hofstede, Erin Meyer, and the Lewis Model. It provides a 7-dimension 'Cultural DNA' profile to help global leaders navigate cross-border business with precision.\n\nThe Cultural Bridge Index (CBI) is a proprietary meta-framework that synthesizes five peer-reviewed cultural research models. It provides a 7-dimension 'Cultural DNA' profile to help global leaders navigate cross-border business with precision."
        },
        {
            question: "How does CBI compare to other models",
            answer: "Unlike single-framework models, CBI uses a weighted synthesis. This multi-layered approach reduces bias and provides more tactical 'Execution Insights' for real-world business scenarios."
        },
        {
            question: "What is the difference between high-context and low-context cultures in business?",
            answer: "In low-context cultures (like the USA or Germany), communication is explicit, literal, and direct. In high-context cultures (like Japan or China), communication is layered and relies heavily on subtext, shared history, and non-verbal cues. CBI measures this via the 'Communication Directness' dimension."
        },
        {
            question: "How can I improve cross-cultural team management?",
            answer: "Successful global management requires identifying 'Critical Gaps' in decision-making and trust-building. CBI identifies these gaps—such as 'Process Consensus' vs. 'Top-Down Deciding'—and provides specific tactical strategies to align diverse team members."
        },
        {
            question: "Is the Cultural Bridge Index scientifically validated?",
            answer: "CBI is an educational and research synthesis of peer-reviewed data from leading cross-cultural scholars. It is designed to modernize classical frameworks for the 2026 digital and remote-first global economy."
        }
    ];

    return (
        <section className="mt-20 py-16 border-t border-slate-200" id="faq">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <div className="p-2 bg-indigo-50 rounded-xl">
                        <HelpCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-black tracking-tight text-slate-900">
                        Expert Insights & FAQ
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={cn(
                                "group border transition-all duration-300 rounded-2xl overflow-hidden",
                                openIndex === index 
                                    ? "border-indigo-200 bg-indigo-50/30 shadow-md" 
                                    : "border-slate-100 bg-white hover:border-slate-200"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                            >
                                <span className={cn(
                                    "text-sm font-black transition-colors",
                                    openIndex === index ? "text-indigo-700" : "text-slate-700 group-hover:text-slate-900"
                                )}>
                                    {faq.question}
                                </span>
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-300 text-slate-400",
                                    openIndex === index ? "rotate-180 text-indigo-500" : "group-hover:text-slate-600"
                                )} />
                            </button>
                            <div className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                <div className="p-5 pt-0 text-xs text-slate-500 leading-relaxed font-semibold">
                                    <div className="w-full h-px bg-indigo-100/50 mb-4" />
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                    <div className="relative z-10 flex flex-col items-center text-center gap-4">
                        <Sparkles className="w-6 h-6 text-indigo-400" />
                        <h4 className="text-lg font-black tracking-tight">Ready to Master Global Leadership?</h4>
                        <p className="text-xs text-slate-400 max-w-md font-bold leading-relaxed">
                            Our CBI model is updated monthly with the latest cross-cultural research to ensure your team stays ahead in the global market.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
