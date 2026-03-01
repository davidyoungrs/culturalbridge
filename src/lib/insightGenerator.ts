import { GLOBE_LABELS } from "../constants/globeData";
import { SCHWARTZ_LABELS } from "../constants/schwartzData";
import { HOFSTEDE_LABELS } from "../constants/hofstedeData";
import { SCALE_LABELS } from "../constants/cultureData";

export interface CulturalInsight {
    framework: "Meyer" | "Hofstede" | "GLOBE" | "Schwartz" | "Lewis";
    dimension: string;
    gap: number;
    meaning: string;
    consideration: string;
    severity: "high" | "medium" | "low";
}

/**
 * Maps Meyer (Culture Map) gaps to qualitative insights.
 * Meyer scores are 1-10.
 */
const getMeyerInsight = (key: string, homeVal: number, targetVal: number): Partial<CulturalInsight> | null => {
    const diff = targetVal - homeVal;
    if (Math.abs(diff) < 3) return null;

    const insights: Record<string, { high: string; low: string; highCons: string; lowCons: string }> = {
        communicating: {
            high: "Communication is much more indirect and high-context in the target culture.",
            low: "The target culture is significantly more direct and low-context.",
            highCons: "Read between the lines; focus on HOW things are said, not just WHAT is said.",
            lowCons: "Be explicit and literal. Don't assume others will catch subtle hints.",
        },
        evaluating: {
            high: "Negative feedback is delivered much more indirectly or softened.",
            low: "Feedback is blunt and direct. It's not personal, it's professional.",
            highCons: "Give feedback in private and use plenty of 'upgraders' (softening words).",
            lowCons: "Don't be offended by direct criticism; be honest and upfront in return.",
        },
        leading: {
            high: "The target culture expects a much more hierarchical approach.",
            low: "The target culture is highly egalitarian; titles matter less than ideas.",
            highCons: "Respect the chain of command. Defer to formal authority in public.",
            lowCons: "Communicate across levels. Encourage subordinates to challenge you.",
        },
        deciding: {
            high: "Decisions are top-down and rapid, but may be revisited.",
            low: "Decisions are consensual; getting everyone on board is the priority.",
            highCons: "Wait for the formal 'OK'. Don't be surprised by quick pivots later.",
            lowCons: "Invest time in 'nemawashi' (informal consensus building) before meetings.",
        },
        trusting: {
            high: "Trust is built through personal relationships and shared time.",
            low: "Trust is task-based; you're trusted if you deliver results.",
            highCons: "Invest in long lunches and coffee. Relationships are the prerequisite for work.",
            lowCons: "Focus on reliability and quality. Personal rapport follows successful delivery.",
        },
        disagreeing: {
            high: "Open disagreement is avoided to preserve group harmony.",
            low: "Confrontation is seen as a healthy way to reach the truth.",
            highCons: "Avoid 'calling someone out' in group settings. Use private check-ins.",
            lowCons: "Don't avoid debates. Proving your point logically is respected.",
        },
        scheduling: {
            high: "Time is flexible (Polychronic). Deadlines are suggestions.",
            low: "Time is linear and rigid. Punctuality is the highest form of respect.",
            highCons: "Stay agile. Focus on flow and adaptability rather than a fixed clock.",
            lowCons: "Arrive 5 minutes early. Adhere strictly to agenda start/end times.",
        },
    };

    const data = insights[key];
    if (!data) return null;

    return {
        meaning: diff > 0 ? data.high : data.low,
        consideration: diff > 0 ? data.highCons : data.lowCons,
    };
};

/**
 * Maps Hofstede gaps to qualitative insights.
 * Hofstede scores are 0-100.
 */
