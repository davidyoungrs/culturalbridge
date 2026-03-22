import { X } from "lucide-react";

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all" onClick={onClose}>
            <div 
                className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-[2rem] shadow-2xl overflow-hidden border border-white/40 bg-white/95 backdrop-blur-xl text-slate-700"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-slate-50/50">
                    <h2 className="text-xl font-black tracking-tighter text-slate-900">Privacy Policy (GDPR)</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6 text-sm font-bold leading-relaxed custom-scrollbar opacity-90">
                    <p>
                        This Privacy Policy describes how <strong>Cultural Assist</strong> collects, uses, and protects your personal information in compliance with the General Data Protection Regulation (GDPR).
                    </p>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">1. Data We Collect</h3>
                        <p>When you complete the Cultural Style Assessment, we collect:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Your First Name</li>
                            <li>Your Email Address</li>
                            <li>Your anonymized assessment responses (used to generate your Cultural Profile code)</li>
                        </ul>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">2. How We Use Your Data</h3>
                        <p>We use your personal data exclusively for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To deliver your customized Cultural Profile results.</li>
                            <li>To contact you occasionally with relevant cross-cultural insights and updates about the research project.</li>
                        </ul>
                        <p>We operate on the legal basis of <strong>explicit consent</strong>. By providing your email, you consent to these communications.</p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">3. Third-Party Processing</h3>
                        <p>
                            We do not sell your personal data. Your name and email are securely stored using <strong>Airtable</strong>, our cloud database provider, which acts as a data processor and complies with strict international data security standards.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-base font-black text-slate-900">4. Your GDPR Rights</h3>
                        <p>Under the GDPR, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                            <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
                            <li><strong>Erasure (Right to be Forgotten):</strong> Request the permanent deletion of your data at any time.</li>
                            <li><strong>Withdraw Consent:</strong> You may unsubscribe from our communications at any time by clicking the unsubscribe link in our emails, or by contacting us directly.</li>
                        </ul>
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
