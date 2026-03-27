import type { CountryTravelData } from '../travelCountryData';
const iata = (cc: string) => `https://www.iata.org/en/services/compliance/timatic/travel-documentation/?destination=${cc}`;
const cdc = (slug: string) => `https://wwwnc.cdc.gov/travel/destinations/traveler/none/${slug}`;
const thp = (id: number, slug: string) => `https://travelhealthpro.org.uk/country/${id}/${slug}#Vaccine_Recommendations`;

export const americasData: Record<string, CountryTravelData> = {
  'USA': { countryId:'US', countryName:'United States', capital:'Washington D.C.',
    coordinates: { lat: 38.8951, lng: -77.0364 },
    majorCities: [
      { name: 'Washington D.C.', lat: 38.8951, lng: -77.0364 },
      { name: 'New York', lat: 40.7128, lng: -74.0060 },
      { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
      { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
      { name: 'Houston', lat: 29.7604, lng: -95.3698 }
    ],
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['The US is generally safe but experiences higher rates of gun violence than most Western European, Canadian, or Australian counterparts. Incidents of mass shootings occur periodically in public spaces.','Petty crime (pickpocketing, car break-ins) is common in major tourist hubs: San Francisco (Lombard St, Fisherman\'s Wharf), New York City (Times Square, Subway), and New Orleans (French Quarter).','Civil unrest: Protests related to political and social issues are frequent in major cities and can disrupt transport. Avoid large demonstrations.','Natural hazards: Hurricane season (June–November) affects the Gulf Coast and East Coast; wildfires are common in the West (California, Oregon); tornadoes frequent in the Midwest.','Healthcare is extremely expensive. Comprehensive travel insurance is mandatory.'],
      interpolNotices:[{title:'INTERPOL Washington News',url:'https://www.interpol.int/en/Who-we-are/Member-countries/Americas/UNITED-STATES'}] },
    visaEntry:{ passportValidity:'6 months beyond intended stay (waived for some countries)', visaRequired:false, visaInfo:'Citizens of 41 countries under the Visa Waiver Program (including UK, EU, AU, NZ) must obtain an ESTA (esta.cbp.dhs.gov) at least 72 hours before travel. Canadian citizens generally do not need a visa or ESTA. Others require a B1/B2 visa.', iataReference:iata('US'), entryNotes:['ESTA is valid for 2 years (or until passport expires) for multiple entries up to 90 days.'] },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/usa/', cdcUrl:cdc('united-states'), travelHealthProUrl:thp(235, 'usa'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'US Dollar', code: 'USD', symbol: '$' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/usa',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/united-states',flag:'🇨🇦'}] },

  'Brazil': { countryId:'BR', countryName:'Brazil', capital:'Brasilia',
    coordinates: { lat: -15.7975, lng: -47.8919 },
    majorCities: [
      { name: 'Brasilia', lat: -15.7975, lng: -47.8919 },
      { name: 'São Paulo', lat: -23.5505, lng: -46.6333 },
      { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 }
    ],
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Violent crime is a high concern: Armed robbery, carjacking, and assault are frequent in major cities (Rio de Janeiro, São Paulo, Recife, Salvador). Favelas (informal settlements) should not be entered even with "tours" as they are under gang control.','Express kidnappings: Victims are abducted and forced to withdraw money from ATMs. Avoid using ATMs on deserted streets or at night.','Petty crime: Pickpocketing is extremely common on Rio\'s beaches (Copacabana, Ipanema) and during Carnival.','Do Not Travel to: Border regions with Colombia, Peru, and Bolivia due to narcotics trafficking and organized crime.','Civil unrest: Political protests can turn violent — avoid large gatherings.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Visa-free for 90 days for most Western nationals (UK, EU, NZ). US, Canadian, and Australian citizens will require an e-Visa from April 2025 (postponed from 2024).', iataReference:iata('BR') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended',notes:'Highly recommended for the majority of Brazil, including Rio and São Paulo.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'High malaria risk in the Amazon basin (Amazonas, Acre, Rondônia). Low risk in Rio de Janeiro, São Paulo, and southern coastal cities.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/bra/', cdcUrl:cdc('brazil'), travelHealthProUrl:thp(34, 'brazil'), polioAlert:false, healthNotes:['Dengue, Zika, and Chikungunya are widespread.'] },
    essentials: { 
      emergencyNumbers: { police: '190', ambulance: '192', fire: '193' },
      currency: { name: 'Brazilian Real', code: 'BRL', symbol: 'R$' },
      plugTypes: ['N'],
      voltage: '127 V / 220 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/brazil-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/brazil',flag:'🇬🇧'}] },

  'Mexico': { countryId:'MX', countryName:'Mexico', capital:'Mexico City',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    majorCities: [
      { name: 'Mexico City', lat: 19.4326, lng: -99.1332 },
      { name: 'Cancún', lat: 21.1619, lng: -86.8515 },
      { name: 'Guadalajara', lat: 20.6597, lng: -103.3496 }
    ],
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Violent crime: Murder, kidnapping, and carjacking are widespread. High-profile drug cartel violence is concentrated in Guanajuato, Guerrero, Michoacán, and border states (Sinaloa, Tamaulipas). Do Not Travel to these states.','Tourist areas like Cancun, Playa del Carmen, and Tulum have seen increase in gang-related shootings in public spaces; while tourists are rarely the deliberate targets, bystander risk exists.','Kidnapping for ransom: Both "express" and traditional kidnappings of foreign nationals have been reported.','Taxi scams and highway robbery is a risk on rural roads at night — use toll (cuota) roads only.','Natural hazards: Hurricane season (June–November) on both coasts; seismic risk in Mexico City and southern states.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'Most Western nationals (US, UK, EU, CA, AU, NZ) enter visa-free for 180 days for tourism. Must complete an FMM (Multiple Immigration Form). Ensure you are stamped — without an entry stamp, you may be detained.', iataReference:iata('MX') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Low risk in rural areas of Chiapas and southern states. No risk in Mexico City, Cancun, or Cabo.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mex/', cdcUrl:cdc('mexico'), travelHealthProUrl:thp(147, 'mexico'), polioAlert:false, healthNotes:['Dengue fever is common.','Tap water is not safe — use bottled water.'] },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'Mexican Peso', code: 'MXN', symbol: '$' },
      plugTypes: ['A', 'B'],
      voltage: '127 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mexico-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/mexico',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/mexico',flag:'🇨🇦'}] },


  'Colombia': { countryId:'CO', countryName:'Colombia',
    coordinates: { lat: 4.7110, lng: -74.0721 },
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Violent crime: Homicide and assault are significant in major cities. Armed robbery involving firearms or knives is common.','Dating App Scams: Use of sedative drugs (Scopolamine/Burundanga) to incapacitate and rob foreign men met on dating apps has resulted in multiple deaths in Medellin and Bogota.','Reconsider Travel: Border areas with Venezuela, Ecuador, and Panama (Darien Gap) due to ELN and FARC dissidents and narcotics trafficking.','Terrorism: ELN (National Liberation Army) remains active and conducts bombings targeting police and infrastructure.','Protests can turn violent — avoid demonstrations in Bogota (Plaza de Bolívar).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'90 days beyond arrival (recommended 6 months)', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals. Extendable to 180 days. Mandatory: Pre-register at migrationcolombia.gov.co via "Check-Mig" form before arrival.', iataReference:iata('CO') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended',notes:'Required for entry to national parks.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'High malaria risk in low-altitude rural areas (Pacific coast, Amazon basin). No risk in Bogota, Medellin, or Cartagena.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/col/', cdcUrl:cdc('colombia'), travelHealthProUrl:thp(53, 'colombia'), polioAlert:false, healthNotes:['Zika and Dengue are present below 2,300m.'] },
    essentials: { 
      emergencyNumbers: { police: '123', ambulance: '123', fire: '123' },
      currency: { name: 'Colombian Peso', code: 'COP', symbol: '$' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/colombia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/colombia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/colombia',flag:'🇨🇦'}] },

  'Argentina': { countryId:'AR', countryName:'Argentina', capital:'Buenos Aires',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Argentina is relatively safe. Petty crime (pickpocketing, bag snatching) is high in Buenos Aires (San Telmo, La Boca, Retiro, Recoleta).','Protests: Frequent demonstrations (piquetes) in Buenos Aires can cause major traffic disruption.','Eco-terrorism/Forest Fires: Wildfires are common in the Patagonia and Cordoba regions during summer.','Economic instability: Inflation is extremely high; use of the "blue dollar" (parallel exchange rate) is common for better value — exercise caution when exchanging currency on the street.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for 90 days. Reciprocity fee for US and Canadian citizens has been suspended/abolished.', iataReference:iata('AR') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'Very low risk in northern Salta and Misiones provinces. No risk in Buenos Aires or Patagonia.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/arg/', cdcUrl:cdc('argentina'), travelHealthProUrl:thp(11, 'argentina'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '107', fire: '100' },
      currency: { name: 'Argentine Peso', code: 'ARS', symbol: '$' },
      plugTypes: ['C', 'I'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/argentina-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/argentina',flag:'🇬🇧'}] },



  'Venezuela': { countryId:'VE', countryName:'Venezuela',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — extreme risk of violent crime, kidnapping, arbitrary detention, and medical system collapse.','Civil war/Political Crisis: Ongoing dispute between Maduro and opposition has led to mass protests, violent crackdowns, and a humanitarian disaster.','Terrorism: Dissident FARC and ELN groups operate in border regions.','Kidnapping for ransom is a persistent threat.','Consular services for Western nationals (US, Canada) are SUSPENDED. Limited assistance available.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa required for almost all Western nationals (US, UK, CA). Extremely difficult to obtain. US citizens are generally barred from entry.', iataReference:iata('VE') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'}], malariaRisk:'High malaria risk throughout Venezuela. Chemoprophylaxis essential.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/ven/', cdcUrl:cdc('venezuela'), travelHealthProUrl:thp(239, 'venezuela'), polioAlert:true, healthNotes:['Malnutrition and lack of electricity/water make all medical care high-risk.'] },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '171', fire: '171' },
      currency: { name: 'Venezuelan Bolívar', code: 'VES', symbol: 'Bs.S' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/venezuela-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/venezuela',flag:'🇬🇧'}] },

  'Jamaica': { countryId:'JM', countryName:'Jamaica',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Violent crime: Jamaica has one of the world\'s highest homicide rates. Sexual assault and armed robbery occur even in gated all-inclusive resorts.','State of Emergency: Regularly declared in Montego Bay (St. James), Kingston, and Negril due to gang violence. Curfews and sudden military roadblocks can occur.','Inter-gang violence: Concentrated in inner-city areas — tourists must stay within designated resort zones.','LGBTQ+ safety: Same-sex relationships are criminalised and social intolerance is high — discretion is mandatory.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'Most Western nationals (US, UK, CA) do not require a visa for tourism up to 90 days.', iataReference:iata('JM') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/jam/', cdcUrl:cdc('jamaica'), travelHealthProUrl:thp(113, 'jamaica'), polioAlert:false, healthNotes:['Dengue outbreaks are common.'] },
    essentials: { 
      emergencyNumbers: { police: '119', ambulance: '110', fire: '110' },
      currency: { name: 'Jamaican Dollar', code: 'JMD', symbol: 'J$' },
      plugTypes: ['A', 'B'],
      voltage: '110 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/jamaica-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/jamaica',flag:'🇬🇧'}] },


  'Costa Rica': { countryId:'CR', countryName:'Costa Rica',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Costa Rica is very safe for tourists. Petty crime (car break-ins, passport theft) is the main concern in San José, Limón, and beach towns like Jacó and Quepos.','Natural hazards: Active volcanoes (Arenal, Poás, Turrialba); flash flooding in rainy season (May–November); riptides on both coasts.','Road safety: Poor lighting and narrow mountain roads — avoid driving at night.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for 90 days (180 days for some from 2024). Entry stamp is mandatory.', iataReference:iata('CR') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'Low risk in Limón province. No risk in San José or main Pacific resorts.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/cri/', cdcUrl:cdc('costa-rica'), travelHealthProUrl:thp(58, 'costa-rica'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'Costa Rican Colón', code: 'CRC', symbol: '₡' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/costa-rica-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/costa-rica',flag:'🇬🇧'}] },


  'Cuba': { countryId:'CU', countryName:'Cuba',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Economic Crisis: Significant shortages of food, medicine, fuel, and electricity. "Load shedding" (power cuts) are frequent nationwide.','Crime: Increase in petty crime (theft, mugging) due to economic hardship. Avoid carrying large amounts of cash.','State of Sponsors of Terrorism (SSOT): The US designates Cuba as an SSOT. European/Western nationals who visit Cuba after Jan 2021 are generally NO LONGER ELIGIBLE FOR US ESTA and must apply for a full US visa to visit the US.','Protests: Public demonstrations are illegal and result in mass arrests (e.g., July 2021).','Internet: Controlled by the state; frequently restricted during unrest.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'A "Tourist Card" (Tarjeta del Turista) is required for most — obtain through airlines, travel agents, or Cuban embassies. US citizens must travel under one of 12 authorized categories (tourism is officially banned).', iataReference:iata('CU'), entryNotes:['Evidence of medical insurance is mandatory for entry.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/cub/', cdcUrl:cdc('cuba'), travelHealthProUrl:thp(60, 'cuba'), polioAlert:false, healthNotes:['Severe medicine shortages — carry a full medical kit.'] },
    essentials: { 
      emergencyNumbers: { police: '106', ambulance: '104', fire: '105' },
      currency: { name: 'Cuban Peso', code: 'CUP', symbol: '₱' },
      plugTypes: ['A', 'B', 'C', 'L'],
      voltage: '110 V / 220 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/cuba-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/cuba',flag:'🇬🇧'}] },


  'Panama': { countryId:'PA', countryName:'Panama',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Panama is generally safe. Petty crime (mugging, pickpocketing) occurs in Panama City (El Chorrillo, Santa Ana) and Colón.','Do Not Travel: Darien Gap (border with Colombia) — extreme risk of kidnapping, murder, and disappearance due to organized crime and drug trafficking. NO ROAD exists across the Gap.','Protests: Large-scale demonstrations over inflation and mining can block the Pan-American Highway for days.','Natural hazards: Flooding and landslides during rainy season.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond arrival (recommended 6 months)', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for 90–180 days. Must show $500 cash or credit card limit and return ticket.', iataReference:iata('PA') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Low risk in Guna Yala, Darien, and Ngäbe-Buglé regions. No risk in Panama City or Canal zone.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/pan/', cdcUrl:cdc('panama'), travelHealthProUrl:thp(174, 'panama'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '104', ambulance: '103', fire: '103' },
      currency: { name: 'Panamanian Balboa', code: 'PAB', symbol: 'B/.' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/panama-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/panama',flag:'🇬🇧'}] },


  'Honduras': { countryId:'HN', countryName:'Honduras',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Violent crime: Honduras has one of the world\'s highest murder rates. Armed robbery, carjacking, and home invasion are significant threats. Gang violence (Mara Salvatrucha MS-13 and Barrio 18) is pervasive.','State of Exception (Martial Law): Declared in 2022 and extended into 2024 to combat gang extortion — allows police search without warrant. Movement may be restricted.','Kidnapping: Increase in "express" kidnappings in San Pedro Sula and Tegucigalpa.','Bay Islands (Roatán, Utila): Generally safer than the mainland but petty crime is rising.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for US, UK, EU, CA citizens. Central America-4 (CA-4) Agreement allows free travel between Honduras, El Salvador, Guatemala, and Nicaragua.', iataReference:iata('HN') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Low risk throughout Honduras below 1,500m. Highest risk in Colón and Gracias a Dios regions.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/hnd/', cdcUrl:cdc('honduras'), travelHealthProUrl:thp(101, 'honduras'), polioAlert:false, healthNotes:['Dengue outbreaks are common.'] },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '198' },
      currency: { name: 'Honduran Lempira', code: 'HNL', symbol: 'L' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/honduras-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/honduras',flag:'🇬🇧'}] },

  'Guatemala': { countryId:'GT', countryName:'Guatemala',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Violent crime: Armed robbery and assault target tourists. Gang activity is widespread in Guatemala City (avoid Zones 3, 7, 12, 18, 21).','Highway robbery: Armed robberies of tourist vans on the main highways (CA-1, CA-2) occur regularly. Travel in groups and during daylight only.','Natural hazards: Active volcanoes (Fuego, Pacaya, Santiaguito) are dangerous — the 2018 Fuego eruption killed hundreds. Earthquake risk is high.','Political protests: Can block major roads including to the airport — monitor local media.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'90-day visa-free. Member of the CA-4 Agreement.', iataReference:iata('GT') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Yellow Fever',requirement:'Recommended'}], malariaRisk:'Low risk throughout Guatemala (except at high altitudes). Highest risk in Escuintla and Petén regions.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/gtm/', cdcUrl:cdc('guatemala'), travelHealthProUrl:thp(96, 'guatemala'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '128', fire: '122' },
      currency: { name: 'Guatemalan Quetzal', code: 'GTQ', symbol: 'Q' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/guatemala-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/guatemala',flag:'🇬🇧'}] },

  'Canada': { countryId:'CA', countryName:'Canada', capital:'Ottawa',
    coordinates: { lat: 45.4215, lng: -75.6972 },
    majorCities: [
      { name: 'Ottawa', lat: 45.4215, lng: -75.6972 },
      { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
      { name: 'Vancouver', lat: 49.2827, lng: -123.1207 },
      { name: 'Montreal', lat: 45.5017, lng: -73.5673 }
    ],
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Canada is very safe. Major cities like Toronto, Vancouver, and Montreal have very low violent crime rates compared to US counterparts.','Natural hazards: Severe winter weather (Dec–Mar) can cause flight cancellations and hazardous driving. Wildfires are common in summer in Western Canada (BC, Alberta).','Public demonstrations occur in major cities, particularly around Parliament Hill in Ottawa, but are generally peaceful.'],
      interpolNotices:[{title:'INTERPOL Ottawa News',url:'https://www.interpol.int/en/Who-we-are/Member-countries/Americas/CANADA'}] },
    visaEntry:{ passportValidity:'Valid for duration of intended stay', visaRequired:false, visaInfo:'Citizens of US, UK, EU, AU, NZ receive an Electronic Travel Authorization (eTA) for entry by air. US citizens do not need an eTA.', iataReference:iata('CA') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/can/', cdcUrl:cdc('canada'), travelHealthProUrl:thp(44, 'canada'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'Canadian Dollar', code: 'CAD', symbol: '$' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/canada-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/canada',flag:'🇬🇧'}] },

  'Chile': { countryId:'CL', countryName:'Chile', capital:'Santiago',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Chile is one of the safest countries in South America. Petty crime (theft from vehicles, pickpocketing) is high in Santiago (Valparaíso and Viña del Mar).','Demonstrations: Political protests are common in Santiago (Plaza Italia) and can lead to clashes with police (Carabineros) and use of water cannons.','Seismic Risk: Chile is highly seismically active. Familiarise yourself with earthquake procedures.','Forest fires are common during the dry summer months (Dec–Mar).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Visa-free for 90 days for most Western nationals. A "Tourist Card" is issued on arrival — do not lose it as it is required for departure.', iataReference:iata('CL') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/chl/', cdcUrl:cdc('chile'), travelHealthProUrl:thp(48, 'chile'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '133', ambulance: '131', fire: '132' },
      currency: { name: 'Chilean Peso', code: 'CLP', symbol: '$' },
      plugTypes: ['C', 'L'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/chile-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/chile',flag:'🇬🇧'}] },

  'Peru': { countryId:'PE', countryName:'Peru', capital:'Lima',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Crime: Petty theft and street crime are common in Lima, Cusco, and Arequipa. Express kidnappings from rogue taxis occur — use only app-based or official airport taxis.','Social unrest: Protests and roadblocks occur periodically in the Andes (Cusco, Puno, Arequipa) and can disrupt travel to Machu Picchu.','Reconsider Travel: Border areas with Colombia and the VRAEM region due to terrorism and drug trafficking.','Altitude sickness: Essential to acclimatise when visiting Cusco (3,400m) or Lake Titicaca (3,800m).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for up to 90 or 183 days. Immigration cards are now digital (TAM Virtual).', iataReference:iata('PE') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended',notes:'Recommended for travel to Amazon regions.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'High risk in Loreto and Amazon regions. No risk in Lima, Cusco, or Machu Picchu.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/per/', cdcUrl:cdc('peru'), travelHealthProUrl:thp(177, 'peru'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '105', ambulance: '117', fire: '116' },
      currency: { name: 'Peruvian Sol', code: 'PEN', symbol: 'S/.' },
      plugTypes: ['A', 'C'],
      voltage: '220 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/peru-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/peru',flag:'🇬🇧'}] },

  'Uruguay': { countryId:'UY', countryName:'Uruguay', capital:'Montevideo',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Uruguay is the safest country in South America. Petty crime (pickpocketing) occurs in Montevideo (Ciudad Vieja) and during summer in beach resorts (Punta del Este).','Demonstrations occur in Montevideo (Independence Plaza) but are peaceful.','Road safety: Driving is generally safe, though speed limits are strictly enforced via cameras.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals.', iataReference:iata('UY') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/ury/', cdcUrl:cdc('uruguay'), travelHealthProUrl:thp(236, 'uruguay'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '105', fire: '104' },
      currency: { name: 'Uruguayan Peso', code: 'UYU', symbol: '$' },
      plugTypes: ['C', 'L', 'I'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/uruguay-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/uruguay',flag:'🇬🇧'}] },

  'Paraguay': { countryId:'PY', countryName:'Paraguay', capital:'Asunción',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Petty crime: Street crime and mugging occur in Asunción and Ciudad del Este. Avoid walking alone at night.','Border regions: High risk in the "Triple Frontier" (Brazil/Argentina/Paraguay border) due to narcotics trafficking and illicit trade.','Reconsider Travel: San Pedro, Concepción, and Amambay departments due to activity by the EPP (Paraguayan People’s Army) guerrilla group.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'90-day visa-free for most. US citizens require a visa (since 2021).', iataReference:iata('PY') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'Required if arriving from a risk country.'},{name:'Hepatitis A',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/pry/', cdcUrl:cdc('paraguay'), travelHealthProUrl:thp(176, 'paraguay'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '141', fire: '132' },
      currency: { name: 'Paraguayan Guaraní', code: 'PYG', symbol: '₲' },
      plugTypes: ['C'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/paraguay-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/paraguay',flag:'🇬🇧'}] },

  'Ecuador': { countryId:'EC', countryName:'Ecuador', capital:'Quito',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['State of Emergency (2024): Escalation in drug-gang violence. Curfews and military checks are in effect. Targeted bombings and kidnappings occurred in Guayaquil and Quito.','Violent crime: High risk in Guayaquil (Port cities) and Esmeraldas. Coastal provinces are most affected.','Kidnapping: Increase in "express" kidnappings for ransom.','Galapagos Islands: Remain very safe and are generally exempt from mainland security issues.','Natural hazards: Active volcanoes (Cotopaxi, Tungurahua); high seismic risk.'],
      interpolNotices:[{title:'INTERPOL Quito News',url:'https://www.interpol.int/en/Who-we-are/Member-countries/Americas/ECUADOR'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'90-day visa-free. Entry to Galapagos requires a special transit control card ($20) and park fee ($100–$200).', iataReference:iata('EC') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended',notes:'Required for Amazon travel.'},{name:'Hepatitis A',requirement:'Recommended'}], malariaRisk:'High risk in Amazon and coastal regions below 1,500m. No risk in Quito or Galapagos.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/ecu/', cdcUrl:cdc('ecuador'), travelHealthProUrl:thp(69, 'ecuador'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'US Dollar', code: 'USD', symbol: '$' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ecuador-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/ecuador',flag:'🇬🇧'}] },

  'Bolivia': { countryId:'BO', countryName:'Bolivia', capital:'Sucre / La Paz',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Civil unrest: Frequent roadblocks and protests (bloqueos) can occur with little notice and last for days, affecting travel between major cities (Santa Cruz, La Paz, Cochabamba).','Crime: Street crime and "express" kidnappings in La Paz and Santa Cruz. Use only official radio taxis.','Natural hazards: Flash flooding and landslides during rainy season (Nov–Mar).','Altitude sickness: La Paz is at 3,600m; Salar de Uyuni is at 3,650m — acclimatisation is critical.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'US citizens require a visa ($160). UK, EU, CA, AU, NZ citizens are visa-free for 90 days.', iataReference:iata('BO') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended',notes:'Required for entry if arriving from or going to endemic areas.'},{name:'Hepatitis A',requirement:'Recommended'}], malariaRisk:'Low risk in tropical areas below 2,500m (Beni, Pando, Santa Cruz). No risk in La Paz or Uyuni.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/bol/', cdcUrl:cdc('bolivia'), travelHealthProUrl:thp(30, 'bolivia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '161', fire: '119' },
      currency: { name: 'Boliviano', code: 'BOB', symbol: 'Bs' },
      plugTypes: ['A', 'C'],
      voltage: '115 V / 230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/bolivia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/bolivia',flag:'🇬🇧'}] },

  'Guyana': { countryId:'GY', countryName:'Guyana', capital:'Georgetown',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Crime: Armed robbery and assault are common in Georgetown, particularly in Tiger Bay, Albouystown, and South Georgetown. Avoid walking alone at night.','Infrastructure: Roads are often poorly maintained; avoid travel outside Georgetown at night.','Border dispute: Simmering tensions with Venezuela over the Essequibo region — monitor local news if travelling near the border.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Visa-free for 90 days for most Western nationals.', iataReference:iata('GY') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory'},{name:'Malaria prophylaxis',requirement:'Recommended'}], malariaRisk:'High risk throughout Guyana, including the interior. Low risk in Georgetown.', yellowFeverRisk:'Mandatory', whoCountryUrl:'https://www.who.int/countries/guy/', cdcUrl:cdc('guyana'), travelHealthProUrl:thp(98, 'guyana'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '913', fire: '912' },
      currency: { name: 'Guyanese Dollar', code: 'GYD', symbol: '$' },
      plugTypes: ['A', 'B', 'D', 'G'],
      voltage: '120 V / 240 V',
      frequency: '60 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/guyana-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/guyana',flag:'🇬🇧'}] },

  'Suriname': { countryId:'SR', countryName:'Suriname', capital:'Paramaribo',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Suriname is generally safe, but petty crime is rising in Paramaribo. Avoid poorly lit areas at night.','Road safety: Poor road conditions in the interior. Inland travel requires 4WD or chartered flights.','Civil unrest: Occasional protests related to economic reforms.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Most Western nationals must pay an "Entry Fee" ($25) online before travel instead of a visa.', iataReference:iata('SR') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory'},{name:'Hepatitis A',requirement:'Recommended'}], malariaRisk:'Low risk in the interior. No risk in Paramaribo or coastal areas.', yellowFeverRisk:'Mandatory', whoCountryUrl:'https://www.who.int/countries/sur/', cdcUrl:cdc('suriname'), travelHealthProUrl:thp(208, 'suriname'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '115', ambulance: '113', fire: '110' },
      currency: { name: 'Surinamese Dollar', code: 'SRD', symbol: '$' },
      plugTypes: ['C', 'F'],
      voltage: '127 V / 220 V',
      frequency: '60 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/suriname-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/suriname',flag:'🇬🇧'}] },

  'El Salvador': { countryId:'SV', countryName:'El Salvador', capital:'San Salvador',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['State of Exception (2022–2024): Significant reduction in gang violence due to mass arrests. While street safety has improved, civil liberties are restricted, and foreigners can be detained without due process.','Crime: Petty crime still occurs in tourist areas and on public buses.','Natural hazards: High seismic and volcanic activity; coastal storm risk.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'90-day visa-free. US citizens must pay $12 for a Tourist Card on arrival.', iataReference:iata('SV') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Very low risk. No prophylaxis required.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/slv/', cdcUrl:cdc('el-salvador'), travelHealthProUrl:thp(70, 'el-salvador'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '132', fire: '913' },
      currency: { name: 'US Dollar / Bitcoin', code: 'USD', symbol: '$' },
      plugTypes: ['A', 'B'],
      voltage: '115 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/el-salvador-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/el-salvador',flag:'🇬🇧'}] },

  'Nicaragua': { countryId:'NI', countryName:'Nicaragua', capital:'Managua',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Political climate: Government restricts dissent; arbitrary arrests of foreigners and seizure of devices occur. Avoid any political discussion or protest.','Crime: Petty theft and violent crimes like armed robbery occur in Managua and along the Caribbean coast.','Healthcare: Limited outside Managua; severe cases often require evacuation.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'90-day visa-free for most. Must buy a Tourist Card ($10) on arrival.', iataReference:iata('NI') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Low risk throughout Nicaragua. Highest risk in Puerto Cabezas and Caribbean coast.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/nic/', cdcUrl:cdc('nicaragua'), travelHealthProUrl:thp(162, 'nicaragua'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '118', ambulance: '128', fire: '115' },
      currency: { name: 'Córdoba', code: 'NIO', symbol: 'C$' },
      plugTypes: ['A', 'B'],
      voltage: '120 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nicaragua-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/nicaragua',flag:'🇬🇧'}] },
};
