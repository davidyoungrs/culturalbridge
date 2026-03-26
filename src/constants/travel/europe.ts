import type { CountryTravelData } from '../travelCountryData';
const iata = (cc: string) => `https://www.iata.org/en/services/compliance/timatic/travel-documentation/?destination=${cc}`;
const cdc = (slug: string) => `https://wwwnc.cdc.gov/travel/destinations/traveler/none/${slug}`;
const thp = (id: number, slug: string) => `https://travelhealthpro.org.uk/country/${id}/${slug}#Vaccine_Recommendations`;

export const europeData: Record<string, CountryTravelData> = {
  'UK': { countryId:'GB', countryName:'UK', capital:'London',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['The UK is generally safe. Terrorism remains a persistent threat, with the national threat level at "Substantial" (attack is likely). Be vigilant in public places and transport hubs.','Petty crime (pickpocketing, bag snatching, mobile phone theft) is common in London (Oxford Street, West End, Westminster) and other major cities.','Protests and demonstrations occur frequently in London and can disrupt transport. Avoid large crowds during industrial action or political rallies.','The UK drives on the left. High volume of traffic in cities like London, Manchester, and Birmingham.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'Most Western nationals (US, EU, CA, AU, NZ) do not require a visa for stays up to 6 months for tourism. The UK is not part of the Schengen Area.', iataReference:iata('GB'), entryNotes:['Standard visitor rules apply — no working allowed without a specific work visa.'] },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/gbr/', cdcUrl:cdc('united-kingdom'), travelHealthProUrl:thp(234, 'united-kingdom'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '999' },
      currency: { name: 'British Pound', code: 'GBP', symbol: '£' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-kingdom-travel-advisory.html',flag:'🇺🇸'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/united-kingdom',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/united-kingdom',flag:'🇳🇿'}] },

  'Germany': { countryId:'DE', countryName:'Germany', capital:'Berlin',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Germany is very safe. Terrorism is a persistent threat, with recent incidents targeting public spaces and events. Enhanced security is common at large gatherings.','Petty crime (pickpocketing) is prevalent at major tourist sites, airports, and train stations (Berlin Hauptbahnhof, Munich Hbf).','Political demonstrations occur in major cities and can occasionally lead to clashes with police.','Proximity to the Russia–Ukraine conflict: Germany is a key hub for NATO support; while not under direct threat, energy and security policies are highly affected.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure; issued within last 10 years', visaRequired:false, visaInfo:'Germany is a member of the Schengen Area. US, UK, CA, AU, NZ citizens can enter for 90 days in any 180-day period visa-free.', iataReference:iata('DE') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional',notes:'Recommended for outdoor activities in forested areas of southern Germany (Bavaria, Baden-Württemberg).'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/deu/', cdcUrl:cdc('germany'), travelHealthProUrl:thp(88, 'germany'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/germany-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/germany',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/germany',flag:'🇨🇦'}] },

  'France': { countryId:'FR', countryName:'France', capital:'Paris',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Terrorism: France remains at a high security alert level (Vigipirate). Multiple attacks have targeted public spaces, transport, and landmarks (Eiffel Tower, Louvre). Heavy police and military presence ("Opération Sentinelle") is common.','Civil unrest: Protests (e.g., Pension reforms, Yellow Vests) are frequent and can become violent. Industrial action can severely disrupt rail, air, and local transport.','Crime: Pickpocketing and bag snatching are extremely common at major Parisian landmarks, on the Métro, and at airports (CDG, Orly).','Demonstrations related to the Israel-Gaza conflict occur frequently. Avoid all large gatherings.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'France is in the Schengen Area. 90-day visa-free entry for US, UK, CA, AU, NZ citizens. The upcoming ETIAS (European Travel Information and Authorisation System) will apply from 2025.', iataReference:iata('FR') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/fra/', cdcUrl:cdc('france'), travelHealthProUrl:thp(81, 'france'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '17', ambulance: '15', fire: '18' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/france-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/france',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/france',flag:'🇳🇿'}] },

  'Italy': { countryId:'IT', countryName:'Italy', capital:'Rome',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Italy is safe for tourists. Petty crime (pickpocketing) is the primary concern in major cities like Rome (Termini Station, Colosseum), Florence, Venice, and Naples.','Terrorism: There is a persistent threat from international extremist groups. Security measures are significant at major landmarks and the Vatican.','Natural hazards: Italy is seismically active. Significant earthquakes occur in the Apennines (e.g., 2016 Amatrice). Active volcanoes include Mt. Vesuvius (near Naples) and Mt. Etna (Sicily).','Civil unrest: Protests and strikes in the transport sector (SCREV) are frequent and occur on short notice.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Italy is in the Schengen Area. 90-day visa-free entry for US, UK, CA, AU, NZ citizens.', iataReference:iata('IT') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/ita/', cdcUrl:cdc('italy'), travelHealthProUrl:thp(111, 'italy'), polioAlert:false, healthNotes:['Tick-borne encephalitis exists in some northern forested areas.'] },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F', 'L'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/italy-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/italy',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/italy',flag:'🇨🇦'}] },


  'Spain': { countryId:'ES', countryName:'Spain',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Spain is generally very safe. High rates of pickpocketing and bag snatching occur in Barcelona (Las Ramblas, beaches) and Madrid (Puerta del Sol, Prado area).','Terrorism: Persistent threat remains. Historical ETA threat is gone, but extremist Islamist groups maintain a presence.','Civil unrest: Protests related to Catalan independence occur in Barcelona and can affect transport.','Natural hazard: Wildfires are common in summer months across the south and islands (Canaries).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Spain is in the Schengen Area. 90-day visa-free entry for US, UK, CA, AU, NZ citizens.', iataReference:iata('ES') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/esp/', cdcUrl:cdc('spain'), travelHealthProUrl:thp(203, 'spain'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/spain-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/spain',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/spain',flag:'🇨🇦'}] },

  'Turkey': { countryId:'TR', countryName:'Turkey',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Do Not Travel near the Syria and Iraq borders (within 10km) due to ongoing conflict and terrorist activity.','Terrorism: High risk from groups like ISIS, PKK, and the DHKP/C. Attacks have targeted major cities (Istanbul, Ankara) and tourist areas. Vigilance is required at malls, restaurants, and places of worship.','Political instability: Following the 2016 coup attempt, the government maintain strict surveillance. Avoid political rallies and protests.','Natural hazards: Turkey sits on major fault lines. The February 2023 earthquakes (M7.8/M7.5) in the southeast killed over 50,000. Istanbul also faces a high long-term earthquake risk.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'US and Canadian citizens require an e-Visa (evisa.gov.tr). UK and EU citizens are generally visa-exempt for 90 days in 180-day period. Turkey is NOT in the Schengen Area.', iataReference:iata('TR') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Limit risk in southeastern provinces bordering Syria. No risk in Istanbul, Ankara, or Antalya resorts.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/tur/', cdcUrl:cdc('turkey'), travelHealthProUrl:thp(227, 'turkey'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '155', ambulance: '112', fire: '110' },
      currency: { name: 'Turkish Lira', code: 'TRY', symbol: '₺' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/turkey-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/turkey',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/turkey',flag:'🇳🇿'}] },

  'Ukraine': { countryId:'UA', countryName:'Ukraine',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — active full-scale invasion by Russia. Ukraine is a war zone. Missile strikes target civilian infrastructure and major cities, including Kyiv and Lviv, daily.','Martial law is in effect. All foreign nationals must follow strict curfew and shelter rules.','The frontline in the East and South is extremely dangerous with active landmines and heavy shelling.','Most Western embassies have relocated or are operating with severely limited staff. Consular assistance is extremely limited.','Civilian airspace is CLOSED. Land borders with Poland and Romania are open but subject to extreme delays.'],
      interpolNotices:[{title:'Security Alert: Full-scale Russian invasion',url:'https://www.gov.uk/foreign-travel-advice/ukraine'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'While visa rules exist, all travel is strongly discouraged. Men of Ukrainian citizenship are generally barred from leaving.', iataReference:iata('UA') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/ukr/', cdcUrl:cdc('ukraine'), travelHealthProUrl:thp(232, 'ukraine'), polioAlert:false, healthNotes:['Critical medical shortages due to war.'] },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Ukrainian Hryvnia', code: 'UAH', symbol: '₴' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ukraine-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/ukraine',flag:'🇬🇧'}] },


  'Poland': { countryId:'PL', countryName:'Poland',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Poland is very safe. Petty crime (pickpocketing) occurs at major train stations (Warsaw Centralna) and tourist sites.','Proximity to Ukraine conflict: Poland shares a border with Ukraine and has received millions of refugees. While secure as a NATO member, there is a high military presence in the east (Rzeszów hub).','Belarus border: Do Not Travel within the exclusion zone near the Belarus border due to regional tensions and ongoing humanitarian/security situation regarding border crossing attempts.','Avoid large political rallies in Warsaw and Kraków.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Poland is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('PL') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional',notes:'Recommended for forest activities in eastern/northern Poland.'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/pol/', cdcUrl:cdc('poland'), travelHealthProUrl:thp(180, 'poland'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '997', ambulance: '999', fire: '998' },
      currency: { name: 'Polish Zloty', code: 'PLN', symbol: 'zł' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/poland-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/poland',flag:'🇬🇧'}] },


  'Netherlands': { countryId:'NL', countryName:'Netherlands',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['The Netherlands is very safe. Petty crime (bag snatching, pickpocketing, bicycle theft) is extremely high in Amsterdam (Central Station, Red Light District, museum areas).','Terrorism: Persistent threat remains at a "Significant" level. Vigilance at major hubs and events is required.','Bicycle culture: Watch for cyclists in Amsterdsm — they have right-of-way and collisions with pedestrians are frequent.','Drug laws: Use of soft drugs is "tolerated" in coffeeshops under strict conditions (Wietpas); use in public is often discouraged and can be illegal depending on local municipal rules.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'The Netherlands is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('NL') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/nld/', cdcUrl:cdc('netherlands'), travelHealthProUrl:thp(160, 'netherlands'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/netherlands-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/netherlands',flag:'🇬🇧'}] },


  'Belgium': { countryId:'BE', countryName:'Belgium',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Belgium is safe. Petty crime (pickpocketing) is common at Brussels train stations (Nord, Central, Midi) and near EU institutions.','Terrorism: High alert level persists following previous major attacks in Brussels (2016). Vigilance at airports and metro hubs.','Protests: As the seat of the EU and NATO, Brussels hosts frequent large-scale demonstrations that can disrupt transport and access.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Belgium is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('BE') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/bel/', cdcUrl:cdc('belgium'), travelHealthProUrl:thp(25, 'belgium'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '101', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/belgium-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/belgium',flag:'🇬🇧'}] },


  'Sweden': { countryId:'SE', countryName:'Sweden',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Sweden expanded its NATO membership in 2024. Security protocols have been enhanced.','Sweden has experienced an increase in gang-related violence (bombings, shootings) in Stockholm, Gothenburg, and Malmö. While tourists are rarely targets, awareness in suburban areas is advised.','Terrorism: The threat level was raised to 4 (High) in 2023 following public protests involving Quran burning. Enhanced security at public events.','Natural hazards: Forest fires in summer; extreme cold in Lapland winter.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Sweden is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('SE') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional',notes:'Recommended for outdoor activities in Central and Southern Sweden.'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/swe/', cdcUrl:cdc('sweden'), travelHealthProUrl:thp(215, 'sweden'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Swedish Krona', code: 'SEK', symbol: 'kr' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/sweden-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/sweden',flag:'🇬🇧'}] },

  'Norway': { countryId:'NO', countryName:'Norway',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Norway is one of the safest countries in the world. Crime is low.','Natural hazards: High risk during outdoor activities — avalanches, shifting sea-ice in Svalbard, and extreme weather changes in fjords. Check "Varsom.no".','Svalbard: Polar bear danger; and mandatory requirement to carry protective firearms outside settlements.','Terrorism: Threat level is moderate. Security measures are in place at large gatherings.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Norway is in the Schengen Area (while not in the EU). 90-day visa-free for US, UK, CA, AU, NZ citizens. Separate entry rules for Svalbard — but visa-exempt for most.', iataReference:iata('NO') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/nor/', cdcUrl:cdc('norway'), travelHealthProUrl:thp(168, 'norway'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '113', fire: '110' },
      currency: { name: 'Norwegian Krone', code: 'NOK', symbol: 'kr' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/norway-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/norway',flag:'🇬🇧'}] },


  'Switzerland': { countryId:'CH', countryName:'Switzerland',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Switzerland is exceptionally safe. Petty crime occurs in airports, train stations (Zurich HB, Geneva), and at tourist sites during peak season.','Natural hazards: Avalanche risk in Alpine regions is genuine — check "SLF.ch". Sudden weather changes in mountains require professional preparation.','Protests: Occur in Bern, Geneva, and Zurich — generally peaceful but can affect transport.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Switzerland is in the Schengen Area (Non-EU). 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('CH') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional',notes:'Recommended for hiking in forested areas.'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/che/', cdcUrl:cdc('switzerland'), travelHealthProUrl:thp(216, 'switzerland'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '117', ambulance: '144', fire: '118' },
      currency: { name: 'Swiss Franc', code: 'CHF', symbol: 'CHf' },
      plugTypes: ['C', 'J'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/switzerland-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/switzerland',flag:'🇬🇧'}] },


  'Austria': { countryId:'AT', countryName:'Austria',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Austria is very safe. Petty crime (pickpocketing) occurs in Vienna (Stephansplatz, Westbahnhof) and Salzburg.','Terrorism threat: Level is currently elevated following regional events. Enhanced security in public places.','Natural hazards: High risk of avalanches and landslides in the Alps. Check "Lawine.at".'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Austria is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('AT') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Recommended',notes:'Essential for outdoor activities in lower altitude forests.'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/aut/', cdcUrl:cdc('austria'), travelHealthProUrl:thp(16, 'austria'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/austria-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/austria',flag:'🇬🇧'}] },


  'Greece': { countryId:'GR', countryName:'Greece',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Greece is safe for tourists. Petty crime (pickpocketing) is high in Athens (Sintagma Square, Monastiraki, Metro) and on popular islands (Mykonos, Santorini).','Civil unrest: Protests and strikes relating to economic policies are frequent in Athens and can disrupt ferries and air travel.','Natural hazards: Wildfires are a major risk in summer months (July–August). Earthquakes occur frequently throughout the Aegean.','Tensions with Turkey: Maritime border disputes can lead to increased military activity in the East Aegean.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Greece is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('GR') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/grc/', cdcUrl:cdc('greece'), travelHealthProUrl:thp(91, 'greece'), polioAlert:false, healthNotes:['Drinking tap water is generally safe in cities but bottled water is recommended on smaller islands.'] },
    essentials: { 
      emergencyNumbers: { police: '100', ambulance: '166', fire: '199' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/greece-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/greece',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/greece',flag:'🇨🇦'}] },


  'Portugal': { countryId:'PT', countryName:'Portugal',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Portugal is consistently ranked as one of the world\'s most peaceful countries. Crime rates are very low.','Petty crime (pickpocketing) is common in Lisbon (Tram 28, Belém, Baixa) and Porto (Ribeira).','Natural hazards: Forest fires are frequent in summer. Strong currents and riptides on Atlantic beaches — follow lifeguard flags.','Açores and Madeira: Significant volcanic and seismic risk.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Portugal is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('PT') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/prt/', cdcUrl:cdc('portugal'), travelHealthProUrl:thp(181, 'portugal'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/portugal-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/portugal',flag:'🇬🇧'}] },


  'Ireland': { countryId:'IE', countryName:'Ireland',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Ireland is very safe. Petty crime (pickpocketing) occurs in Dublin (Temple Bar area, O\'Connell Street).','Protests related to housing and immigration have occurred in Dublin — avoid large gatherings.','Northern Ireland border: While peaceful under the Good Friday Agreement, periodic tensions related to Brexit and sectarian issues can occur in Northern Ireland (UK). The border between Ireland and the UK is currently seamless.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'No visa required for US, CA, AU, NZ citizens for up to 90 days. UK and Irish citizens can live and work in each other\'s countries under the Common Travel Area. Ireland is NOT in the Schengen Area.', iataReference:iata('IE') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/irl/', cdcUrl:cdc('ireland'), travelHealthProUrl:thp(109, 'ireland'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ireland-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/ireland',flag:'🇬🇧'}] },

  'Denmark': { countryId:'DK', countryName:'Denmark',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Denmark is exceptionally safe. Pickpocketing occurs in Copenhagen (Central Station, Strøget, Christiania).','Christiania: Exercise caution in the "Pusher Street" area of Freetown Christiania due to past violent incidents related to the drug trade; photography is strictly prohibited.','Terrorism: Persistent threat remains moderate. Enhanced security at public occasions.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Denmark is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens. Separate entry rules for Faroe Islands and Greenland.', iataReference:iata('DK') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/dnk/', cdcUrl:cdc('denmark'), travelHealthProUrl:thp(64, 'denmark'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Danish Krone', code: 'DKK', symbol: 'kr' },
      plugTypes: ['C', 'F', 'K'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/denmark-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/denmark',flag:'🇬🇧'}] },


  'Finland': { countryId:'FI', countryName:'Finland',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Finland is exceptionally safe. Crime is very low.','Finland-Russia border: Significant tensions. Finland closed all land border crossings with Russia in 2023–2024 due to an "instrumentalised migration" crisis. NATO membership (2023) has enhanced security. All borders remain closed until further notice.','Natural hazards: Extreme cold in winter (-30°C and below in Lapland).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Finland is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('FI') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No yellow fever risk.', whoCountryUrl:'https://www.who.int/countries/fin/', cdcUrl:cdc('finland'), travelHealthProUrl:thp(80, 'finland'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/finland-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/finland',flag:'🇬🇧'}] },


  'Czechia': { countryId:'CZ', countryName:'Czechia',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Czechia is very safe. Petty crime (pickpocketing) is common in Prague (Old Town Square, Charles Bridge, Wenceslas Square).','Taxi scams: Tourists are frequently overcharged by taxis in Prague — use app-based services (Uber, Bolt) or public transport.','Demonstrations: Political protests in Prague are generally peaceful but can cause transport disruption.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Czechia is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('CZ') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/cze/', cdcUrl:cdc('czech-republic'), travelHealthProUrl:thp(62, 'czechia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '158', ambulance: '155', fire: '150' },
      currency: { name: 'Czech Koruna', code: 'CZK', symbol: 'Kč' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/czech-republic-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/czech-republic',flag:'🇬🇧'}] },


  'Hungary': { countryId:'HU', countryName:'Hungary',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Hungary is very safe. Petty crime (pickpocketing) occurs in Budapest (Váci Street, public transport).','Economic/Political: Demonstrations in Budapest are periodic — avoid large gatherings.','Border with Ukraine: High military and aid presence in the east. No direct security threat to tourists.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Hungary is in the Schengen Area. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('HU') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/hun/', cdcUrl:cdc('hungary'), travelHealthProUrl:thp(103, 'hungary'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '107', ambulance: '104', fire: '105' },
      currency: { name: 'Hungarian Forint', code: 'HUF', symbol: 'Ft' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/hungary-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/hungary',flag:'🇬🇧'}] },


  'Romania': { countryId:'RO', countryName:'Romania',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Romania is relatively safe. High pickpocketing rates in Bucharest (North Station, Old Town).','Road safety: One of the highest road accident rates in Europe. Drive with extreme caution.','Ukraine border: While a NATO member, Romania has experienced incidents involving stray Russian drone debris in the Danube delta border region.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond intended departure', visaRequired:false, visaInfo:'Romania joined the Schengen Area (Air and Sea) in March 2024. 90-day visa-free for US, UK, CA, AU, NZ citizens.', iataReference:iata('RO') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/rou/', cdcUrl:cdc('romania'), travelHealthProUrl:thp(185, 'romania'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Romanian Leu', code: 'RON', symbol: 'lei' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/romania-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/romania',flag:'🇬🇧'}] },

  'Albania': { countryId:'AL', countryName:'Albania', capital:'Tirana',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Albania is generally safe for tourists. Petty crime (pickpocketing) occurs in Tirana and coastal resorts (Saranda, Durrës).','Public demonstrations occur in Tirana (Skanderbeg Square) and can disrupt traffic.','Road safety: Driving can be hazardous due to poor road conditions in rural areas and aggressive local driving styles.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals.', iataReference:iata('AL') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/alb/', cdcUrl:cdc('albania'), travelHealthProUrl:thp(4, 'albania'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '129', ambulance: '127', fire: '128' },
      currency: { name: 'Albanian Lek', code: 'ALL', symbol: 'L' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/albania-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/albania',flag:'🇬🇧'}] },

  'Bulgaria': { countryId:'BG', countryName:'Bulgaria', capital:'Sofia',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Bulgaria is safe, but petty crime is a concern in Sunny Beach and other Black Sea resorts. Avoid poorly lit areas in Sofia at night.','Tensions related to the Russia–Ukraine conflict: Monitor local news as Bulgaria is a NATO member near the Black Sea zone.','ATM fraud and skimming are relatively common — use only bank-based ATMs.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure', visaRequired:false, visaInfo:'Schengen Area member (as of 2024 for air/sea). 90-day visa-free.', iataReference:iata('BG') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/bgr/', cdcUrl:cdc('bulgaria'), travelHealthProUrl:thp(37, 'bulgaria'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '166', ambulance: '150', fire: '160' },
      currency: { name: 'Bulgarian Lev', code: 'BGN', symbol: 'лв' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/bulgaria-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/bulgaria',flag:'🇬🇧'}] },

  'Croatia': { countryId:'HR', countryName:'Croatia', capital:'Zagreb',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Croatia is very safe. Petty crime (pickpocketing) is common in high-traffic tourist areas like Dubrovnik\'s Old Town and Split.','Landmines: Some unexploded ordnance remains in remote mountainous/border areas from the 1990s conflict (e.g., Lika-Senj). Stay on marked paths.','Natural hazards: Forest fires in summer; seismic risk in the south.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('HR') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/hrv/', cdcUrl:cdc('croatia'), travelHealthProUrl:thp(59, 'croatia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '192', ambulance: '194', fire: '193' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/croatia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/croatia',flag:'🇬🇧'}] },

  'Cyprus': { countryId:'CY', countryName:'Cyprus', capital:'Nicosia',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Cyprus is very safe. The main issue is the "Green Line" dividing the Republic of Cyprus and the Turkish-occupied north. Entry via the north (Ercan Airport) is considered illegal by the Republic.','Regional Tensions: Proximity to the Middle East conflict maintains a higher security baseline around British sovereign bases (Akrotiri/Dhekelia).','Petty crime is minimal but exists in Limassol and Paphos.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'EU member but NOT in Schengen. 90-day visa-free for Western nationals.', iataReference:iata('CY') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/cyp/', cdcUrl:cdc('cyprus'), travelHealthProUrl:thp(61, 'cyprus'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/cyprus-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/cyprus',flag:'🇬🇧'}] },

  'Czech Republic': { countryId:'CZ', countryName:'Czech Republic', capital:'Prague',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Generally very safe. Petty crime (pickpocketing) is high in Prague (Old Town Square, Charles Bridge, Wenceslas Square).','Taxi scams: Overcharging is common for street-hailed taxis in Prague — use app-based services or "AAA" official taxis.','Public safety: Recent 2023 mass shooting at Charles University has led to increased police visibility in Prague.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('CZ') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/cze/', cdcUrl:cdc('czech-republic'), travelHealthProUrl:thp(62, 'czech-republic'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '158', ambulance: '155', fire: '150' },
      currency: { name: 'Czech Koruna', code: 'CZK', symbol: 'Kč' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/czech-republic-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/czech-republic',flag:'🇬🇧'}] },
  'Estonia': { countryId:'EE', countryName:'Estonia', capital:'Tallinn',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Estonia is very safe. Major concern in Tallinn\'s Old Town is petty theft during the peak summer tourist season.','Cybersecurity: Estonia is a world leader in digital infrastructure; while physical crime is low, be vigilant with online transactions.','Regional Tensions: Proximity to Russia means increased military presence/drills; monitor local news.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('EE') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/est/', cdcUrl:cdc('estonia'), travelHealthProUrl:thp(73, 'estonia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/estonia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/estonia',flag:'🇬🇧'}] },

  'Iceland': { countryId:'IS', countryName:'Iceland', capital:'Reykjavík',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Iceland is one of the safest countries in the world. Crime is extremely low.','Natural hazards: Frequent volcanic eruptions (Reykjanes peninsula) can cause flight disruptions and road closures. Severe weather can change rapidly — check road.is before any trip.','Search and Rescue: Tourists often underestimate the terrain (glaciers, black sand beaches like Reynisfjara with "sneaker waves"). Follow all safety signs.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('IS') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/isl/', cdcUrl:cdc('iceland'), travelHealthProUrl:thp(104, 'iceland'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Icelandic Króna', code: 'ISK', symbol: 'kr' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/iceland-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/iceland',flag:'🇬🇧'}] },

  'Latvia': { countryId:'LV', countryName:'Latvia', capital:'Riga',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Latvia is generally safe. Petty crime (pickpocketing) is common in Riga\'s Central Market and Old Town.','Avoid unmonitored bars in Riga where "overcharging" scams for drinks occur.','Regional Tensions: Monitor news regarding the eastern border with Russia/Belarus.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('LV') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/lva/', cdcUrl:cdc('latvia'), travelHealthProUrl:thp(125, 'latvia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '113', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/latvia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/latvia',flag:'🇬🇧'}] },

  'Lithuania': { countryId:'LT', countryName:'Lithuania', capital:'Vilnius',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Lithuania is safe for tourists. Petty crime is minimal but exists in Vilnius and Kaunas.','Regional identity: Be sensitive to history; avoid discussing Soviet-era politics or Russia in a positive light.','Border security: Increased checks near the Kaliningrad (Russia) and Belarus borders.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('LT') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Tick-borne Encephalitis',requirement:'Optional'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/ltu/', cdcUrl:cdc('lithuania'), travelHealthProUrl:thp(131, 'lithuania'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/lithuania-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/lithuania',flag:'🇬🇧'}] },

  'Luxembourg': { countryId:'LU', countryName:'Luxembourg', capital:'Luxembourg City',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['One of the safest countries in the world. Minimal crime.','Public transport: All public transport (trains, trams, buses) is FREE nationwide.','Quiet hours: Strictly enforced in residential areas.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('LU') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/lux/', cdcUrl:cdc('luxembourg'), travelHealthProUrl:thp(133, 'luxembourg'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '113', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/luxembourg-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/luxembourg',flag:'🇬🇧'}] },
  'Malta': { countryId:'MT', countryName:'Malta', capital:'Valletta',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Malta is very safe. Petty crime (pickpocketing) occurs in Paceville (nightlife hub) and Sliema/St. Julian\'s.','Road safety: Driving is on the left. High density of traffic and narrow streets in Valletta can be challenging.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('MT') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mlt/', cdcUrl:cdc('malta'), travelHealthProUrl:thp(138, 'malta'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/malta-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/malta',flag:'🇬🇧'}] },

  'Montenegro': { countryId:'ME', countryName:'Montenegro', capital:'Podgorica',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Generally safe. Petty crime in coastal resorts (Kotor, Budva) during summer.','Organized crime: While rare, gang-related violence can occur but rarely impacts tourists.','Public safety: Protests in Podgorica are usually peaceful but can cause traffic delays.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for most. Montenegro is NOT in the EU but uses the Euro.', iataReference:iata('ME') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mne/', cdcUrl:cdc('montenegro'), travelHealthProUrl:thp(150, 'montenegro'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '122', ambulance: '124', fire: '123' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/montenegro-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/montenegro',flag:'🇬🇧'}] },

  'North Macedonia': { countryId:'MK', countryName:'North Macedonia', capital:'Skopje',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Generally safe. Petty crime occurs in Skopje (Old Bazaar, main square).','Border security: Increased checks at the border with Kosovo. Stay on marked roads in the northern border region.','Extreme heat: Summer temperatures can exceed 40°C.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for most. Not an EU/Schengen member.', iataReference:iata('MK') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mkd/', cdcUrl:cdc('north-macedonia'), travelHealthProUrl:thp(135, 'north-macedonia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '192', ambulance: '194', fire: '193' },
      currency: { name: 'Macedonian Denar', code: 'MKD', symbol: 'den' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/north-macedonia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/north-macedonia',flag:'🇬🇧'}] },

  'Slovakia': { countryId:'SK', countryName:'Slovakia', capital:'Bratislava',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Slovakia is very safe. Petty crime is high in Bratislava\'s Old Town during peak seasons.','Mountain safety: Tourists often underestimate the High Tatra mountains. Always check weather warnings before hiking.','Public safety: Vigilance requested in crowds; monitor local news for demonstrations.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond stay', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('SK') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/svk/', cdcUrl:cdc('slovakia'), travelHealthProUrl:thp(197, 'slovakia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/slovakia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/slovakia',flag:'🇬🇧'}] },

  'Slovenia': { countryId:'SI', countryName:'Slovenia', capital:'Ljubljana',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['One of the safest countries in the world. Crime is extremely minimal.','Outdoor hazards: Mountain rescues are frequent in the Julian Alps (Triglav). Proper equipment is mandatory.','Natural hazards: Flooding risk in summer/autumn.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure', visaRequired:false, visaInfo:'Schengen Area member. 90-day visa-free.', iataReference:iata('SI') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/svn/', cdcUrl:cdc('slovenia'), travelHealthProUrl:thp(198, 'slovenia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '113', ambulance: '112', fire: '112' },
      currency: { name: 'Euro', code: 'EUR', symbol: '€' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/slovenia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/slovenia',flag:'🇬🇧'}] },

  'Belarus': { countryId:'BY', countryName:'Belarus', capital:'Minsk',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel to Belarus due to the arbitrary enforcement of laws, risk of detention, Russian military buildup along the border with Ukraine, and limited ability of embassies to assist citizens.','Political climate: Heavy-handed government response to dissent. Avoid any protest or criticism of the government.','Border closures: Multiple border crossings with Poland, Lithuania, and Latvia are closed or restricted.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond arrival', visaRequired:true, visaInfo:'Most Western nationals require a visa. 30-day visa-free via Minsk airport is currently restricted for many Western nationalities due to sanctions and travel bans.', iataReference:iata('BY') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/blr/', cdcUrl:cdc('belarus'), travelHealthProUrl:thp(22, 'belarus'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Belarusian Ruble', code: 'BYN', symbol: 'Br' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/belarus-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/belarus',flag:'🇬🇧'}] },

  'Russia': { countryId:'RU', countryName:'Russia', capital:'Moscow',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel to Russia due to the unprovoked and unjustified invasion of Ukraine, the potential for harassment and singling out of foreign citizens by security officials, and the arbitrary enforcement of local law.','Consular assistance: Extremely limited for Western nationals. Many embassies have reduced staff or closed consulates.','Terrorism: Ongoing threat in Moscow and major cities; recent ISIS-K attack (2024) at Crocus City Hall.','Sanctions: Credit and debit cards issued outside Russia DO NOT WORK. Cash (USD/EUR) is required but difficult to exchange.','Avoid any discussion or photography related to the military or "special military operation".'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa required for almost all Western nationals. E-visa available for some but currently unpredictable. Invitation letter (voucher) mandatory.', iataReference:iata('RU') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/rus/', cdcUrl:cdc('russia'), travelHealthProUrl:thp(186, 'russia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Russian Ruble', code: 'RUB', symbol: '₽' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/russia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/russia',flag:'🇬🇧'}] },
};
