/**
 * Cultural Style Assessment — "What's Your Cultural Profile?"
 *
 * Inspired by Myers-Briggs but adapted for cross-cultural management.
 * 12 scenario-based questions that assess the user across 4 cultural axes:
 *
 *   1. Communication Style:  Direct ◄──► Indirect
 *   2. Decision Making:      Individual ◄──► Consensus
 *   3. Time Orientation:     Structured ◄──► Flexible
 *   4. Trust Building:       Task-Based ◄──► Relationship-Based
 *
 * Result: A 4-letter cultural code (e.g., "DISF" = Direct, Individual, Structured, Task-Focused)
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
};

export const AXES: AxisInfo[] = [
    {
        axis: "communication",
        label: "Communication Style",
        lowLabel: "Direct",
        highLabel: "Indirect",
        lowCode: "D",
        highCode: "N",
        color: "#6366f1",
    },
    {
        axis: "decision",
        label: "Decision Making",
        lowLabel: "Individual",
        highLabel: "Consensus",
        lowCode: "I",
        highCode: "C",
        color: "#f59e0b",
    },
    {
        axis: "time",
        label: "Time Orientation",
        lowLabel: "Structured",
        highLabel: "Flexible",
        lowCode: "S",
        highCode: "F",
        color: "#10b981",
    },
    {
        axis: "trust",
        label: "Trust Building",
        lowLabel: "Task-Focused",
        highLabel: "Relationship-Focused",
        lowCode: "T",
        highCode: "R",
        color: "#ef4444",
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
    // Communication — 3 questions
    {
        id: 1,
        axis: "communication",
        scenario: "A colleague's presentation has a significant flaw. You would:",
        optionA: "Point it out directly so they can fix it quickly",
        optionB: "Hint at the issue privately, letting them discover it themselves",
    },
    {
        id: 2,
        axis: "communication",
        scenario: "When delivering bad news to a client, you prefer to:",
        optionA: "State the situation clearly and move to solutions",
        optionB: "Provide context first, cushion the message, and imply the difficulty",
    },
    {
        id: 3,
        axis: "communication",
        scenario: "In emails, your writing style tends to be:",
        optionA: "Short, action-oriented, and to the point",
        optionB: "Warm, contextual, with pleasantries before the ask",
    },
    // Decision Making — 3 questions
    {
        id: 4,
        axis: "decision",
        scenario: "You're leading a project with a tight deadline. You would:",
        optionA: "Make the key decisions yourself to keep things moving",
        optionB: "Gather input from the team before committing to a direction",
    },
    {
        id: 5,
        axis: "decision",
        scenario: "When you disagree with a group decision, you typically:",
        optionA: "Voice your objection clearly and advocate for your position",
        optionB: "Accept the group's direction and work to make it succeed",
    },
    {
        id: 6,
        axis: "decision",
        scenario: "Your ideal meeting structure is:",
        optionA: "A quick standup where decisions are made on the spot",
        optionB: "A thorough discussion where everyone's perspective is heard",
    },
    // Time Orientation — 3 questions
    {
        id: 7,
        axis: "time",
        scenario: "When planning your work week, you prefer to:",
        optionA: "Follow a detailed schedule with time blocks for each task",
        optionB: "Keep things loose and adapt as priorities shift",
    },
    {
        id: 8,
        axis: "time",
        scenario: "A meeting is scheduled for 2:00 PM. You arrive:",
        optionA: "At 1:55 PM — being on time signals respect",
        optionB: "Around 2:10 PM — the real conversation starts when people are ready",
    },
    {
        id: 9,
        axis: "time",
        scenario: "Mid-project, an interesting tangential opportunity arises. You:",
        optionA: "Stay focused on the original plan — finish first, explore later",
        optionB: "Explore it now — the best ideas emerge from unexpected connections",
    },
    // Trust Building — 3 questions
    {
        id: 10,
        axis: "trust",
        scenario: "When working with a new business partner, trust is built by:",
        optionA: "Delivering quality work on time — results speak for themselves",
        optionB: "Sharing a meal first — knowing someone personally is essential",
    },
    {
        id: 11,
        axis: "trust",
        scenario: "You feel most confident in a deal when:",
        optionA: "The contract is thorough with clear terms and SLAs",
        optionB: "You have a strong personal rapport with the other party",
    },
    {
        id: 12,
        axis: "trust",
        scenario: "At a conference, you prefer to:",
        optionA: "Attend sessions and exchange business cards efficiently",
        optionB: "Have longer conversations with fewer people over coffee",
    },
];

/**
 * Cultural profile type descriptions
 */