const getHofstedeInsight = (key: string, homeVal: number, targetVal: number): Partial<CulturalInsight> | null => {
    const diff = targetVal - homeVal;
    if (Math.abs(diff) < 25) return null;

    const insights: Record<string, { high: string; low: string; highCons: string; lowCons: string }> = {
        pdi: {
            high: "Societal power is concentrated. Subordinates expect direction.",
            low: "Inequality is minimized. Subordinates expect to be consulted.",
            highCons: "Project authority. Don't ask 'What do you think?' too early.",
            lowCons: "Be a facilitator, not a boss. Empower team members to own tasks.",
        },
        idv: {
            high: "Individualism is high. People look after themselves and immediate family.",
            low: "Collectivism is strong. Loyalty to the group (family, tribe, company) is paramount.",
            highCons: "Acknowledge individual achievements and foster competition.",
            lowCons: "Reward the team, not just the star. Avoid 'singling out' individuals.",
        },
        mas: {
            high: "Masculine values: Competition, achievement, and success drive society.",
            low: "Feminine values: Caring for others and quality of life are the primary goals.",
            highCons: "Focus on targets, KPIs, and being the best in the market.",
            lowCons: "Emphasize work-life balance, well-being, and social responsibility.",
        },
        uai: {
            high: "High uncertainty avoidance. Rules, procedures, and 'truth' are strictly maintained.",
            low: "Low uncertainty avoidance. Ambiguity is tolerated; rules are flexible.",
            highCons: "Provide detailed plans and clear documentation. Minimize risk.",
            lowCons: "Stay flexible. Encourage innovation and unconventional solutions.",
        },
        lto: {
            high: "Long-term orientation. Persistence and thrift are valued for the future.",
            low: "Short-term orientation. Respect for tradition and 'quick wins' are favored.",
            highCons: "Think in decades. Prioritize sustainable growth over quarterly reports.",
            lowCons: "Deliver immediate results and respect established cultural traditions.",
        },
        ivr: {
            high: "Indulgent culture. People value the gratification of human drives.",
            low: "Restraint culture. Social norms suppress gratification of needs.",
            highCons: "Allow for fun and social spontaneity in the workplace.",
            lowCons: "Ensure a serious, professional tone. Keep leisure and work separate.",
        },
    };

    const data = insights[key];
    if (!data) return null;

    return {
        meaning: diff > 0 ? data.high : data.low,
        consideration: diff > 0 ? data.highCons : data.lowCons,
    };
};

/**
 * Maps GLOBE gaps to qualitative insights.
 * GLOBE scores are 1-7.
 */
const getGlobeInsight = (key: string, homeVal: number, targetVal: number): Partial<CulturalInsight> | null => {
    const diff = targetVal - homeVal;
    if (Math.abs(diff) < 1.0) return null;

    const insights: Record<string, { high: string; low: string; highCons: string; lowCons: string }> = {
        performanceOrientation: {
            high: "Deep focus on performance improvement and excellence.",
            low: "Priority on loyalty, tradition, and family backgrounds.",
            highCons: "Set high standards and link rewards directly to results.",
            lowCons: "Show respect for heritage and tenure. Trust takes time to build.",
        },
        assertiveness: {
            high: "Communication is forceful, direct, and can be aggressive.",
            low: "Interactions are modest, tender, and non-confrontational.",
            highCons: "Be assertive. State your case strongly to be heard.",
            lowCons: "Use soft language and avoid 'winning' arguments at all costs.",
        },
        futureOrientation: {
            high: "Strong emphasis on planning, investing, and delayed gratification.",
            low: "Focus on the present. Immediate enjoyment is prioritized.",
            highCons: "Present long-term visions and detailed implementation phases.",
            lowCons: "Emphasize current benefits and immediate 'wins'.",
        },
        humaneOrientation: {
            high: "Values fairness, altruism, and generosity above all.",
            low: "Focus on self-interest and personal achievement.",
            highCons: "Highlight the social impact and benefit to the community.",
            lowCons: "Structure incentives around individual gain and career growth.",
        },
        powerDistance: {
            high: "Society agrees power should be stratified and concentrated.",
            low: "Expectation of shared power and democratic processes.",
            highCons: "Respect local hierarchies. Use formal protocols with senior leaders.",
            lowCons: "Encourage bottom-up feedback and participative management.",
        },
        uncertaintyAvoidance: {
            high: "High reliance on norms and procedures to handle unpredictability.",
            low: "High tolerance for ambiguity and lack of formal structure.",
            highCons: "Follow established protocols rigidly. Don't ad-lib procedures.",
            lowCons: "Embrace 'just-in-time' planning. Don't over-regulate every detail.",
        },
    };

    const data = insights[key];
    if (!data) return null;

    return {
        meaning: diff > 0 ? data.high : data.low,
        consideration: diff > 0 ? data.highCons : data.lowCons,
    };
};

/**
 * Maps Schwartz gaps to qualitative insights.
 * Schwartz scores are 1-7.
 */
