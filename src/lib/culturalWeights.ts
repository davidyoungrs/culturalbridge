import type { Country } from "../constants/cultureData";
import { HOFSTEDE_DATA } from "../constants/hofstedeData";
import { GLOBE_DATA } from "../constants/globeData";

export interface CBIScores {
    relationshipTrust: number;
    adaptiveAgility: number;
    processConsensus: number;
    performanceVelocity: number;
    communicationDirectness: number;
    strategicFocus: number;
    empoweredEquality: number;
}

/**
 * Normalizes values to a 0-100 scale.
 */
const normalizeMeyer = (val: number) => (val / 10) * 100;
const normalizeGlobe = (val: number) => ((val - 1) / 6) * 100;

/**
 * Calculates the proprietary Cultural Bridge Index (CBI).
 * This combines multiple frameworks to create original meta-dimensions.
 */
export const calculateCBI = (country: Country): CBIScores => {
    const hofstede = HOFSTEDE_DATA[country.name];
    const globe = GLOBE_DATA[country.name];

    // Defaults if data is missing
    const h = hofstede || { idv: 50, uai: 50, pdi: 50, mas: 50, lto: 50 };
    const g = globe || { inGroupCollectivism: 4, futureOrientation: 4, powerDistance: 4, performanceOrientation: 4, assertiveness: 4 };

    // 1. Relationship Trust
    const trustNormalized = normalizeMeyer(country.scores.trusting);
    const collectivismHofstede = 100 - h.idv;
    const collectivismGlobe = normalizeGlobe(g.inGroupCollectivism);
    const relationshipTrust = Math.round((trustNormalized * 0.4) + (collectivismHofstede * 0.3) + (collectivismGlobe * 0.3));

    // 2. Adaptive Agility
    const flexibleNormalized = normalizeMeyer(country.scores.scheduling);
    const agilityHofstede = 100 - (h.uai || 50);
    const futureGlobe = normalizeGlobe(g.futureOrientation || 4);
    const adaptiveAgility = Math.round((flexibleNormalized * 0.3) + (agilityHofstede * 0.4) + (futureGlobe * 0.3));

    // 3. Process Consensus
    const consensualNormalized = normalizeMeyer(country.scores.deciding);
    const flatHofstede = 100 - (h.pdi || 50);
    const flatGlobe = 100 - normalizeGlobe(g.powerDistance || 4);
    const processConsensus = Math.round((consensualNormalized * 0.4) + (flatHofstede * 0.3) + (flatGlobe * 0.3));

    // 4. Performance Velocity
    const directEvaluating = normalizeMeyer(country.scores.evaluating);
    const perfGlobe = normalizeGlobe(g.performanceOrientation || 4);
    const masHofstede = h.mas || 50;
    const performanceVelocity = Math.round((directEvaluating * 0.3) + (perfGlobe * 0.4) + (masHofstede * 0.3));

    // 5. Communication Directness
    const lowContext = 100 - normalizeMeyer(country.scores.communicating);
    const directDisagree = normalizeMeyer(country.scores.disagreeing);
    const assertGlobe = normalizeGlobe(g.assertiveness || 4);
    const communicationDirectness = Math.round((lowContext * 0.4) + (directDisagree * 0.4) + (assertGlobe * 0.2));

    // 6. Strategic Focus
    const ltoHofstede = h.lto || 50;
    const futureGlobe2 = normalizeGlobe(g.futureOrientation || 4);
    const principlesFirst = normalizeMeyer(country.scores.persuading);
    const strategicFocus = Math.round((ltoHofstede * 0.4) + (futureGlobe2 * 0.3) + (principlesFirst * 0.3));

    // 7. Empowered Equality
    const egalitarianLeading = 100 - normalizeMeyer(country.scores.leading);
    const lowPdiHofstede = 100 - (h.pdi || 50);
    const lowPdGlobe = 100 - normalizeGlobe(g.powerDistance || 4);
    const empoweredEquality = Math.round((egalitarianLeading * 0.4) + (lowPdiHofstede * 0.3) + (lowPdGlobe * 0.3));

    return {
        relationshipTrust,
        adaptiveAgility,
        processConsensus,
        performanceVelocity,
        communicationDirectness,
        strategicFocus,
        empoweredEquality
    };
};

/**
 * Maps the 4-axis assessment scores to the 7-dimension CBI model.
 */
export const calculateUserCBI = (quizScores: Record<string, number>): CBIScores => {
    return {
        relationshipTrust: quizScores.trust || 50,
        adaptiveAgility: quizScores.time || 50,
        processConsensus: quizScores.decision || 50,
        performanceVelocity: 50, // Not directly measured
        communicationDirectness: 100 - (quizScores.communication || 50),
        strategicFocus: 50, // Not directly measured
        empoweredEquality: 50, // Not directly measured
    };
};

export const CBI_DESCRIPTIONS = {
    relationshipTrust: "Propensity for collective trust and relationship-driven teamwork.",
    adaptiveAgility: "Adaptability to change and tolerance for ambiguity/flexibility.",
    processConsensus: "Depth of participatory and consensual decision-making processes.",
    performanceVelocity: "Drive for achievement, competitiveness, and direct performance feedback.",
    communicationDirectness: "Preference for low-context, explicit, and direct communication.",
    strategicFocus: "Long-term planning horizon and principles-first reasoning.",
    empoweredEquality: "Preference for flat hierarchies and egalitarian leadership styles."
};
