/**
 * Schwartz Theory of Basic Values — Cultural Value Orientations
 *
 * Shalom Schwartz identified 7 cultural value orientations that define
 * how societies address three fundamental issues:
 *   1. Relations between the individual and the group (Autonomy vs Embeddedness)
 *   2. Responsible social behavior (Egalitarianism vs Hierarchy)
 *   3. The role of humans in the natural/social world (Harmony vs Mastery)
 *
 * Scores are on a relative scale (1-7), representing emphasis on each value.
 * Based on Schwartz (2006) "A Theory of Cultural Value Orientations."
 */

export type SchwartzScores = {
    [key: string]: number;
    intellectualAutonomy: number;
    affectiveAutonomy: number;
    embeddedness: number;
    hierarchy: number;
    egalitarianism: number;
    mastery: number;
    harmony: number;
};

export const SCHWARTZ_LABELS: Record<string, { full: string; description: string; pole: string; color: string }> = {
    intellectualAutonomy: {
        full: "Intellectual Autonomy",
        description: "Encourages individuals to pursue their own ideas and intellectual directions independently.",
        pole: "Autonomy",
        color: "#8b5cf6",
    },
    affectiveAutonomy: {
        full: "Affective Autonomy",
        description: "Encourages individuals to pursue positive experiences and pleasure for themselves.",
        pole: "Autonomy",
        color: "#a855f7",
    },
    embeddedness: {
        full: "Embeddedness",
        description: "Emphasizes maintaining the status quo, propriety, and restraint on actions that might disrupt group solidarity.",
        pole: "Embeddedness",
        color: "#f59e0b",
    },
    hierarchy: {
        full: "Hierarchy",
        description: "Relies on hierarchical systems of ascribed roles to ensure responsible behavior.",
        pole: "Hierarchy",
        color: "#ef4444",
    },
    egalitarianism: {
        full: "Egalitarianism",
        description: "Induces people to recognize one another as moral equals who share basic interests as human beings.",
        pole: "Egalitarianism",
        color: "#10b981",
    },
    mastery: {
        full: "Mastery",
        description: "Encourages active self-assertion to master, direct, and change the natural and social environment.",
        pole: "Mastery",
        color: "#3b82f6",
    },
    harmony: {
        full: "Harmony",
        description: "Emphasizes fitting in harmoniously with the environment rather than exploiting or changing it.",
        pole: "Harmony",
        color: "#14b8a6",
    },
};

/**
 * Schwartz cultural value scores by country (1-7 scale).
 * Based on Schwartz Value Survey data and academic publications.
 */
