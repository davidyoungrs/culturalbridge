/**
 * Country Travel Data
 * Real advisory levels, visa, health, and official source link data per country.
 * Advisory levels follow the US State Dept standard scale.
 */

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

export interface CountryTravelData {
  countryId: string;
  countryName: string;
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
    malariaRisk: string;
    polioAlert: boolean;
    healthNotes?: string[];
  };
  officialSources: OfficialSource[];
}

const iata = (cc: string) => `https://www.iata.org/en/services/compliance/timatic/travel-documentation/?destination=${cc}`;

export const COUNTRY_TRAVEL_DATA: Record<string, CountryTravelData> = {
  'USA': {
    countryId: 'US',
    countryName: 'USA',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'Crime rates vary significantly by city and neighbourhood.',
        'Natural disasters including hurricanes, tornadoes, and wildfires are regionally prevalent.',
        'Be aware of local gun laws which vary by state.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: 'Valid for duration of stay',
      visaRequired: false,
      visaInfo: 'Most nationalities qualify for the Visa Waiver Program (ESTA). Citizens of some countries require a non-immigrant visa (B-1/B-2).',
      iataReference: iata('US'),
      entryNotes: ['ESTA must be applied for at least 72 hours before departure.', 'Land border crossings have separate crossing card requirements.'],
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended', notes: 'MMR, DTP, influenza, COVID-19.' },
      ],
      malariaRisk: 'No malaria risk.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-states-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/united-states', flag: '🇨🇦' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/usa', flag: '🇬🇧' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/united-states-of-america', flag: '🇳🇿' },
      { agency: 'CDC Health Info', url: 'https://wwwnc.cdc.gov/travel/destinations/traveler/none/united-states', flag: '🌐' },
    ],
  },
  'UK': {
    countryId: 'GB',
    countryName: 'UK',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'Terrorism threat level is "Substantial" — attacks are a strong possibility.',
        'Petty theft and pickpocketing are common in tourist areas of London.',
        'Protests and demonstrations can disrupt transport and public services.',
      ],
      interpolNotices: [
        { title: 'UK woman murdered in Belgium identified after international appeal', url: 'https://www.interpol.int/en/News-and-Events/News/2023/UK-woman-murdered-in-Belgium-identified-after-international-appeal' },
      ],
    },
    visaEntry: {
      passportValidity: 'Valid for duration of stay',
      visaRequired: false,
      visaInfo: 'EU/EEA citizens no longer have freedom of movement. Most Western passport holders receive free 6-month visitor permission. Non-EEA nationals may require an Electronic Travel Authorisation (ETA).',
      iataReference: iata('GB'),
      entryNotes: ['ETA required for many nationalities from 2024 onwards.', 'Biometric passport may be required for e-gates.'],
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
      ],
      malariaRisk: 'No malaria risk.',
      polioAlert: false,
      healthNotes: ['NHS accessible for EEA nationals with GHIC card. Travel insurance strongly advised for all others.'],
    },
    officialSources: [
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/uk', flag: '🇬🇧' },
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-kingdom-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/united-kingdom', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/united-kingdom', flag: '🇳🇿' },
    ],
  },
  'China': {
    countryId: 'CN',
    countryName: 'China',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Strict laws on speech, assembly and internet access apply to all visitors.',
        'The security situation in Tibet and Xinjiang is sensitive — permits required.',
        'Dual nationals may be treated as Chinese citizens and denied consular access.',
        'Exit bans can be imposed without notice on foreigners under investigation.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival date',
      visaRequired: true,
      visaInfo: 'Most visitors require a valid Chinese visa (L, F, or M category). 72/144-hour visa-free transit available at select airports. Hong Kong and Macau have separate entry requirements.',
      iataReference: iata('CN'),
      entryNotes: ['VPN usage is restricted. Download apps before arrival.', 'WeChat Pay or Alipay required for most payments.'],
    },
    health: {
      vaccinations: [
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Hepatitis B', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
        { name: 'Japanese Encephalitis', requirement: 'Recommended', notes: 'For rural and outdoor travellers.' },
        { name: 'Rabies', requirement: 'Optional', notes: 'For travellers with significant animal exposure.' },
      ],
      malariaRisk: 'Limited risk in Yunnan province bordering Myanmar. Chemoprophylaxis recommended for travel to these areas.',
      polioAlert: false,
      healthNotes: ['Air quality in major cities can be poor. Pack a supply of any prescription medication.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/china', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/china', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/china', flag: '🇳🇿' },
      { agency: 'WHO Travel Advice', url: 'https://www.who.int/travel-advice/all-updates-for-travellers', flag: '🌐' },
    ],
  },
  'Japan': {
    countryId: 'JP',
    countryName: 'Japan',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'One of the safest countries in the world for foreign visitors.',
        'Japan is located in a seismically active zone — earthquake preparedness is essential.',
        'Typhoon season runs from June to November. Monitor weather forecasts.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: 'Valid for duration of stay',
      visaRequired: false,
      visaInfo: 'Citizens of 69+ countries can enter visa-free for up to 90 days for tourism and business. Japan Tourism Agency requires Visit Japan Web registration for pre-clearance.',
      iataReference: iata('JP'),
      entryNotes: ['Visit Japan Web app for digital immigration card.', 'IC card (Suica/Pasmo) for transport — cash still widely used.'],
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
        { name: 'Japanese Encephalitis', requirement: 'Optional', notes: 'For long-term stays in rural areas.' },
      ],
      malariaRisk: 'No malaria risk.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/japan-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/japan', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/japan', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/japan', flag: '🇳🇿' },
    ],
  },
  'Germany': {
    countryId: 'DE',
    countryName: 'Germany',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'Terrorism threat is present — heightened security at public events and transport hubs.',
        'Petty crime including pickpocketing is common in major tourist cities.',
        'Demonstrations are frequent in city centres; monitor local news.',
      ],
      interpolNotices: [
        { title: 'International appeal to identify dead child in Germany', url: 'https://www.interpol.int/en/News-and-Events/News/2023/International-appeal-to-identify-dead-child-in-Germany' },
      ],
    },
    visaEntry: {
      passportValidity: '3 months beyond intended departure',
      visaRequired: false,
      visaInfo: 'Part of the Schengen Area. No visa required for most Western passport holders. EU nationals have freedom of movement. Non-EU nationals from visa-exempt countries can stay 90 days in any 180-day period.',
      iataReference: iata('DE'),
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
        { name: 'Tick-borne Encephalitis (TBE)', requirement: 'Recommended', notes: 'For hikers and travellers in forested areas.' },
      ],
      malariaRisk: 'No malaria risk.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/germany-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/germany', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/germany', flag: '🇨🇦' },
      { agency: 'EU Reopen Europa', url: 'https://reopen.europa.eu/en', flag: '🇪🇺' },
    ],
  },
  'France': {
    countryId: 'FR',
    countryName: 'France',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'France maintains its highest terrorism threat level (Urgence Attentat).',
        'Pickpocketing and bag snatching are extremely common around tourist areas in Paris.',
        'Strikes and demonstrations can cause significant transport disruption.',
        'Protests in Paris and other cities can occasionally turn violent.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '3 months beyond intended departure',
      visaRequired: false,
      visaInfo: 'Part of the Schengen Area. No visa required for most Western passport holders for up to 90 days in 180. ETIAS (EU Travel Information and Authorisation System) will be required from 2025 for visa-exempt non-EU nationals.',
      iataReference: iata('FR'),
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
      ],
      malariaRisk: 'No malaria risk in mainland France. Risk present in French Guiana (overseas territory).',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/france-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/france', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/france', flag: '🇨🇦' },
      { agency: 'EU Reopen Europa', url: 'https://reopen.europa.eu/en', flag: '🇪🇺' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/france', flag: '🇳🇿' },
    ],
  },
  'India': {
    countryId: 'IN',
    countryName: 'India',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Do not travel to Jammu & Kashmir (except Ladakh via Delhi), and areas near the Pakistan and Afghanistan borders.',
        'Terrorism, civil unrest, and communal violence are risks in parts of the country.',
        'Petty crime, scams, and transport fraud targeting tourists are common.',
        'Women travellers should exercise heightened personal security awareness.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival',
      visaRequired: true,
      visaInfo: 'e-Visa available for most nationalities — apply online before travel. Visa on Arrival available at select airports for eligible countries. Pakistan and Bangladesh nationals face different visa conditions.',
      iataReference: iata('IN'),
      entryNotes: ['Register your presence with local police if staying more than 180 days.', 'Restricted areas require special permits (e.g. Andaman & Nicobar, North East).'],
    },
    health: {
      vaccinations: [
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
        { name: 'Hepatitis B', requirement: 'Recommended' },
        { name: 'Rabies', requirement: 'Recommended', notes: 'For long-term travellers and those with animal exposure.' },
        { name: 'Japanese Encephalitis', requirement: 'Recommended', notes: 'For travellers spending significant time in rural areas.' },
        { name: 'Cholera', requirement: 'Optional' },
      ],
      malariaRisk: 'Malaria risk throughout India below 2,000m. Risk is highest in rural areas and during monsoon season. Chemoprophylaxis recommended.',
      polioAlert: false,
      healthNotes: ['Water purification essential. Drink bottled/filtered water only.', 'Dengue fever risk year-round, especially during monsoon.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/india-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/india', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/india', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/india', flag: '🇳🇿' },
      { agency: 'WHO Travel Advice', url: 'https://www.who.int/travel-advice/all-updates-for-travellers', flag: '🌐' },
    ],
  },
  'Brazil': {
    countryId: 'BR',
    countryName: 'Brazil',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Violent crime including robbery, carjacking, and armed assault is high in many cities.',
        'Crime rates significantly elevated in favelas — avoid these areas.',
        'Demonstrations are common and can turn violent without warning.',
        'Drug gang activity is prevalent in Rio de Janeiro, São Paulo, and border regions.',
      ],
      interpolNotices: [
        { title: 'Mexico and Colombia dismantle transnational trafficking ring', url: 'https://www.interpol.int/en/News-and-Events/News/2024/Mexico-and-Colombia-dismantle-transnational-sex-trafficking-ring' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival',
      visaRequired: false,
      visaInfo: 'US, UK, EU, Canadian, Australian and many other nationals do not require a visa for tourism for up to 90 days. Some nationalities require a visa — check IATA Timatic.',
      iataReference: iata('BR'),
    },
    health: {
      vaccinations: [
        { name: 'Yellow Fever', requirement: 'Mandatory', notes: 'Required for travel to and from designated risk areas including Amazon region.' },
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
        { name: 'Hepatitis B', requirement: 'Recommended' },
        { name: 'Rabies', requirement: 'Optional' },
      ],
      malariaRisk: 'Malaria risk in Amazon Basin (Acre, Amapá, Amazonas, Pará, Rondônia, Roraima, Mato Grosso). No risk in Rio, São Paulo, Salvador, Fortaleza, or other major coastal cities.',
      polioAlert: false,
      healthNotes: ['Dengue, Zika, and Chikungunya present year-round. Use insect repellent.', 'Check WHO Yellow Fever map for your specific Brazil itinerary.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/brazil', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/brazil', flag: '🇨🇦' },
      { agency: 'Brazil Ministry of Health (Malaria)', url: 'http://www.saude.gov.br/malaria', flag: '🇧🇷' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/brazil', flag: '🇳🇿' },
    ],
  },
  'Mexico': {
    countryId: 'MX',
    countryName: 'Mexico',
    security: {
      overallStatus: 'Reconsider Travel',
      highlights: [
        'Drug cartel violence is widespread. Several states are rated Do Not Travel.',
        'Do Not Travel: Colima, Guerrero, Michoacan, Sinaloa, Tamaulipas, Zacatecas.',
        'Kidnapping and extortion risks are elevated. Avoid travelling at night outside major urban areas.',
        'Exercise caution in border regions with the US.',
      ],
      interpolNotices: [
        { title: 'Mexico and Colombia dismantle transnational trafficking ring', url: 'https://www.interpol.int/en/News-and-Events/News/2024/Mexico-and-Colombia-dismantle-transnational-sex-trafficking-ring' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival (recommended)',
      visaRequired: false,
      visaInfo: 'No visa required for most Western passport holders for tourist visits up to 180 days. Tourists may be asked to show proof of onward travel and sufficient funds.',
      iataReference: iata('MX'),
    },
    health: {
      vaccinations: [
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
        { name: 'Hepatitis B', requirement: 'Recommended' },
      ],
      malariaRisk: 'Low malaria risk in rural areas of Chiapas, Oaxaca, Tabasco. No risk in major tourist destinations (Cancún, Mexico City, Los Cabos, Puerto Vallarta).',
      polioAlert: false,
      healthNotes: ['Tap water is not safe to drink. Use bottled water only.', 'Dengue fever is present, particularly in coastal and jungle areas.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/mexico', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/mexico', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/mexico', flag: '🇳🇿' },
    ],
  },
  'Saudi Arabia': {
    countryId: 'SA',
    countryName: 'Saudi Arabia',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Houthi drone and missile attacks from Yemen have targeted the country. Monitor alerts.',
        'Strict social laws apply — alcohol, drugs, and criticism of the government are illegal.',
        'LGBTQ+ individuals face significant legal and safety risks.',
        'Photography of government buildings, military installations, and palaces is prohibited.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival',
      visaRequired: true,
      visaInfo: 'Tourist e-Visa is available for over 50 nationalities. Visa on Arrival available for select nationalities. Israeli passport holders are not admitted. Women no longer require a male guardian for entry since 2019.',
      iataReference: iata('SA'),
      entryNotes: ['Modest dress required in public. Women do not need to wear abaya but modest dress is expected.', 'Always carry your passport or Iqama.'],
    },
    health: {
      vaccinations: [
        { name: 'Meningococcal Meningitis', requirement: 'Mandatory', notes: 'Required for Hajj and Umrah pilgrims.' },
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
      ],
      malariaRisk: 'Limited malaria risk in south-western regions bordering Yemen (Jizan province). No risk in Riyadh, Jeddah, Mecca, or Medina.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/saudi-arabia-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/saudi-arabia', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/saudi-arabia', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/saudi-arabia', flag: '🇳🇿' },
    ],
  },
  'Russia': {
    countryId: 'RU',
    countryName: 'Russia',
    security: {
      overallStatus: 'Do Not Travel',
      highlights: [
        'Do Not Travel — the ongoing war with Ukraine has created direct armed conflict risk.',
        'Martial law and compulsory military mobilisation risk for Russian nationals.',
        'Many Western airlines no longer fly to Russia, requiring routing through third countries.',
        'Foreigners have been detained arbitrarily, with limited consular access.',
        'All border regions with Ukraine are extremely dangerous.',
      ],
      interpolNotices: [
        { title: '14 terror suspects arrested in African operation', url: 'https://www.interpol.int/en/News-and-Events/News/2023/14-terror-suspects-arrested-in-African-operation' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond departure',
      visaRequired: true,
      visaInfo: 'Standard tourist and business visas are available but many Western governments advise against applying. e-Visa available for some nationalities for specific regions. SWIFT banking restrictions may make payments difficult.',
      iataReference: iata('RU'),
      entryNotes: ['Dual nationals of hostile nations may face heightened border scrutiny.', 'Your government likely has no active embassy services available.'],
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
        { name: 'Tick-borne Encephalitis', requirement: 'Recommended', notes: 'For outdoor travellers in forested areas.' },
        { name: 'Hepatitis A & B', requirement: 'Recommended' },
      ],
      malariaRisk: 'No significant malaria risk.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/russia-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/russia', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/russia', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/russia', flag: '🇳🇿' },
    ],
  },
  'Australia': {
    countryId: 'AU',
    countryName: 'Australia',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'Australia is a safe destination with low general crime rates.',
        'High UV radiation — sunscreen and protective clothing essential year-round.',
        'Dangerous wildlife including snakes, spiders, crocodiles, and marine stingers are present.',
        'Bushfires are a risk from October to March, particularly in New South Wales and Victoria.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival (recommended)',
      visaRequired: true,
      visaInfo: 'Most visitors require an Electronic Travel Authority (ETA) or eVisitor visa — obtained online before departure. New Zealand citizens qualify for a Special Category Visa on arrival. US, UK, EU nationals qualify for ETA.',
      iataReference: iata('AU'),
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
      ],
      malariaRisk: 'No malaria risk in mainland Australia. Very limited risk in Torres Strait islands near Papua New Guinea.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/australia-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/australia', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/australia', flag: '🇨🇦' },
      { agency: 'Smartraveller (AU Gov)', url: 'https://www.smartraveller.gov.au/destinations/americas/united-states-america', flag: '🇦🇺' },
    ],
  },
  'UAE': {
    countryId: 'AE',
    countryName: 'UAE',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Regional tensions, especially relating to Iran and Yemen, pose a security risk.',
        'Criticising the government or royal family on social media is a criminal offence.',
        'LGBTQ+ relationships are illegal. Homosexual acts can result in imprisonment or deportation.',
        'Prescription medications that are legal elsewhere may be illegal in the UAE.',
      ],
      interpolNotices: [
        { title: 'Middle East security situation update', url: 'https://www.safetravel.govt.nz/news/middle-east-security-situation' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival',
      visaRequired: false,
      visaInfo: 'Citizens of 49+ countries receive a free visa on arrival, including UK, US, EU, Australian, and Canadian passport holders. Most receive 30-day extendable visit visa.',
      iataReference: iata('AE'),
      entryNotes: ['Israeli passport holders are admitted since the Abraham Accords.', 'Dressing modestly in public is required — beachwear confined to beach/pool areas.'],
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
      ],
      malariaRisk: 'No malaria risk in the UAE.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-arab-emirates-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/united-arab-emirates', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/united-arab-emirates', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/united-arab-emirates', flag: '🇳🇿' },
    ],
  },
  'South Korea': {
    countryId: 'KR',
    countryName: 'South Korea',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'North Korean provocations including missile tests can raise tensions periodically.',
        'Overall crime rate is very low for visitors.',
        'Large-scale public demonstrations occur regularly at Gwanghwamun Square, Seoul.',
      ],
      interpolNotices: [
        { title: 'Large-scale public event at Gwanghwamun Square, Seoul', url: 'https://www.safetravel.govt.nz/news/largescale-public-event-at-gwanghwamun-square,-seoul,-south-korea' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival (recommended)',
      visaRequired: false,
      visaInfo: '112+ nationalities can enter visa-free for tourism. US, UK, EU, NZ, AU, CA nationals qualify for 90 days visa-free. K-ETA (Korea Electronic Travel Authorisation) may be required — check current requirements.',
      iataReference: iata('KR'),
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
        { name: 'Japanese Encephalitis', requirement: 'Recommended', notes: 'For rural travellers during spring and summer.' },
      ],
      malariaRisk: 'Very low malaria risk in rural areas near the DMZ. Negligible risk for most tourists.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-korea-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/south-korea', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/south-korea', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/south-korea', flag: '🇳🇿' },
    ],
  },
  'Singapore': {
    countryId: 'SG',
    countryName: 'Singapore',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'Singapore is one of the safest cities in the world.',
        'Strict laws on drug possession, chewing gum, littering, vandalism, and jaywalking apply.',
        'Drug trafficking carries mandatory death penalty — zero tolerance.',
        'Strict regulations on vaping and e-cigarettes.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival',
      visaRequired: false,
      visaInfo: 'Citizens of most countries can enter visa-free for 30–90 days. Singapore uses advanced border control; ensure your passport is undamaged and machine-readable.',
      iataReference: iata('SG'),
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
        { name: 'Yellow Fever', requirement: 'Mandatory', notes: 'Proof of vaccination required if arriving from a Yellow Fever risk country.' },
      ],
      malariaRisk: 'No malaria risk in Singapore.',
      polioAlert: false,
      healthNotes: ['Dengue fever outbreaks occur periodically. Check NEA dengue alert maps.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/singapore-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/singapore', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/singapore', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/singapore', flag: '🇳🇿' },
    ],
  },
  'Nigeria': {
    countryId: 'NG',
    countryName: 'Nigeria',
    security: {
      overallStatus: 'Reconsider Travel',
      highlights: [
        'Boko Haram and ISWAP terrorist activity is ongoing in the North East (Borno, Adamawa, Yobe).',
        'Violent crime, armed robbery, kidnapping for ransom, and piracy are serious risks.',
        'Do Not Travel to North East Nigeria (Borno, Yobe, Adamawa states).',
        'Reconsider travel to North West, North Central, and Niger Delta regions.',
      ],
      interpolNotices: [
        { title: '14 terror suspects arrested in African operation', url: 'https://www.interpol.int/en/News-and-Events/News/2023/14-terror-suspects-arrested-in-African-operation' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival',
      visaRequired: true,
      visaInfo: 'Visa required for most nationalities. e-Visa available online before travel. ECOWAS citizens travel freely within the region.',
      iataReference: iata('NG'),
    },
    health: {
      vaccinations: [
        { name: 'Yellow Fever', requirement: 'Mandatory', notes: 'Proof of vaccination required for all travellers aged 9 months and above.' },
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
        { name: 'Meningococcal Meningitis', requirement: 'Recommended', notes: 'For travel to northern states, especially during dry season.' },
        { name: 'Rabies', requirement: 'Recommended' },
        { name: 'Cholera', requirement: 'Recommended' },
      ],
      malariaRisk: 'High malaria risk throughout Nigeria. Chemoprophylaxis strongly recommended. Use insecticide-treated bed nets and insect repellent.',
      polioAlert: true,
      healthNotes: ['Nigeria is a polio-endemic country. Ensure polio vaccination is up to date.', 'Lassa fever is present and can be life-threatening.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nigeria-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/nigeria', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/nigeria', flag: '🇨🇦' },
      { agency: 'GPEI / Polio', url: 'http://polioeradication.org/where-we-work/', flag: '🌐' },
      { agency: 'WHO Travel Advice', url: 'https://www.who.int/travel-advice/all-updates-for-travellers', flag: '🌐' },
    ],
  },
  'South Africa': {
    countryId: 'ZA',
    countryName: 'South Africa',
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'South Africa has one of the highest rates of violent crime globally.',
        'Carjacking, home invasions, robbery, and mugging are prevalent risks.',
        'Avoid townships unless on a reputable organised tour.',
        'Loadshedding (planned power outages) is common and can affect security systems.',
      ],
      interpolNotices: [
        { title: 'International appeal seeks to uncover identities of 46 deceased women', url: 'https://www.interpol.int/en/News-and-Events/News/2024/International-appeal-seeks-to-uncover-identities-of-46-deceased-women' },
      ],
    },
    visaEntry: {
      passportValidity: '30 days beyond intended stay (minimum 2 blank visa pages required)',
      visaRequired: false,
      visaInfo: 'Most Western passport holders (US, UK, EU, CA, AU, NZ) can enter visa-free for 90 days. Passport requires at least 2 blank pages for the visa stamp.',
      iataReference: iata('ZA'),
    },
    health: {
      vaccinations: [
        { name: 'Yellow Fever', requirement: 'Mandatory', notes: 'Required only if arriving from a Yellow Fever risk country.' },
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
        { name: 'Rabies', requirement: 'Recommended', notes: 'For outdoor and rural travellers.' },
      ],
      malariaRisk: 'Malaria risk in Northern Limpopo province, Mpumalanga (near Mozambique border), and KwaZulu-Natal border areas, particularly during summer (November–April). Kruger National Park has some risk. No risk in Cape Town, Johannesburg, or Garden Route.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/south-africa', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/south-africa', flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/south-africa', flag: '🇳🇿' },
    ],
  },
  'Italy': {
    countryId: 'IT',
    countryName: 'Italy',
    security: {
      overallStatus: 'Exercise Normal Precautions',
      highlights: [
        'Pickpocketing and bag snatching are very common in tourist areas (Rome, Florence, Venice, Naples).',
        'Terrorism threat remains elevated across Western Europe.',
        'Demonstrations can disrupt transportation and public services.',
      ],
      interpolNotices: [
        { title: 'INTERPOL General Secretariat News', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '3 months beyond intended Schengen departure',
      visaRequired: false,
      visaInfo: 'Part of the Schengen Area. Most Western passport holders do not need a visa for stays up to 90 days in 180. ETIAS will be required from 2025 for non-EU visa-exempt nationals.',
      iataReference: iata('IT'),
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended' },
      ],
      malariaRisk: 'No malaria risk in mainland Italy.',
      polioAlert: false,
    },
    officialSources: [
      { agency: 'US State Dept', url: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/italy-travel-advisory.html', flag: '🇺🇸' },
      { agency: 'UK FCDO', url: 'https://www.gov.uk/foreign-travel-advice/italy', flag: '🇬🇧' },
      { agency: 'Canada Travel', url: 'https://travel.gc.ca/destinations/italy', flag: '🇨🇦' },
      { agency: 'EU Reopen Europa', url: 'https://reopen.europa.eu/en', flag: '🇪🇺' },
      { agency: 'SafeTravel NZ', url: 'https://www.safetravel.govt.nz/italy', flag: '🇳🇿' },
    ],
  },
};

/**
 * Generates a fallback entry for countries not in the detailed dataset.
 */
export const getFallbackCountryData = (countryName: string): CountryTravelData => {
  const slug = countryName.toLowerCase().replace(/\s+/g, '-');
  return {
    countryId: countryName.substring(0, 3).toUpperCase(),
    countryName,
    security: {
      overallStatus: 'Exercise Increased Caution',
      highlights: [
        'Check your government\'s latest advisory before departure.',
        'Monitor local news and follow instructions from local authorities.',
        'Register your travel with your government\'s smart traveller program.',
      ],
      interpolNotices: [
        { title: 'INTERPOL News & Notices', url: 'https://www.interpol.int/en/News-and-Events/News' },
      ],
    },
    visaEntry: {
      passportValidity: '6 months beyond arrival date (recommended)',
      visaRequired: false,
      visaInfo: 'Verify entry requirements with IATA Timatic or your nearest embassy before departure as these can change at short notice.',
      iataReference: `https://www.iata.org/en/services/compliance/timatic/`,
    },
    health: {
      vaccinations: [
        { name: 'Routine vaccinations', requirement: 'Recommended', notes: 'MMR, DTP, Influenza, COVID-19.' },
        { name: 'Hepatitis A', requirement: 'Recommended' },
        { name: 'Typhoid', requirement: 'Recommended' },
      ],
      malariaRisk: 'Check WHO malaria risk map for this destination before travel.',
      polioAlert: false,
      healthNotes: ['Consult a travel health clinic at least 6 weeks before departure.'],
    },
    officialSources: [
      { agency: 'US State Dept', url: `https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/${slug}-travel-advisory.html`, flag: '🇺🇸' },
      { agency: 'UK FCDO', url: `https://www.gov.uk/foreign-travel-advice/${slug}`, flag: '🇬🇧' },
      { agency: 'Canada Travel', url: `https://travel.gc.ca/destinations/${slug}`, flag: '🇨🇦' },
      { agency: 'SafeTravel NZ', url: `https://www.safetravel.govt.nz/${slug}`, flag: '🇳🇿' },
      { agency: 'WHO Travel Advice', url: 'https://www.who.int/travel-advice/all-updates-for-travellers', flag: '🌐' },
      { agency: 'IATA Timatic', url: 'https://www.iata.org/en/services/compliance/timatic/', flag: '🌐' },
    ],
  };
};
