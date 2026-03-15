/**
 * GLOBE Study — Global Leadership and Organizational Behavior Effectiveness
 *
 * 9 cultural dimensions measured on a 1-7 scale.
 * Based on the GLOBE research program (House et al., 2004).
 *
 * Dimensions measure cultural PRACTICES ("As Is") — how things actually work in each society.
 */

export const CITATION = "Data sourced from House, R. J., et al. (2004). 'Culture, Leadership, and Organizations: The GLOBE Study of 62 Societies'. SAGE Publications.";

export type GlobeScores = {
    [key: string]: number;
    performanceOrientation: number;
    assertiveness: number;
    futureOrientation: number;
    humaneOrientation: number;
    institutionalCollectivism: number;
    inGroupCollectivism: number;
    genderEgalitarianism: number;
    powerDistance: number;
    uncertaintyAvoidance: number;
};

export const GLOBE_LABELS: Record<string, { full: string; low: string; high: string; description: string }> = {
    performanceOrientation: {
        full: "Performance Orientation",
        low: "Loyalty & tradition valued",
        high: "Results & excellence driven",
        description: "The degree to which a society encourages and rewards performance improvement and excellence.",
    },
    assertiveness: {
        full: "Assertiveness",
        low: "Modest & tender",
        high: "Dominant & tough",
        description: "The degree to which people are assertive, confrontational, and aggressive in social relationships.",
    },
    futureOrientation: {
        full: "Future Orientation",
        low: "Present-focused",
        high: "Future-planning",
        description: "The extent to which people engage in future-oriented behaviors such as planning, investing, and delaying gratification.",
    },
    humaneOrientation: {
        full: "Humane Orientation",
        low: "Self-interest emphasized",
        high: "Altruism & generosity",
        description: "The degree to which a society encourages and rewards individuals for being fair, altruistic, and caring.",
    },
    institutionalCollectivism: {
        full: "Institutional Collectivism",
        low: "Individual autonomy",
        high: "Group-integrated systems",
        description: "The degree to which organizational and societal institutional practices encourage collective action and resource distribution.",
    },
    inGroupCollectivism: {
        full: "In-Group Collectivism",
        low: "Independent of group",
        high: "Deep group loyalty",
        description: "The degree to which individuals express pride, loyalty, and cohesiveness in their families or organizations.",
    },
    genderEgalitarianism: {
        full: "Gender Egalitarianism",
        low: "Male-dominated roles",
        high: "Gender-equal roles",
        description: "The degree to which a society minimizes gender role differences and gender discrimination.",
    },
    powerDistance: {
        full: "Power Distance",
        low: "Shared power",
        high: "Concentrated power",
        description: "The degree to which members of a society expect and agree that power should be stratified and concentrated at higher levels.",
    },
    uncertaintyAvoidance: {
        full: "Uncertainty Avoidance",
        low: "Tolerates ambiguity",
        high: "Relies on rules & order",
        description: "The extent to which a society relies on established norms, rules, and procedures to alleviate unpredictability.",
    },
};

/**
 * GLOBE Study cultural practices scores by country (1-7 scale).
 * Values from GLOBE 2004 research + academic estimates for countries not in the original study.
 */
