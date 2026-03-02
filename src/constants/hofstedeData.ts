/**
 * Hofstede's Cultural Dimensions scores (0-100 scale).
 * Based on Geert Hofstede's research: https://www.hofstede-insights.com
 *
 * PDI = Power Distance Index
 * IDV = Individualism vs Collectivism
 * MAS = Masculinity vs Femininity
 * UAI = Uncertainty Avoidance Index
 * LTO = Long-Term vs Short-Term Orientation
 * IVR = Indulgence vs Restraint
 */

export type HofstedeScores = {
    [key: string]: number;
    pdi: number;
    idv: number;
    mas: number;
    uai: number;
    lto: number;
    ivr: number;
};

export const HOFSTEDE_LABELS: Record<string, { short: string; full: string; low: string; high: string }> = {
    pdi: { short: "PDI", full: "Power Distance", low: "Egalitarian", high: "Hierarchical" },
    idv: { short: "IDV", full: "Individualism", low: "Collectivist", high: "Individualist" },
    mas: { short: "MAS", full: "Masculinity", low: "Feminine / Cooperative", high: "Masculine / Competitive" },
    uai: { short: "UAI", full: "Uncertainty Avoidance", low: "Comfortable with ambiguity", high: "Needs certainty & rules" },
    lto: { short: "LTO", full: "Long-Term Orientation", low: "Short-term / Tradition-focused", high: "Long-term / Pragmatic" },
    ivr: { short: "IVR", full: "Indulgence", low: "Restrained", high: "Indulgent" },
};

/**
 * Hofstede scores by country name.
 * Values approximated from Hofstede Insights and academic publications.
 */
