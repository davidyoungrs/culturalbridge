/**
 * Cultural data based on Erin Meyer's "The Culture Map" and Hofstede's Cultural Dimensions.
 * Lewis Model classifications from Richard Lewis's "When Cultures Collide."
 * Scores are on a scale of 1-10.
 */

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
