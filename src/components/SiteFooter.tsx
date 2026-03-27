import React, { useState, Suspense, lazy } from 'react';
import { Globe2, Home as HomeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const PrivacyModal = lazy(() => import("./PrivacyModal"));
const TermsModal = lazy(() => import("./TermsModal"));

const SiteFooter: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    const isHome = location.pathname === '/';


    return (
        <footer className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between text-slate-400 gap-4 pb-12">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {!isHome ? (
                    <a href="/" className="text-[10px] font-black text-slate-600 uppercase tracking-widest hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                        <HomeIcon className="w-3 h-3" /> Home
                    </a>
                ) : (
                    <a href="/traveladvice" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:text-indigo-700 transition-colors flex items-center gap-1.5">
                        <Globe2 className="w-3 h-3" /> Global Travel Advice
                    </a>
                )}
                
                <div className="w-px h-3 bg-slate-200 hidden sm:block" />
                
                <button 
                    onClick={() => setShowTerms(true)} 
                    className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors"
                >
                    Terms
                </button>
                
                <button 
                    onClick={() => setShowPrivacy(true)} 
                    className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors"
                >
                    Privacy Policy
                </button>
                
                <div className="w-px h-3 bg-slate-200 hidden sm:block" />
                
                <a 
                    href="/affiliate" 
                    className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors"
                >
                    Affiliate Program
                </a>

                <div className="w-px h-3 bg-slate-200 hidden sm:block" />

                <a 
                    href="/faq" 
                    className="text-[10px] font-bold uppercase tracking-widest hover:text-indigo-500 transition-colors flex items-center gap-1.5"
                >
                    FAQ
                </a>
                
                <div className="text-[10px] font-bold uppercase tracking-widest">
                    {t('footer.copyright', '© 2026 Cultural Assist. Educational / Non-Commercial Research Project.')}
                </div>
            </div>

            <Suspense fallback={null}>
                <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
                <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
            </Suspense>
        </footer>
    );
};

export default SiteFooter;