export const HOFSTEDE_DATA: Record<string, HofstedeScores> = {
    "Argentina": { pdi: 49, idv: 46, mas: 56, uai: 86, lto: 20, ivr: 62 },
    "Australia": { pdi: 38, idv: 90, mas: 61, uai: 51, lto: 21, ivr: 71 },
    "Brazil": { pdi: 69, idv: 38, mas: 49, uai: 76, lto: 44, ivr: 59 },
    "Canada": { pdi: 39, idv: 80, mas: 52, uai: 48, lto: 36, ivr: 68 },
    "Chile": { pdi: 63, idv: 23, mas: 28, uai: 86, lto: 31, ivr: 68 },
    "China": { pdi: 80, idv: 20, mas: 66, uai: 30, lto: 87, ivr: 24 },
    "Colombia": { pdi: 67, idv: 13, mas: 64, uai: 80, lto: 13, ivr: 83 },
    "Czech Republic": { pdi: 57, idv: 58, mas: 57, uai: 74, lto: 70, ivr: 29 },
    "Denmark": { pdi: 18, idv: 74, mas: 16, uai: 23, lto: 35, ivr: 70 },
    "Egypt": { pdi: 70, idv: 25, mas: 45, uai: 80, lto: 7, ivr: 4 },
    "Finland": { pdi: 33, idv: 63, mas: 26, uai: 59, lto: 38, ivr: 57 },
    "France": { pdi: 68, idv: 71, mas: 43, uai: 86, lto: 63, ivr: 48 },
    "Germany": { pdi: 35, idv: 67, mas: 66, uai: 65, lto: 83, ivr: 40 },
    "Greece": { pdi: 60, idv: 35, mas: 57, uai: 100, lto: 45, ivr: 50 },
    "Hong Kong": { pdi: 68, idv: 25, mas: 57, uai: 29, lto: 61, ivr: 17 },
    "India": { pdi: 77, idv: 48, mas: 56, uai: 40, lto: 51, ivr: 26 },
    "Indonesia": { pdi: 78, idv: 14, mas: 46, uai: 48, lto: 62, ivr: 38 },
    "Iran": { pdi: 58, idv: 41, mas: 43, uai: 59, lto: 14, ivr: 40 },
    "Israel": { pdi: 13, idv: 54, mas: 47, uai: 81, lto: 38, ivr: 10 },
    "Italy": { pdi: 50, idv: 76, mas: 70, uai: 75, lto: 61, ivr: 30 },
    "Japan": { pdi: 54, idv: 46, mas: 95, uai: 92, lto: 88, ivr: 42 },
    "Kenya": { pdi: 70, idv: 25, mas: 60, uai: 50, lto: 25, ivr: 40 },
    "Malaysia": { pdi: 100, idv: 26, mas: 50, uai: 36, lto: 41, ivr: 57 },
    "Mexico": { pdi: 81, idv: 30, mas: 69, uai: 82, lto: 24, ivr: 97 },
    "Netherlands": { pdi: 38, idv: 80, mas: 14, uai: 53, lto: 67, ivr: 68 },
    "New Zealand": { pdi: 22, idv: 79, mas: 58, uai: 49, lto: 33, ivr: 75 },
    "Nigeria": { pdi: 80, idv: 30, mas: 60, uai: 55, lto: 13, ivr: 84 },
    "Norway": { pdi: 31, idv: 69, mas: 8, uai: 50, lto: 35, ivr: 55 },
    "Pakistan": { pdi: 55, idv: 14, mas: 50, uai: 70, lto: 50, ivr: 0 },
    "Peru": { pdi: 64, idv: 16, mas: 42, uai: 87, lto: 25, ivr: 46 },
    "Philippines": { pdi: 94, idv: 32, mas: 64, uai: 44, lto: 27, ivr: 42 },
    "Poland": { pdi: 68, idv: 60, mas: 64, uai: 93, lto: 38, ivr: 29 },
    "Portugal": { pdi: 63, idv: 27, mas: 31, uai: 99, lto: 28, ivr: 33 },
    "Russia": { pdi: 93, idv: 39, mas: 36, uai: 95, lto: 81, ivr: 20 },
    "Saudi Arabia": { pdi: 95, idv: 25, mas: 60, uai: 80, lto: 36, ivr: 52 },
    "Singapore": { pdi: 74, idv: 20, mas: 48, uai: 8, lto: 72, ivr: 46 },
    "South Africa": { pdi: 49, idv: 65, mas: 63, uai: 49, lto: 34, ivr: 63 },
    "South Korea": { pdi: 60, idv: 18, mas: 39, uai: 85, lto: 100, ivr: 29 },
    "Spain": { pdi: 57, idv: 51, mas: 42, uai: 86, lto: 48, ivr: 44 },
    "Sweden": { pdi: 31, idv: 71, mas: 5, uai: 29, lto: 53, ivr: 78 },
    "Switzerland": { pdi: 34, idv: 68, mas: 70, uai: 58, lto: 74, ivr: 66 },
    "Thailand": { pdi: 64, idv: 20, mas: 34, uai: 64, lto: 32, ivr: 45 },
    "Turkey": { pdi: 66, idv: 37, mas: 45, uai: 85, lto: 46, ivr: 49 },
    "UAE": { pdi: 90, idv: 25, mas: 50, uai: 80, lto: 30, ivr: 45 },
    "UK": { pdi: 35, idv: 89, mas: 66, uai: 35, lto: 51, ivr: 69 },
    "USA": { pdi: 40, idv: 91, mas: 62, uai: 46, lto: 26, ivr: 68 },
    "Vietnam": { pdi: 70, idv: 20, mas: 40, uai: 30, lto: 57, ivr: 35 },
    // ─── NEW 20 COUNTRIES ───
    "Austria": { pdi: 11, idv: 55, mas: 79, uai: 70, lto: 60, ivr: 63 },
    "Bangladesh": { pdi: 80, idv: 20, mas: 55, uai: 60, lto: 47, ivr: 20 },
    "Belgium": { pdi: 65, idv: 75, mas: 54, uai: 94, lto: 82, ivr: 57 },
    "Croatia": { pdi: 73, idv: 33, mas: 40, uai: 80, lto: 58, ivr: 33 },
    "Ecuador": { pdi: 78, idv: 8, mas: 63, uai: 67, lto: 33, ivr: 20 },
    "Ethiopia": { pdi: 70, idv: 20, mas: 65, uai: 55, lto: 30, ivr: 46 },
    "Ghana": { pdi: 80, idv: 15, mas: 40, uai: 65, lto: 4, ivr: 72 },
    "Hungary": { pdi: 46, idv: 80, mas: 88, uai: 82, lto: 58, ivr: 31 },
    "Iraq": { pdi: 95, idv: 30, mas: 70, uai: 85, lto: 25, ivr: 17 },
    "Jamaica": { pdi: 45, idv: 39, mas: 68, uai: 13, lto: 28, ivr: 68 },
    "Jordan": { pdi: 70, idv: 30, mas: 45, uai: 65, lto: 16, ivr: 43 },
    "Lebanon": { pdi: 75, idv: 40, mas: 65, uai: 50, lto: 14, ivr: 25 },
    "Morocco": { pdi: 70, idv: 25, mas: 53, uai: 68, lto: 14, ivr: 25 },
    "Myanmar": { pdi: 77, idv: 15, mas: 40, uai: 50, lto: 45, ivr: 20 },
    "Romania": { pdi: 90, idv: 30, mas: 42, uai: 90, lto: 52, ivr: 20 },
    "Sri Lanka": { pdi: 80, idv: 35, mas: 10, uai: 45, lto: 45, ivr: 40 },
    "Taiwan": { pdi: 58, idv: 17, mas: 45, uai: 69, lto: 93, ivr: 49 },
    "Tanzania": { pdi: 70, idv: 25, mas: 40, uai: 50, lto: 34, ivr: 38 },
    "Ukraine": { pdi: 92, idv: 25, mas: 27, uai: 95, lto: 86, ivr: 18 },
    "Venezuela": { pdi: 81, idv: 12, mas: 73, uai: 76, lto: 16, ivr: 100 },
    // ─── NEW 25 COUNTRIES (93 total) ───
    "Algeria": { pdi: 80, idv: 35, mas: 40, uai: 60, lto: 25, ivr: 30 },
    "Bulgaria": { pdi: 70, idv: 30, mas: 40, uai: 85, lto: 69, ivr: 16 },
    "Cambodia": { pdi: 95, idv: 15, mas: 45, uai: 30, lto: 20, ivr: 40 },
    "Costa Rica": { pdi: 35, idv: 15, mas: 21, uai: 86, lto: 35, ivr: 100 },
    "Cuba": { pdi: 60, idv: 12, mas: 40, uai: 75, lto: 25, ivr: 50 },
    "Estonia": { pdi: 40, idv: 60, mas: 30, uai: 60, lto: 82, ivr: 16 },
    "Guatemala": { pdi: 95, idv: 6, mas: 37, uai: 101, lto: 25, ivr: 50 },
    "Iceland": { pdi: 30, idv: 60, mas: 10, uai: 50, lto: 28, ivr: 65 },
    "Ireland": { pdi: 28, idv: 70, mas: 68, uai: 35, lto: 24, ivr: 65 },
    "Kuwait": { pdi: 90, idv: 25, mas: 40, uai: 80, lto: 15, ivr: 25 },
    "Latvia": { pdi: 44, idv: 70, mas: 48, uai: 63, lto: 69, ivr: 13 },
    "Lithuania": { pdi: 42, idv: 60, mas: 19, uai: 65, lto: 82, ivr: 16 },
    "Luxembourg": { pdi: 40, idv: 60, mas: 50, uai: 70, lto: 64, ivr: 56 },
    "Mongolia": { pdi: 65, idv: 20, mas: 55, uai: 60, lto: 40, ivr: 45 },
    "Nepal": { pdi: 85, idv: 20, mas: 40, uai: 50, lto: 30, ivr: 35 },
    "Panama": { pdi: 95, idv: 11, mas: 44, uai: 86, lto: 15, ivr: 80 },
    "Paraguay": { pdi: 90, idv: 15, mas: 40, uai: 85, lto: 20, ivr: 70 },
    "Qatar": { pdi: 93, idv: 25, mas: 40, uai: 80, lto: 20, ivr: 25 },
    "Serbia": { pdi: 86, idv: 25, mas: 43, uai: 92, lto: 52, ivr: 28 },
    "Slovakia": { pdi: 100, idv: 52, mas: 110, uai: 51, lto: 77, ivr: 28 },
    "Slovenia": { pdi: 71, idv: 27, mas: 19, uai: 88, lto: 49, ivr: 48 },
    "Uruguay": { pdi: 61, idv: 36, mas: 38, uai: 100, lto: 26, ivr: 12 },
    "Uzbekistan": { pdi: 85, idv: 20, mas: 40, uai: 80, lto: 25, ivr: 20 },
    "Zambia": { pdi: 60, idv: 35, mas: 40, uai: 50, lto: 30, ivr: 40 },
    "Zimbabwe": { pdi: 70, idv: 15, mas: 40, uai: 50, lto: 25, ivr: 40 },
};
