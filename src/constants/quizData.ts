/**
 * Cultural Alignment Assessment — "Understanding Your Behavioral Profile"
 * 
 * 12 scenario-based questions that assess behavioral preferences across 4 neutral alignment axes:
 * 
 *   1. Information Flow:     Explicit ◄──► Implicit
 *   2. Decision Framework:   Autonomous ◄──► Collaborative
 *   3. Schedule Approach:    Linear ◄──► Fluid
 *   4. Relationship Basis:   Objective-Based ◄──► Rapport-Based
 * 
 * Result: A 4-letter behavioral code (e.g., "ALOR" = Autonomous, Linear, Objective, Rapport-Based)
 */

export type CulturalAxis = "communication" | "decision" | "time" | "trust";

export type AxisInfo = {
    axis: CulturalAxis;
    label: string;
    lowLabel: string;     // score toward 0
    highLabel: string;    // score toward 100
    lowCode: string;      // single letter
    highCode: string;     // single letter
    color: string;
    description: string;
};

export const AXES: AxisInfo[] = [
    {
        axis: "communication",
        label: "Information Flow",
        lowLabel: "Explicit",
        highLabel: "Implicit",
        lowCode: "E",
        highCode: "M",
        color: "#6366f1",
        description: "Measures whether meaning is conveyed primarily through direct, literal words (Explicit) or relies on shared context and nuance (Implicit).",
    },
    {
        axis: "decision",
        label: "Decision Framework",
        lowLabel: "Autonomous",
        highLabel: "Collaborative",
        lowCode: "A",
        highCode: "C",
        color: "#f59e0b",
        description: "Assesses the preference for independent, leader-driven decision-making vs. a consensus-oriented, team-based approach.",
    },
    {
        axis: "time",
        label: "Schedule Approach",
        lowLabel: "Linear",
        highLabel: "Fluid",
        lowCode: "L",
        highCode: "F",
        color: "#10b981",
        description: "Identifies whether schedules are viewed as fixed commitments (Linear) or as flexible guidelines that shift with priorities (Fluid).",
    },
    {
        axis: "trust",
        label: "Relationship Basis",
        lowLabel: "Objective-Based",
        highLabel: "Rapport-Based",
        lowCode: "O",
        highCode: "R",
        color: "#ef4444",
        description: "Determines if professional trust is built through technical competence and reliability (Objective) or through personal bonding and shared history (Rapport).",
    },
];

export type QuizQuestion = {
    id: number;
    axis: CulturalAxis;
    scenario: string;
    optionA: string;  // low score (toward lowLabel)
    optionB: string;  // high score (toward highLabel)
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    // Information Flow — 3 questions
    {
        id: 1,
        axis: "communication",
        scenario: "When reviewing a colleague's work that requires correction, you usually:",
        optionA: "Address the specific points immediately and clearly",
        optionB: "Provide observations that allow them to identify the adjustments themselves",
    },
    {
        id: 2,
        axis: "communication",
        scenario: "When sharing critical project updates with a partner, you prefer to:",
        optionA: "Present the facts directly and focus on next steps",
        optionB: "Build a broader context and suggest implications gradually",
    },
    {
        id: 3,
        axis: "communication",
        scenario: "In professional written correspondence, your style is typically:",
        optionA: "Concise and focused on the immediate objective",
        optionB: "Contextual, incorporating detail and nuanced formatting",
    },
    // Decision Framework — 3 questions
    {
        id: 4,
        axis: "decision",
        scenario: "When leading an initiative with significant time constraints, you tend to:",
        optionA: "Determine the primary direction yourself to maintain momentum",
        optionB: "Seek collective input before finalizing the path forward",
    },
    {
        id: 5,
        axis: "decision",
        scenario: "If you find yourself disagreeing with a team's majority view, you usually:",
        optionA: "Synthesize your perspective and advocate for an alternative",
        optionB: "Support the final group consensus to maintain team alignment",
    },
    {
        id: 6,
        axis: "decision",
        scenario: "Your preferred collaborative environment involves:",
        optionA: "Rapid iterations where decisions are made through active leadership",
        optionB: "Comprehensive discussions that integrate all available perspectives",
    },
    // Schedule Approach — 3 questions
    {
        id: 7,
        axis: "time",
        scenario: "When organizing your weekly activity, you prefer to:",
        optionA: "Maintain a steady sequence with specific windows for each task",
        optionB: "Establish broad goals and adapt your focus as situations evolve",
    },
    {
        id: 8,
        axis: "time",
        scenario: "At the start of a scheduled assembly, your arrival is consistently:",
        optionA: "Slightly early — appearing precisely when expected demonstrates reliability",
        optionB: "Variable — you engage once the group has reached a critical mass",
    },
    {
        id: 9,
        axis: "time",
        scenario: "If an unexpected opportunity emerges during a project, you would:",
        optionA: "Prioritize the existing plan and evaluate the new lead later",
        optionB: "Adjust the current workflow to explore the possibility immediately",
    },
    // Relationship Basis — 3 questions
    {
        id: 10,
        axis: "trust",
        scenario: "In a new professional collaboration, confidence is established through:",
        optionA: "Demonstrable reliability and the consistent delivery of outcomes",
        optionB: "Sustained engagement and understanding personal motivations",
    },
    {
        id: 11,
        axis: "trust",
        scenario: "You feel most secure in a partnership when:",
        optionA: "The agreement is codified with detailed operational terms",
        optionB: "You have established strong mutual understanding with the other party",
    },
    {
        id: 12,
        axis: "trust",
        scenario: "At professional networking events, you prefer to:",
        optionA: "Maximize interactions and exchange relevant information efficiently",
        optionB: "Focus on fewer, more meaningful conversations to build rapport",
    },
];