export const PROFILE_TYPES: Record<string, { title: string; emoji: string; description: string; bestWith: string; watchFor: string }> = {
    "DIST": { title: "The Executor", emoji: "⚡", description: "You're a fast-moving, results-driven communicator who values efficiency. You say what you mean, decide quickly, and hold people to deadlines.", bestWith: "USA, Germany, Netherlands, Switzerland", watchFor: "May be perceived as blunt or impatient in high-context cultures." },
    "DISR": { title: "The Connector", emoji: "🤝", description: "Direct in speech but warm in relationships. You build trust through genuine personal connections while keeping communication clear.", bestWith: "Australia, Israel, South Africa", watchFor: "Your directness may feel jarring in cultures that expect relationship before business." },
    "DIFT": { title: "The Diplomat", emoji: "🎯", description: "You speak clearly but prefer inclusive decision-making. You balance efficiency with group harmony and value structured follow-through.", bestWith: "Canada, Scandinavia, New Zealand", watchFor: "Consensus-seeking may slow you down in fast-paced or hierarchical environments." },
    "DIFR": { title: "The Bridge Builder", emoji: "🌉", description: "Direct communicator who values group harmony and deep relationships. You naturally mediate between different cultural styles.", bestWith: "UK, France (business)", watchFor: "You may over-invest in relationships when others just want the deliverable." },
    "DIST_F": { title: "The Improviser", emoji: "🎭", description: "You say what you mean and decide quickly, but you're comfortable with fluid timelines. An action-oriented free spirit.", bestWith: "Israel, parts of Australia", watchFor: "Your flexibility with time may frustrate punctuality-driven cultures." },
    "NIST": { title: "The Strategist", emoji: "♟️", description: "You read between the lines, make independent judgments, and value punctuality. You prefer to observe before acting.", bestWith: "Japan (business contexts), Finland", watchFor: "Your indirect style may be misread as evasion in direct cultures." },
    "NISR": { title: "The Sage", emoji: "🧘", description: "You listen deeply, act independently when needed, but invest heavily in personal relationships. Patience is your superpower.", bestWith: "Japan, China, Vietnam", watchFor: "Your pace may feel too slow for action-oriented cultures." },
    "NCFT": { title: "The Analyst", emoji: "📊", description: "Indirect, consensus-driven, flexible with time, but ultimately focused on the task at hand. You bring calm, thorough analysis.", bestWith: "South Korea, Indonesia, Thailand", watchFor: "May struggle in environments that demand quick, public decision-making." },
    "NCFR": { title: "The Cultivator", emoji: "🌱", description: "You're the ultimate relationship builder — patient, consensus-oriented, flexible, and deeply invested in personal bonds.", bestWith: "Brazil, India, Saudi Arabia, Mexico", watchFor: "Task-oriented cultures may see you as unfocused or slow to deliver." },
    "NCSR": { title: "The Elder", emoji: "🏛️", description: "You guide through indirect wisdom, build consensus, honor schedules, and invest deeply in relationships. Natural mentor figure.", bestWith: "China, Japan, South Korea", watchFor: "Very direct cultures may struggle to read your true position." },
    "NCST": { title: "The Planner", emoji: "📋", description: "Thoughtful, indirect communicator who values group input and structured timelines. You plan meticulously and avoid surprises.", bestWith: "Germany (engineering), Japan (manufacturing)", watchFor: "Overly structured approach may stifle creativity in flexible cultures." },
    "NIFT": { title: "The Observer", emoji: "🔭", description: "Quietly independent, you prefer subtle communication and flexible timelines. You read situations carefully before acting.", bestWith: "Finland, Hong Kong", watchFor: "Your independence may conflict with collectivist cultures." },
    "NIFR": { title: "The Weaver", emoji: "🧵", description: "Indirect, independent, flexible, and relationship-focused. You quietly build deep connections while maintaining personal autonomy.", bestWith: "Parts of India, Iran", watchFor: "Your need for autonomy may seem disconnected in consensus cultures." },
    "DICR": { title: "The Collaborator", emoji: "🎪", description: "Direct in speech, consensus-driven, relationship-first. You bring energy and warmth to group problem-solving.", bestWith: "Brazil (tech), South Africa", watchFor: "Your direct style in a consensus frame may confuse hierarchy-driven cultures." },
    "DICS": { title: "The Facilitator", emoji: "🎛️", description: "Direct, consensus-driven, structured, and task-oriented. You run tight ships with everyone's input.", bestWith: "Scandinavia, Netherlands", watchFor: "May seem too process-heavy for fast-moving startup cultures." },
    "DICF": { title: "The Campaigner", emoji: "📢", description: "Direct, consensus-driven, flexible with time. You lead by rallying people around shared vision.", bestWith: "Argentina, Spain (startups)", watchFor: "Your flexibility may conflict with deadline-strict environments." },
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