const getSchwartzInsight = (key: string, homeVal: number, targetVal: number): Partial<CulturalInsight> | null => {
    const diff = targetVal - homeVal;
    if (Math.abs(diff) < 0.8) return null;

    const insights: Record<string, { high: string; low: string; highCons: string; lowCons: string }> = {
        embeddedness: {
            high: "Group identity and shared tradition are central to the self.",
            low: "Individual autonomy and self-directedness are the core values.",
            highCons: "Do not challenge the group's status quo publicly.",
            lowCons: "Expect and encourage unique perspectives and personal paths.",
        },
        hierarchy: {
            high: "Social behavior is regulated by ascribed roles and obedience.",
            low: "Egalitarianism: Individuals are seen as moral equals with shared interests.",
            highCons: "Accept your place in the structure and fulfill role obligations.",
            lowCons: "Engage others as peers. Cooperation is based on mutual concern.",
        },
        mastery: {
            high: "Values self-assertion to change and dominate the environment.",
            low: "Harmony: Values fitting in and protecting the natural/social world.",
            highCons: "Encourage ambition, risk-taking, and aggressive growth.",
            lowCons: "Prioritize sustainability and social fit over 'conquering' the market.",
        },
    };

    const data = insights[key];
    if (!data) return null;

    return {
        meaning: diff > 0 ? data.high : data.low,
        consideration: diff > 0 ? data.highCons : data.lowCons,
    };
};

export const generateCulturalInsights = (
    homeCountry: any,
    targetCountry: any,
    meyerDeltas: any[],
    hofstedeData: any,
    globeData: any,
    schwartzData: any
): CulturalInsight[] => {
    const allInsights: CulturalInsight[] = [];

    // 1. Meyer Gaps
    meyerDeltas.forEach((d) => {
        const key = Object.keys(SCALE_LABELS).find(k => SCALE_LABELS[k] === d.label);
        if (!key) return;
        const homeVal = homeCountry.scores[key];
        const targetVal = targetCountry.scores[key];
        const insightData = getMeyerInsight(key, homeVal, targetVal);
        if (insightData) {
            allInsights.push({
                framework: "Meyer",
                dimension: d.label.split('(')[0].trim(),
                gap: Math.abs(d.value),
                meaning: insightData.meaning!,
                consideration: insightData.consideration!,
                severity: Math.abs(d.value) >= 5 ? "high" : "medium",
            });
        }
    });

    // 2. Hofstede Gaps
    const homeH = hofstedeData[homeCountry.name];
    const targetH = hofstedeData[targetCountry.name];
    if (homeH && targetH) {
        Object.keys(HOFSTEDE_LABELS).forEach((key) => {
            const insightData = getHofstedeInsight(key, homeH[key], targetH[key]);
            if (insightData) {
                allInsights.push({
                    framework: "Hofstede",
                    dimension: HOFSTEDE_LABELS[key].full,
                    gap: Math.abs(targetH[key] - homeH[key]),
                    meaning: insightData.meaning!,
                    consideration: insightData.consideration!,
                    severity: Math.abs(targetH[key] - homeH[key]) >= 50 ? "high" : "medium",
                });
            }
        });
    }

    // 3. GLOBE Gaps
    const homeG = globeData[homeCountry.name];
    const targetG = globeData[targetCountry.name];
    if (homeG && targetG) {
        Object.keys(GLOBE_LABELS).forEach((key) => {
            const insightData = getGlobeInsight(key, homeG[key], targetG[key]);
            if (insightData) {
                allInsights.push({
                    framework: "GLOBE",
                    dimension: GLOBE_LABELS[key].full,
                    gap: Math.round(Math.abs(targetG[key] - homeG[key]) * 10) / 10,
                    meaning: insightData.meaning!,
                    consideration: insightData.consideration!,
                    severity: Math.abs(targetG[key] - homeG[key]) >= 1.5 ? "high" : "medium",
                });
            }
        });
    }

    // 4. Schwartz Gaps
    const homeS = schwartzData[homeCountry.name];
    const targetS = schwartzData[targetCountry.name];
    if (homeS && targetS) {
        Object.keys(SCHWARTZ_LABELS).forEach((key) => {
            const insightData = getSchwartzInsight(key, homeS[key], targetS[key]);
            if (insightData) {
                allInsights.push({
                    framework: "Schwartz",
                    dimension: SCHWARTZ_LABELS[key].full,
                    gap: Math.round(Math.abs(targetS[key] - homeS[key]) * 10) / 10,
                    meaning: insightData.meaning!,
                    consideration: insightData.consideration!,
                    severity: Math.abs(targetS[key] - homeS[key]) >= 1.2 ? "high" : "medium",
                });
            }
        });
    }

    return allInsights.sort((a, b) => {
        // Priority order: high severity first, then by gap percentage
        if (a.severity === "high" && b.severity !== "high") return -1;
        if (a.severity !== "high" && b.severity === "high") return 1;
        return b.gap - a.gap;
    });
};