export const SCHWARTZ_DATA: Record<string, SchwartzScores> = {
    "Argentina": { intellectualAutonomy: 4.2, affectiveAutonomy: 3.9, embeddedness: 3.8, hierarchy: 2.5, egalitarianism: 4.8, mastery: 3.7, harmony: 4.2 },
    "Australia": { intellectualAutonomy: 4.8, affectiveAutonomy: 4.5, embeddedness: 3.3, hierarchy: 2.2, egalitarianism: 4.9, mastery: 4.0, harmony: 4.0 },
    "Brazil": { intellectualAutonomy: 4.3, affectiveAutonomy: 3.8, embeddedness: 3.9, hierarchy: 2.8, egalitarianism: 4.6, mastery: 3.9, harmony: 4.3 },
    "Canada": { intellectualAutonomy: 4.9, affectiveAutonomy: 4.4, embeddedness: 3.2, hierarchy: 2.0, egalitarianism: 5.0, mastery: 4.0, harmony: 4.1 },
    "Chile": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.7, embeddedness: 3.9, hierarchy: 2.6, egalitarianism: 4.7, mastery: 3.5, harmony: 4.4 },
    "China": { intellectualAutonomy: 3.8, affectiveAutonomy: 3.2, embeddedness: 4.5, hierarchy: 3.5, egalitarianism: 4.0, mastery: 4.5, harmony: 4.3 },
    "Colombia": { intellectualAutonomy: 3.8, affectiveAutonomy: 3.6, embeddedness: 4.1, hierarchy: 2.8, egalitarianism: 4.5, mastery: 3.7, harmony: 4.1 },
    "Czech Republic": { intellectualAutonomy: 4.5, affectiveAutonomy: 4.0, embeddedness: 3.5, hierarchy: 2.4, egalitarianism: 4.7, mastery: 3.8, harmony: 4.0 },
    "Denmark": { intellectualAutonomy: 5.2, affectiveAutonomy: 4.6, embeddedness: 2.8, hierarchy: 1.8, egalitarianism: 5.3, mastery: 3.5, harmony: 4.4 },
    "Egypt": { intellectualAutonomy: 3.3, affectiveAutonomy: 2.8, embeddedness: 4.8, hierarchy: 3.6, egalitarianism: 3.8, mastery: 3.8, harmony: 3.9 },
    "Finland": { intellectualAutonomy: 5.1, affectiveAutonomy: 4.2, embeddedness: 3.0, hierarchy: 1.9, egalitarianism: 5.2, mastery: 3.6, harmony: 4.5 },
    "France": { intellectualAutonomy: 5.0, affectiveAutonomy: 4.5, embeddedness: 3.2, hierarchy: 2.4, egalitarianism: 5.0, mastery: 3.8, harmony: 4.2 },
    "Germany": { intellectualAutonomy: 4.8, affectiveAutonomy: 3.9, embeddedness: 3.3, hierarchy: 2.3, egalitarianism: 4.8, mastery: 4.2, harmony: 3.8 },
    "Greece": { intellectualAutonomy: 4.2, affectiveAutonomy: 3.6, embeddedness: 3.9, hierarchy: 2.5, egalitarianism: 4.6, mastery: 3.5, harmony: 4.2 },
    "Hong Kong": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.5, embeddedness: 4.2, hierarchy: 3.2, egalitarianism: 4.2, mastery: 4.3, harmony: 4.1 },
    "India": { intellectualAutonomy: 3.6, affectiveAutonomy: 3.1, embeddedness: 4.4, hierarchy: 3.4, egalitarianism: 4.2, mastery: 4.2, harmony: 4.0 },
    "Indonesia": { intellectualAutonomy: 3.3, affectiveAutonomy: 2.9, embeddedness: 4.7, hierarchy: 3.3, egalitarianism: 4.0, mastery: 3.8, harmony: 4.3 },
    "Iran": { intellectualAutonomy: 3.5, affectiveAutonomy: 3.0, embeddedness: 4.5, hierarchy: 3.4, egalitarianism: 3.9, mastery: 3.9, harmony: 4.1 },
    "Israel": { intellectualAutonomy: 4.7, affectiveAutonomy: 3.7, embeddedness: 3.4, hierarchy: 2.3, egalitarianism: 4.8, mastery: 4.3, harmony: 3.7 },
    "Italy": { intellectualAutonomy: 4.5, affectiveAutonomy: 4.1, embeddedness: 3.6, hierarchy: 2.5, egalitarianism: 4.7, mastery: 3.8, harmony: 4.3 },
    "Japan": { intellectualAutonomy: 4.3, affectiveAutonomy: 3.4, embeddedness: 4.0, hierarchy: 3.0, egalitarianism: 4.3, mastery: 4.5, harmony: 4.5 },
    "Kenya": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.0, embeddedness: 4.5, hierarchy: 3.2, egalitarianism: 4.0, mastery: 3.8, harmony: 4.0 },
    "Malaysia": { intellectualAutonomy: 3.5, affectiveAutonomy: 3.2, embeddedness: 4.5, hierarchy: 3.3, egalitarianism: 4.0, mastery: 4.0, harmony: 4.3 },
    "Mexico": { intellectualAutonomy: 3.7, affectiveAutonomy: 3.5, embeddedness: 4.2, hierarchy: 2.8, egalitarianism: 4.4, mastery: 3.8, harmony: 4.1 },
    "Netherlands": { intellectualAutonomy: 5.1, affectiveAutonomy: 4.5, embeddedness: 2.9, hierarchy: 1.9, egalitarianism: 5.2, mastery: 3.7, harmony: 4.3 },
    "New Zealand": { intellectualAutonomy: 4.8, affectiveAutonomy: 4.4, embeddedness: 3.2, hierarchy: 2.1, egalitarianism: 5.0, mastery: 3.9, harmony: 4.2 },
    "Nigeria": { intellectualAutonomy: 3.3, affectiveAutonomy: 3.1, embeddedness: 4.5, hierarchy: 3.3, egalitarianism: 4.0, mastery: 4.0, harmony: 3.8 },
    "Norway": { intellectualAutonomy: 5.0, affectiveAutonomy: 4.3, embeddedness: 3.0, hierarchy: 1.8, egalitarianism: 5.3, mastery: 3.5, harmony: 4.5 },
    "Pakistan": { intellectualAutonomy: 3.2, affectiveAutonomy: 2.7, embeddedness: 4.8, hierarchy: 3.6, egalitarianism: 3.7, mastery: 3.9, harmony: 3.8 },
    "Peru": { intellectualAutonomy: 3.6, affectiveAutonomy: 3.3, embeddedness: 4.3, hierarchy: 2.8, egalitarianism: 4.3, mastery: 3.5, harmony: 4.2 },
    "Philippines": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.3, embeddedness: 4.5, hierarchy: 3.2, egalitarianism: 4.2, mastery: 3.9, harmony: 4.1 },
    "Poland": { intellectualAutonomy: 4.2, affectiveAutonomy: 3.5, embeddedness: 3.8, hierarchy: 2.6, egalitarianism: 4.5, mastery: 4.0, harmony: 3.8 },
    "Portugal": { intellectualAutonomy: 4.3, affectiveAutonomy: 3.7, embeddedness: 3.8, hierarchy: 2.5, egalitarianism: 4.8, mastery: 3.5, harmony: 4.5 },
    "Russia": { intellectualAutonomy: 3.8, affectiveAutonomy: 3.2, embeddedness: 4.2, hierarchy: 3.2, egalitarianism: 4.0, mastery: 4.3, harmony: 3.5 },
    "Saudi Arabia": { intellectualAutonomy: 3.2, affectiveAutonomy: 2.6, embeddedness: 5.0, hierarchy: 3.8, egalitarianism: 3.6, mastery: 3.8, harmony: 3.9 },
    "Singapore": { intellectualAutonomy: 4.1, affectiveAutonomy: 3.5, embeddedness: 4.1, hierarchy: 3.2, egalitarianism: 4.3, mastery: 4.4, harmony: 4.0 },
    "South Africa": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.7, embeddedness: 3.8, hierarchy: 2.7, egalitarianism: 4.4, mastery: 3.9, harmony: 4.0 },
    "South Korea": { intellectualAutonomy: 3.9, affectiveAutonomy: 3.3, embeddedness: 4.3, hierarchy: 3.1, egalitarianism: 4.1, mastery: 4.4, harmony: 4.1 },
    "Spain": { intellectualAutonomy: 4.5, affectiveAutonomy: 4.2, embeddedness: 3.5, hierarchy: 2.4, egalitarianism: 4.8, mastery: 3.6, harmony: 4.4 },
    "Sweden": { intellectualAutonomy: 5.3, affectiveAutonomy: 4.7, embeddedness: 2.7, hierarchy: 1.7, egalitarianism: 5.4, mastery: 3.3, harmony: 4.6 },
    "Switzerland": { intellectualAutonomy: 5.0, affectiveAutonomy: 4.2, embeddedness: 3.1, hierarchy: 2.1, egalitarianism: 5.0, mastery: 4.1, harmony: 4.2 },
    "Thailand": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.2, embeddedness: 4.5, hierarchy: 3.2, egalitarianism: 4.1, mastery: 3.7, harmony: 4.5 },
    "Turkey": { intellectualAutonomy: 3.7, affectiveAutonomy: 3.3, embeddedness: 4.3, hierarchy: 3.0, egalitarianism: 4.2, mastery: 4.0, harmony: 3.9 },
    "UAE": { intellectualAutonomy: 3.5, affectiveAutonomy: 3.0, embeddedness: 4.6, hierarchy: 3.5, egalitarianism: 3.8, mastery: 4.1, harmony: 3.9 },
    "UK": { intellectualAutonomy: 4.8, affectiveAutonomy: 4.3, embeddedness: 3.2, hierarchy: 2.1, egalitarianism: 4.9, mastery: 4.0, harmony: 4.0 },
    "USA": { intellectualAutonomy: 4.6, affectiveAutonomy: 4.4, embeddedness: 3.3, hierarchy: 2.2, egalitarianism: 4.7, mastery: 4.5, harmony: 3.7 },
    "Vietnam": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.0, embeddedness: 4.6, hierarchy: 3.3, egalitarianism: 4.0, mastery: 4.0, harmony: 4.4 },
    // ─── NEW 20 COUNTRIES ───
    "Austria": { intellectualAutonomy: 4.9, affectiveAutonomy: 4.0, embeddedness: 3.2, hierarchy: 2.2, egalitarianism: 4.8, mastery: 4.2, harmony: 3.9 },
    "Bangladesh": { intellectualAutonomy: 3.1, affectiveAutonomy: 2.6, embeddedness: 4.9, hierarchy: 3.6, egalitarianism: 3.6, mastery: 3.8, harmony: 3.9 },
    "Belgium": { intellectualAutonomy: 4.8, affectiveAutonomy: 4.3, embeddedness: 3.2, hierarchy: 2.2, egalitarianism: 5.0, mastery: 3.7, harmony: 4.2 },
    "Croatia": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.5, embeddedness: 3.9, hierarchy: 2.6, egalitarianism: 4.4, mastery: 3.6, harmony: 4.1 },
    "Ecuador": { intellectualAutonomy: 3.5, affectiveAutonomy: 3.3, embeddedness: 4.4, hierarchy: 3.0, egalitarianism: 4.2, mastery: 3.5, harmony: 4.2 },
    "Ethiopia": { intellectualAutonomy: 3.2, affectiveAutonomy: 2.8, embeddedness: 4.7, hierarchy: 3.4, egalitarianism: 3.8, mastery: 3.7, harmony: 4.0 },
    "Ghana": { intellectualAutonomy: 3.3, affectiveAutonomy: 3.0, embeddedness: 4.6, hierarchy: 3.2, egalitarianism: 4.0, mastery: 3.9, harmony: 3.9 },
    "Hungary": { intellectualAutonomy: 4.3, affectiveAutonomy: 3.6, embeddedness: 3.6, hierarchy: 2.5, egalitarianism: 4.4, mastery: 4.1, harmony: 3.7 },
    "Iraq": { intellectualAutonomy: 3.0, affectiveAutonomy: 2.5, embeddedness: 5.1, hierarchy: 3.8, egalitarianism: 3.5, mastery: 3.8, harmony: 3.7 },
    "Jamaica": { intellectualAutonomy: 3.8, affectiveAutonomy: 4.0, embeddedness: 3.8, hierarchy: 2.5, egalitarianism: 4.2, mastery: 3.8, harmony: 3.9 },
    "Jordan": { intellectualAutonomy: 3.2, affectiveAutonomy: 2.7, embeddedness: 4.7, hierarchy: 3.5, egalitarianism: 3.7, mastery: 3.8, harmony: 4.0 },
    "Lebanon": { intellectualAutonomy: 3.6, affectiveAutonomy: 3.2, embeddedness: 4.3, hierarchy: 3.1, egalitarianism: 3.9, mastery: 3.9, harmony: 3.8 },
    "Morocco": { intellectualAutonomy: 3.3, affectiveAutonomy: 2.9, embeddedness: 4.6, hierarchy: 3.4, egalitarianism: 3.8, mastery: 3.7, harmony: 4.1 },
    "Myanmar": { intellectualAutonomy: 3.0, affectiveAutonomy: 2.6, embeddedness: 4.9, hierarchy: 3.4, egalitarianism: 3.7, mastery: 3.5, harmony: 4.6 },
    "Romania": { intellectualAutonomy: 3.8, affectiveAutonomy: 3.3, embeddedness: 4.0, hierarchy: 2.8, egalitarianism: 4.2, mastery: 3.8, harmony: 3.8 },
    "Sri Lanka": { intellectualAutonomy: 3.3, affectiveAutonomy: 2.9, embeddedness: 4.5, hierarchy: 3.3, egalitarianism: 3.9, mastery: 3.6, harmony: 4.3 },
    "Taiwan": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.3, embeddedness: 4.1, hierarchy: 3.0, egalitarianism: 4.2, mastery: 4.4, harmony: 4.3 },
    "Tanzania": { intellectualAutonomy: 3.2, affectiveAutonomy: 2.8, embeddedness: 4.7, hierarchy: 3.3, egalitarianism: 3.9, mastery: 3.7, harmony: 4.1 },
    "Ukraine": { intellectualAutonomy: 3.7, affectiveAutonomy: 3.1, embeddedness: 4.1, hierarchy: 3.1, egalitarianism: 3.9, mastery: 4.2, harmony: 3.5 },
    "Venezuela": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.5, embeddedness: 4.3, hierarchy: 2.9, egalitarianism: 4.1, mastery: 3.6, harmony: 4.0 },
    // ─── NEW 25 COUNTRIES (93 total) ───
    "Algeria": { intellectualAutonomy: 3.4, affectiveAutonomy: 2.9, embeddedness: 4.6, hierarchy: 3.5, egalitarianism: 3.8, mastery: 3.9, harmony: 4.1 },
    "Bulgaria": { intellectualAutonomy: 3.6, affectiveAutonomy: 3.4, embeddedness: 4.3, hierarchy: 3.0, egalitarianism: 4.1, mastery: 4.0, harmony: 3.8 },
    "Cambodia": { intellectualAutonomy: 3.1, affectiveAutonomy: 2.8, embeddedness: 4.8, hierarchy: 3.5, egalitarianism: 3.7, mastery: 3.6, harmony: 4.3 },
    "Costa Rica": { intellectualAutonomy: 3.9, affectiveAutonomy: 4.2, embeddedness: 3.8, hierarchy: 2.4, egalitarianism: 4.6, mastery: 3.6, harmony: 4.3 },
    "Cuba": { intellectualAutonomy: 3.6, affectiveAutonomy: 3.8, embeddedness: 4.4, hierarchy: 2.8, egalitarianism: 4.2, mastery: 3.7, harmony: 4.1 },
    "Estonia": { intellectualAutonomy: 4.8, affectiveAutonomy: 3.9, embeddedness: 3.2, hierarchy: 2.1, egalitarianism: 4.8, mastery: 4.0, harmony: 4.0 },
    "Guatemala": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.3, embeddedness: 4.5, hierarchy: 3.0, egalitarianism: 4.1, mastery: 3.6, harmony: 4.1 },
    "Iceland": { intellectualAutonomy: 5.1, affectiveAutonomy: 4.6, embeddedness: 2.8, hierarchy: 1.8, egalitarianism: 5.3, mastery: 3.5, harmony: 4.5 },
    "Ireland": { intellectualAutonomy: 4.6, affectiveAutonomy: 4.4, embeddedness: 3.3, hierarchy: 2.1, egalitarianism: 5.0, mastery: 4.0, harmony: 4.0 },
    "Kuwait": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.0, embeddedness: 4.7, hierarchy: 3.5, egalitarianism: 3.8, mastery: 4.0, harmony: 4.2 },
    "Latvia": { intellectualAutonomy: 4.3, affectiveAutonomy: 3.6, embeddedness: 3.7, hierarchy: 2.4, egalitarianism: 4.6, mastery: 3.9, harmony: 3.8 },
    "Lithuania": { intellectualAutonomy: 4.2, affectiveAutonomy: 3.5, embeddedness: 3.8, hierarchy: 2.5, egalitarianism: 4.5, mastery: 4.0, harmony: 3.8 },
    "Luxembourg": { intellectualAutonomy: 4.8, affectiveAutonomy: 4.2, embeddedness: 3.1, hierarchy: 2.1, egalitarianism: 5.1, mastery: 3.8, harmony: 4.1 },
    "Mongolia": { intellectualAutonomy: 3.3, affectiveAutonomy: 3.2, embeddedness: 4.8, hierarchy: 3.2, egalitarianism: 4.0, mastery: 3.9, harmony: 4.2 },
    "Nepal": { intellectualAutonomy: 3.1, affectiveAutonomy: 2.8, embeddedness: 4.9, hierarchy: 3.4, egalitarianism: 3.8, mastery: 3.5, harmony: 4.1 },
    "Panama": { intellectualAutonomy: 3.6, affectiveAutonomy: 3.8, embeddedness: 4.2, hierarchy: 2.8, egalitarianism: 4.3, mastery: 3.7, harmony: 4.1 },
    "Paraguay": { intellectualAutonomy: 3.4, affectiveAutonomy: 3.5, embeddedness: 4.4, hierarchy: 3.0, egalitarianism: 4.1, mastery: 3.5, harmony: 4.1 },
    "Qatar": { intellectualAutonomy: 3.5, affectiveAutonomy: 3.1, embeddedness: 4.6, hierarchy: 3.4, egalitarianism: 3.9, mastery: 4.1, harmony: 3.9 },
    "Serbia": { intellectualAutonomy: 3.8, affectiveAutonomy: 3.3, embeddedness: 4.0, hierarchy: 3.0, egalitarianism: 4.1, mastery: 3.9, harmony: 3.9 },
    "Slovakia": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.4, embeddedness: 3.8, hierarchy: 2.7, egalitarianism: 4.4, mastery: 4.1, harmony: 3.7 },
    "Slovenia": { intellectualAutonomy: 4.3, affectiveAutonomy: 3.8, embeddedness: 3.5, hierarchy: 2.4, egalitarianism: 4.7, mastery: 3.8, harmony: 4.1 },
    "Uruguay": { intellectualAutonomy: 4.0, affectiveAutonomy: 3.9, embeddedness: 3.7, hierarchy: 2.3, egalitarianism: 4.7, mastery: 3.6, harmony: 4.3 },
    "Uzbekistan": { intellectualAutonomy: 3.2, affectiveAutonomy: 2.9, embeddedness: 4.8, hierarchy: 3.5, egalitarianism: 3.8, mastery: 3.9, harmony: 4.2 },
    "Zambia": { intellectualAutonomy: 3.3, affectiveAutonomy: 3.1, embeddedness: 4.5, hierarchy: 3.3, egalitarianism: 4.1, mastery: 3.8, harmony: 3.9 },
    "Zimbabwe": { intellectualAutonomy: 3.3, affectiveAutonomy: 3.2, embeddedness: 4.5, hierarchy: 3.3, egalitarianism: 4.0, mastery: 3.9, harmony: 3.9 },
};

/**
 * The three bipolar dimensions for visual grouping
 */
export const SCHWARTZ_POLES = [
    { pole1: "Autonomy", pole2: "Embeddedness", keys1: ["intellectualAutonomy", "affectiveAutonomy"], keys2: ["embeddedness"] },
    { pole1: "Egalitarianism", pole2: "Hierarchy", keys1: ["egalitarianism"], keys2: ["hierarchy"] },
    { pole1: "Harmony", pole2: "Mastery", keys1: ["harmony"], keys2: ["mastery"] },
];
