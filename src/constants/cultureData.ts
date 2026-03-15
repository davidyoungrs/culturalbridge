/**
 * Cultural data based on Erin Meyer's "The Culture Map" and Hofstede's Cultural Dimensions.
 * Lewis Model classifications from Richard Lewis's "When Cultures Collide."
 * Scores are on a scale of 1-10.
 */

export const CITATION = "Data aggregated from Meyer, E. (2014). 'The Culture Map' and Lewis, R. D. (2006). 'When Cultures Collide'. Used for educational research purposes.";

export const SCALE_LABELS: Record<string, string> = {
    communicating: "Communicating (Low vs High Context)",
    evaluating: "Evaluating (Direct vs Indirect Negative Feedback)",
    persuading: "Persuading (Principles vs Applications First)",
    leading: "Leading (Egalitarian vs Hierarchical)",
    deciding: "Deciding (Consensual vs Top-Down)",
    trusting: "Trusting (Task vs Relationship)",
    disagreeing: "Disagreeing (Confrontational vs Avoids Confrontation)",
    scheduling: "Scheduling (Linear vs Flexible Time)",
};

export type CultureScores = {
    [key: string]: number;
    communicating: number;
    evaluating: number;
    persuading: number;
    leading: number;
    deciding: number;
    trusting: number;
    disagreeing: number;
    scheduling: number;
};

/**
 * Richard Lewis Model — "When Cultures Collide"
 * 
 * Linear-Active: Task-oriented, highly organized planners. Talk and listen in equal measure.
 * Multi-Active: People-oriented, loquacious interrelators. Emotion, eloquence, and persuasion.
 * Reactive: Respect-oriented listeners. Courteous, accommodating, compromising, good listeners.
 * 
 * Lewis positions are percentage blends indicating how strongly a culture leans toward each pole.
 */
export type LewisProfile = {
    primary: "Linear-Active" | "Multi-Active" | "Reactive";
    linearActive: number;   // 0-100
    multiActive: number;    // 0-100
    reactive: number;       // 0-100
    traits: string[];
};

export type Country = {
    name: string;
    lewis: LewisProfile;
    scores: CultureScores;
};

export const LEWIS_DESCRIPTIONS: Record<string, { color: string; label: string; description: string }> = {
    "Linear-Active": {
        color: "#6366f1",
        label: "Linear-Active",
        description: "Task-oriented, highly organized planners who complete action chains by doing one thing at a time. They prefer facts over feelings, value privacy, and follow fixed agendas.",
    },
    "Multi-Active": {
        color: "#f59e0b",
        label: "Multi-Active",
        description: "People-oriented, loquacious interrelators who do many things at once. They plan grand outlines, prioritize relationships, and let feelings take precedence over facts.",
    },
    "Reactive": {
        color: "#10b981",
        label: "Reactive",
        description: "Respect-oriented, courteous listeners who rarely initiate action. They react to the other party's position, prioritize harmony, and read the other side with care.",
    },
};

