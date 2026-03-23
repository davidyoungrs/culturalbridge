import { type CBIScores } from "./culturalWeights";
import { CCUB_DATA } from "../constants/ccubData";

export interface CulturalInsight {
    framework: "CBI";
    dimension: string;
    key: string;
    direction: "high" | "low";
    gap: number;
    meaning: string;
    consideration: string;
    severity: "high" | "medium" | "low";
    anchor?: string;
}

const getCBIInsight = (key: keyof CBIScores, homeVal: number, targetVal: number): Partial<CulturalInsight> | null => {
    const diff = targetVal - homeVal;
    if (Math.abs(diff) < 20) return null;

    const insights: Record<keyof CBIScores, { high: string; low: string; highCons: string; lowCons: string }> = {
        relationshipTrust: {
            high: "Target culture prioritizes collective harmony and relationship-driven trust.",
            low: "Target culture focuses on task-based reliability and independent achievement.",
            highCons: "Invest time in social rapport before business. Trust is personal, not just professional.",
            lowCons: "Focus on delivering results and meeting deadlines. Personal rapport follows performance.",
        },
        adaptiveAgility: {
            high: "Target culture is more comfortable with ambiguity and rapid pivots.",
            low: "Target culture values structural predictability and detailed forward planning.",
            highCons: "Stay flexible. Don't over-rely on fixed agendas; be ready for 'just-in-time' changes.",
            lowCons: "Provide clear documentation and minimize surprises. Adhere strictly to schedules.",
        },
        processConsensus: {
            high: "Decisions are more collaborative and require broad buy-in.",
            low: "Decisions are more top-down and centralized for speed.",
            highCons: "Build alignment through informal networking ('Nemawashi') before formal meetings.",
            lowCons: "Direct your proposals to the key decision-makers. Speed is often prioritized over consensus.",
        },
        performanceVelocity: {
            high: "High drive for competitive achievement and direct performance feedback.",
            low: "Priority on group stability, tenure, and indirect feedback loops.",
            highCons: "Set ambitious KPIs and don't be afraid of direct, constructive criticism.",
            lowCons: "Soften negative feedback. Value the social impact and long-term stability above short-term metrics.",
        },
        communicationDirectness: {
            high: "Messages are delivered explicitly and literally (Low-Context).",
            low: "Messages are layered and rely on shared context (High-Context).",
            highCons: "Be blunt and clear. Avoid subtle hints or heavy metaphors.",
            lowCons: "Listen for what is NOT said. Pay attention to subtext, body language, and hierarchy.",
        },
        strategicFocus: {
            high: "Decisions are guided by long-term principles and deep theoretical foundations.",
            low: "Decisions are guided by immediate practical application and short-term wins.",
            highCons: "Explain the 'Why' before the 'How'. Build a strong conceptual argument.",
            lowCons: "Focus on the immediate ROI and practical execution steps. Keep it actionable.",
        },
        empoweredEquality: {
            high: "Preference for flat structures where titles matter less than contribution.",
            low: "Preference for clear hierarchies and deference to formal authority.",
            highCons: "Encourage bottom-up input. Speak directly to any level without protocol.",
            lowCons: "Respect the chain of command. Use professional titles and wait for formal introductions.",
        },
    };

    const data = insights[key];
    if (!data) return null;

    return {
        direction: diff > 0 ? "high" : "low",
        meaning: diff > 0 ? data.high : data.low,
        consideration: diff > 0 ? data.highCons : data.lowCons,
    };
};

export const generateCBIInsights = (
    homeCBI: CBIScores,
    targetCBI: CBIScores,
    targetCountryName?: string
): CulturalInsight[] => {
    const allInsights: CulturalInsight[] = [];

    (Object.keys(homeCBI) as Array<keyof CBIScores>).forEach((key) => {
        const homeVal = homeCBI[key];
        const targetVal = targetCBI[key];
        const insightData = getCBIInsight(key, homeVal, targetVal);
        const gap = Math.abs(targetVal - homeVal);

        if (insightData) {
            const countryCCUB = targetCountryName ? CCUB_DATA[targetCountryName] : null;
            const relevantArtifact = countryCCUB?.find(a => a.cbiDimension === key);

            allInsights.push({
                framework: "CBI",
                dimension: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
                key: key,
                direction: insightData.direction as "high" | "low",
                gap: gap,
                meaning: insightData.meaning!,
                consideration: insightData.consideration!,
                severity: gap >= 40 ? "high" : "medium",
                anchor: relevantArtifact?.description
            });
        }
    });

    return allInsights.sort((a, b) => {
        if (a.severity === "high" && b.severity !== "high") return -1;
        if (a.severity !== "high" && b.severity === "high") return 1;
        return b.gap - a.gap;
    });
};
