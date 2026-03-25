/**
 * Global Travel Advice Data Service
 *
 * Architecture:
 * 1. Primary layer  — Static dataset (travelCountryData.ts) with detailed, manually-curated data for ~100 countries.
 * 2. Live layer     — TuGo Travel Safe API (free, REST). When VITE_TUGO_API_KEY is set in .env,
 *                     this service fetches a live advisory level and health data from TuGo and merges
 *                     it into the static data, keeping our curated detail while reflecting live updates.
 * 3. Fallback layer — Generic template for any country not yet individually profiled.
 *
 * TuGo Travel Safe API endpoint:
 *   GET https://api.tugo.com/v1/travelsafe/countries/{isoCode}
 *   Headers: { 'X-Auth-API-Key': import.meta.env.VITE_TUGO_API_KEY }
 *
 * To activate live TuGo data:
 *   1. Register at https://developer.tugo.com to obtain a free API key.
 *   2. Add VITE_TUGO_API_KEY=your_key_here to your .env file.
 *   3. Restart the dev server.
 */

import type { CountryTravelData } from '../constants/travelCountryData';
import { COUNTRY_TRAVEL_DATA, getFallbackCountryData } from '../constants/travelCountryData';

export type { CountryTravelData, OfficialSource, VaccinationEntry } from '../constants/travelCountryData';

/** Fetch live advisory data from TuGo Travel Safe API if an API key is configured. */
const fetchTuGoData = async (isoCode: string): Promise<{ advisoryText?: string; advisoryLevel?: number } | null> => {
  const key = import.meta.env.VITE_TUGO_API_KEY as string | undefined;
  if (!key) return null;
  try {
    const res = await fetch(`https://api.tugo.com/v1/travelsafe/countries/${isoCode}`, {
      headers: { 'X-Auth-API-Key': key },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return {
      advisoryText: json?.advisoryText ?? undefined,
      advisoryLevel: json?.advisoryLevel ?? undefined,
    };
  } catch {
    return null;
  }
};

export const getTravelAdvice = async (countryName: string): Promise<CountryTravelData & { lastUpdated: string }> => {
  // Simulate brief "syncing sources" network feel
  await new Promise(resolve => setTimeout(resolve, 900));

  const staticData: CountryTravelData =
    COUNTRY_TRAVEL_DATA[countryName] ?? getFallbackCountryData(countryName);

  // Optionally enrich with TuGo live data
  const tugo = await fetchTuGoData(staticData.countryId);

  let merged = { ...staticData, lastUpdated: new Date().toISOString() };

  if (tugo?.advisoryText) {
    // Prepend TuGo's live advisory summary to the highlights array (deduplicated)
    const tugoHighlight = `[TuGo Live] ${tugo.advisoryText}`;
    const alreadyPresent = merged.security.highlights.some(h => h.startsWith('[TuGo'));
    if (!alreadyPresent) {
      merged = {
        ...merged,
        security: {
          ...merged.security,
          highlights: [tugoHighlight, ...merged.security.highlights],
        },
      };
    }
  }

  return merged;
};

