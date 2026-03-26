/**
 * Master Travel Data Index
 * Combines all regional data files and exports a single unified lookup map.
 * Falls back to a generic template for any country not profiled.
 */

import { europeData } from './travel/europe';
import { americasData } from './travel/americas';
import { middleEastAfricaData } from './travel/middleEastAfrica';
import { asiaPacificData } from './travel/asiaPacific';

export type AdvisoryLevel =
  | 'Exercise Normal Precautions'
  | 'Exercise Increased Caution'
  | 'Reconsider Travel'
  | 'Do Not Travel';

export type VaccinationRequirement = 'Mandatory' | 'Recommended' | 'Optional';

export interface VaccinationEntry {
  name: string;
  requirement: VaccinationRequirement;
  notes?: string;
}

export interface InterpolNotice {
  title: string;
  url: string;
}

export interface OfficialSource {
  agency: string;
  url: string;
  flag?: string;
}

export interface TravelerEssentials {
  emergencyNumbers: {
    police: string;
    ambulance: string;
    fire: string;
  };
  currency: {
    name: string;
    code: string;
    symbol: string;
  };
  plugTypes: string[];
  voltage: string;
  frequency: string;
  drivingSide: 'left' | 'right';
}

export interface CountryTravelData {
  countryId: string;
  countryName: string;
  capital?: string;
  coordinates?: { lat: number; lng: number };
  lastUpdated?: string;
  security: {
    overallStatus: AdvisoryLevel;
    highlights: string[];
    interpolNotices: InterpolNotice[];
  };
  visaEntry: {
    passportValidity: string;
    visaRequired: boolean;
    visaInfo: string;
    iataReference: string;
    entryNotes?: string[];
  };
  health: {
    vaccinations: VaccinationEntry[];
    yellowFeverRisk?: string;
    malariaRisk: string;
    whoCountryUrl?: string;
    cdcUrl?: string;
    travelHealthProUrl?: string;
    polioAlert: boolean;
    healthNotes?: string[];
  };
  essentials?: TravelerEssentials;
  officialSources: OfficialSource[];
}

export const COUNTRY_TRAVEL_DATA: Record<string, CountryTravelData> = {
  ...europeData,
  ...americasData,
  ...middleEastAfricaData,
  ...asiaPacificData,
};

const iata = (cc: string) => `https://www.iata.org/en/services/compliance/timatic/travel-documentation/?destination=${cc}`;

/**
 * Generates a sensible fallback for any country not yet individually profiled.
 */
export const getFallbackCountryData = (countryName: string): CountryTravelData => {
  const slug = countryName.toLowerCase().replace(/\s+/g, '-');
  return {
    countryId: countryName.substring(0, 2).toUpperCase(),
    countryName,
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Check your government\'s latest advisory before departure — conditions can change rapidly.',
        'Monitor local news and follow instructions from local authorities at all times.',
        'Register your travel with your government\'s smart traveller notification program.',
        'Ensure you have comprehensive travel insurance including medical evacuation cover.',
      ],
      interpolNotices: [
        { title: 'INTERPOL News & Notices', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival date (recommended)',
      visaRequired: false,
      visaInfo: 'Verify entry requirements via IATA Timatic, iVisa, or Sherpa before departure — requirements change frequently and vary significantly by nationality.',
      iataReference: iata(countryName.substring(0, 2).toUpperCase()),
      entryNotes: [
        'Check with the nearest embassy or consulate for the most current entry requirements.',
        'Travel insurance and proof of onward travel may be required.',
      ],
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended', notes: 'MMR, DTP, Influenza, COVID-19.' },
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
      ],
      yellowFeverRisk: 'Check official requirements below.',
      malariaRisk: 'Check the WHO malaria risk map for this specific destination before travel. Consult a travel health clinic at least 6 weeks before departure.',
      whoCountryUrl: 'https://www.who.int/countries/',
      cdcUrl: `https://wwwnc.cdc.gov/travel/destinations/traveler/none/${slug}`,
      travelHealthProUrl: `https://travelhealthpro.org.uk/countries`,
      polioAlert: false,
      healthNotes: ['Consult a travel health clinic or GP at least 6–8 weeks before departure for personalised vaccination advice.'],
    },
    essentials: {
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Local Currency', code: '---', symbol: '¤' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources: [
      { agency: 'US State Dept', url: `https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/${slug}-travel-advisory.html`, flag: '🇺🇸' },
      { agency: 'UK FCDO', url: `https://www.gov.uk/foreign-travel-advice/${slug}`, flag: '🇬🇧' },
      { agency: 'Canada Travel', url: `https://travel.gc.ca/destinations/${slug}`, flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: `https://www.safetravel.govt.nz/${slug}`, flag: '🇳🇿' },
      { agency: 'TuGo Travel Safe', url: `https://www.tugo.com/en/travel-information/`, flag: '🛡️' },
      { agency: 'WHO Health Advice', url: 'https://www.who.int/travel-advice/all-updates-for-travellers', flag: '🌐' },
      { agency: 'IATA Timatic', url: 'https://www.iata.org/en/services/compliance/timatic/', flag: '🌐' },
      { agency: 'iVisa Requirements', url: `https://www.ivisa.com/${slug}`, flag: '🌐' },
      { agency: 'Sherpa Entry Check', url: 'https://apply.joinsherpa.com/travel-restrictions', flag: '🌐' },
    ],
  };
};
