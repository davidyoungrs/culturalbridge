import { X } from "lucide-react";

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all" onClick={onClose}>
            <div 
                className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-[2rem] shadow-2xl overflow-hidden border border-white/40 bg-white/95 backdrop-blur-xl text-slate-700"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-slate-50/50">
                    <h2 className="text-xl font-black tracking-tighter text-slate-900">Terms & Conditions</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6 text-sm font-bold leading-relaxed custom-scrollbar opacity-90">
                    <p>
                        Welcome to <strong>Cultural Assist</strong>. By using this application, you agree to the following terms and conditions.
                    </p>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-rose-600">1. Educational & Research Purposes Only</h3>
                        <p>
                            Cultural Assist is an independent, non-commercial <strong>research and educational project</strong>. The insights, profiles, and data provided by this application are based on theoretical syntheses of various cultural frameworks. 
                        </p>
                        <p>
                            The results are generalized estimates intended to foster cross-cultural understanding and should <strong>not</strong> be used as definitive professional, legal, or psychological advice.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">2. Disclaimer of Warranties</h3>
                        <p>
                            The application and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or usefulness of the Cultural Bridge Index (CBI) or any resulting profiles.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">3. Limitation of Liability</h3>
                        <p>
                            To the maximum extent permitted by applicable law, the creators, developers, and operators of Cultural Assist shall <strong>not be liable</strong> for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of this application.
                        </p>
                        <p>
                            You assume full responsibility for any decisions made or actions taken based on the information provided by this tool.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">4. Intellectual Property</h3>
                        <p>
                            The proprietary algorithms, visual designs, and conceptual syntheses (such as the CBI framework) presented in this application are the intellectual property of the creators. You may not reproduce, distribute, or commercially exploit this content without explicit permission.
                        </p>
                    </section>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                    <button onClick={onClose} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95">
                        Understand & Close
                    </button>
                </div>
            </div>
        </div>
    );
}