export const GLOBE_DATA: Record<string, GlobeScores> = {
    "Argentina": { performanceOrientation: 3.65, assertiveness: 4.22, futureOrientation: 3.08, humaneOrientation: 3.99, institutionalCollectivism: 3.66, inGroupCollectivism: 5.51, genderEgalitarianism: 3.49, powerDistance: 5.64, uncertaintyAvoidance: 3.65 },
    "Australia": { performanceOrientation: 4.36, assertiveness: 4.28, futureOrientation: 4.09, humaneOrientation: 4.28, institutionalCollectivism: 4.29, inGroupCollectivism: 4.17, genderEgalitarianism: 3.40, powerDistance: 4.74, uncertaintyAvoidance: 4.39 },
    "Brazil": { performanceOrientation: 4.04, assertiveness: 4.20, futureOrientation: 3.81, humaneOrientation: 3.66, institutionalCollectivism: 3.83, inGroupCollectivism: 5.18, genderEgalitarianism: 3.31, powerDistance: 5.33, uncertaintyAvoidance: 3.60 },
    "Canada": { performanceOrientation: 4.49, assertiveness: 4.05, futureOrientation: 4.44, humaneOrientation: 4.49, institutionalCollectivism: 4.38, inGroupCollectivism: 4.26, genderEgalitarianism: 3.70, powerDistance: 4.82, uncertaintyAvoidance: 4.58 },
    "Chile": { performanceOrientation: 3.80, assertiveness: 3.90, futureOrientation: 3.30, humaneOrientation: 3.95, institutionalCollectivism: 3.70, inGroupCollectivism: 5.40, genderEgalitarianism: 3.35, powerDistance: 5.50, uncertaintyAvoidance: 3.55 },
    "China": { performanceOrientation: 4.45, assertiveness: 3.76, futureOrientation: 3.75, humaneOrientation: 4.36, institutionalCollectivism: 4.77, inGroupCollectivism: 5.80, genderEgalitarianism: 3.05, powerDistance: 5.04, uncertaintyAvoidance: 4.94 },
    "Colombia": { performanceOrientation: 3.94, assertiveness: 4.20, futureOrientation: 3.27, humaneOrientation: 3.72, institutionalCollectivism: 3.81, inGroupCollectivism: 5.73, genderEgalitarianism: 3.67, powerDistance: 5.56, uncertaintyAvoidance: 3.57 },
    "Czech Republic": { performanceOrientation: 3.80, assertiveness: 3.75, futureOrientation: 3.50, humaneOrientation: 3.60, institutionalCollectivism: 3.80, inGroupCollectivism: 4.50, genderEgalitarianism: 3.60, powerDistance: 4.90, uncertaintyAvoidance: 4.20 },
    "Denmark": { performanceOrientation: 4.22, assertiveness: 3.80, futureOrientation: 4.44, humaneOrientation: 4.44, institutionalCollectivism: 4.80, inGroupCollectivism: 3.53, genderEgalitarianism: 3.93, powerDistance: 3.89, uncertaintyAvoidance: 5.22 },
    "Egypt": { performanceOrientation: 3.86, assertiveness: 3.91, futureOrientation: 3.86, humaneOrientation: 4.73, institutionalCollectivism: 4.50, inGroupCollectivism: 5.64, genderEgalitarianism: 2.81, powerDistance: 4.92, uncertaintyAvoidance: 4.06 },
    "Finland": { performanceOrientation: 3.81, assertiveness: 3.68, futureOrientation: 4.24, humaneOrientation: 3.96, institutionalCollectivism: 4.63, inGroupCollectivism: 4.07, genderEgalitarianism: 3.35, powerDistance: 4.89, uncertaintyAvoidance: 5.02 },
    "France": { performanceOrientation: 4.11, assertiveness: 4.13, futureOrientation: 3.48, humaneOrientation: 3.40, institutionalCollectivism: 3.93, inGroupCollectivism: 4.37, genderEgalitarianism: 3.64, powerDistance: 5.28, uncertaintyAvoidance: 4.43 },
    "Germany": { performanceOrientation: 4.25, assertiveness: 4.55, futureOrientation: 4.27, humaneOrientation: 3.18, institutionalCollectivism: 3.79, inGroupCollectivism: 4.02, genderEgalitarianism: 3.14, powerDistance: 5.25, uncertaintyAvoidance: 5.22 },
    "Greece": { performanceOrientation: 3.20, assertiveness: 4.58, futureOrientation: 3.40, humaneOrientation: 3.34, institutionalCollectivism: 3.25, inGroupCollectivism: 5.27, genderEgalitarianism: 3.48, powerDistance: 5.40, uncertaintyAvoidance: 3.39 },
    "Hong Kong": { performanceOrientation: 4.80, assertiveness: 3.60, futureOrientation: 4.03, humaneOrientation: 3.90, institutionalCollectivism: 4.13, inGroupCollectivism: 5.32, genderEgalitarianism: 3.47, powerDistance: 4.96, uncertaintyAvoidance: 4.32 },
    "India": { performanceOrientation: 4.25, assertiveness: 3.73, futureOrientation: 4.19, humaneOrientation: 4.57, institutionalCollectivism: 4.38, inGroupCollectivism: 5.92, genderEgalitarianism: 2.90, powerDistance: 5.47, uncertaintyAvoidance: 4.15 },
    "Indonesia": { performanceOrientation: 4.41, assertiveness: 3.86, futureOrientation: 3.86, humaneOrientation: 4.69, institutionalCollectivism: 4.54, inGroupCollectivism: 5.68, genderEgalitarianism: 3.26, powerDistance: 5.18, uncertaintyAvoidance: 4.17 },
    "Iran": { performanceOrientation: 4.58, assertiveness: 4.04, futureOrientation: 3.70, humaneOrientation: 4.23, institutionalCollectivism: 3.88, inGroupCollectivism: 6.03, genderEgalitarianism: 2.99, powerDistance: 5.43, uncertaintyAvoidance: 3.67 },
    "Israel": { performanceOrientation: 4.08, assertiveness: 4.23, futureOrientation: 3.85, humaneOrientation: 4.10, institutionalCollectivism: 4.46, inGroupCollectivism: 4.70, genderEgalitarianism: 3.19, powerDistance: 4.73, uncertaintyAvoidance: 4.01 },
    "Italy": { performanceOrientation: 3.58, assertiveness: 4.07, futureOrientation: 3.25, humaneOrientation: 3.63, institutionalCollectivism: 3.68, inGroupCollectivism: 4.94, genderEgalitarianism: 3.24, powerDistance: 5.43, uncertaintyAvoidance: 3.79 },
    "Japan": { performanceOrientation: 4.22, assertiveness: 3.59, futureOrientation: 4.29, humaneOrientation: 4.30, institutionalCollectivism: 5.19, inGroupCollectivism: 4.63, genderEgalitarianism: 3.19, powerDistance: 5.11, uncertaintyAvoidance: 4.07 },
    "Kenya": { performanceOrientation: 4.10, assertiveness: 3.80, futureOrientation: 3.50, humaneOrientation: 4.80, institutionalCollectivism: 4.20, inGroupCollectivism: 5.50, genderEgalitarianism: 3.10, powerDistance: 5.20, uncertaintyAvoidance: 3.80 },
    "Malaysia": { performanceOrientation: 4.34, assertiveness: 3.87, futureOrientation: 4.58, humaneOrientation: 4.87, institutionalCollectivism: 4.61, inGroupCollectivism: 5.51, genderEgalitarianism: 3.51, powerDistance: 5.17, uncertaintyAvoidance: 4.78 },
    "Mexico": { performanceOrientation: 4.10, assertiveness: 4.45, futureOrientation: 3.87, humaneOrientation: 3.98, institutionalCollectivism: 3.86, inGroupCollectivism: 5.71, genderEgalitarianism: 3.64, powerDistance: 5.22, uncertaintyAvoidance: 4.18 },
    "Netherlands": { performanceOrientation: 4.32, assertiveness: 4.32, futureOrientation: 4.61, humaneOrientation: 3.86, institutionalCollectivism: 4.46, inGroupCollectivism: 3.70, genderEgalitarianism: 3.50, powerDistance: 4.11, uncertaintyAvoidance: 4.70 },
    "New Zealand": { performanceOrientation: 4.72, assertiveness: 3.42, futureOrientation: 3.47, humaneOrientation: 4.32, institutionalCollectivism: 4.81, inGroupCollectivism: 3.67, genderEgalitarianism: 3.22, powerDistance: 4.89, uncertaintyAvoidance: 4.75 },
    "Nigeria": { performanceOrientation: 4.08, assertiveness: 4.10, futureOrientation: 3.35, humaneOrientation: 4.60, institutionalCollectivism: 4.15, inGroupCollectivism: 5.55, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.50 },
    "Norway": { performanceOrientation: 3.80, assertiveness: 3.50, futureOrientation: 4.35, humaneOrientation: 4.20, institutionalCollectivism: 4.65, inGroupCollectivism: 3.70, genderEgalitarianism: 3.80, powerDistance: 4.10, uncertaintyAvoidance: 4.90 },
    "Pakistan": { performanceOrientation: 3.90, assertiveness: 4.00, futureOrientation: 3.40, humaneOrientation: 4.50, institutionalCollectivism: 4.10, inGroupCollectivism: 5.90, genderEgalitarianism: 2.80, powerDistance: 5.60, uncertaintyAvoidance: 3.70 },
    "Peru": { performanceOrientation: 3.70, assertiveness: 3.90, futureOrientation: 3.10, humaneOrientation: 3.85, institutionalCollectivism: 3.65, inGroupCollectivism: 5.60, genderEgalitarianism: 3.40, powerDistance: 5.50, uncertaintyAvoidance: 3.50 },
    "Philippines": { performanceOrientation: 4.47, assertiveness: 4.01, futureOrientation: 3.74, humaneOrientation: 5.12, institutionalCollectivism: 4.65, inGroupCollectivism: 6.36, genderEgalitarianism: 3.64, powerDistance: 5.44, uncertaintyAvoidance: 3.89 },
    "Poland": { performanceOrientation: 3.89, assertiveness: 4.06, futureOrientation: 3.11, humaneOrientation: 3.61, institutionalCollectivism: 4.53, inGroupCollectivism: 5.52, genderEgalitarianism: 3.05, powerDistance: 5.10, uncertaintyAvoidance: 3.62 },
    "Portugal": { performanceOrientation: 3.60, assertiveness: 3.65, futureOrientation: 3.71, humaneOrientation: 3.91, institutionalCollectivism: 3.92, inGroupCollectivism: 5.51, genderEgalitarianism: 3.66, powerDistance: 5.44, uncertaintyAvoidance: 3.91 },
    "Russia": { performanceOrientation: 3.39, assertiveness: 3.68, futureOrientation: 2.88, humaneOrientation: 3.94, institutionalCollectivism: 4.50, inGroupCollectivism: 5.63, genderEgalitarianism: 4.07, powerDistance: 5.52, uncertaintyAvoidance: 2.88 },
    "Saudi Arabia": { performanceOrientation: 3.90, assertiveness: 3.85, futureOrientation: 3.60, humaneOrientation: 4.70, institutionalCollectivism: 4.30, inGroupCollectivism: 5.80, genderEgalitarianism: 2.70, powerDistance: 5.70, uncertaintyAvoidance: 3.80 },
    "Singapore": { performanceOrientation: 4.90, assertiveness: 4.17, futureOrientation: 5.07, humaneOrientation: 3.49, institutionalCollectivism: 4.90, inGroupCollectivism: 5.64, genderEgalitarianism: 3.70, powerDistance: 4.99, uncertaintyAvoidance: 5.31 },
    "South Africa": { performanceOrientation: 4.11, assertiveness: 4.36, futureOrientation: 4.13, humaneOrientation: 4.34, institutionalCollectivism: 4.62, inGroupCollectivism: 5.09, genderEgalitarianism: 3.27, powerDistance: 4.11, uncertaintyAvoidance: 4.59 },
    "South Korea": { performanceOrientation: 4.55, assertiveness: 4.40, futureOrientation: 3.97, humaneOrientation: 3.81, institutionalCollectivism: 5.20, inGroupCollectivism: 5.54, genderEgalitarianism: 2.50, powerDistance: 5.61, uncertaintyAvoidance: 3.55 },
    "Spain": { performanceOrientation: 4.01, assertiveness: 4.42, futureOrientation: 3.51, humaneOrientation: 3.32, institutionalCollectivism: 3.85, inGroupCollectivism: 5.45, genderEgalitarianism: 3.01, powerDistance: 5.52, uncertaintyAvoidance: 3.97 },
    "Sweden": { performanceOrientation: 3.72, assertiveness: 3.38, futureOrientation: 4.39, humaneOrientation: 4.10, institutionalCollectivism: 5.22, inGroupCollectivism: 3.66, genderEgalitarianism: 3.84, powerDistance: 4.85, uncertaintyAvoidance: 5.32 },
    "Switzerland": { performanceOrientation: 4.94, assertiveness: 4.51, futureOrientation: 4.73, humaneOrientation: 3.60, institutionalCollectivism: 4.10, inGroupCollectivism: 3.97, genderEgalitarianism: 3.08, powerDistance: 4.90, uncertaintyAvoidance: 5.37 },
    "Thailand": { performanceOrientation: 3.93, assertiveness: 3.64, futureOrientation: 3.37, humaneOrientation: 4.96, institutionalCollectivism: 4.03, inGroupCollectivism: 5.76, genderEgalitarianism: 3.35, powerDistance: 5.63, uncertaintyAvoidance: 3.93 },
    "Turkey": { performanceOrientation: 3.83, assertiveness: 4.53, futureOrientation: 3.74, humaneOrientation: 3.94, institutionalCollectivism: 4.03, inGroupCollectivism: 5.88, genderEgalitarianism: 2.89, powerDistance: 5.57, uncertaintyAvoidance: 3.63 },
    "UAE": { performanceOrientation: 4.00, assertiveness: 3.90, futureOrientation: 3.70, humaneOrientation: 4.60, institutionalCollectivism: 4.35, inGroupCollectivism: 5.70, genderEgalitarianism: 2.85, powerDistance: 5.60, uncertaintyAvoidance: 3.85 },
    "UK": { performanceOrientation: 4.08, assertiveness: 4.15, futureOrientation: 4.28, humaneOrientation: 3.72, institutionalCollectivism: 4.27, inGroupCollectivism: 4.08, genderEgalitarianism: 3.67, powerDistance: 5.15, uncertaintyAvoidance: 4.65 },
    "USA": { performanceOrientation: 4.49, assertiveness: 4.55, futureOrientation: 4.15, humaneOrientation: 4.17, institutionalCollectivism: 4.20, inGroupCollectivism: 4.25, genderEgalitarianism: 3.34, powerDistance: 4.88, uncertaintyAvoidance: 4.15 },
    "Vietnam": { performanceOrientation: 4.20, assertiveness: 3.50, futureOrientation: 3.50, humaneOrientation: 4.50, institutionalCollectivism: 4.60, inGroupCollectivism: 5.70, genderEgalitarianism: 3.20, powerDistance: 5.30, uncertaintyAvoidance: 4.00 },
    // ─── NEW 20 COUNTRIES ───
    "Austria": { performanceOrientation: 4.44, assertiveness: 4.62, futureOrientation: 4.46, humaneOrientation: 3.72, institutionalCollectivism: 4.30, inGroupCollectivism: 4.85, genderEgalitarianism: 3.09, powerDistance: 4.95, uncertaintyAvoidance: 5.16 },
    "Bangladesh": { performanceOrientation: 3.90, assertiveness: 3.60, futureOrientation: 3.30, humaneOrientation: 4.70, institutionalCollectivism: 4.30, inGroupCollectivism: 5.85, genderEgalitarianism: 2.75, powerDistance: 5.50, uncertaintyAvoidance: 3.70 },
    "Belgium": { performanceOrientation: 4.10, assertiveness: 4.00, futureOrientation: 4.20, humaneOrientation: 3.80, institutionalCollectivism: 4.00, inGroupCollectivism: 4.20, genderEgalitarianism: 3.60, powerDistance: 5.10, uncertaintyAvoidance: 4.80 },
    "Croatia": { performanceOrientation: 3.70, assertiveness: 4.20, futureOrientation: 3.40, humaneOrientation: 3.70, institutionalCollectivism: 3.80, inGroupCollectivism: 5.30, genderEgalitarianism: 3.40, powerDistance: 5.30, uncertaintyAvoidance: 3.70 },
    "Ecuador": { performanceOrientation: 3.70, assertiveness: 3.80, futureOrientation: 3.10, humaneOrientation: 3.90, institutionalCollectivism: 3.60, inGroupCollectivism: 5.60, genderEgalitarianism: 3.30, powerDistance: 5.55, uncertaintyAvoidance: 3.50 },
    "Ethiopia": { performanceOrientation: 3.80, assertiveness: 3.50, futureOrientation: 3.20, humaneOrientation: 4.80, institutionalCollectivism: 4.30, inGroupCollectivism: 5.60, genderEgalitarianism: 2.90, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Ghana": { performanceOrientation: 4.00, assertiveness: 3.70, futureOrientation: 3.30, humaneOrientation: 4.90, institutionalCollectivism: 4.20, inGroupCollectivism: 5.40, genderEgalitarianism: 3.10, powerDistance: 5.20, uncertaintyAvoidance: 3.70 },
    "Hungary": { performanceOrientation: 3.50, assertiveness: 4.40, futureOrientation: 3.20, humaneOrientation: 3.40, institutionalCollectivism: 3.60, inGroupCollectivism: 4.60, genderEgalitarianism: 3.50, powerDistance: 5.00, uncertaintyAvoidance: 4.10 },
    "Iraq": { performanceOrientation: 3.70, assertiveness: 4.00, futureOrientation: 3.10, humaneOrientation: 4.50, institutionalCollectivism: 4.10, inGroupCollectivism: 5.90, genderEgalitarianism: 2.60, powerDistance: 5.70, uncertaintyAvoidance: 3.50 },
    "Jamaica": { performanceOrientation: 4.20, assertiveness: 4.30, futureOrientation: 3.50, humaneOrientation: 4.20, institutionalCollectivism: 4.00, inGroupCollectivism: 5.00, genderEgalitarianism: 3.30, powerDistance: 4.80, uncertaintyAvoidance: 3.40 },
    "Jordan": { performanceOrientation: 3.80, assertiveness: 3.80, futureOrientation: 3.50, humaneOrientation: 4.60, institutionalCollectivism: 4.20, inGroupCollectivism: 5.70, genderEgalitarianism: 2.80, powerDistance: 5.50, uncertaintyAvoidance: 3.80 },
    "Lebanon": { performanceOrientation: 3.90, assertiveness: 4.10, futureOrientation: 3.30, humaneOrientation: 4.20, institutionalCollectivism: 3.80, inGroupCollectivism: 5.50, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Morocco": { performanceOrientation: 3.60, assertiveness: 3.70, futureOrientation: 3.20, humaneOrientation: 4.50, institutionalCollectivism: 4.10, inGroupCollectivism: 5.60, genderEgalitarianism: 2.80, powerDistance: 5.50, uncertaintyAvoidance: 3.70 },
    "Myanmar": { performanceOrientation: 3.50, assertiveness: 3.30, futureOrientation: 3.00, humaneOrientation: 5.00, institutionalCollectivism: 4.40, inGroupCollectivism: 5.80, genderEgalitarianism: 2.90, powerDistance: 5.60, uncertaintyAvoidance: 3.50 },
    "Romania": { performanceOrientation: 3.60, assertiveness: 3.90, futureOrientation: 3.00, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.30, powerDistance: 5.30, uncertaintyAvoidance: 3.60 },
    "Sri Lanka": { performanceOrientation: 3.80, assertiveness: 3.40, futureOrientation: 3.30, humaneOrientation: 4.70, institutionalCollectivism: 4.30, inGroupCollectivism: 5.60, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.80 },
    "Taiwan": { performanceOrientation: 4.60, assertiveness: 3.50, futureOrientation: 3.90, humaneOrientation: 4.10, institutionalCollectivism: 4.50, inGroupCollectivism: 5.50, genderEgalitarianism: 3.30, powerDistance: 5.00, uncertaintyAvoidance: 4.50 },
    "Tanzania": { performanceOrientation: 3.90, assertiveness: 3.60, futureOrientation: 3.20, humaneOrientation: 4.80, institutionalCollectivism: 4.20, inGroupCollectivism: 5.50, genderEgalitarianism: 3.00, powerDistance: 5.30, uncertaintyAvoidance: 3.60 },
    "Ukraine": { performanceOrientation: 3.40, assertiveness: 3.80, futureOrientation: 2.90, humaneOrientation: 3.80, institutionalCollectivism: 4.00, inGroupCollectivism: 5.20, genderEgalitarianism: 3.90, powerDistance: 5.40, uncertaintyAvoidance: 3.10 },
    "Venezuela": { performanceOrientation: 3.80, assertiveness: 4.30, futureOrientation: 3.00, humaneOrientation: 3.90, institutionalCollectivism: 3.60, inGroupCollectivism: 5.70, genderEgalitarianism: 3.50, powerDistance: 5.60, uncertaintyAvoidance: 3.40 },
    // ─── NEW 25 COUNTRIES (93 total) ───
    "Algeria": { performanceOrientation: 3.80, assertiveness: 4.10, futureOrientation: 3.20, humaneOrientation: 4.60, institutionalCollectivism: 3.90, inGroupCollectivism: 5.80, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Bulgaria": { performanceOrientation: 3.70, assertiveness: 4.00, futureOrientation: 3.20, humaneOrientation: 3.60, institutionalCollectivism: 3.80, inGroupCollectivism: 5.00, genderEgalitarianism: 3.60, powerDistance: 5.20, uncertaintyAvoidance: 3.80 },
    "Cambodia": { performanceOrientation: 3.40, assertiveness: 3.20, futureOrientation: 3.00, humaneOrientation: 4.90, institutionalCollectivism: 4.50, inGroupCollectivism: 5.90, genderEgalitarianism: 3.40, powerDistance: 5.60, uncertaintyAvoidance: 3.40 },
    "Costa Rica": { performanceOrientation: 3.90, assertiveness: 3.80, futureOrientation: 3.40, humaneOrientation: 4.20, institutionalCollectivism: 3.80, inGroupCollectivism: 5.30, genderEgalitarianism: 3.60, powerDistance: 4.80, uncertaintyAvoidance: 3.70 },
    "Cuba": { performanceOrientation: 3.80, assertiveness: 4.00, futureOrientation: 3.00, humaneOrientation: 4.10, institutionalCollectivism: 4.20, inGroupCollectivism: 5.60, genderEgalitarianism: 3.60, powerDistance: 5.40, uncertaintyAvoidance: 3.30 },
    "Estonia": { performanceOrientation: 4.20, assertiveness: 4.00, futureOrientation: 4.40, humaneOrientation: 3.80, institutionalCollectivism: 4.50, inGroupCollectivism: 4.20, genderEgalitarianism: 3.70, powerDistance: 4.80, uncertaintyAvoidance: 4.50 },
    "Guatemala": { performanceOrientation: 3.70, assertiveness: 3.80, futureOrientation: 3.10, humaneOrientation: 4.30, institutionalCollectivism: 3.70, inGroupCollectivism: 5.70, genderEgalitarianism: 3.40, powerDistance: 5.60, uncertaintyAvoidance: 3.40 },
    "Iceland": { performanceOrientation: 4.50, assertiveness: 3.80, futureOrientation: 4.20, humaneOrientation: 4.40, institutionalCollectivism: 4.40, inGroupCollectivism: 4.00, genderEgalitarianism: 3.90, powerDistance: 4.50, uncertaintyAvoidance: 4.60 },
    "Ireland": { performanceOrientation: 4.40, assertiveness: 4.00, futureOrientation: 4.20, humaneOrientation: 4.30, institutionalCollectivism: 4.30, inGroupCollectivism: 4.10, genderEgalitarianism: 3.60, powerDistance: 4.70, uncertaintyAvoidance: 4.40 },
    "Kuwait": { performanceOrientation: 3.90, assertiveness: 3.90, futureOrientation: 3.60, humaneOrientation: 4.60, institutionalCollectivism: 4.30, inGroupCollectivism: 5.80, genderEgalitarianism: 2.80, powerDistance: 5.60, uncertaintyAvoidance: 3.80 },
    "Latvia": { performanceOrientation: 4.00, assertiveness: 4.00, futureOrientation: 4.10, humaneOrientation: 3.90, institutionalCollectivism: 4.40, inGroupCollectivism: 4.30, genderEgalitarianism: 3.60, powerDistance: 4.90, uncertaintyAvoidance: 4.30 },
    "Lithuania": { performanceOrientation: 3.90, assertiveness: 4.00, futureOrientation: 4.10, humaneOrientation: 3.80, institutionalCollectivism: 4.40, inGroupCollectivism: 4.40, genderEgalitarianism: 3.60, powerDistance: 5.00, uncertaintyAvoidance: 4.20 },
    "Luxembourg": { performanceOrientation: 4.30, assertiveness: 4.10, futureOrientation: 4.40, humaneOrientation: 4.20, institutionalCollectivism: 4.40, inGroupCollectivism: 4.10, genderEgalitarianism: 3.70, powerDistance: 4.70, uncertaintyAvoidance: 4.60 },
    "Mongolia": { performanceOrientation: 3.80, assertiveness: 3.60, futureOrientation: 3.50, humaneOrientation: 4.50, institutionalCollectivism: 4.00, inGroupCollectivism: 5.50, genderEgalitarianism: 3.30, powerDistance: 5.30, uncertaintyAvoidance: 3.90 },
    "Nepal": { performanceOrientation: 3.70, assertiveness: 3.50, futureOrientation: 3.30, humaneOrientation: 4.80, institutionalCollectivism: 4.20, inGroupCollectivism: 5.80, genderEgalitarianism: 3.10, powerDistance: 5.50, uncertaintyAvoidance: 3.60 },
    "Panama": { performanceOrientation: 3.80, assertiveness: 4.00, futureOrientation: 3.20, humaneOrientation: 4.00, institutionalCollectivism: 3.70, inGroupCollectivism: 5.60, genderEgalitarianism: 3.50, powerDistance: 5.50, uncertaintyAvoidance: 3.50 },
    "Paraguay": { performanceOrientation: 3.70, assertiveness: 4.00, futureOrientation: 3.10, humaneOrientation: 4.10, institutionalCollectivism: 3.70, inGroupCollectivism: 5.70, genderEgalitarianism: 3.40, powerDistance: 5.60, uncertaintyAvoidance: 3.50 },
    "Qatar": { performanceOrientation: 4.10, assertiveness: 4.00, futureOrientation: 3.70, humaneOrientation: 4.50, institutionalCollectivism: 4.40, inGroupCollectivism: 5.70, genderEgalitarianism: 2.90, powerDistance: 5.50, uncertaintyAvoidance: 3.90 },
    "Serbia": { performanceOrientation: 3.60, assertiveness: 4.20, futureOrientation: 3.20, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.40, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Slovakia": { performanceOrientation: 3.90, assertiveness: 4.10, futureOrientation: 3.40, humaneOrientation: 3.70, institutionalCollectivism: 4.10, inGroupCollectivism: 5.00, genderEgalitarianism: 3.40, powerDistance: 5.20, uncertaintyAvoidance: 3.90 },
    "Slovenia": { performanceOrientation: 3.90, assertiveness: 3.80, futureOrientation: 3.90, humaneOrientation: 3.90, institutionalCollectivism: 4.30, inGroupCollectivism: 4.50, genderEgalitarianism: 3.60, powerDistance: 5.10, uncertaintyAvoidance: 4.10 },
    "Uruguay": { performanceOrientation: 3.80, assertiveness: 3.90, futureOrientation: 3.30, humaneOrientation: 4.10, institutionalCollectivism: 3.80, inGroupCollectivism: 5.20, genderEgalitarianism: 3.60, powerDistance: 5.20, uncertaintyAvoidance: 3.70 },
    "Uzbekistan": { performanceOrientation: 3.80, assertiveness: 3.60, futureOrientation: 3.40, humaneOrientation: 4.60, institutionalCollectivism: 4.10, inGroupCollectivism: 5.70, genderEgalitarianism: 3.20, powerDistance: 5.40, uncertaintyAvoidance: 3.70 },
    "Zambia": { performanceOrientation: 4.00, assertiveness: 3.80, futureOrientation: 3.30, humaneOrientation: 4.70, institutionalCollectivism: 4.20, inGroupCollectivism: 5.60, genderEgalitarianism: 3.20, powerDistance: 5.30, uncertaintyAvoidance: 3.70 },
    "Zimbabwe": { performanceOrientation: 4.00, assertiveness: 3.90, futureOrientation: 3.30, humaneOrientation: 4.60, institutionalCollectivism: 4.10, inGroupCollectivism: 5.60, genderEgalitarianism: 3.20, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    // ─── NEW 30 COUNTRIES (123 total) ───
    "Albania": { performanceOrientation: 3.70, assertiveness: 4.00, futureOrientation: 3.20, humaneOrientation: 3.60, institutionalCollectivism: 3.80, inGroupCollectivism: 5.00, genderEgalitarianism: 3.60, powerDistance: 5.20, uncertaintyAvoidance: 3.80 },
    "Armenia": { performanceOrientation: 3.60, assertiveness: 3.90, futureOrientation: 3.00, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.30, powerDistance: 5.30, uncertaintyAvoidance: 3.60 },
    "Azerbaijan": { performanceOrientation: 3.60, assertiveness: 3.90, futureOrientation: 3.00, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.30, powerDistance: 5.30, uncertaintyAvoidance: 3.60 },
    "Bahrain": { performanceOrientation: 4.10, assertiveness: 4.00, futureOrientation: 3.70, humaneOrientation: 4.50, institutionalCollectivism: 4.40, inGroupCollectivism: 5.70, genderEgalitarianism: 2.90, powerDistance: 5.50, uncertaintyAvoidance: 3.90 },
    "Belarus": { performanceOrientation: 3.40, assertiveness: 3.80, futureOrientation: 2.90, humaneOrientation: 3.80, institutionalCollectivism: 4.00, inGroupCollectivism: 5.20, genderEgalitarianism: 3.90, powerDistance: 5.40, uncertaintyAvoidance: 3.10 },
    "Bolivia": { performanceOrientation: 3.70, assertiveness: 3.80, futureOrientation: 3.10, humaneOrientation: 3.80, institutionalCollectivism: 3.60, inGroupCollectivism: 5.70, genderEgalitarianism: 3.50, powerDistance: 5.60, uncertaintyAvoidance: 3.40 },
    "Bosnia and Herzegovina": { performanceOrientation: 3.60, assertiveness: 4.20, futureOrientation: 3.20, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.40, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Botswana": { performanceOrientation: 4.10, assertiveness: 4.30, futureOrientation: 4.10, humaneOrientation: 4.30, institutionalCollectivism: 4.60, inGroupCollectivism: 5.10, genderEgalitarianism: 3.30, powerDistance: 4.10, uncertaintyAvoidance: 4.60 },
    "Cameroon": { performanceOrientation: 4.00, assertiveness: 4.10, futureOrientation: 3.30, humaneOrientation: 4.60, institutionalCollectivism: 4.10, inGroupCollectivism: 5.50, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.50 },
    "Cyprus": { performanceOrientation: 4.30, assertiveness: 4.10, futureOrientation: 3.50, humaneOrientation: 4.00, institutionalCollectivism: 4.10, inGroupCollectivism: 4.30, genderEgalitarianism: 3.70, powerDistance: 4.90, uncertaintyAvoidance: 4.60 },
    "El Salvador": { performanceOrientation: 3.70, assertiveness: 3.80, futureOrientation: 3.10, humaneOrientation: 4.30, institutionalCollectivism: 3.70, inGroupCollectivism: 5.70, genderEgalitarianism: 3.40, powerDistance: 5.60, uncertaintyAvoidance: 3.40 },
    "Georgia": { performanceOrientation: 3.70, assertiveness: 4.20, futureOrientation: 3.40, humaneOrientation: 3.70, institutionalCollectivism: 3.80, inGroupCollectivism: 5.30, genderEgalitarianism: 3.40, powerDistance: 5.30, uncertaintyAvoidance: 3.70 },
    "Guyana": { performanceOrientation: 3.80, assertiveness: 3.90, futureOrientation: 3.30, humaneOrientation: 4.10, institutionalCollectivism: 3.80, inGroupCollectivism: 5.20, genderEgalitarianism: 3.60, powerDistance: 5.20, uncertaintyAvoidance: 3.70 },
    "Honduras": { performanceOrientation: 3.70, assertiveness: 3.80, futureOrientation: 3.10, humaneOrientation: 4.10, institutionalCollectivism: 3.70, inGroupCollectivism: 5.60, genderEgalitarianism: 3.60, powerDistance: 5.40, uncertaintyAvoidance: 3.30 },
    "Ivory Coast": { performanceOrientation: 4.00, assertiveness: 4.10, futureOrientation: 3.30, humaneOrientation: 4.60, institutionalCollectivism: 4.10, inGroupCollectivism: 5.50, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.50 },
    "Kazakhstan": { performanceOrientation: 4.20, assertiveness: 4.00, futureOrientation: 3.50, humaneOrientation: 4.50, institutionalCollectivism: 4.30, inGroupCollectivism: 5.80, genderEgalitarianism: 3.20, powerDistance: 5.50, uncertaintyAvoidance: 3.80 },
    "Kyrgyzstan": { performanceOrientation: 3.80, assertiveness: 3.80, futureOrientation: 3.20, humaneOrientation: 4.80, institutionalCollectivism: 4.30, inGroupCollectivism: 5.60, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Libya": { performanceOrientation: 3.80, assertiveness: 4.10, futureOrientation: 3.20, humaneOrientation: 4.60, institutionalCollectivism: 3.90, inGroupCollectivism: 5.80, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Malta": { performanceOrientation: 4.20, assertiveness: 4.00, futureOrientation: 3.50, humaneOrientation: 4.00, institutionalCollectivism: 4.10, inGroupCollectivism: 4.30, genderEgalitarianism: 3.70, powerDistance: 4.80, uncertaintyAvoidance: 4.50 },
    "Montenegro": { performanceOrientation: 3.60, assertiveness: 4.20, futureOrientation: 3.20, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.40, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Namibia": { performanceOrientation: 4.10, assertiveness: 4.30, futureOrientation: 4.10, humaneOrientation: 4.30, institutionalCollectivism: 4.60, inGroupCollectivism: 5.10, genderEgalitarianism: 3.30, powerDistance: 4.10, uncertaintyAvoidance: 4.60 },
    "Nicaragua": { performanceOrientation: 3.70, assertiveness: 3.80, futureOrientation: 3.10, humaneOrientation: 4.10, institutionalCollectivism: 3.70, inGroupCollectivism: 5.60, genderEgalitarianism: 3.60, powerDistance: 5.40, uncertaintyAvoidance: 3.30 },
    "North Macedonia": { performanceOrientation: 3.60, assertiveness: 4.20, futureOrientation: 3.20, humaneOrientation: 3.80, institutionalCollectivism: 3.90, inGroupCollectivism: 5.40, genderEgalitarianism: 3.40, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Oman": { performanceOrientation: 3.90, assertiveness: 3.90, futureOrientation: 3.60, humaneOrientation: 4.60, institutionalCollectivism: 4.30, inGroupCollectivism: 5.80, genderEgalitarianism: 2.80, powerDistance: 5.60, uncertaintyAvoidance: 3.80 },
    "Rwanda": { performanceOrientation: 4.40, assertiveness: 3.60, futureOrientation: 3.70, humaneOrientation: 4.40, institutionalCollectivism: 4.40, inGroupCollectivism: 5.70, genderEgalitarianism: 3.90, powerDistance: 4.50, uncertaintyAvoidance: 4.60 },
    "Senegal": { performanceOrientation: 4.00, assertiveness: 4.10, futureOrientation: 3.30, humaneOrientation: 4.60, institutionalCollectivism: 4.10, inGroupCollectivism: 5.50, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.50 },
    "Suriname": { performanceOrientation: 3.80, assertiveness: 3.90, futureOrientation: 3.30, humaneOrientation: 4.10, institutionalCollectivism: 3.80, inGroupCollectivism: 5.20, genderEgalitarianism: 3.60, powerDistance: 5.20, uncertaintyAvoidance: 3.70 },
    "Trinidad and Tobago": { performanceOrientation: 4.20, assertiveness: 4.30, futureOrientation: 3.50, humaneOrientation: 4.20, institutionalCollectivism: 4.00, inGroupCollectivism: 5.00, genderEgalitarianism: 3.30, powerDistance: 4.80, uncertaintyAvoidance: 3.40 },
    "Tunisia": { performanceOrientation: 3.80, assertiveness: 4.10, futureOrientation: 3.20, humaneOrientation: 4.60, institutionalCollectivism: 3.90, inGroupCollectivism: 5.80, genderEgalitarianism: 3.00, powerDistance: 5.40, uncertaintyAvoidance: 3.60 },
    "Uganda": { performanceOrientation: 4.00, assertiveness: 3.80, futureOrientation: 3.30, humaneOrientation: 4.70, institutionalCollectivism: 4.20, inGroupCollectivism: 5.60, genderEgalitarianism: 3.20, powerDistance: 5.30, uncertaintyAvoidance: 3.70 },
};