/**
 * Behavioral profile type descriptions
 */
export const PROFILE_TYPES: Record<string, { title: string; emoji: string; description: string; bestWith: string; watchFor: string }> = {
    "EALR": { title: "The Accomplisher", emoji: "⚡", description: "You are a results-oriented communicator who values clarity and precision. You prefer autonomous progress but invest in strong group rapport.", bestWith: "USA, Canada, Australia", watchFor: "Your focus on clarity may be perceived as too direct in subtle environments." },
    "EALO": { title: "The Driver", emoji: "🏎️", description: "Fast-paced, clear, and focused on logical outcomes. You value linear progress and high-accountability systems.", bestWith: "Germany, Switzerland, Netherlands", watchFor: "You may overlook relational nuances when focusing on tactical efficiency." },
    "ECLR": { title: "The Harmonizer", emoji: "🤝", description: "You combine clear communication with a collaborative decision style. You value group unity as much as project objectives.", bestWith: "Scandinavia, New Zealand", watchFor: "Consensus-seeking may occasionally slow your response time." },
    "ECLO": { title: "The Coordinator", emoji: "📊", description: "Clear, collaborative, and highly structured. You excel at managing complex projects through group transparency and detailed planning.", bestWith: "Singapore, UK", watchFor: "Your preference for structure may limit adaptability in fluid markets." },
    "EAFR": { title: "The Dynamic", emoji: "🌪️", description: "A clear communicator who makes independent decisions and adapts quickly to changing timelines. Relationship-focused and agile.", bestWith: "South Africa, Israel", watchFor: "Your fluid approach to time may challenge partners with rigid schedules." },
    "VALO": { title: "The Architect", emoji: "🏛️", description: "You prefer subtle communication, autonomous thinking, and highly structured environments. You plan deeply and act precisely.", bestWith: "Finland, Japan (corporate)", watchFor: "Your implicit style may leave direct-preference partners seeking more detail." },
    "VALR": { title: "The Strategist", emoji: "♟️", description: "Subtle and independent, you build trust through long-term rapport. You value the underlying context of every interaction.", bestWith: "Japan, South Korea", watchFor: "Your preference for autonomy may seem disconnected in heavy consensus cultures." },
    "VCLO": { title: "The Analyst", emoji: "🔬", description: "Quietly collaborative and highly structured. You value technical objective-based outcomes and group reliability.", bestWith: "Austria, Poland", watchFor: "You may find high-rapport environments distracting from the objective task." },
    "VCLR": { title: "The Cultivator", emoji: "🌱", description: "You are the ultimate relationship builder — patient, collaborative, and deeply invested in the collective spirit and rapport.", bestWith: "Brazil, Mexico, Indonesia", watchFor: "Objective-focused partners may perceive your relational focus as a lack of urgency." },
    "VCFR": { title: "The Mediator", emoji: "🕯️", description: "Patient, implicit, and highly adaptable. you excel at building group consensus through subtle influence and rapport.", bestWith: "India, Thailand, Saudi Arabia", watchFor: "Your fluid and implicit style may be misread as a lack of direction by linear thinkers." },
    "VCLO_F": { title: "The Observer", emoji: "🔭", description: "You value group wisdom, implicit understanding, and flexible timelines. You wait for the right moment to integrate.", bestWith: "Vietnam, parts of West Africa", watchFor: "You may need to explicitly state your position in more assertive environments." },
    "MCLR": { title: "The Weaver", emoji: "🧵", description: "Implicit, collaborative, and rapport-focused. You build deep, lasting structures through consensus and personal connection.", bestWith: "China, Southeast Asia", watchFor: "Direct communicators may struggle to identify your specific stance." },
};

/**
 * Calculate the quiz results from answers.
 * answers: Record<questionId, 'a' | 'b'>
 * Returns scores per axis (0-100, where 0=lowLabel, 100=highLabel)
 */
export function calculateProfile(answers: Record<number, "a" | "b">): Record<CulturalAxis, number> {
    const axisTotals: Record<CulturalAxis, { sum: number; count: number }> = {
        communication: { sum: 0, count: 0 },
        decision: { sum: 0, count: 0 },
        time: { sum: 0, count: 0 },
        trust: { sum: 0, count: 0 },
    };

    for (const q of QUIZ_QUESTIONS) {
        if (answers[q.id]) {
            axisTotals[q.axis].count++;
            axisTotals[q.axis].sum += answers[q.id] === "b" ? 100 : 0;
        }
    }

    return {
        communication: axisTotals.communication.count > 0 ? Math.round(axisTotals.communication.sum / axisTotals.communication.count) : 50,
        decision: axisTotals.decision.count > 0 ? Math.round(axisTotals.decision.sum / axisTotals.decision.count) : 50,
        time: axisTotals.time.count > 0 ? Math.round(axisTotals.time.sum / axisTotals.time.count) : 50,
        trust: axisTotals.trust.count > 0 ? Math.round(axisTotals.trust.sum / axisTotals.trust.count) : 50,
    };
}

export function getProfileCode(scores: Record<CulturalAxis, number>): string {
    return AXES.map((a) => (scores[a.axis] < 50 ? a.lowCode : a.highCode)).join("");
}

export function getProfileType(code: string) {
    return PROFILE_TYPES[code] || {
        title: "The Explorer",
        emoji: "🧭",
        description: "You have a unique cultural style that blends elements from multiple profiles. This makes you adaptable across diverse cultural settings.",
        bestWith: "Multicultural teams and hybrid environments",
        watchFor: "You may need to consciously adapt your style depending on the cultural context.",
    };
}
