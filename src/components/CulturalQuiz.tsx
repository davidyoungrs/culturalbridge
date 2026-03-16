import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ClipboardCheck, RotateCcw, Sparkles, Loader2 } from "lucide-react";
import {
    QUIZ_QUESTIONS,
    AXES,
    calculateProfile,
    getProfileCode,
    getProfileType,
} from "../constants/quizData";
import { submitToAirtable } from "../lib/airtable";

interface CulturalQuizProps {
    onComplete?: (scores: Record<string, number>, profile: any, code: string) => void;
}

const CulturalQuiz: React.FC<CulturalQuizProps> = ({ onComplete }) => {
    const { t } = useTranslation();
    const [answers, setAnswers] = useState<Record<number, "a" | "b">>({});
    const [showResults, setShowResults] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [leadData, setLeadData] = useState({ firstName: '', email: '' });

    const progress = Object.keys(answers).length;
    const total = QUIZ_QUESTIONS.length;
    const isComplete = progress === total;

    const scores = useMemo(() => calculateProfile(answers), [answers]);
    const code = useMemo(() => getProfileCode(scores), [scores]);
    const profile = useMemo(() => getProfileType(code), [code]);

    const handleAnswer = (questionId: number, answer: "a" | "b") => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };

    const handleReveal = () => {
        setShowLeadForm(true);
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await submitToAirtable(leadData.firstName, leadData.email);
            console.log("Lead captured:", leadData);
        } catch (error) {
            console.error("Failed to submit lead", error);
        } finally {
            setIsSubmitting(false);
            setShowResults(true);
            if (onComplete) {
                onComplete(scores, profile, code);
            }
        }
    };

    const reset = () => {
        setAnswers({});
        setShowResults(false);
        setShowLeadForm(false);
        setLeadData({ firstName: '', email: '' });
    };

    // Group questions by axis
    const grouped = AXES.map((axis) => ({
        ...axis,
        questions: QUIZ_QUESTIONS.filter((q) => q.axis === axis.axis),
    }));

    if (showResults && isComplete) {
        return (
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="p-5 border-b border-slate-50 bg-gradient-to-r from-violet-50 to-indigo-50">
                    <h2 className="text-lg font-bold flex items-center gap-2">
                        {t('quiz.yourProfile', 'Your Cultural Profile')}
                        <span className="text-xs font-normal bg-violet-100 text-violet-700 py-0.5 px-2 rounded-full uppercase tracking-wider">
                            {code}
                        </span>
                    </h2>
                </div>

                <div className="p-5">
                    {/* Profile card */}
                    <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-xl p-5 text-white mb-5">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">{profile.emoji}</span>
                            <div>
                                <h3 className="text-xl font-bold">{t(`profile.${code}.title`, profile.title)}</h3>
                                <p className="text-indigo-200 text-xs font-bold uppercase tracking-wider">{t('quiz.profilePrefix', 'Profile:')} {code}</p>
                            </div>
                        </div>
                        <p className="text-sm text-indigo-100 leading-relaxed font-medium">{t(`profile.${code}.desc`, profile.description)}</p>
                    </div>

                    {/* Axis breakdown */}
                    <div className="space-y-4 mb-5">
                        {AXES.map((axis) => {
                            const score = scores[axis.axis];
                            const isLow = score < 50;
                            return (
                                <div key={axis.axis}>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-xs font-bold text-slate-700">{t(`axis.${axis.axis}.label`, axis.label)}</span>
                                        <span
                                            className="text-xs font-bold px-2 py-0.5 rounded-md"
                                            style={{ color: axis.color, backgroundColor: axis.color + "15" }}
                                        >
                                            {isLow ? t(`axis.${axis.axis}.low`, axis.lowLabel) : t(`axis.${axis.axis}.high`, axis.highLabel)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[9px] text-slate-400 font-medium w-16 text-right shrink-0">{t(`axis.${axis.axis}.low`, axis.lowLabel)}</span>
                                        <div className="flex-1 relative h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full rounded-full transition-all duration-700"
                                                style={{ width: `${score}%`, backgroundColor: axis.color, opacity: 0.7 }}
                                            />
                                            <div className="absolute top-0 left-1/2 w-px h-full bg-slate-300/60" />
                                        </div>
                                        <span className="text-[9px] text-slate-400 font-medium w-16 shrink-0">{t(`axis.${axis.axis}.high`, axis.highLabel)}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Best with / Watch for */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1.5">✦ {t('results.naturalFit', 'Natural Fit')}</h4>
                            <p className="text-xs text-emerald-800 font-medium leading-relaxed">{t(`profile.${code}.bestWith`, profile.bestWith)}</p>
                        </div>
                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-1.5">⚠ {t('results.watchFor', 'Watch For')}</h4>
                            <p className="text-xs text-amber-800 font-medium leading-relaxed">{t(`profile.${code}.watchFor`, profile.watchFor)}</p>
                        </div>
                    </div>

                    <button
                        onClick={reset}
                        className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-2.5 rounded-xl transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" /> {t('quiz.retake', 'Retake Assessment')}
                    </button>
                </div>
            </div>
        );
    }

    if (showLeadForm && !showResults) {
        return (
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="p-5 border-b border-slate-50 bg-gradient-to-r from-violet-50 to-indigo-50">
                    <h2 className="text-lg font-bold flex items-center gap-2 text-indigo-900">
                        {t('quiz.almostThere', 'Almost There!')}
                    </h2>
                </div>
                <div className="p-5">
                    <p className="text-sm text-slate-600 font-medium mb-5">
                        {t('quiz.leadPrompt', 'Enter your name and email to reveal your comprehensive cultural profile and tailored insights.')}
                    </p>
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block text-xs font-bold text-slate-700 mb-1">
                                {t('quiz.firstName', 'First Name')}
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                required
                                value={leadData.firstName}
                                onChange={(e) => setLeadData(prev => ({ ...prev, firstName: e.target.value }))}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all font-medium text-slate-800"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                                {t('quiz.email', 'Email Address')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={leadData.email}
                                onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all font-medium text-slate-800"
                                placeholder="jane@company.com"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg transition-all mt-4 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> {t('quiz.submitting', 'Submitting...')}</>
                            ) : (
                                <><Sparkles className="w-4 h-4" /> {t('quiz.submitLead', 'See My Results')}</>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 bg-slate-50/30">
                <h2 className="text-lg font-bold flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-violet-600" />
                    {t('quiz.title', 'Cultural Style Assessment')}
                    <span className="text-xs font-normal bg-violet-100 text-violet-700 py-0.5 px-2 rounded-full uppercase tracking-wider">
                        {t('quiz.numQuestions', '{{count}} questions', { count: 12 })}
                    </span>
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                    {t('quiz.subtitle', 'Discover your personal cross-cultural communication profile')}
                </p>

                {/* Progress bar */}
                <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                            style={{ width: `${(progress / total) * 100}%` }}
                        />
                    </div>
                    <span className="text-xs font-bold text-slate-400">{progress}/{total}</span>
                </div>
            </div>

            <div className="p-5 space-y-6 max-h-[600px] overflow-y-auto">
                {grouped.map((group) => (
                    <div key={group.axis}>
                        <h3
                            className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                            style={{ color: group.color }}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                            {t(`axis.${group.axis}.label`, group.label)}
                        </h3>

                        <div className="space-y-3">
                            {group.questions.map((q) => (
                                <div key={q.id} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                    <p className="text-sm font-semibold text-slate-700 mb-3">{t(`quiz.q${q.id}.scenario`, q.scenario)}</p>
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => handleAnswer(q.id, "a")}
                                            className={`w-full text-left text-xs font-medium px-3 py-2.5 rounded-lg border transition-all ${answers[q.id] === "a"
                                                ? "bg-indigo-50 border-indigo-300 text-indigo-700 shadow-sm"
                                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            <span className="font-bold mr-1.5">A.</span> {t(`quiz.q${q.id}.optA`, q.optionA)}
                                        </button>
                                        <button
                                            onClick={() => handleAnswer(q.id, "b")}
                                            className={`w-full text-left text-xs font-medium px-3 py-2.5 rounded-lg border transition-all ${answers[q.id] === "b"
                                                ? "bg-indigo-50 border-indigo-300 text-indigo-700 shadow-sm"
                                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                                                }`}
                                        >
                                            <span className="font-bold mr-1.5">B.</span> {t(`quiz.q${q.id}.optB`, q.optionB)}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Submit */}
                {isComplete && (
                    <button
                        onClick={handleReveal}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg transition-all"
                    >
                        <Sparkles className="w-4 h-4" /> {t('quiz.reveal', 'Reveal My Cultural Profile')}
                    </button>
                )}
            </div>
        </div>
    );
};

export default CulturalQuiz;