const UNSORTED_COUNTRIES: Country[] = [
    // ─── A ───
    {
        name: "Argentina",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 70, reactive: 15, traits: ["Eloquent debaters", "Passionate negotiators", "Relationship-first"] },
        scores: { communicating: 7, evaluating: 5, persuading: 3, leading: 6, deciding: 6, trusting: 8, disagreeing: 4, scheduling: 8 },
    },
    {
        name: "Australia",
        lewis: { primary: "Linear-Active", linearActive: 65, multiActive: 25, reactive: 10, traits: ["Direct communicators", "Informal egalitarians", "Action-oriented"] },
        scores: { communicating: 2, evaluating: 2, persuading: 8, leading: 2, deciding: 4, trusting: 3, disagreeing: 3, scheduling: 3 },
    },
    // ─── B ───
    {
        name: "Brazil",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 75, reactive: 15, traits: ["Warmth and exuberance", "Flexible with time", "Trust through personal bonds"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 6, deciding: 7, trusting: 8, disagreeing: 5, scheduling: 9 },
    },
    // ─── C ───
    {
        name: "Canada",
        lewis: { primary: "Linear-Active", linearActive: 70, multiActive: 15, reactive: 15, traits: ["Polite and measured", "Consensus seekers", "Multicultural sensitivity"] },
        scores: { communicating: 2, evaluating: 3, persuading: 8, leading: 2, deciding: 4, trusting: 3, disagreeing: 4, scheduling: 2 },
    },
    {
        name: "Chile",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 60, reactive: 20, traits: ["Reserved for Latin America", "Formal business culture", "Relationship-driven"] },
        scores: { communicating: 6, evaluating: 5, persuading: 4, leading: 6, deciding: 6, trusting: 7, disagreeing: 5, scheduling: 7 },
    },
    {
        name: "China",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 15, reactive: 75, traits: ["Face-conscious", "Long-term strategists", "Indirect communicators"] },
        scores: { communicating: 9, evaluating: 8, persuading: 2, leading: 9, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 7 },
    },
    {
        name: "Colombia",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 75, reactive: 15, traits: ["Warm hospitality", "Flexible scheduling", "Personal trust essential"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 7, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 9 },
    },
    {
        name: "Czech Republic",
        lewis: { primary: "Linear-Active", linearActive: 55, multiActive: 30, reactive: 15, traits: ["Thorough planners", "Direct but polite", "Detail-oriented"] },
        scores: { communicating: 4, evaluating: 3, persuading: 2, leading: 5, deciding: 4, trusting: 4, disagreeing: 3, scheduling: 3 },
    },
    // ─── D ───
    {
        name: "Denmark",
        lewis: { primary: "Linear-Active", linearActive: 75, multiActive: 10, reactive: 15, traits: ["Egalitarian culture", "Direct and understated", "Consensus-driven"] },
        scores: { communicating: 3, evaluating: 2, persuading: 5, leading: 1, deciding: 1, trusting: 3, disagreeing: 3, scheduling: 2 },
    },
    // ─── E ───
    {
        name: "Egypt",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["Hospitality paramount", "Eloquent persuasion", "Status-conscious"] },
        scores: { communicating: 8, evaluating: 7, persuading: 4, leading: 8, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    // ─── F ───
    {
        name: "Finland",
        lewis: { primary: "Reactive", linearActive: 35, multiActive: 5, reactive: 60, traits: ["Silent communicators", "Value honesty deeply", "Distrust eloquence"] },
        scores: { communicating: 5, evaluating: 2, persuading: 4, leading: 2, deciding: 2, trusting: 3, disagreeing: 4, scheduling: 1 },
    },
    {
        name: "France",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 55, reactive: 15, traits: ["Intellectual debaters", "Cartesian logic", "Centralized authority"] },
        scores: { communicating: 6, evaluating: 2, persuading: 2, leading: 7, deciding: 8, trusting: 6, disagreeing: 2, scheduling: 5 },
    },
    // ─── G ───
    {
        name: "Germany",
        lewis: { primary: "Linear-Active", linearActive: 85, multiActive: 10, reactive: 5, traits: ["Process-driven", "Direct and factual", "Compartmentalized thinking"] },
        scores: { communicating: 2, evaluating: 1, persuading: 1, leading: 4, deciding: 2, trusting: 3, disagreeing: 2, scheduling: 1 },
    },
    {
        name: "Greece",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 65, reactive: 20, traits: ["Passionate communicators", "Flexible with deadlines", "Relationship-first"] },
        scores: { communicating: 6, evaluating: 5, persuading: 3, leading: 6, deciding: 6, trusting: 7, disagreeing: 4, scheduling: 7 },
    },
    // ─── H ───
    {
        name: "Hong Kong",
        lewis: { primary: "Reactive", linearActive: 30, multiActive: 10, reactive: 60, traits: ["East-West bridge culture", "Efficient and pragmatic", "Face-conscious"] },
        scores: { communicating: 7, evaluating: 7, persuading: 6, leading: 6, deciding: 6, trusting: 7, disagreeing: 7, scheduling: 4 },
    },
    // ─── I ───
    {
        name: "India",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 55, reactive: 30, traits: ["Context-rich communication", "Hierarchical respect", "Flexible and adaptive"] },
        scores: { communicating: 8, evaluating: 7, persuading: 6, leading: 8, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 10 },
    },
    {
        name: "Indonesia",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 20, reactive: 70, traits: ["Harmony-seeking", "Indirect communicators", "Respect for elders"] },
        scores: { communicating: 9, evaluating: 9, persuading: 4, leading: 8, deciding: 8, trusting: 9, disagreeing: 9, scheduling: 8 },
    },
    {
        name: "Iran",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 65, reactive: 25, traits: ["Poetic communicators", "Hospitality-driven", "Indirect but passionate"] },
        scores: { communicating: 8, evaluating: 7, persuading: 3, leading: 8, deciding: 7, trusting: 9, disagreeing: 6, scheduling: 8 },
    },
    {
        name: "Israel",
        lewis: { primary: "Linear-Active", linearActive: 50, multiActive: 40, reactive: 10, traits: ["Blunt communicators", "Debate-oriented", "Flat hierarchies"] },
        scores: { communicating: 2, evaluating: 1, persuading: 3, leading: 1, deciding: 3, trusting: 4, disagreeing: 1, scheduling: 4 },
    },
    {
        name: "Italy",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 65, reactive: 15, traits: ["Expressive and warm", "Flexible with agendas", "Design-minded"] },
        scores: { communicating: 6, evaluating: 4, persuading: 3, leading: 5, deciding: 6, trusting: 7, disagreeing: 3, scheduling: 7 },
    },
    // ─── J ───
    {
        name: "Japan",
        lewis: { primary: "Reactive", linearActive: 20, multiActive: 5, reactive: 75, traits: ["Highly ceremonial", "Silent communicators", "Group consensus (nemawashi)"] },
        scores: { communicating: 10, evaluating: 10, persuading: 3, leading: 8, deciding: 10, trusting: 10, disagreeing: 10, scheduling: 2 },
    },
    // ─── K ───
    {
        name: "Kenya",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 55, reactive: 30, traits: ["Community-oriented", "Respect for elders", "Flexible scheduling"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 7, deciding: 6, trusting: 8, disagreeing: 6, scheduling: 8 },
    },
    // ─── M ───
    {
        name: "Malaysia",
        lewis: { primary: "Reactive", linearActive: 15, multiActive: 25, reactive: 60, traits: ["Harmony-focused", "Indirect feedback", "Multi-ethnic sensitivity"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 7, deciding: 7, trusting: 8, disagreeing: 8, scheduling: 6 },
    },
    {
        name: "Mexico",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 75, reactive: 15, traits: ["Personal warmth", "Flexible with time", "Hierarchy respected"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 7, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 9 },
    },
    // ─── N ───
    {
        name: "Netherlands",
        lewis: { primary: "Linear-Active", linearActive: 75, multiActive: 15, reactive: 10, traits: ["Brutally direct", "Egalitarian to the core", "Consensus through debate"] },
        scores: { communicating: 2, evaluating: 1, persuading: 4, leading: 1, deciding: 2, trusting: 3, disagreeing: 1, scheduling: 2 },
    },
    {
        name: "New Zealand",
        lewis: { primary: "Linear-Active", linearActive: 60, multiActive: 20, reactive: 20, traits: ["Understated and practical", "Informal egalitarians", "Fair-play ethos"] },
        scores: { communicating: 3, evaluating: 3, persuading: 8, leading: 2, deciding: 4, trusting: 3, disagreeing: 4, scheduling: 3 },
    },
    {
        name: "Nigeria",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 65, reactive: 25, traits: ["Energetic communicators", "Entrepreneurial spirit", "Relationship networks"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 8, deciding: 7, trusting: 9, disagreeing: 6, scheduling: 9 },
    },
    {
        name: "Norway",
        lewis: { primary: "Linear-Active", linearActive: 70, multiActive: 10, reactive: 20, traits: ["Modest and understated", "Flat hierarchies", "Consensus-oriented"] },
        scores: { communicating: 3, evaluating: 3, persuading: 5, leading: 1, deciding: 1, trusting: 3, disagreeing: 4, scheduling: 2 },
    },
    // ─── P ───
    {
        name: "Pakistan",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 55, reactive: 35, traits: ["Hospitality culture", "Hierarchical respect", "Relationship-intensive"] },
        scores: { communicating: 8, evaluating: 7, persuading: 5, leading: 9, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 9 },
    },
    {
        name: "Peru",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 65, reactive: 20, traits: ["Warm and ceremonial", "Flexible timekeeping", "Status-aware"] },
        scores: { communicating: 7, evaluating: 6, persuading: 4, leading: 7, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 9 },
    },
    {
        name: "Philippines",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 30, reactive: 60, traits: ["Harmony-oriented", "Indirect communication", "Utang na loob (debt of gratitude)"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 7, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 7 },
    },
    {
        name: "Poland",
        lewis: { primary: "Linear-Active", linearActive: 50, multiActive: 35, reactive: 15, traits: ["Formal and proud", "Intellectually rigorous", "Hierarchical tendencies"] },
        scores: { communicating: 5, evaluating: 3, persuading: 2, leading: 5, deciding: 4, trusting: 5, disagreeing: 3, scheduling: 4 },
    },
    {
        name: "Portugal",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Diplomatic communicators", "Relationship-oriented", "Saudade mindset"] },
        scores: { communicating: 6, evaluating: 5, persuading: 3, leading: 5, deciding: 5, trusting: 7, disagreeing: 4, scheduling: 6 },
    },
    // ─── R ───
    {
        name: "Russia",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Emotional depth", "Power-distance aware", "Distrust of institutions"] },
        scores: { communicating: 6, evaluating: 3, persuading: 2, leading: 8, deciding: 7, trusting: 7, disagreeing: 4, scheduling: 6 },
    },
    // ─── S ───
    {
        name: "Saudi Arabia",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 65, reactive: 25, traits: ["Honor and hospitality", "Relationship before business", "Patience expected"] },
        scores: { communicating: 8, evaluating: 8, persuading: 4, leading: 9, deciding: 8, trusting: 10, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Singapore",
        lewis: { primary: "Reactive", linearActive: 35, multiActive: 10, reactive: 55, traits: ["Efficient and pragmatic", "Rule-following", "Multi-ethnic harmony"] },
        scores: { communicating: 8, evaluating: 7, persuading: 6, leading: 6, deciding: 6, trusting: 6, disagreeing: 7, scheduling: 3 },
    },
    {
        name: "South Africa",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 45, reactive: 25, traits: ["Ubuntu philosophy", "Diverse communication styles", "Relationship-oriented"] },
        scores: { communicating: 5, evaluating: 4, persuading: 6, leading: 5, deciding: 5, trusting: 6, disagreeing: 4, scheduling: 6 },
    },
    {
        name: "South Korea",
        lewis: { primary: "Reactive", linearActive: 25, multiActive: 10, reactive: 65, traits: ["Confucian hierarchy", "Kibun (mood/feelings) awareness", "Ppalli-ppalli (hurry) work ethic"] },
        scores: { communicating: 9, evaluating: 9, persuading: 3, leading: 8, deciding: 9, trusting: 9, disagreeing: 9, scheduling: 3 },
    },
    {
        name: "Spain",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 65, reactive: 15, traits: ["Passionate debaters", "Flexible timekeeping", "Honor-conscious"] },
        scores: { communicating: 5, evaluating: 4, persuading: 3, leading: 5, deciding: 5, trusting: 7, disagreeing: 3, scheduling: 7 },
    },
    {
        name: "Sweden",
        lewis: { primary: "Linear-Active", linearActive: 70, multiActive: 10, reactive: 20, traits: ["Lagom (moderation)", "Consensus culture", "Understated communication"] },
        scores: { communicating: 3, evaluating: 3, persuading: 5, leading: 1, deciding: 1, trusting: 3, disagreeing: 4, scheduling: 2 },
    },
    {
        name: "Switzerland",
        lewis: { primary: "Linear-Active", linearActive: 80, multiActive: 10, reactive: 10, traits: ["Punctuality paramount", "Precision and quality", "Neutral and discreet"] },
        scores: { communicating: 3, evaluating: 2, persuading: 2, leading: 3, deciding: 2, trusting: 3, disagreeing: 3, scheduling: 1 },
    },
    // ─── T ───
    {
        name: "Thailand",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 20, reactive: 70, traits: ["Mai pen rai (never mind)", "Avoid confrontation", "Sanuk (fun) work ethic"] },
        scores: { communicating: 9, evaluating: 9, persuading: 4, leading: 8, deciding: 8, trusting: 9, disagreeing: 9, scheduling: 7 },
    },
    {
        name: "Turkey",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 60, reactive: 25, traits: ["Hospitality culture", "Bargaining tradition", "Bridge between East and West"] },
        scores: { communicating: 7, evaluating: 6, persuading: 4, leading: 7, deciding: 7, trusting: 8, disagreeing: 5, scheduling: 7 },
    },
    // ─── U ───
    {
        name: "UAE",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 55, reactive: 25, traits: ["Vision-driven", "Relationship networking", "Cosmopolitan hub"] },
        scores: { communicating: 7, evaluating: 7, persuading: 5, leading: 8, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 7 },
    },
    {
        name: "UK",
        lewis: { primary: "Linear-Active", linearActive: 60, multiActive: 20, reactive: 20, traits: ["Understatement and humor", "Polite indirectness", "Class-aware pragmatism"] },
        scores: { communicating: 4, evaluating: 6, persuading: 8, leading: 3, deciding: 5, trusting: 4, disagreeing: 5, scheduling: 3 },
    },
    {
        name: "USA",
        lewis: { primary: "Linear-Active", linearActive: 75, multiActive: 20, reactive: 5, traits: ["Results-oriented", "Direct communicators", "Individual initiative"] },
        scores: { communicating: 1, evaluating: 2, persuading: 9, leading: 2, deciding: 4, trusting: 2, disagreeing: 3, scheduling: 2 },
    },
    // ─── V ───
    {
        name: "Vietnam",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 25, reactive: 65, traits: ["Face-saving culture", "Patient negotiators", "Collective harmony"] },
        scores: { communicating: 9, evaluating: 8, persuading: 4, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 7 },
    },
    // ─── NEW 25 COUNTRIES (93 total) ───
    {
        name: "Algeria",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 55, reactive: 30, traits: ["Hospitality-driven", "Hierarchical respect", "Relationship-building"] },
        scores: { communicating: 8, evaluating: 7, persuading: 5, leading: 9, deciding: 8, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Bulgaria",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 50, reactive: 20, traits: ["Strong pride", "Direct feedback", "Relationship-oriented"] },
        scores: { communicating: 5, evaluating: 4, persuading: 4, leading: 7, deciding: 6, trusting: 7, disagreeing: 4, scheduling: 6 },
    },
    {
        name: "Cambodia",
        lewis: { primary: "Reactive", linearActive: 5, multiActive: 25, reactive: 70, traits: ["Extreme politeness", "Hierarchy-conscious", "Face-saving"] },
        scores: { communicating: 9, evaluating: 9, persuading: 3, leading: 9, deciding: 8, trusting: 10, disagreeing: 9, scheduling: 8 },
    },
    {
        name: "Costa Rica",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 65, reactive: 15, traits: ["Pura Vida mindset", "Friendly and indirect", "Consensus seekers"] },
        scores: { communicating: 6, evaluating: 7, persuading: 5, leading: 5, deciding: 4, trusting: 8, disagreeing: 7, scheduling: 7 },
    },
    {
        name: "Cuba",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 80, reactive: 10, traits: ["High energy", "Strong oral tradition", "Communal focus"] },
        scores: { communicating: 6, evaluating: 5, persuading: 5, leading: 8, deciding: 8, trusting: 9, disagreeing: 4, scheduling: 9 },
    },
    {
        name: "Estonia",
        lewis: { primary: "Linear-Active", linearActive: 70, multiActive: 10, reactive: 20, traits: ["Tech-savvy pragmatists", "Reserved and quiet", "Digital-first"] },
        scores: { communicating: 3, evaluating: 3, persuading: 6, leading: 3, deciding: 3, trusting: 3, disagreeing: 5, scheduling: 2 },
    },
    {
        name: "Guatemala",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["Traditional values", "Polite and formal", "Group loyalty"] },
        scores: { communicating: 8, evaluating: 7, persuading: 4, leading: 8, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Iceland",
        lewis: { primary: "Linear-Active", linearActive: 60, multiActive: 30, reactive: 10, traits: ["Independent spirit", "Resilient planners", "Informal but direct"] },
        scores: { communicating: 3, evaluating: 3, persuading: 7, leading: 2, deciding: 3, trusting: 4, disagreeing: 4, scheduling: 3 },
    },
    {
        name: "Ireland",
        lewis: { primary: "Multi-Active", linearActive: 40, multiActive: 50, reactive: 10, traits: ["Eloquent storytellers", "Informal egalitarians", "Relational trust"] },
        scores: { communicating: 3, evaluating: 5, persuading: 8, leading: 2, deciding: 4, trusting: 5, disagreeing: 5, scheduling: 4 },
    },
    {
        name: "Kuwait",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 60, reactive: 25, traits: ["Hospitality and honor", "Wealthy pragmatism", "Relationship-first"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 9, deciding: 8, trusting: 10, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Latvia",
        lewis: { primary: "Linear-Active", linearActive: 60, multiActive: 25, reactive: 15, traits: ["Pragmatic and reserved", "Diligent workers", "Cultural pride"] },
        scores: { communicating: 4, evaluating: 3, persuading: 5, leading: 5, deciding: 4, trusting: 4, disagreeing: 4, scheduling: 3 },
    },
    {
        name: "Lithuania",
        lewis: { primary: "Linear-Active", linearActive: 55, multiActive: 30, reactive: 15, traits: ["Reserved but direct", "Strong work ethic", "Historically aware"] },
        scores: { communicating: 4, evaluating: 3, persuading: 4, leading: 5, deciding: 5, trusting: 5, disagreeing: 4, scheduling: 4 },
    },
    {
        name: "Luxembourg",
        lewis: { primary: "Linear-Active", linearActive: 70, multiActive: 20, reactive: 10, traits: ["Multilingual experts", "Discreet and formal", "Financial precision"] },
        scores: { communicating: 3, evaluating: 2, persuading: 4, leading: 4, deciding: 3, trusting: 4, disagreeing: 3, scheduling: 2 },
    },
    {
        name: "Mongolia",
        lewis: { primary: "Reactive", linearActive: 20, multiActive: 40, reactive: 40, traits: ["Nomadic resilience", "Direct but respectful", "Stalwart loyalty"] },
        scores: { communicating: 6, evaluating: 5, persuading: 4, leading: 7, deciding: 6, trusting: 8, disagreeing: 6, scheduling: 6 },
    },
    {
        name: "Nepal",
        lewis: { primary: "Reactive", linearActive: 5, multiActive: 35, reactive: 60, traits: ["Deeply religious", "Humble and patient", "Community-bound"] },
        scores: { communicating: 8, evaluating: 8, persuading: 4, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Panama",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 65, reactive: 15, traits: ["Global crossroads", "Trader mindset", "Service-oriented"] },
        scores: { communicating: 6, evaluating: 6, persuading: 5, leading: 7, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 8 },
    },
    {
        name: "Paraguay",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 75, reactive: 15, traits: ["Mestizo pride", "Bilingual society", "Close-knit networks"] },
        scores: { communicating: 7, evaluating: 7, persuading: 5, leading: 8, deciding: 8, trusting: 9, disagreeing: 6, scheduling: 9 },
    },
    {
        name: "Qatar",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 55, reactive: 25, traits: ["Visionary wealth", "High-context culture", "Protocol-oriented"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 9, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Serbia",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Direct and passionate", "Strong hospitality", "Historically driven"] },
        scores: { communicating: 5, evaluating: 3, persuading: 3, leading: 7, deciding: 6, trusting: 7, disagreeing: 3, scheduling: 6 },
    },
    {
        name: "Slovakia",
        lewis: { primary: "Linear-Active", linearActive: 55, multiActive: 30, reactive: 15, traits: ["Process-focused", "Reserved but warm", "Diligent planning"] },
        scores: { communicating: 4, evaluating: 3, persuading: 3, leading: 5, deciding: 4, trusting: 5, disagreeing: 4, scheduling: 3 },
    },
    {
        name: "Slovenia",
        lewis: { primary: "Linear-Active", linearActive: 60, multiActive: 25, reactive: 15, traits: ["Alpine efficiency", "Environmentally aware", "Reserved pragmatists"] },
        scores: { communicating: 4, evaluating: 3, persuading: 4, leading: 3, deciding: 3, trusting: 4, disagreeing: 4, scheduling: 2 },
    },
    {
        name: "Uruguay",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 60, reactive: 15, traits: ["Egalitarian spirit", "Secular and stable", "Measured pace"] },
        scores: { communicating: 5, evaluating: 4, persuading: 4, leading: 4, deciding: 4, trusting: 7, disagreeing: 4, scheduling: 6 },
    },
    {
        name: "Uzbekistan",
        lewis: { primary: "Reactive", linearActive: 15, multiActive: 40, reactive: 45, traits: ["Ancient trade nodes", "Hospitality tradition", "Strong elders' role"] },
        scores: { communicating: 8, evaluating: 7, persuading: 5, leading: 9, deciding: 8, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Zambia",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 50, reactive: 40, traits: ["Peace-loving", "Respect for hierarchy", "Collective decisions"] },
        scores: { communicating: 7, evaluating: 7, persuading: 5, leading: 7, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Zimbabwe",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 50, reactive: 35, traits: ["Resilient spirit", "Formal respect", "Relationship networks"] },
        scores: { communicating: 7, evaluating: 6, persuading: 6, leading: 8, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 8 },
    },
    // ─── NEW 20 COUNTRIES (RESTORED) ───
    {
        name: "Austria",
        lewis: { primary: "Linear-Active", linearActive: 60, multiActive: 25, reactive: 15, traits: ["Direct and punctual", "Pragmatic", "Analytical lean"] },
        scores: { communicating: 2, evaluating: 1, persuading: 5, leading: 4, deciding: 3, trusting: 4, disagreeing: 2, scheduling: 3 },
    },
    {
        name: "Bangladesh",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 60, reactive: 30, traits: ["Widespread hospitality", "Indirect communication", "Patient persistence"] },
        scores: { communicating: 8, evaluating: 8, persuading: 4, leading: 9, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Belgium",
        lewis: { primary: "Linear-Active", linearActive: 55, multiActive: 30, reactive: 15, traits: ["Diplomatic pragmatism", "Pluralistic focus", "Measured directness"] },
        scores: { communicating: 3, evaluating: 3, persuading: 6, leading: 3, deciding: 4, trusting: 4, disagreeing: 3, scheduling: 3 },
    },
    {
        name: "Croatia",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Adriatic openness", "Direct and firm", "Social cohesion"] },
        scores: { communicating: 7, evaluating: 5, persuading: 4, leading: 7, deciding: 7, trusting: 8, disagreeing: 4, scheduling: 7 },
    },
    {
        name: "Ecuador",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 75, reactive: 15, traits: ["Andean warmth", "Polite and indirect", "Relationship-first"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Ethiopia",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 60, reactive: 25, traits: ["Ancient pride", "Formal courtesy", "Strong hierarchies"] },
        scores: { communicating: 9, evaluating: 8, persuading: 4, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Ghana",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["Proverbial wisdom", "Deep hospitality", "Community focus"] },
        scores: { communicating: 8, evaluating: 8, persuading: 3, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Hungary",
        lewis: { primary: "Linear-Active", linearActive: 50, multiActive: 35, reactive: 15, traits: ["Analytical and direct", "Principled lean", "Socially reserved"] },
        scores: { communicating: 4, evaluating: 3, persuading: 4, leading: 6, deciding: 6, trusting: 6, disagreeing: 4, scheduling: 5 },
    },
    {
        name: "Iraq",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["Tribal loyalty", "Generous hosts", "Rhetorical flair"] },
        scores: { communicating: 9, evaluating: 9, persuading: 3, leading: 9, deciding: 9, trusting: 10, disagreeing: 9, scheduling: 10 },
    },
    {
        name: "Jamaica",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 70, reactive: 10, traits: ["Vocal expressiveness", "Loose time focus", "Informal trust"] },
        scores: { communicating: 5, evaluating: 6, persuading: 8, leading: 4, deciding: 5, trusting: 7, disagreeing: 5, scheduling: 8 },
    },
    {
        name: "Jordan",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 60, reactive: 25, traits: ["Refined hospitality", "Honor-based relations", "Measured context"] },
        scores: { communicating: 8, evaluating: 8, persuading: 4, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Lebanon",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 65, reactive: 15, traits: ["Commercial acumen", "Trilingual fluidity", "Social connectivity"] },
        scores: { communicating: 8, evaluating: 7, persuading: 4, leading: 7, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Morocco",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 60, reactive: 25, traits: ["Bazaar mentality", "Tactful indirectness", "Hospitality focus"] },
        scores: { communicating: 9, evaluating: 8, persuading: 4, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Myanmar",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 30, reactive: 60, traits: ["Quiet respect", "Indirect and polite", "Spiritual grounding"] },
        scores: { communicating: 9, evaluating: 9, persuading: 4, leading: 8, deciding: 7, trusting: 9, disagreeing: 9, scheduling: 8 },
    },
    {
        name: "Romania",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 50, reactive: 20, traits: ["Latin-Balkan mix", "Eloquence", "Relationship importance"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 7, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 7 },
    },
    {
        name: "Sri Lanka",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 55, reactive: 35, traits: ["Gentle courtesy", "High context", "Patient listeners"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Taiwan",
        lewis: { primary: "Reactive", linearActive: 20, multiActive: 30, reactive: 50, traits: ["Harmonious listenings", "Face-saving", "Technical precision"] },
        scores: { communicating: 9, evaluating: 9, persuading: 6, leading: 6, deciding: 5, trusting: 8, disagreeing: 9, scheduling: 5 },
    },
    {
        name: "Tanzania",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 60, reactive: 30, traits: ["Swahili politeness", "Collective effort", "Respectful slow pace"] },
        scores: { communicating: 8, evaluating: 8, persuading: 3, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Ukraine",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 55, reactive: 15, traits: ["Passionate resilience", "Direct evaluator", "Trust through trial"] },
        scores: { communicating: 6, evaluating: 3, persuading: 5, leading: 8, deciding: 8, trusting: 9, disagreeing: 3, scheduling: 7 },
    },
    {
        name: "Venezuela",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 80, reactive: 10, traits: ["High emotional heat", "Relationship priority", "Flexible with time"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 7, deciding: 7, trusting: 8, disagreeing: 6, scheduling: 9 },
    },
    // ─── NEW 30 COUNTRIES ───
    {
        name: "Albania",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Hospitality (Besa)", "Direct but relational", "Strong family bonds"] },
        scores: { communicating: 7, evaluating: 4, persuading: 4, leading: 8, deciding: 7, trusting: 9, disagreeing: 4, scheduling: 7 },
    },
    {
        name: "Armenia",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["High emotionality", "Pride in heritage", "Close social circles"] },
        scores: { communicating: 8, evaluating: 7, persuading: 5, leading: 8, deciding: 8, trusting: 10, disagreeing: 5, scheduling: 8 },
    },
    {
        name: "Azerbaijan",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 60, reactive: 25, traits: ["Secular but traditional", "Respect for elders", "Business through tea"] },
        scores: { communicating: 8, evaluating: 7, persuading: 4, leading: 9, deciding: 8, trusting: 9, disagreeing: 6, scheduling: 8 },
    },
    {
        name: "Bahrain",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 50, reactive: 30, traits: ["Globalized merchant mind", "Social etiquette", "Honor-based trust"] },
        scores: { communicating: 9, evaluating: 8, persuading: 4, leading: 9, deciding: 8, trusting: 10, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Belarus",
        lewis: { primary: "Linear-Active", linearActive: 55, multiActive: 30, reactive: 15, traits: ["Reserved and stoic", "Pragmatic planning", "Doubt of outsiders"] },
        scores: { communicating: 4, evaluating: 4, persuading: 5, leading: 8, deciding: 8, trusting: 6, disagreeing: 6, scheduling: 4 },
    },
    {
        name: "Bolivia",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["Indigenous influence", "Collectivist lean", "Patient negotiators"] },
        scores: { communicating: 8, evaluating: 8, persuading: 6, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Bosnia and Herzegovina",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 60, reactive: 20, traits: ["Multi-ethnic complexity", "Hospitality", "Passionate debaters"] },
        scores: { communicating: 7, evaluating: 5, persuading: 4, leading: 7, deciding: 7, trusting: 9, disagreeing: 4, scheduling: 8 },
    },
    {
        name: "Botswana",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 50, reactive: 20, traits: ["Consensus culture (Kgotla)", "Stable pragmatism", "Respectful directness"] },
        scores: { communicating: 6, evaluating: 6, persuading: 7, leading: 4, deciding: 3, trusting: 7, disagreeing: 5, scheduling: 5 },
    },
    {
        name: "Cameroon",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 60, reactive: 30, traits: ["Linguistic diversity", "Vibrant markets", "Strong father-figures"] },
        scores: { communicating: 9, evaluating: 8, persuading: 4, leading: 9, deciding: 8, trusting: 10, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Cyprus",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 50, reactive: 20, traits: ["Mediterranean pace", "Family businesses", "Indirect conflict resolution"] },
        scores: { communicating: 7, evaluating: 6, persuading: 7, leading: 5, deciding: 6, trusting: 8, disagreeing: 6, scheduling: 7 },
    },
    {
        name: "El Salvador",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 70, reactive: 15, traits: ["Hardworking spirit", "Community-centric", "High formality"] },
        scores: { communicating: 8, evaluating: 8, persuading: 6, leading: 9, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Georgia",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 65, reactive: 20, traits: ["Knightly values", "Vivid eloquence", "Fierce independence"] },
        scores: { communicating: 7, evaluating: 4, persuading: 6, leading: 8, deciding: 7, trusting: 10, disagreeing: 3, scheduling: 8 },
    },
    {
        name: "Guyana",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 60, reactive: 20, traits: ["Anglo-Caribbean mix", "Social fluidity", "Spoken word value"] },
        scores: { communicating: 5, evaluating: 6, persuading: 7, leading: 6, deciding: 7, trusting: 7, disagreeing: 5, scheduling: 7 },
    },
    {
        name: "Honduras",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 70, reactive: 20, traits: ["Extended family focus", "Affable but cautious", "Indirect feedback"] },
        scores: { communicating: 8, evaluating: 8, persuading: 7, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "Ivory Coast",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 65, reactive: 25, traits: ["Francophone polish", "Social hierarchy", "Eloquent diplomacy"] },
        scores: { communicating: 9, evaluating: 9, persuading: 5, leading: 9, deciding: 8, trusting: 9, disagreeing: 9, scheduling: 9 },
    },
    {
        name: "Kazakhstan",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 50, reactive: 30, traits: ["Steppe hospitality", "Strong state respect", "Relationship pipelines"] },
        scores: { communicating: 8, evaluating: 7, persuading: 5, leading: 9, deciding: 9, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Kyrgyzstan",
        lewis: { primary: "Reactive", linearActive: 10, multiActive: 40, reactive: 50, traits: ["Humble respect", "Clan-based trust", "Slow-paced consensus"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 8 },
    },
    {
        name: "Libya",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 60, reactive: 30, traits: ["Bedouin code", "Tribe-based loyalty", "Indirect communicating"] },
        scores: { communicating: 9, evaluating: 9, persuading: 4, leading: 9, deciding: 9, trusting: 10, disagreeing: 9, scheduling: 10 },
    },
    {
        name: "Malta",
        lewis: { primary: "Multi-Active", linearActive: 35, multiActive: 45, reactive: 20, traits: ["Archipelago identity", "Relational business", "British-influenced process"] },
        scores: { communicating: 4, evaluating: 5, persuading: 7, leading: 4, deciding: 5, trusting: 7, disagreeing: 5, scheduling: 6 },
    },
    {
        name: "Montenegro",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 60, reactive: 20, traits: ["Heroic tradition", "Direct honor", "Oral agreements"] },
        scores: { communicating: 7, evaluating: 3, persuading: 4, leading: 8, deciding: 7, trusting: 9, disagreeing: 3, scheduling: 8 },
    },
    {
        name: "Namibia",
        lewis: { primary: "Linear-Active", linearActive: 50, multiActive: 30, reactive: 20, traits: ["Orderly systems", "Punctual focus", "Calm persistence"] },
        scores: { communicating: 5, evaluating: 5, persuading: 7, leading: 5, deciding: 6, trusting: 6, disagreeing: 5, scheduling: 3 },
    },
    {
        name: "Nicaragua",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 70, reactive: 15, traits: ["Resilient community", "Indirect and polite", "Social orientation"] },
        scores: { communicating: 8, evaluating: 8, persuading: 7, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
    {
        name: "North Macedonia",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Cultural crossroads", "Indirect evaluator", "Relationship nets"] },
        scores: { communicating: 7, evaluating: 6, persuading: 5, leading: 7, deciding: 7, trusting: 9, disagreeing: 5, scheduling: 8 },
    },
    {
        name: "Oman",
        lewis: { primary: "Multi-Active", linearActive: 15, multiActive: 55, reactive: 30, traits: ["Gentle diplomacy", "Deeply respectful", "High context"] },
        scores: { communicating: 10, evaluating: 9, persuading: 4, leading: 9, deciding: 8, trusting: 10, disagreeing: 9, scheduling: 9 },
    },
    {
        name: "Rwanda",
        lewis: { primary: "Reactive", linearActive: 20, multiActive: 30, reactive: 50, traits: ["Disciplined planning", "Reserved politeness", "Order-seeking"] },
        scores: { communicating: 7, evaluating: 8, persuading: 6, leading: 6, deciding: 5, trusting: 8, disagreeing: 8, scheduling: 4 },
    },
    {
        name: "Senegal",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 60, reactive: 30, traits: ["Téranga (Hospitality)", "Eloquence value", "Respect for age"] },
        scores: { communicating: 9, evaluating: 8, persuading: 5, leading: 8, deciding: 8, trusting: 9, disagreeing: 8, scheduling: 10 },
    },
    {
        name: "Suriname",
        lewis: { primary: "Multi-Active", linearActive: 25, multiActive: 55, reactive: 20, traits: ["Pluralistic harmony", "Indirect approach", "Relationship-first"] },
        scores: { communicating: 8, evaluating: 7, persuading: 6, leading: 7, deciding: 7, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Trinidad and Tobago",
        lewis: { primary: "Multi-Active", linearActive: 30, multiActive: 55, reactive: 15, traits: ["Carnival mentality", "Relational trust", "Adaptable rhythm"] },
        scores: { communicating: 5, evaluating: 6, persuading: 8, leading: 5, deciding: 6, trusting: 7, disagreeing: 5, scheduling: 7 },
    },
    {
        name: "Tunisia",
        lewis: { primary: "Multi-Active", linearActive: 20, multiActive: 60, reactive: 20, traits: ["Coastal openness", "Academic tradition", "Relationship-based"] },
        scores: { communicating: 8, evaluating: 7, persuading: 5, leading: 8, deciding: 8, trusting: 9, disagreeing: 7, scheduling: 8 },
    },
    {
        name: "Uganda",
        lewis: { primary: "Multi-Active", linearActive: 10, multiActive: 65, reactive: 25, traits: ["Perpetual friendliness", "Relational time", "Oral communication focus"] },
        scores: { communicating: 8, evaluating: 8, persuading: 5, leading: 8, deciding: 7, trusting: 9, disagreeing: 8, scheduling: 9 },
    },
];


export const COUNTRIES = UNSORTED_COUNTRIES.sort((a, b) => a.name.localeCompare(b.name));

export const INDUSTRIES: Record<string, Partial<Record<keyof typeof SCALE_LABELS, number>>> = {
    "Software/Tech": {
        leading: -2,
        deciding: -1,
        communicating: -1,
    },
    "Manufacturing": {
        scheduling: -2,
        leading: 1,
    },
    "Finance": {
        deciding: 1,
        evaluating: -1,
    },
    "Healthcare": {
        deciding: -1,
        trusting: 1,
    },
};
