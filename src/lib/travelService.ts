/**
 * Global Travel Advice Data Service
 * Looks up real country data from the pre-populated dataset.
 * Falls back to a generic template for any country not yet profiled.
 */

import { COUNTRY_TRAVEL_DATA, getFallbackCountryData } from '../constants/travelCountryData';

export type { CountryTravelData, OfficialSource, VaccinationEntry } from '../constants/travelCountryData';

export const getTravelAdvice = async (countryName: string) => {
    // Simulate a brief "syncing sources" network delay
    await new Promise(resolve => setTimeout(resolve, 900));

    const data = COUNTRY_TRAVEL_DATA[countryName];
    if (data) {
        return { ...data, lastUpdated: new Date().toISOString() };
    }

    // Fallback for countries not yet in the detailed dataset
    return { ...getFallbackCountryData(countryName), lastUpdated: new Date().toISOString() };
};
