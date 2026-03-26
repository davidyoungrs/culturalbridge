import type { CountryTravelData } from '../travelCountryData';
const iata = (cc: string) => `https://www.iata.org/en/services/compliance/timatic/travel-documentation/?destination=${cc}`;
const cdc = (slug: string) => `https://wwwnc.cdc.gov/travel/destinations/traveler/none/${slug}`;
const thp = (id: number, slug: string) => `https://travelhealthpro.org.uk/country/${id}/${slug}#Vaccine_Recommendations`;

export const asiaPacificData: Record<string, CountryTravelData> = {
  'Japan': { countryId:'JP', countryName:'Japan', capital:'Tokyo',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Japan is consistently rated one of the world\'s safest countries. Violent crime against tourists is extremely rare.','Natural hazards: Highly active seismic zone. Know the evacuation routes for earthquakes and tsunamis. Follow official advice during typhoon season (June-October).','Social etiquette: High emphasis on public order and politeness. Noisy behavior or lack of masks in certain settings may be frowned upon.','Healthcare: Excellent medical facilities, but language barriers can exist in some clinics.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'Citizens of US, UK, EU, CA, AU, NZ can enter visa-free for up to 90 days for tourism. Visit Japan Web (online customs) is recommended before arrival.', iataReference:iata('JP') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Japanese Encephalitis',requirement:'Optional',notes:'For long-term stays in rural areas, particularly summer months.'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/jpn/', cdcUrl:cdc('japan'), travelHealthProUrl:thp(114, 'japan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '119', fire: '119' },
      currency: { name: 'Japanese Yen', code: 'JPY', symbol: '¥' },
      plugTypes: ['A', 'B'],
      voltage: '100 V',
      frequency: '50/60 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/japan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/japan',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/japan',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/japan',flag:'🇳🇿'},{agency:'iVisa Visa Check',url:'https://www.ivisa.com/japan',flag:'🌐'}] },

  'China': { countryId:'CN', countryName:'China', capital:'Beijing',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Arbitrary enforcement of local laws: Foreigners have been detained for "endangering national security." Use of "exit bans" can prevent individuals from leaving China during investigations.','High surveillance: Pervasive facial recognition and digital monitoring. Avoid discussing politically sensitive topics online or in public.','Regional risks: Increased security in Xinjiang and Tibet regions. Foreigners may face additional restrictions and monitoring.','Commercial disputes: Foreign business travelers may be detained in relation to civil disputes.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond intended stay', visaRequired:true, visaInfo:'Most travelers require a visa applied for in advance. 72/144-hour visa-free transit is available in certain cities for qualified nationalities.', iataReference:iata('CN') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Limited risk in some southern provinces.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/chn/', cdcUrl:cdc('china'), travelHealthProUrl:thp(49, 'china'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '120', fire: '119' },
      currency: { name: 'Chinese Yuan', code: 'CNY', symbol: '¥' },
      plugTypes: ['A', 'C', 'I'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/china',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/china',flag:'🇨🇦'}] },


  'India': { countryId:'IN', countryName:'India', capital:'New Delhi',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Do Not Travel to: Jammu & Kashmir (except Ladakh via direct flight from Delhi). The region remains heavily militarised; shelling and militant activity occur.','Terrorism risk is elevated across India, particularly in Jammu & Kashmir, states bordering Bangladesh (Assam), and parts of northeast India.','Maoist (Naxalite) insurgency is active in the "Red Corridor" (Chhattisgarh, Jharkhand, Odisha border regions).','Petty crime (bag and laptop snatching, pickpocketing) is common at tourist sites, airports, and railway stations in Delhi, Mumbai, and Agra.','Scams targeting tourists are pervasive — from fake "government tourism offices" in Delhi to rigged meter taxis.','Women travellers should exercise heightened personal security, particularly after dark. Sexual harassment and assault of foreign nationals has been reported.','India–Pakistan relations remain volatile with the disputed Kashmir Line of Control a persistent flashpoint. Cross-border skirmishes have occurred.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa available for most nationalities for tourism (e-Tourist Visa), business, or medical visits — apply at indianvisaonline.gov.in at least 4 days before arrival. Visa on Arrival available at select airports for specific nationalities under the Indian e-TV. Pakistani and Bangladeshi nationals face different requirements. Certain restricted areas (northeastern states, Andaman & Nicobar, parts of Ladakh) require additional permits.', iataReference:iata('IN'), entryNotes:['Register with local police within 14 days if staying more than 180 days.','Never carry medicine into India without documentation — controlled substances are interpreted very broadly.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Hepatitis B',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'Essential for long-term travellers and those with animal exposure (dog/monkey bites are very common at tourist sites).'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For travellers spending significant time in rural areas, particularly monsoon season.'},{name:'Cholera',requirement:'Optional'}], malariaRisk:'Malaria risk throughout India below 2,000m, including all northern plains, Goa, Kerala, and northeast states. Highest risk during and after monsoon season (June–October). Chemoprophylaxis recommended. No significant risk at > 2,000m (Shimla, Manali, Darjeeling highlands).', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/ind/', cdcUrl:cdc('india'), travelHealthProUrl:thp(105, 'india'), polioAlert:false, healthNotes:['Drink only sealed bottled water or boiled/filtered water.','Dengue, Chikungunya, and Zika are present year-round. Use DEET-based repellent.','Air quality in Delhi, Lucknow, and other North Indian cities can be hazardous in winter (November–February). High-quality masks recommended.'] },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '102', fire: '101' },
      currency: { name: 'Indian Rupee', code: 'INR', symbol: '₹' },
      plugTypes: ['C', 'D', 'M'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/india-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/india',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/india',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/india',flag:'🇳🇿'},{agency:'iVisa India e-Visa',url:'https://www.ivisa.com/india',flag:'🌐'},{agency:'WHO Travel Advice',url:'https://www.who.int/travel-advice/all-updates-for-travellers',flag:'🌐'}] },


  'Indonesia': { countryId:'ID', countryName:'Indonesia',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Terrorism: Jemaah Islamiyah and affiliated groups have carried out devastating attacks in Indonesia (Bali bombings 2002 and 2005, Jakarta bombings 2009 and 2016). The threat remains. Vigilance is required at hotels, clubs, and places of worship, particularly Bali.','Indonesia is one of the world\'s most volcanically and seismically active countries. The 2018 Lombok earthquake (>500 deaths), 2022 Cianjur earthquake (300+ deaths), and 2004 Indian Ocean tsunami (230,000 deaths) illustrate the extraordinary natural disaster risk.','Papua Province: Do Not Travel or Reconsider. Papua and west Papua have ongoing separatist conflict — the West Papua independence movement involves armed groups (TPNPB/OPM). Hostages have been taken including foreign nationals.','Piracy risk in Makassar Strait and Sulawesi Sea. Commercial vessels primarily targeted.','Drug laws are extremely strict — possession carries the death penalty.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'69 nationalities qualify for free Visa on Arrival (VoA) for 30 days, extendable once to 60 days (US, UK, EU, CA, AU, NZ included). Must be an international airport or seaport entry. e-Visa also available. The Bali Tourist Levy of IDR 150,000 (approx. USD 10) applies to foreign visitors to Bali from 2024.', iataReference:iata('ID') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Hepatitis B',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'Bali has a significant stray dog population; rabies is endemic. Seek treatment immediately after any animal bite.'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For rural travellers spending 4+ weeks outside cities.'}], malariaRisk:'Malaria risk in eastern Indonesia (Nusa Tenggara Timur, Maluku, Papua) and parts of Kalimantan. No risk in Bali, Java, or major tourist areas.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/idn/', cdcUrl:cdc('indonesia'), travelHealthProUrl:thp(106, 'indonesia'), polioAlert:false, healthNotes:['Dengue fever is very common year-round across Indonesia including Bali.','Tap water is not safe — use sealed bottled water only.'] },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '118', fire: '113' },
      currency: { name: 'Indonesian Rupiah', code: 'IDR', symbol: 'Rp' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/indonesia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/indonesia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/indonesia',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/indonesia',flag:'🇳🇿'},{agency:'iVisa Indonesia',url:'https://www.ivisa.com/indonesia',flag:'🌐'}] },

  'Thailand': { countryId:'TH', countryName:'Thailand', capital:'Bangkok',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Ongoing armed insurgency in the Deep South (Yala, Pattani, Narathiwat, and Songkhla provinces) — Malay-Muslim separatists regularly detonate bombs and conduct shootings. Do Not Travel to these border provinces.','Political instability: Thailand has experienced multiple coups (most recently 2014) and political protests are frequent. Large-scale demonstrations (2020–2021 pro-democracy movement) can turn violent.','Drug laws are extremely strict — trafficking carries the death penalty. Consumption of drugs can result in imprisonment.','Drink spiking and tourist scams are extremely common in Bangkok (particularly Khao San Road, Patpong) and Phuket.','Accidents involving tuk-tuks, motorbikes, and unregistered tour boats cause tourist injuries and deaths.','Thailand is in a seismically active region — the 2004 Indian Ocean tsunami affected coastal regions.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival (30-day stay) or 6 months for longer stays', visaRequired:false, visaInfo:'93 nationalities qualified for visa-exempt entry. Most Western nationals (US, UK, EU, CA, AU, NZ) receive 60-day visa-free stamp extendable to 90 days from 2024 policy upgrade. Thailand Pass no longer required. Thailand Elite Visa available for longer stays. Border runs to reset eligibility are increasingly restricted.', iataReference:iata('TH'), entryNotes:['Show proof of onward travel if requested by immigration.','Criticism of the monarchy (lèse-majesté law Section 112) is a serious criminal offence with up to 15 years imprisonment — applies to social media posts.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'Stray dogs and monkeys are common in tourist areas.'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For rural travellers, particularly during monsoon season.'}], malariaRisk:'Malaria risk exists in forested border areas near Myanmar, Cambodia, and Malaysia. No risk in Bangkok, Phuket, Koh Samui, Chiang Mai city, or Pattaya.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/tha/', cdcUrl:cdc('thailand'), travelHealthProUrl:thp(221, 'thailand'), polioAlert:false, healthNotes:['Dengue fever outbreaks occur frequently across Thailand including tourist islands.','Use bottled water and exercise caution with street food from unhygienic sources.'] },
    essentials: { 
      emergencyNumbers: { police: '191', ambulance: '1669', fire: '199' },
      currency: { name: 'Thai Baht', code: 'THB', symbol: '฿' },
      plugTypes: ['A', 'B', 'C', 'O'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/thailand-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/thailand',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/thailand',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/thailand',flag:'🇳🇿'},{agency:'iVisa Thailand',url:'https://www.ivisa.com/thailand',flag:'🌐'}] },


  'Vietnam': { countryId:'VN', countryName:'Vietnam',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Vietnam is generally safe for tourists. Petty crime — bag snatching by moped riders, pickpocketing — is the main concern, particularly in Ho Chi Minh City (Bến Thành Market area) and Hanoi (Old Quarter).','Traffic is extremely chaotic in major cities. Road accidents involving foreigners are common — exercise extreme caution crossing roads and when riding motorbikes.','Scams targeting tourists (taxi scams, rigged tour agencies) are widespread.','The government does not tolerate criticism of the Communist Party or calls for political reform — social media monitoring is extensive.','Unexploded ordnance (UXO) from the Vietnam War remains a risk in some rural areas, particularly around Quảng Trị province.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival (recommended)', visaRequired:false, visaInfo:'Vietnam introduced unilateral visa-free access for 13 nationalities for up to 45 days including UK, France, Germany, Italy, Spain. US, Canadian, Australian citizens require a e-Visa (USD $25, single or multiple entry for 90 days) — apply at xuatnhapcanh.gov.vn. An e-Visa is now the recommended route for all nationalities.', iataReference:iata('VN'), entryNotes:['Visa exemption extensions are generally not permitted — exit and re-enter or apply for e-Visa.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Hepatitis B',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'Dog and other animal bites are common.'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For rural and outdoor travellers, particularly May–October.'}], malariaRisk:'Low malaria risk in some rural highland areas near Cambodia and Lao borders. No risk in Hanoi, Ho Chi Minh City, Da Nang, Hoi An, Ha Long Bay, or other major tourist destinations.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/vnm/', cdcUrl:cdc('vietnam'), travelHealthProUrl:thp(240, 'vietnam'), polioAlert:false, healthNotes:['Dengue fever is endemic and outbreaks occur frequently.','Use bottled water only.','Avian influenza risk — avoid live poultry markets.'] },
    essentials: { 
      emergencyNumbers: { police: '113', ambulance: '115', fire: '114' },
      currency: { name: 'Vietnamese Dong', code: 'VND', symbol: '₫' },
      plugTypes: ['A', 'C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/vietnam-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/vietnam',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/vietnam',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/vietnam',flag:'🇳🇿'},{agency:'iVisa Vietnam',url:'https://www.ivisa.com/vietnam',flag:'🌐'}] },

  'Malaysia': { countryId:'MY', countryName:'Malaysia',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Malaysia is generally safe for tourists. Petty crime in Kuala Lumpur (Bukit Bintang, KLCC, Chinatown) includes bag snatching and pickpocketing.','Eastern Sabah (particularly Sandakan, Tawau, Lahad Datu) is rated "Reconsider Travel/Do Not Travel to specific islands" due to kidnapping by Abu Sayyaf Group from the Philippines — foreign nationals have been abducted from coastal resorts.','Piracy and armed robbery at sea in eastern Sabah waters and Sulu Sea remains a genuine risk.','Drug trafficking carries mandatory death penalty. Zero tolerance.','Criticism of the monarchy or Islam can result in arrest and imprisonment.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'No visa required for most Western nationals for stays up to 90 days. Malaysia also operates a Malaysia Digital Arrival Card (MDAC) — complete online before arrival at imigresen.gov.my.', iataReference:iata('MY') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'For those in rural areas or Borneo wildlife zones.'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'Extended rural travellers.'}], malariaRisk:'Malaria risk in parts of Sabah, Sarawak, and interior Borneo. No risk in Kuala Lumpur, Penang, or most tourist areas on the peninsula.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mys/', cdcUrl:cdc('malaysia'), travelHealthProUrl:thp(137, 'malaysia'), polioAlert:false, healthNotes:['Dengue fever is significant — outbreaks occur regularly in KL and other urban areas.'] },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '994' },
      currency: { name: 'Malaysian Ringgit', code: 'MYR', symbol: 'RM' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/malaysia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/malaysia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/malaysia',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/malaysia',flag:'🇳🇿'}] },

  'Philippines': { countryId:'PH', countryName:'Philippines',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Do Not Travel to: Mindanao (especially the Bangsamoro Autonomous Region in Muslim Mindanao — BARMM), Marawi City, the Sulu Archipelago, and South Basilan. Islamic State-Philippines (ISP), Abu Sayyaf Group (ASG), and BIFF conduct bombings, assassinations, and kidnappings including of foreign nationals.','Typhoon season: Philippines is one of the world\'s most typhoon-prone countries. Approximately 20 typhoons hit per year, particularly June–December. Flooding, landslides, and infrastructure destruction are annual events.','Petty crime in Manila (Ermita, Malate, Quiapo) is significant. ATM skimming and scams targeting tourists are widespread.','Abu Sayyaf has conducted kidnappings for ransom of foreign tourists on dive resorts in Sabah (Malaysia–Philippines border).','Ongoing extrajudicial killings related to the drug war — exercise caution and comply fully with all police interactions.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Most Western nationals receive a free 30-day Visa on Arrival, extendable in-country up to 36 months in increments. Show proof of onward travel.', iataReference:iata('PH') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'Dog bites are very common. Seek medical attention immediately.'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For rural travellers.'}], malariaRisk:'Malaria risk in rural areas of Luzon (except Metro Manila), Visayas, Mindanao, Palawan, and many islands. No risk in Metro Manila or Cebu City metro.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/phl/', cdcUrl:cdc('philippines'), travelHealthProUrl:thp(178, 'philippines'), polioAlert:false, healthNotes:['Dengue fever is endemic and causes thousands of deaths annually in the Philippines.','Schistosomiasis (bilharzia) risk in some freshwater lakes — avoid swimming in lakes or slow-moving water.'] },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'Philippine Peso', code: 'PHP', symbol: '₱' },
      plugTypes: ['A', 'B', 'C'],
      voltage: '220 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/philippines-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/philippines',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/philippines',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/philippines',flag:'🇳🇿'}] },

  'South Korea': { countryId:'KR', countryName:'South Korea',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['North Korean missile tests and military provocations occur periodically and can cause regional tension. Follow government warnings and participate in emergency alerts.','South Korea is generally very safe for tourists. Violent crime is rare.','Political demonstrations in Seoul (particularly Gwanghwamun Square) are frequent — the 2024 impeachment crisis of President Yoon Suk-yeol led to significant protests. Avoid large gatherings during political uncertainty.','Presidential emergency martial law was briefly declared in December 2024 (rescinded within 6 hours) highlighting the political volatility.','Transport hubs and public spaces can be crowded — watch for pickpocketing.'],
      interpolNotices:[{title:'Large-scale public event at Gwanghwamun Square, Seoul, South Korea',url:'https://www.safetravel.govt.nz/news/largescale-public-event-at-gwanghwamun-square,-seoul,-south-korea'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival recommended', visaRequired:false, visaInfo:'112 nationalities can enter visa-free for 90 days including US, UK, EU, CA, AU, NZ. K-ETA (Korea Electronic Travel Authentication) may be required for some nationalities — check Korea Immigration Service at hi.korea.go.kr.', iataReference:iata('KR') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For rural travellers during summer months.'}], malariaRisk:'Very low malaria risk in rural areas near the North Korean DMZ. Negligible risk for most tourists.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/kor/', cdcUrl:cdc('south-korea'), travelHealthProUrl:thp(120, 'south-korea'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '119', fire: '119' },
      currency: { name: 'South Korean Won', code: 'KRW', symbol: '₩' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-korea-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/south-korea',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/south-korea',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/south-korea',flag:'🇳🇿'}] },


  'Australia': { countryId:'AU', countryName:'Australia', capital:'Canberra',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Australia is exceptionally safe. Terrorism threat level is "Possible".','Natural hazards: Bushfires (November–March) are a severe risk. Flooding is common in Queensland and NSW.','Wildlife: While deadly snake/spider encounters are rare in cities, follow signpost warnings. High risk of shark attacks and jellyfish (stingers) in northern waters and West Australia.','UV Exposure: Australia has some of the world\'s highest skin cancer rates. Strong sun protection is mandatory.','Ocean safety: Thousands of drownings occur — only swim between the red and yellow flags on patrolled beaches.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:true, visaInfo:'All visitors (except NZ citizens) require a visa or ETA (Electronic Travel Authority). US, UK, EU, CA citizens must apply for an ETA via the Australian ETA app before travel.', iataReference:iata('AU') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/aus/', cdcUrl:cdc('australia'), travelHealthProUrl:thp(15, 'australia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '000', ambulance: '000', fire: '000' },
      currency: { name: 'Australian Dollar', code: 'AUD', symbol: '$' },
      plugTypes: ['I'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/australia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/australia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/australia',flag:'🇨🇦'}] },

  'Hong Kong': { countryId:'HK', countryName:'Hong Kong', capital:'Hong Kong',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['China\'s National Security Law (NSL, imposed June 2020) has fundamentally changed Hong Kong\'s legal landscape. Actions that are legal in most Western countries — including certain protests, political speech, and social media posts — may now constitute offences under the NSL.','Foreign nationals, including tourists, are subject to the NSL. Persons with ties to anti-China activism or democratic advocacy may face detention.','The UK FCDO, US State Dept, Canada, Australia, and New Zealand have all updated their advisories noting the NSL changes and reduced autonomy.','Extradition to mainland China under NSL provisions is now possible — a significant departure from previous HK guarantees.','Violent crime is rare. Petty crime in tourist areas (Mong Kok, Tsim Sha Tsui) is low.','Natural hazard: Typhoon season (May–November). Category 8–10 signals result in business, transport, and landmark closures.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival recommended', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for stays of 14–180 days depending on nationality (UK and EU citizens get 6 months; US and Canadian citizens get 90 days; Australian and NZ citizens get 90 days). Hong Kong maintains separate entry rules from mainland China.', iataReference:iata('HK') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/chn/', cdcUrl:cdc('hong-kong'), travelHealthProUrl:thp(102, 'china-hong-kong'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '999' },
      currency: { name: 'Hong Kong Dollar', code: 'HKD', symbol: 'HK$' },
      plugTypes: ['G'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/hong-kong-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/hong-kong',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/hong-kong',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/hong-kong',flag:'🇳🇿'}] },

  'Singapore': { countryId:'SG', countryName:'Singapore',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Singapore is consistently ranked one of the world\'s safest cities. Violent crime is extremely rare and the government maintains strict law and order.','Strict laws apply to all residents and visitors: drug trafficking carries mandatory death penalty; possession of small amounts is a serious offence. e-cigarette ownership is illegal; chewing gum import is restricted; vandalism carries caning.','Terrorism threat is assessed as "moderate." Singapore has disrupted multiple plots and radicalised individuals.','Dengue fever outbreaks occur periodically — check NEA dengue alert maps.','LGBTQ+ rights: Section 377A criminalising male same-sex acts was struck down in 2022, but same-sex marriage is not recognised and public expression of LGBTQ+ identities faces social and regulatory friction.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Citizens of most countries can enter visa-free for 30–90 days. Singapore uses advanced border control — ensure your passport is undamaged and machine-readable. Singapore also uses APEC Business Travel Card (ABTC) for business travellers.', iataReference:iata('SG') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Yellow Fever',requirement:'Mandatory',notes:'Proof required if arriving from or transiting through a Yellow Fever risk country.'}], malariaRisk:'No malaria risk in Singapore.', yellowFeverRisk:'Risk present (Transit)', whoCountryUrl:'https://www.who.int/countries/sgp/', cdcUrl:cdc('singapore'), travelHealthProUrl:thp(196, 'singapore'), polioAlert:false, healthNotes:['Dengue fever outbreaks occur — monitor NEA advisories.'] },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '995', fire: '995' },
      currency: { name: 'Singapore Dollar', code: 'SGD', symbol: 'S$' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/singapore-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/singapore',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/singapore',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/singapore',flag:'🇳🇿'}] },

  'Taiwan': { countryId:'TW', countryName:'Taiwan',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Cross-Strait Tensions: China (PRC) considers Taiwan to be a province of China and has never renounced the use of force to achieve unification. Military exercises around Taiwan — including large-scale PLA Navy and Air Force drills — have increased significantly in 2023–2024. The risk of military conflict, while not imminent, is a genuine long-term concern requiring monitoring.','Taiwan itself is extremely safe for daily life. Violent crime is very low.','Natural hazard: Taiwan sits in a major seismic zone. The April 2024 Hualien earthquake (M7.4 — the strongest in 25 years) killed 13 and caused major infrastructure damage. Earthquakes can occur without warning.','Typhoon season: July–October. Super typhoons can directly strike Taiwan with severe infrastructure impact.','Hiking trails can be hazardous after earthquakes or typhoons — verify trail status with the Forestry and Nature Conservation Agency.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Taiwan grants visa-free or landing visa access to nationals of 147+ countries. US, UK, EU, CA, AU, NZ all qualify for 90-day visa-free stays. Taiwan has its own completely separate immigration system from mainland China — different passport entry rules apply.', iataReference:iata('TW') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For rural and outdoor travellers.'}], malariaRisk:'No malaria risk in Taiwan.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/chn/', cdcUrl:cdc('taiwan'), travelHealthProUrl:thp(218, 'taiwan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '119', fire: '119' },
      currency: { name: 'New Taiwan Dollar', code: 'TWD', symbol: 'NT$' },
      plugTypes: ['A', 'B'],
      voltage: '110 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/taiwan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/taiwan',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/taiwan',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/taiwan',flag:'🇳🇿'}] },


  'Myanmar': { countryId:'MM', countryName:'Myanmar',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — Myanmar has been in a state of civil war since the military coup of February 2021. Fighting between the Tatmadaw (Myanmar military) and the People\'s Defence Force (PDF) and ethnic armed organisations (EAOs) is widespread across the country.','Air strikes, shelling of civilian areas, arbitrary arrests, and forced conscription are documented by UN human rights observers.','Western governments have suspended most embassy services. Emergency consular assistance is severely limited.','Foreigners have been detained and imprisoned on politically-motivated charges.','Communication blackouts are common in conflict zones. Internet cuts have been deployed nationally.','The border regions (Shan, Kachin, Kayah, Kayin, Rakhine states) see the most intense fighting.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Officially visas are available but travel is strongly discouraged by all Western governments.', iataReference:iata('MM') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended'}], malariaRisk:'High malaria risk in forested/rural areas, particularly border regions. Chemoprophylaxis essential.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mmr/', cdcUrl:cdc('burma'), travelHealthProUrl:thp(156, 'burma-myanmar'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '199', ambulance: '192', fire: '191' },
      currency: { name: 'Myanmar Kyat', code: 'MMK', symbol: 'K' },
      plugTypes: ['C', 'D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/burma-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/myanmar',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/myanmar',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/myanmar',flag:'🇳🇿'}] },


  'Nepal': { countryId:'NP', countryName:'Nepal',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Nepal is generally safe. Petty crime (pickpocketing, bag snatching) occurs in Thamel (Kathmandu), border areas, and trekking routes.','Altitude sickness (AMS, HACE, HAPE) is life-threatening at Everest Base Camp (5,364m), Annapurna Circuit, and similar altitudes. Acclimatise properly.','Trekking accidents: Falls, hypothermia, and weather-related deaths occur annually. Trek with a licensed guide and registered agency, register with TIMS (Trekkers\' Information Management System).','Earthquake risk is extreme — Nepal sits on the India–Eurasia plate boundary. The 2015 Gorkha earthquake (M7.8) killed 9,000. Aftershock sequences can persist for months.','The Terai lowlands have monsoon flooding (June–September) that cuts off roads.','Take care with political demonstrations in Kathmandu — can become confrontational.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Tourist Visa on Arrival available for most nationalities at Tribhuvan International Airport and major land border crossings. Also obtainable in advance online. 15-day, 30-day, or 90-day options available. Indian nationals do not need a visa. Chinese nationals require a visa.', iataReference:iata('NP') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'Dog bites are common in Nepal, including at trekking areas.'},{name:'Japanese Encephalitis',requirement:'Optional',notes:'For long-term travellers in the Terai (lowland) areas.'}], malariaRisk:'Low malaria risk in Terai lowlands (below 1,200m), particularly Chitwan. No risk in Kathmandu Valley or highland trekking areas.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/npl/', cdcUrl:cdc('nepal'), travelHealthProUrl:thp(159, 'nepal'), polioAlert:false, healthNotes:['Altitude sickness (AMS) can be fatal — descend immediately if symptoms develop.','Tap water is unsafe — use filtered/boiled/bottled water only.','Traveller\'s diarrhoea is very common.'] },
    essentials: { 
      emergencyNumbers: { police: '100', ambulance: '102', fire: '101' },
      currency: { name: 'Nepalese Rupee', code: 'NPR', symbol: '₨' },
      plugTypes: ['C', 'D', 'M'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nepal-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/nepal',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/nepal',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/nepal',flag:'🇳🇿'}] },


  'Bangladesh': { countryId:'BD', countryName:'Bangladesh',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Bangladesh experienced a major political crisis in 2024 — nationwide student-led protests ousted Prime Minister Sheikh Hasina (August 2024). Dozens were killed. A caretaker government is in power — political situation remains fluid.','Terrorism: Islamist extremist groups have conducted attacks in Bangladesh including the 2016 Dhaka Holey Artisan Bakery attack (22 killed, mostly foreigners). The terrorist threat persists.','Natural disasters: Bangladesh is one of the most flood-prone countries in the world. Annual monsoon flooding (June–September) can be catastrophic. Cyclones regularly make landfall in the Bay of Bengal.','Road safety is very poor — Bangladesh has one of the worst road accident rates in South Asia.','Petty crime and assault can occur in Dhaka. Avoid protests and large gatherings.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival available for most Western nationalities at Dhaka\'s Hazrat Shahjalal International Airport. Also obtainable in advance. Indian and Pakistani nationals face different requirements.', iataReference:iata('BD') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Hepatitis B',requirement:'Recommended'},{name:'Cholera',requirement:'Recommended'}], malariaRisk:'Malaria risk in Chittagong Hill Tracts (Rangamati, Khagrachhari, Bandarban). No risk in Dhaka or main cities.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/bgd/', cdcUrl:cdc('bangladesh'), travelHealthProUrl:thp(22, 'bangladesh'), polioAlert:false, healthNotes:['Water quality is very poor — use bottled water only.','Dengue fever is a serious public health problem in Bangladesh.'] },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '999' },
      currency: { name: 'Bangladeshi Taka', code: 'BDT', symbol: '৳' },
      plugTypes: ['A', 'C', 'D', 'G', 'K'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/bangladesh-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/bangladesh',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/bangladesh',flag:'🇨🇦'}] },


  'Sri Lanka': { countryId:'LK', countryName:'Sri Lanka',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Sri Lanka suffered the 2019 Easter Sunday bombings (269 killed including many foreign nationals at luxury hotels and churches). The threat of terrorism from Islamic State-linked groups persists.','Sri Lanka experienced a severe economic crisis in 2022 — the government defaulted on external debt, fuel and medicine shortages led to mass protests and the storming of the Presidential Palace (President Gotabaya Rajapaksa fled). Economic situation is stabilising but fragile.','Crime rates for tourists are low but petty crime and gem/tour scams are common.','Flooding and landslides during the monsoon seasons (May–June and October–November) can disrupt travel.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Electronic Travel Authorisation (ETA) required for most nationalities — apply online at eta.gov.lk before travel. Single entry for 30 days; extendable to 6 months.', iataReference:iata('LK'), entryNotes:['Apply for ETA well in advance — same-day approval is not guaranteed.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Malaria risk has been significantly reduced — Sri Lanka was originally declared malaria-free in 2016 but kept reporting sporadic cases. Very low risk; primarily in the North Province near Jaffna.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/lka/', cdcUrl:cdc('sri-lanka'), travelHealthProUrl:thp(204, 'sri-lanka'), polioAlert:false, healthNotes:['Dengue fever is endemic and outbreaks occur regularly.'] },
    essentials: { 
      emergencyNumbers: { police: '119', ambulance: '1990', fire: '110' },
      currency: { name: 'Sri Lankan Rupee', code: 'LKR', symbol: '₨' },
      plugTypes: ['D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/sri-lanka-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/sri-lanka',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/sri-lanka',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/sri-lanka',flag:'🇳🇿'}] },


  'Mongolia': { countryId:'MN', countryName:'Mongolia',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Mongolia is relatively safe. Petty crime (pickpocketing, mugging) is concentrated in Ulaanbaatar city centre, particularly in the State Department Store area and Black Market (Narantuul).','Street crime and robbery around bars and clubs in Ulaanbaatar increases after midnight. Exercise caution.','Extreme weather: Mongolian winters reach -35°C. "Dzud" (extreme winter weather events) cause livestock losses and can strand travellers. Summer temperatures can exceed 40°C on the steppe.','Road conditions outside Ulaanbaatar are very poor. River crossings, no road markings, and large distances between fuel sources require serious preparation.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'US, UK, EU, CA, AU, NZ nationals receive a 30-day visa-free on arrival. Travellers can also apply for a Mongolia e-Visa online.', iataReference:iata('MN') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended',notes:'For outdoor/steppe travellers — animal contact is frequent.'},{name:'Tick-borne Encephalitis',requirement:'Recommended',notes:'For travellers in forested areas.'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mng/', cdcUrl:cdc('mongolia'), travelHealthProUrl:thp(151, 'mongolia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Mongolian Tögrög', code: 'MNT', symbol: '₮' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/mongolia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/mongolia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/mongolia',flag:'🇨🇦'}] },


  'Cambodia': { countryId:'KH', countryName:'Cambodia',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Cambodia has improved significantly but political freedoms are severely restricted under PM Hun Manet (son of long-time ruler Hun Sen, who stepped down in 2023). Political opposition has been dismantled.','Landmine risk: Cambodia is one of the most heavily mined countries in the world (from the Khmer Rouge era and subsequent civil wars). Stick to marked paths in rural areas, particularly in Battambang, Kampong Thom, Siem Reap outskirts, and the Thai border.','Siem Reap (Angkor Wat) and Phnom Penh have significant pickpocketing and bag-snatching; phone and purse snatches by motorbike are very common.','Drink spiking in Phnom Penh and Siem Reap bars has been reported.','Drug laws are strict despite some decriminalisation discussion.','Fake charities and child exploitation tourism is a known issue — use reputable accredited operators.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa available for most nationalities at evisa.gov.kh ($36 USD for 30 days). Visa on Arrival also available at Phnom Penh and Siem Reap international airports. ASEAN nationals may qualify for visa exemption.', iataReference:iata('KH') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Recommended'},{name:'Japanese Encephalitis',requirement:'Recommended',notes:'For extended rural travel.'}], malariaRisk:'Malaria risk in rural/forested areas, particularly near the Thai and Lao borders. No risk in Phnom Penh or Siem Reap town.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/khm/', cdcUrl:cdc('cambodia'), travelHealthProUrl:thp(39, 'cambodia'), polioAlert:false, healthNotes:['Dengue fever endemic — outbreaks occur frequently.','Use bottled water only.'] },
    essentials: { 
      emergencyNumbers: { police: '117', ambulance: '119', fire: '118' },
      currency: { name: 'Cambodian Riel', code: 'KHR', symbol: '៛' },
      plugTypes: ['A', 'C', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/cambodia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/cambodia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/cambodia',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/cambodia',flag:'🇳🇿'}] },


  'Uzbekistan': { countryId:'UZ', countryName:'Uzbekistan',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Uzbekistan has dramatically improved its security situation under President Mirziyoyev (since 2016). Tourism has been actively encouraged.','Crime rates for tourists are generally low. Pickpocketing in Samarkand and Tashkent bazaars occurs.','Extremist groups historically operated in the Fergana Valley (Islamic Movement of Uzbekistan). The threat is significantly reduced but border areas with Kyrgyzstan and Tajikistan warrant monitoring.','Authoritarian system: Criticism of the government is dangerous. Exercise caution with political speech.','Do Not Travel immediately adjacent to the Afghanistan and Tajikistan borders.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Visa-free for 90 days for most Western nationals including US, UK, EU, CA, AU, NZ. e-Visa also available at e-visa.uz.', iataReference:iata('UZ') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Very low residual risk in far eastern Fergana Valley areas near Afghan border. No risk in major cities.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/uzb/', cdcUrl:cdc('uzbekistan'), travelHealthProUrl:thp(237, 'uzbekistan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Uzbekistani Som', code: 'UZS', symbol: 'лв' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/uzbekistan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/uzbekistan',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/uzbekistan',flag:'🇨🇦'}] },

  'New Zealand': { countryId:'NZ', countryName:'New Zealand', capital:'Wellington',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['New Zealand is one of the safest countries in the world. Crime is low, but petty theft (theft from unattended vehicles) is a concern in tourist hotspots.','Natural hazards: Highly geologically active; earthquake, volcanic, and geothermal risk. Know the "Drop, Cover, and Hold" protocol. Severe weather and flash flooding can occur.','Outdoor safety: Mountain weather changes rapidly. The "Land Safety Code" is essential for hikers (trampers).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure (recommended 6 months)', visaRequired:false, visaInfo:'Most Western nationals (including US, UK, EU, CA) enter visa-free for 90 days. Must obtain an NZeTA (New Zealand Electronic Travel Authority) before travel. UK citizens can stay up to 6 months visa-free.', iataReference:iata('NZ') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/nzl/', cdcUrl:cdc('new-zealand'), travelHealthProUrl:thp(159, 'new-zealand'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '111', ambulance: '111', fire: '111' },
      currency: { name: 'New Zealand Dollar', code: 'NZD', symbol: '$' },
      plugTypes: ['I'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/new-zealand-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/new-zealand',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/',flag:'🇳🇿'}] },

  'Kazakhstan': { countryId:'KZ', countryName:'Kazakhstan', capital:'Astana',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Generally safe. Petty crime (pickpocketing) occurs in Almaty and Astana, especially on public transport and in markets.','Civil unrest: Protests occurred in 2022 resulting in violence; monitor local media if demonstrations begin.','Border regions: Avoid travel near the border with Russia/Ukraine if tensions escalate.','Corruption: Police may stop foreigners for arbitrary document checks — carry a copy of your passport.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals.', iataReference:iata('KZ') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/kaz/', cdcUrl:cdc('kazakhstan'), travelHealthProUrl:thp(118, 'kazakhstan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Tenge', code: 'KZT', symbol: '₸' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/kazakhstan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/kazakhstan',flag:'🇬🇧'}] },

  'Kyrgyzstan': { countryId:'KG', countryName:'Kyrgyzstan', capital:'Bishkek',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Political climate: Frequent protests and political demonstrations in Bishkek can turn violent.','Border regions: High risk in the Fergana Valley border areas with Uzbekistan and Tajikistan due to ethnic tensions and border disputes.','Crime: Pickpocketing is high in Osh Bazaar (Bishkek). Robberies involving individuals posing as police have been reported.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'60-day visa-free for most Western nationals.', iataReference:iata('KG') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/kgz/', cdcUrl:cdc('kyrgyzstan'), travelHealthProUrl:thp(123, 'kyrgyzstan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Som', code: 'KGS', symbol: 'с' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/kyrgyzstan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/kyrgyzstan',flag:'🇬🇧'}] },

};
