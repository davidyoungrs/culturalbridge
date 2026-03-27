import type { CountryTravelData } from '../travelCountryData';
const iata = (cc: string) => `https://www.iata.org/en/services/compliance/timatic/travel-documentation/?destination=${cc}`;
const cdc = (slug: string) => `https://wwwnc.cdc.gov/travel/destinations/traveler/none/${slug}`;
const thp = (id: number, slug: string) => `https://travelhealthpro.org.uk/country/${id}/${slug}#Vaccine_Recommendations`;

export const middleEastAfricaData: Record<string, CountryTravelData> = {
  'Saudi Arabia': { countryId:'SA', countryName:'Saudi Arabia', capital:'Riyadh',
    coordinates: { lat: 24.7136, lng: 46.6753 },
    majorCities: [
      { name: 'Riyadh', lat: 24.7136, lng: 46.6753 },
      { name: 'Jeddah', lat: 21.5433, lng: 39.1728 },
      { name: 'Mecca', lat: 21.3891, lng: 39.8579 }
    ],
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Yemen conflict: Houthi forces in Yemen have launched numerous missile and drone attacks into Saudi territory, targeting civil infrastructure including airports (Abha, Jiddah) and energy facilities (Aramco). Do Not Travel to within 80km of the Yemen border.','Regional Tensions: The ongoing Iran–Israel and broader regional conflict involves high risk of escalation. Iran\'s ballistic missile capability and proximity to US military bases in the Kingdom pose a persistent threat.','Terrorism: Islamic State and Al-Qaeda have conducted attacks on Westerners, government buildings, and places of worship. Vigilance is required in Eastern Province.','Strict Islamic Law: Public practice of any religion other than Islam is illegal. Public dress should be modest. Public display of affection or LGBTQ+ identity is prohibited and carries severe penalties including imprisonment and lashes.','Cybersecurity: Social media posts critical of the government, Royal Family, or Islam can result in long prison sentences for both residents and visitors.','Alcohol is strictly prohibited. Drug trafficking carries the death penalty.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa available for tourism (1 year, multiple entry, 90 days per visit) for 49 countries including US, UK, EU, CA, AU, NZ. Apply at visitsaudi.com. Umrah pilgrims follow different visa protocols. Business visas require invitations.', iataReference:iata('SA'), entryNotes:['Passport must not have evidence of travel to Israel (official policy says this is okay now but some issues may persist for visitors).','Register for "Absher" app for many official services if staying long-term.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Meningitis (ACWY)',requirement:'Mandatory',notes:'For Hajj and Umrah pilgrims.'}], malariaRisk:'Low risk in southwestern regions (Jizan, Asir, Al Bahah) bordering Yemen. No risk in Riyadh, Jeddah, Mecca, or Medina.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/sau/', cdcUrl:cdc('saudi-arabia'), travelHealthProUrl:thp(191, 'saudi-arabia'), polioAlert:false, healthNotes:['MERS-CoV (Middle East Respiratory Syndrome) risk — avoid contact with camels and raw camel milk.','Extreme heat (May–September) can exceed 50°C — risk of life-threatening heatstroke.'] },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '997', fire: '998' },
      currency: { name: 'Saudi Riyal', code: 'SAR', symbol: 'SR' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '60 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/saudi-arabia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/saudi-arabia',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/saudi-arabia',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/saudi-arabia',flag:'🇳🇿'},{agency:'iVisa Saudi e-Visa',url:'https://www.ivisa.com/saudi-arabia',flag:'🌐'}] },


  'UAE': { countryId:'AE', countryName:'United Arab Emirates', capital:'Abu Dhabi',
    coordinates: { lat: 24.4539, lng: 54.3773 },
    majorCities: [
      { name: 'Abu Dhabi', lat: 24.4539, lng: 54.3773 },
      { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
      { name: 'Sharjah', lat: 25.3463, lng: 55.4209 }
    ],
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['The UAE (Dubai, Abu Dhabi) is generally very safe. Crime rates for tourists are extremely low and public order is strictly maintained.','Regional Tensions: Houthi forces in Yemen have previously launched drone and missile attacks at Abu Dhabi (2022). While UAE-Yemen involvement has decreased, regional conflict (Iran/Israel) maintains a high baseline threat.','Terrorism: Extremist groups have threatened attacks against Western interests in the UAE. Security measures are pervasive.','Cybercrime laws: Posting content critical of the government or individuals on social media can result in arrest, large fines, and deportation. Photography of government and military sites is strictly prohibited.','LGBTQ+ identity and public displays of affection are prohibited and can result in prosecution. Same-sex relationships are criminalised.','Public intoxication and zero tolerance for drugs — even trace amounts in blood can result in imprisonment.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Citizens of US, UK, EU, CA, AU, NZ receive a free 30–90 day visa-on-arrival (length depends on specific nationality agreements). e-Visa available for others.', iataReference:iata('AE') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/are/', cdcUrl:cdc('united-arab-emirates'), travelHealthProUrl:thp(233, 'united-arab-emirates'), polioAlert:false, healthNotes:['Extreme heat in summer — stay hydrated.'] },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '998', fire: '997' },
      currency: { name: 'UAE Dirham', code: 'AED', symbol: 'د.إ' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/united-arab-emirates-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/united-arab-emirates',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/united-arab-emirates',flag:'🇨🇦'}] },


  'Israel': { countryId:'IL', countryName:'Israel', capital:'Jerusalem',
    coordinates: { lat: 31.7683, lng: 35.2137 },
    majorCities: [
      { name: 'Jerusalem', lat: 31.7683, lng: 35.2137 },
      { name: 'Tel Aviv', lat: 32.0853, lng: 34.7818 },
      { name: 'Haifa', lat: 32.7940, lng: 34.9896 }
    ],
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Active conflict: Israel is in a state of war with Hamas (Gaza) and Hezbollah (Lebanon) since October 2023. Regional conflict with Iran has involved direct missile and drone attacks.','Do Not Travel to: Gaza and the Gaza periphery. Reconsider Travel to: Northern Israel (within 10km of Lebanon border) and the West Bank due to ongoing military operations.','Missile and rocket fire occurs with little to no warming — listen for Home Front Command sirens and locate the nearest "Mamad" (shelter).','Terrorism: Stabbings, shootings, and vehicle rammings frequently occur in Jerusalem and the West Bank.','Political instability: Large political demonstrations occur frequently in Tel Aviv and Jerusalem — stay clear of protest areas.','Border crossings between Israel and Jordan/Egypt can close with little notice.'],
      interpolNotices:[{title:'Security Alert: Ongoing conflict in the region',url:'https://www.gov.uk/foreign-travel-advice/israel'}] },
    visaEntry:{ passportValidity:'6 months beyond departure recommended', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for 90 days under the "Electronic Travel Authorization" (ETA-IL) — apply at israel-entry.piba.gov.il from 2024–2025. Israel no longer stamps passports (uses paper slip).', iataReference:iata('IL'), entryNotes:['Evidence of travel to Iran, Iraq, or other regional nations may result in extra questioning but is not a bar to entry.'] },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/isr/', cdcUrl:cdc('israel'), travelHealthProUrl:thp(110, 'israel'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '100', ambulance: '101', fire: '102' },
      currency: { name: 'Israeli New Shekel', code: 'ILS', symbol: '₪' },
      plugTypes: ['C', 'H', 'M'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/israel-west-bank-and-gaza-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/israel',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/israel',flag:'🇳🇿'}] },

  'Iran': { countryId:'IR', countryName:'Iran',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — there is a high risk of arbitrary arrest, detention, and execution for dual nationals and foreign visitors. The Iranian government frequently uses foreign detainees as political leverage.','Iran has been involved in direct military confrontation with Israel and US interests since 2024. Missile and drone strikes are a genuine concern.','Civil unrest: Nationwide protests (2022–2023 "Women, Life, Freedom") led to a violent response by security forces. Civil tension remains high.','Terrorism: Islamic State-Khorasan (IS-K) has conducted major attacks in Iran (Kerman bombings 2024, 94 killed).','Dual nationals are not recognised by Iran; consular access is routinely denied.','Photography of anything that could be interpreted as military or infrastructure is illegal and causes arrest for espionage.','Strict Islamic Law: Hijab for women is mandatory in public. Alcohol is prohibited.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond departure', visaRequired:true, visaInfo:'e-Visa required for most visitors. US, UK, and Canadian passport holders MUST be on an organised tour with an approved guide. Iran has recently 2024 waived visas for 33 nationalities for 15-day stays (including UAE, Qatar, Bahrain, Saudi Arabia, Japan, Indonesia, Mexico, Brazil, Vietnam, Croatia, Serbia, Belarus) — check current status.', iataReference:iata('IR') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Optional'}], malariaRisk:'Low risk in southeastern provinces (Sistan and Baluchestan, Hormozgan, Kerman). No risk in Tehran, Esfahan, or Shiraz.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/irn/', cdcUrl:cdc('iran'), travelHealthProUrl:thp(107, 'iran'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '110', ambulance: '115', fire: '125' },
      currency: { name: 'Iranian Rial', code: 'IRR', symbol: '﷼' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/iran-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/iran',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/iran',flag:'🇨🇦'}] },


  'Iraq': { countryId:'IQ', countryName:'Iraq',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — the threat from terrorism, kidnapping, and armed conflict is extreme across most of Iraq. Islamic State (ISIS) remains active in northern and central provinces.','Iran-backed militias (Popular Mobilization Forces) frequently target US and Western interests with rockets and drones.','The Kurdistan Region of Iraq (KRI) is relatively more stable than federal Iraq but still experiences Iranian and Turkish cross-border strikes targeting Kurdish groups.','Kidnapping for ransom by criminal and extremist groups is a pervasive threat.','Medical facilities outside Baghdad and Erbil are very limited. Limited consular support.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival (VoA) available for dozens of nationalities (US, UK, EU, CA, AU, NZ) at most major airports for USD $75. Stays up to 60 days. Separate visa required for Kurdistan Region if entering there (e-Visa available for KRI).', iataReference:iata('IQ') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'}], malariaRisk:'Very low risk in northern areas during summer. No risk in Baghdad or southern marshes.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/irq/', cdcUrl:cdc('iraq'), travelHealthProUrl:thp(108, 'iraq'), polioAlert:true },
    essentials: { 
      emergencyNumbers: { police: '104', ambulance: '122', fire: '115' },
      currency: { name: 'Iraqi Dinar', code: 'IQD', symbol: 'ع.د' },
      plugTypes: ['C', 'D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/iraq-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/iraq',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/iraq',flag:'🇳🇿'}] },


  'Jordan': { countryId:'JO', countryName:'Jordan',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Jordan is stable but sits in a very volatile neighbourhood. Protests related to the Israel–Gaza conflict occur frequently in Amman and near border areas.','Terrorism threat: Islamic State and other groups have targeted security forces and tourist sites (Karak 2016). Vigilance required in public places.','Border with Syria and Iraq: Do Not Travel within 10km. Smuggling and drug trafficking (Captagon) leads to military skirmishes.','Natural hazards: Flash flooding in desert canyons (wadis) including Petra can be fatal — listen to local site management.','Cybercrime laws are strict — avoid posting political criticism or sensitive footage.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival (VoA) available for most Western nationalities at Queen Alia International Airport for JOD 40. The "Jordan Pass" (jordanpass.jo) includes the visa fee and entry to 40+ sites including Petra — highly recommended for tourism.', iataReference:iata('JO'), entryNotes:['Ensure your Jordan Pass is purchased more than 2 days before arrival for the visa waiver to apply.'] },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/jor/', cdcUrl:cdc('jordan'), travelHealthProUrl:thp(115, 'jordan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '911', fire: '911' },
      currency: { name: 'Jordanian Dinar', code: 'JOD', symbol: 'د.ا' },
      plugTypes: ['C', 'D', 'F', 'G', 'J'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/jordan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/jordan',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/jordan',flag:'🇳🇿'}] },


  'Lebanon': { countryId:'LB', countryName:'Lebanon',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — intensive armed conflict between Israel and Hezbollah since October 2023. Air strikes frequently target southern Lebanon, Beirut\'s southern suburbs (Dahieh), and the Bekaa Valley.','Risk of miscalculation leading to an all-out war is extreme. Commercial flights from Beirut are frequently suspended or cancelled.','Economic collapse: The Lebanese Pound has lost 98% of its value. Widespread poverty and shortages of medicine, fuel, and electricity have increased crime and social instability.','Terrorism risk is high — groups like ISIS and Al-Nusra maintain presence in Palestinian refugee camps (Ain al-Hilweh).','Security situation can deteriorate rapidly without warning.'],
      interpolNotices:[{title:'Security Alert: Ongoing conflict in Southern Lebanon',url:'https://www.gov.uk/foreign-travel-advice/lebanon'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Most Western nationals receive a free 30-day Visa on Arrival (VoA). STAMP POLICY: Entry will be DENIED if your passport contains any evidence of travel to Israel (stamps, visas, border exit receipts).', iataReference:iata('LB') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/lbn/', cdcUrl:cdc('lebanon'), travelHealthProUrl:thp(126, 'lebanon'), polioAlert:false, healthNotes:['Severe medicine shortages — carry a full supply of all essentials.','Waterborne diseases are increasing due to infrastructure failure.'] },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '140', fire: '175' },
      currency: { name: 'Lebanese Pound', code: 'LBP', symbol: 'ل.ل' },
      plugTypes: ['A', 'B', 'C', 'D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/lebanon-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/lebanon',flag:'🇬🇧'}] },


  'Egypt': { countryId:'EG', countryName:'Egypt', capital:'Cairo',
    coordinates: { lat: 30.0444, lng: 31.2357 },
    majorCities: [
      { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
      { name: 'Alexandria', lat: 31.2001, lng: 29.9187 },
      { name: 'Giza', lat: 30.0131, lng: 31.2089 }
    ],
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Terrorism: ISIS-Sinai is active in North Sinai. Terrorism threat also exists in Cairo, the Western Desert, and at tourist sites (Giza, Luxor). Security presence is heavy.','Do Not Travel: Sinai Peninsula (except Sharm El Sheikh) and the Western Desert border regions with Libya. All travel within 50km of the Gaza border is strictly prohibited.','Political protests: Avoid demonstrations as they can turn violent. The 2011 and 2013 revolutions illustrate the volatility.','Sexual harassment and assault of foreign women has been reported — exercise heightened caution after dark and when using local transport.','Scams targeting tourists are pervasive at major landmarks (Pyramids, Valley of the Kings).','Photographing military or government buildings is strictly illegal.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival available at Cairo airport for many nationalities (US, UK, EU, CA, AU, NZ) for USD $25. e-Visa also available via visa2egypt.gov.eg — apply at least 7 days before. Verify if your resort package (e.g. Sharm el Sheikh) includes a Sinai-only free 15-day entry.', iataReference:iata('EG'), entryNotes:['Evidence of drone carriage (even hobby drones) without Egyptian Ministry of Defense permit will lead to confiscation and potentially arrest.'] },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'Very low localized risk in El Faiyum gov. No risk in Cairo, Alexandria, or Red Sea resorts.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/egy/', cdcUrl:cdc('egypt'), travelHealthProUrl:thp(71, 'egypt'), polioAlert:false, healthNotes:['Schistosomiasis (bilharzia) risk in the Nile — avoid swimming in the river or slow-moving canals.','Air pollution in Cairo is hazardous.'] },
    essentials: { 
      emergencyNumbers: { police: '122', ambulance: '123', fire: '180' },
      currency: { name: 'Egyptian Pound', code: 'EGP', symbol: 'E£' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/egypt-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/egypt',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/egypt',flag:'🇳🇿'}] },


  'Nigeria': { countryId:'NG', countryName:'Nigeria',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Terrorism: Boko Haram and ISWAP (Islamic State West Africa Province) conduct frequent bombings, assassinations, and mass soul-abductions (kidnappings) in Northeast Nigeria (Borno, Yobe, Adamawa). Do Not Travel to these states.','Kidnapping for ransom is a widespread national crisis, affecting foreign nationals and Nigerians alike. Major transport corridors (Abuja–Kaduna highway) are high risk.','Armed banditry and communal violence in Northwest and North-central states (Kaduna, Katsina, Zamfara).','Piracy in the Gulf of Guinea — hijacking for ransom is common.','Civil unrest: Protests (e.g., #EndSARS) can escalate rapidly into violence. Vigilance required in Lagos and Abuja.','LGBTI+ individuals face imprisonment under Federal law.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa and Visa on Arrival available for business travellers. Tourist visas generally require application at a Nigerian embassy with a letter of invitation.', iataReference:iata('NG') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'Proof of vaccination is required for all travellers over 9 months old.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'},{name:'Meningitis',requirement:'Recommended',notes:'For travel in the "meningitis belt" (North) during dry season (Dec–June).'},{name:'Rabies',requirement:'Optional'}], malariaRisk:'High malaria risk throughout Nigeria year-round. Chemoprophylaxis essential.', yellowFeverRisk:'Mandatory', whoCountryUrl:'https://www.who.int/countries/nga/', cdcUrl:cdc('nigeria'), travelHealthProUrl:thp(165, 'nigeria'), polioAlert:true, healthNotes:['Cholera and Lassa Fever outbreaks occur frequently.','Use bottled water only.'] },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Nigerian Naira', code: 'NGN', symbol: '₦' },
      plugTypes: ['D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nigeria-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/nigeria',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/nigeria',flag:'🇨🇦'}] },

  'Kenya': { countryId:'KE', countryName:'Kenya',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Al-Shabaab threat: The Somalia-based terrorist group Al-Shabaab frequently carries out cross-border raids, bombings, and kidnappings in East Africa. Mandatory: Do Not Travel to within 60km of the Somalia border and coastal counties (Lamu, Garissa, Mandera).','Terrorism: High-profile attacks in Nairobi (Westgate Mall 2013, DusitD2 2019) signify the persistent threat. Vigilance required in malls, hotels, and tourist sites.','Petty crime: Bag snatching and "carjackings" are common in Nairobi (particularly Eastleigh area) and Mombasa. Avoid walking after dark.','Scams targeting tourists are widespread.','Road safety: Frequent accidents involving "matatus" (minibuses) and tour vehicles. Fly if possible for long distances.','Unauthorised rallies: Political protests can turn violent — avoid large gatherings during election cycles.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Kenya replaced its visa system with the "Electronic Travel Authorisation" (eTA) from 2024. All foreign nationals must apply at etakenya.go.ke before travel — standard processing 3 working days.', iataReference:iata('KE') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended',notes:'Certificate required if arriving from an endemic country.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'},{name:'Rabies',requirement:'Optional'}], malariaRisk:'High malaria risk throughout Kenya, including safari parks (Maasai Mara, Samburu), coastal regions (Mombasa, Lamu), and Western Kenya. Low risk in Nairobi city centre and highlands above 2,500m.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/ken/', cdcUrl:cdc('kenya'), travelHealthProUrl:thp(117, 'kenya'), polioAlert:false, healthNotes:['Dengue and Chikungunya are present on the coast.','Drink only bottled or filtered water.','Cholera outbreaks occur sporadically.'] },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '999' },
      currency: { name: 'Kenyan Shilling', code: 'KES', symbol: 'KSh' },
      plugTypes: ['G'],
      voltage: '240 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/kenya-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/kenya',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/kenya',flag:'🇳🇿'}] },


  'South Africa': { countryId:'ZA', countryName:'South Africa', capital:'Pretoria',
    coordinates: { lat: -25.7479, lng: 28.2293 },
    majorCities: [
      { name: 'Pretoria', lat: -25.7479, lng: 28.2293 },
      { name: 'Johannesburg', lat: -26.2041, lng: 28.0473 },
      { name: 'Cape Town', lat: -33.9249, lng: 18.4241 }
    ],
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Violent crime is a severe concern: South Africa has one of the world\'s highest rates of murder, armed robbery, and carjacking. Crimes targeting tourists occur in major cities (Johannesburg, Cape Town, Durban) and even on Table Mountain trails.','Civil unrest: Large-scale protests and strikes can turn violent (e.g., July 2021 unrest). Stay clear of any demonstrations.','Power supply (Load Shedding): Regular scheduled power cuts disrupt transport, security alarms, and mobile signals. Monitor "EskomSePush" app.','ATM skimming and bank-related fraud is very high — never accept help from "bystanders" at ATMs.','Scams: "Cape Town diamond scams" and fraudulent tour operators are widespread.','Road safety: Carjackings occur frequently at intersections. Keep doors locked and windows up.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'30 days beyond stay (recommend 6 months); must have 2 blank pages', visaRequired:false, visaInfo:'Citizens of US, UK, EU, CA, AU, NZ enter visa-free for 90 days. For those who require a visa, e-Visa is available for 14+ countries but processing can be slow.', iataReference:iata('ZA'), entryNotes:['UNACCOMPANIED MINORS: Very strict documentation rules for children travelling with one or no parents — check specific SA Dept of Home Affairs requirements for birth certificates and parental affidavits.'] },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Yellow Fever',requirement:'Mandatory',notes:'Certificate required if arriving from an endemic country.'}], malariaRisk:'Malaria risk in low-altitude areas of Limpopo, Mpumalanga (including Kruger National Park), and northeastern KwaZulu-Natal. Peak risk October–May. No risk in Cape Town, Johannesburg, or Garden Route.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/zaf/', cdcUrl:cdc('south-africa'), travelHealthProUrl:thp(201, 'south-africa'), polioAlert:false, healthNotes:['Dengue risk in northern areas.','Sun exposure risk is extreme — use high SPF protection.'] },
    essentials: { 
      emergencyNumbers: { police: '10111', ambulance: '10177', fire: '10177' },
      currency: { name: 'South African Rand', code: 'ZAR', symbol: 'R' },
      plugTypes: ['C', 'M', 'N'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/south-africa-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/south-africa',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/south-africa',flag:'🇨🇦'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/south-africa',flag:'🇳🇿'}] },


  'Morocco': { countryId:'MA', countryName:'Morocco',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Morocco is generally safe. Petty crime (pickpocketing, bag snatching) is the main concern, particularly in the Medinas of Casablanca, Marrakech, and Fes.','Terrorism threat: Moroccan security forces have successfully dismantled many cells, but extremist groups have previously conducted attacks (Marrakech 2011, Atlas Mountains 2018). High vigilance in tourist areas.','Touts and harassment in Medinas can be aggressive — employ a licensed guide.','Western Sahara: A disputed territory. High military presence; UN peacekeeping force (MINURSO) active. Landmines are a risk near "the Berm" (sand wall).','Natural hazards: Earthquake risk is significant — the September 2023 Al Haouz earthquake (M6.8) near Marrakech killed 2,900.','Monarchy: Criticism of the King or the Alawite Dynasty is illegal.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay (6 months recommended)', visaRequired:false, visaInfo:'Most Western nationals enter visa-free for 90 days. No e-Visa or VoA needed for tourist stays.', iataReference:iata('MA') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/mar/', cdcUrl:cdc('morocco'), travelHealthProUrl:thp(154, 'morocco'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '190', ambulance: '150', fire: '150' },
      currency: { name: 'Moroccan Dirham', code: 'MAD', symbol: 'DH' },
      plugTypes: ['C', 'E'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/morocco-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/morocco',flag:'🇬🇧'},{agency:'Canada Travel',url:'https://travel.gc.ca/destinations/morocco',flag:'🇨🇦'}] },


  'Algeria': { countryId:'DZ', countryName:'Algeria',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Do Not Travel to: Southern and Eastern border regions (Libya, Mali, Niger, Mauritania, Tunisia borders). Terrorism and kidnapping for ransom are extreme risks.','Terrorism: Al-Qaeda in the Islamic Maghreb (AQIM) and Jund al-Khilafa (ISIS ally) remain active. Attacks target security forces but can affect Western interests.','Civil unrest: Demonstrations (Hirak movement) are frequent — avoid large gatherings.','Kidnapping: There is a genuine threat of abduction of foreign nationals in mountainous and rural areas.','Police presence is pervasive and questioning of foreigners is common.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visas must be applied for at an Algerian embassy. Letter of invitation or hotel booking required. US nationals must have an approved guide for Saharan travel.', iataReference:iata('DZ') },
    health:{ vaccinations:[{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'}], malariaRisk:'Low risk in southern Saharan areas during summer. No risk in Algiers or coastal cities.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/dza/', cdcUrl:cdc('algeria'), travelHealthProUrl:thp(3, 'algeria'), polioAlert:true },
    essentials: { 
      emergencyNumbers: { police: '17', ambulance: '14', fire: '14' },
      currency: { name: 'Algerian Dinar', code: 'DZD', symbol: 'د.ج' },
      plugTypes: ['C', 'F'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/algeria-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/algeria',flag:'🇬🇧'}] },


  'Tunisia': { countryId:'TN', countryName:'Tunisia',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Terrorism: High-profile attacks in Sousse and Bardo Museum (2015) and ongoing threats from groups linked to ISIS and AQIM. Security in tourist zones is enhanced.','Do Not Travel: Mount Chaambi National Park and the border regions with Libya due to terrorist activity and smuggling.','Civil unrest: Protests over economic conditions are frequent in Tunis and other urban areas. Avoid large gatherings.','Border with Libya remains high risk — potential for cross-border combat and incursions.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'3 months beyond departure (6 months recommended)', visaRequired:false, visaInfo:'Western nationals (US, UK, EU, CA, AU, NZ) do not require a visa for stays up to 90 days. Ensure your entry is stamped.', iataReference:iata('TN') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/tun/', cdcUrl:cdc('tunisia'), travelHealthProUrl:thp(226, 'tunisia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '197', ambulance: '190', fire: '198' },
      currency: { name: 'Tunisian Dinar', code: 'TND', symbol: 'د.ت' },
      plugTypes: ['C', 'E'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/tunisia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/tunisia',flag:'🇬🇧'}] },


  'Libya': { countryId:'LY', countryName:'Libya',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel — Libya is in a state of civil war and extreme instability. Threat from terrorism, kidnapping, and armed conflict is catastrophic.','Multiple armed groups, including ISIS-linked cells, operate across the country. Terrorist attacks target government infrastructure and foreign interests.','Kidnapping for ransom of foreign nationals is a severe and persistent risk.','Border crossings are frequently closed at short notice. The security situation in Tripoli is volatile.','Limited embassy services — most Western embassies have withdrawn to Tunisia.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visas are nearly impossible for Western tourists to obtain — travel is strongly discouraged.', iataReference:iata('LY') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'For arrivals from endemic countries.'},{name:'Polio',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'Mandatory (Transit)', whoCountryUrl:'https://www.who.int/countries/lby/', cdcUrl:cdc('libya'), travelHealthProUrl:thp(129, 'libya'), polioAlert:true },
    essentials: { 
      emergencyNumbers: { police: '193', ambulance: '193', fire: '193' },
      currency: { name: 'Libyan Dinar', code: 'LYD', symbol: 'ل.د' },
      plugTypes: ['C', 'D', 'F', 'L'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/libya-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/libya',flag:'🇬🇧'}] },


  'Ethiopia': { countryId:'ET', countryName:'Ethiopia',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Amhara, Oromia, and Tigray Regions: Extreme risk due to ongoing armed conflict between federal forces and regional militias (Fano, OLA, TPLF). Civil war in Tigray (2020–2022) left hundreds of thousands dead; while a peace deal exists, Tigray remains fragile. Amhara and Oromia see active fighting.','Do Not Travel: Within 80km of the Eritrea, Sudan, South Sudan, and Somalia borders. Cross-border incursions and kidnapping are common.','Terrorism: Al-Shabaab threat persists in Addis Ababa and eastern Ethiopia.','Communication blackouts: The government frequently shuts down the internet and mobile data during political unrest.','State of Emergency: Regularly declared in various parts of the country — can lead to mass arrests and restricted movement.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa required for all travellers at evisa.gov.et ($82 USD). US and European nationals can get e-Visa. Visa on Arrival available for AU citizens at Addis Ababa Bole International Airport.', iataReference:iata('ET') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'Certificate required if arriving from or transiting through an endemic country.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Polio',requirement:'Recommended'},{name:'Meningitis',requirement:'Recommended',notes:'For northern Ethiopia dry season.'}], malariaRisk:'High malaria risk throughout Ethiopia below 2,000m, including Danakil Depression, Omo Valley, and Lalibela areas. No risk in Addis Ababa (altitude 2,355m).', yellowFeverRisk:'Mandatory (Transit)', whoCountryUrl:'https://www.who.int/countries/eth/', cdcUrl:cdc('ethiopia'), travelHealthProUrl:thp(76, 'ethiopia'), polioAlert:true, healthNotes:['Cholera and Dengue outbreaks occur regularly.','Tap water is not safe.'] },
    essentials: { 
      emergencyNumbers: { police: '911', ambulance: '907', fire: '939' },
      currency: { name: 'Ethiopian Birr', code: 'ETB', symbol: 'Br' },
      plugTypes: ['C', 'F', 'G'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ethiopia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/ethiopia',flag:'🇬🇧'}] },


  'Ghana': { countryId:'GH', countryName:'Ghana',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Ghana is one of the most stable and safe countries in West Africa. Violent crime is relatively low.','Petty crime (pickpocketing, bag snatching) occurs in Accra (particularly Kwame Nkrumah Circle, Osu, and Kokrobite beach) and Kumasi. Avoid walking alone after dark.','Scams targeting tourists — including romantic and financial scams — are very common.','Northern Ghana: Exercise caution near the Burkina Faso border due to regional spillover of terrorist activity.','Road safety: Poor vehicle maintenance and speeding matatus (tro-tros) lead to frequent accidents.','Gay rights: Anti-LGBTQ+ laws are strict and social attitudes are conservative.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Most Western nationals (US, UK, CA, AU, NZ) require a visa in advance from a Ghanaian embassy. Ensure you have a letter of invitation or hotel booking.', iataReference:iata('GH') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'Proof of vaccination is required for all travellers over 9 months old.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Meningitis',requirement:'Recommended',notes:'For northern dry season.'},{name:'Rabies',requirement:'Optional'}], malariaRisk:'High malaria risk throughout Ghana year-round. Chemoprophylaxis essential.', yellowFeverRisk:'Mandatory', whoCountryUrl:'https://www.who.int/countries/gha/', cdcUrl:cdc('ghana'), travelHealthProUrl:thp(89, 'ghana'), polioAlert:false, healthNotes:['Cholera and Dengue outbreaks occur.','Use bottled water only.'] },
    essentials: { 
      emergencyNumbers: { police: '191', ambulance: '193', fire: '192' },
      currency: { name: 'Ghanaian Cedi', code: 'GHS', symbol: 'GH₵' },
      plugTypes: ['D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/ghana-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/ghana',flag:'🇬🇧'}] },

  'Tanzania': { countryId:'TZ', countryName:'Tanzania',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Tanzania is generally safe for tourism. Petty crime (bag snatching from mopeds, pickpocketing) is common in Dar es Salaam city centre and on beaches in Zanzibar (Stone Town outskirts).','Terrorism: High-profile threat from Al-Shabaab spillover from Mozambique in the south (Mtwara region) and general East Africa extremism. Vigilance in tourist areas.','Kidnapping for ransom: Incidents involving tourists have occurred in Dar es Salaam, typically involving "rogue" taxi drivers. Use only licensed transport from hotels.','LGBTQ+ identity is criminalised — same-sex relationships carry prison terms. Discretion is required.','Drones: Heavily restricted; requires permit from the Tanzania Civil Aviation Authority (TCAA).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa available online at eservices.immigration.go.tz. US citizens pay $100 for a 1-year multiple entry visa; others pay $50 for a 3-month single entry. Visa on Arrival (VoA) also available at major airports.', iataReference:iata('TZ') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'Certificate required if arriving from an endemic country.'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'},{name:'Rabies',requirement:'Optional'}], malariaRisk:'High malaria risk throughout Tanzania including safari parks (Serengeti, Ngorongoro), Zanzibar islands, and Lake Victoria. Chemoprophylaxis essential.', yellowFeverRisk:'Recommended', whoCountryUrl:'https://www.who.int/countries/tza/', cdcUrl:cdc('tanzania'), travelHealthProUrl:thp(220, 'tanzania'), polioAlert:false, healthNotes:['Dengue fever outbreaks occur on Zanzibar and the mainland.','Sleep under a treated bed net.'] },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Tanzanian Shilling', code: 'TZS', symbol: 'TSh' },
      plugTypes: ['D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/tanzania-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/tanzania',flag:'🇬🇧'},{agency:'SafeTravel NZ',url:'https://www.safetravel.govt.nz/tanzania',flag:'🇳🇿'}] },


  'Kuwait': { countryId:'KW', countryName:'Kuwait',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Kuwait is very safe. Violent crime is rare. Petty crime exists in crowded bazaars.','Regional instability: Kuwait borders Iraq and is near Iran. Regional conflict escalation is a concern.','Terrorism threat: Group like ISIS have conducted attacks in Kuwait (2015 Shiite mosque bombing). Enhanced security at public places.','Strict laws: Modest dress required; LGBTQ+ acts are criminalised. Alcohol is strictly illegal.','Heat hazard: Some of the highest recorded temperatures on Earth occur in Kuwait (50°C+ summer).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival available at Kuwait airport for US, UK, EU, CA, AU, NZ ($10 USD). e-Visa also available via evisa.moi.gov.kw.', iataReference:iata('KW') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/kwt/', cdcUrl:cdc('kuwait'), travelHealthProUrl:thp(122, 'kuwait'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '112', fire: '112' },
      currency: { name: 'Kuwaiti Dinar', code: 'KWD', symbol: 'KD' },
      plugTypes: ['C', 'G'],
      voltage: '240 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/kuwait-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/kuwait',flag:'🇬🇧'}] },


  'Qatar': { countryId:'QA', countryName:'Qatar',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Qatar is extremely safe for Western tourists. Crime rates are very low.','Major hub: Doha (Hamad Int\'l) is a primary global transit point. Security is elite.','Regional conflict: Proximity to Iran and involvement in regional mediation (Gaza conflict) means Qatar is tied to regional geopolitical shifts.','Strict laws: Modest dress in public; public affection restricted. Alcohol available only in licensed hotels. Same-sex relations illegal.','Extreme summer heat (45°C+).'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Most Western nationals (US, UK, EU, CA, AU, NZ) enter visa-free for 30–90 days (Waiver system). e-Visa required for others.', iataReference:iata('QA') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/qat/', cdcUrl:cdc('qatar'), travelHealthProUrl:thp(183, 'qatar'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '999' },
      currency: { name: 'Qatari Riyal', code: 'QAR', symbol: 'QR' },
      plugTypes: ['G'],
      voltage: '240 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/qatar-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/qatar',flag:'🇬🇧'}] },


  'Oman': { countryId:'OM', countryName:'Oman',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Oman is very safe and known for its hospitality. Crime is very low.','Stability: Oman has a long history of diplomatic neutrality in the Middle East.','Yemen border: Reconsider travel to Dhofar governorate border areas due to potential regional conflict spillover.','Strict environmental laws: Photographing government buildings or infrastructure in sensitive zones is illegal.','Same-sex relations are criminalised.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Citizens of 103 countries (including US, UK, EU, CA, AU, NZ) receive free 14-day visa-free entry. Long-term e-Visa available at evisa.rop.gov.om.', iataReference:iata('OM') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No significant malaria risk for tourists.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/omn/', cdcUrl:cdc('oman'), travelHealthProUrl:thp(170, 'oman'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '9999', ambulance: '9999', fire: '9999' },
      currency: { name: 'Omani Rial', code: 'OMR', symbol: 'RO' },
      plugTypes: ['G'],
      voltage: '240 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/oman-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/oman',flag:'🇬🇧'}] },


  'Bahrain': { countryId:'BH', countryName:'Bahrain',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Bahrain is safe. Petty crime is rare.','Regional conflict: Proximity to Iran and hosting the US Navy\'s 5th Fleet makes Bahrain a target during regional escalations.','Political protests: Large-scale demonstrations can occur in villages — avoid any large gatherings.','Alcohol is legal in hotels/bars. Same-sex acts legal since 1976 but socially conservative.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival or e-Visa (evisa.gov.bh) available for most Western nationalities ($12–$66 USD depending on duration).', iataReference:iata('BH') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/bhr/', cdcUrl:cdc('bahrain'), travelHealthProUrl:thp(20, 'bahrain'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '999', fire: '999' },
      currency: { name: 'Bahraini Dinar', code: 'BHD', symbol: 'BD' },
      plugTypes: ['G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/bahrain-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/bahrain',flag:'🇬🇧'}] },


  'Pakistan': { countryId:'PK', countryName:'Pakistan',
    security:{ overallStatus:'Do Not Travel',
      highlights:['Do Not Travel to: Khyber Pakhtunkhwa (KP), Balochistan, and the Line of Control (LoC) with India. Terrorism and kidnapping for ransom are extreme risks.','Terrorism: Groups like Tehrik-e-Taliban Pakistan (TTP), Islamic State-Khorasan (IS-K), and Baloch separatists carry out frequent large-scale attacks. Attacks target government, minority groups, and Western interests.','Civil unrest: Large political protests in Islamabad and Lahore can become violent. Avoid all demonstrations.','Dual nationals are not recognised; consular access is routinely denied.','Photography of military sites is strictly illegal.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'e-Visa required for most visitors. Online application at visa.nadra.gov.pk. US, UK, and CA passport holders must provide specified documents.', iataReference:iata('PK') },
    health:{ vaccinations:[{name:'Polio',requirement:'Recommended'},{name:'Hepatitis A',requirement:'Recommended'},{name:'Typhoid',requirement:'Recommended'}], malariaRisk:'High malaria risk throughout Pakistan year-round. Chemoprophylaxis essential.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/pak/', cdcUrl:cdc('pakistan'), travelHealthProUrl:thp(171, 'pakistan'), polioAlert:true },
    essentials: { 
      emergencyNumbers: { police: '15', ambulance: '115', fire: '16' },
      currency: { name: 'Pakistani Rupee', code: 'PKR', symbol: '₨' },
      plugTypes: ['C', 'D', 'G', 'M'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/pakistan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/pakistan',flag:'🇬🇧'}] },


  'Rwanda': { countryId:'RW', countryName:'Rwanda',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Rwanda is one of the safest and cleanest countries in Africa. Crime rates are very low.','East Africa tensions: Border areas with DR Congo (DRC) and Burundi are high risk due to rebel activities. Exercise extra caution in Volcanoes National Park near DRC border.','Political system: Authoritarian; criticism of the government is not tolerated.','Plastic bags are strictly illegal — confiscated on arrival.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival (VoA) available for all nationalities for USD $50 for 30 days. Commonwealth citizens (except UK/AU/CA) receive free visas.', iataReference:iata('RW') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory',notes:'Certificate required if arriving from an endemic country.'}], malariaRisk:'High malaria risk throughout Rwanda year-round. Chemoprophylaxis essential.', yellowFeverRisk:'Mandatory (Transit)', whoCountryUrl:'https://www.who.int/countries/rwa/', cdcUrl:cdc('rwanda'), travelHealthProUrl:thp(187, 'rwanda'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '112', ambulance: '912', fire: '111' },
      currency: { name: 'Rwandan Franc', code: 'RWF', symbol: 'RF' },
      plugTypes: ['C', 'J'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/rwanda-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/rwanda',flag:'🇬🇧'}] },


  'Zambia': { countryId:'ZM', countryName:'Zambia',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Zambia is stable and relatively safe. Petty crime occurs in Lusaka and Livingstone hubs.','Border with DR Congo: High risk of smuggling and potential regional conflict spillover.','Natural disasters: Flash floods during monsoon season.','Homosexuality is illegal.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'Most Western nationals (US, UK, EU, CA, AU, NZ) receive free 90-day visa-free entry. KAZA Univisa available for travel between Zambia and Zimbabwe.', iataReference:iata('ZM') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'High malaria risk throughout Zambia. Chemoprophylaxis essential.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/zmb/', cdcUrl:cdc('zambia'), travelHealthProUrl:thp(247, 'zambia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '991', ambulance: '992', fire: '993' },
      currency: { name: 'Zambian Kwacha', code: 'ZMW', symbol: 'ZK' },
      plugTypes: ['C', 'D', 'G'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/zambia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/zambia',flag:'🇬🇧'}] },


  'Zimbabwe': { countryId:'ZW', countryName:'Zimbabwe',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Zimbabwe is generally safe for tourism but political and economic instability persists. Hyperinflation and fuel/medicine shortages can lead to protests.','Petty crime (bag snatching, pickpocketing) is common in Harare and Victoria Falls.','Corruption: Roadblocks by police seeking bribes are frequent.','Gay rights: Same-sex relations are criminalised.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa on Arrival (VoA) available for most Western nationalities ($30–$45 USD). KAZA Univisa ($50) recommended for travel to Victoria Falls (allows entry to Zambia).', iataReference:iata('ZW') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'High malaria risk in low-altitude areas including Victoria Falls and safari parks. Low risk in Harare and Bulawayo cities.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/zwe/', cdcUrl:cdc('zimbabwe'), travelHealthProUrl:thp(248, 'zimbabwe'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '995', ambulance: '994', fire: '993' },
      currency: { name: 'Zimbabwe Gold', code: 'ZiG', symbol: 'ZiG' },
      plugTypes: ['D', 'G'],
      voltage: '220 V / 240 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/zimbabwe-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/zimbabwe',flag:'🇬🇧'}] },

  'Armenia': { countryId:'AM', countryName:'Armenia', capital:'Yerevan',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Conflict with Azerbaijan: Stay away from the border regions with Azerbaijan due to sporadic clashes and military tension. Nagorno-Karabakh is currently under Azerbaijani control but the region remains volatile.','Protests: Regular political demonstrations in Yerevan (Republic Square). Avoid crowds as they can turn confrontational.','Natural hazards: Armenia is in a seismically active zone.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'Valid for duration of stay', visaRequired:false, visaInfo:'180-day visa-free for most Western nationals.', iataReference:iata('AM') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/arm/', cdcUrl:cdc('armenia'), travelHealthProUrl:thp(13, 'armenia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Armenian Dram', code: 'AMD', symbol: '֏' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/armenia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/armenia',flag:'🇬🇧'}] },

  'Azerbaijan': { countryId:'AZ', countryName:'Azerbaijan', capital:'Baku',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Border closure: Land borders are currently closed for entry/exit; travel is only possible via air through Baku International Airport.','Nagorno-Karabakh: Avoid all travel to areas near the border with Armenia. Unexploded ordnance and landmines are a major risk in former conflict zones.','Authoritarian climate: Avoid political discussions or photography of military/security installations.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'ASAN e-Visa is required for most Western nationals. Apply via evisa.gov.az.', iataReference:iata('AZ') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'No malaria risk.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/aze/', cdcUrl:cdc('azerbaijan'), travelHealthProUrl:thp(17, 'azerbaijan'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '102', ambulance: '103', fire: '101' },
      currency: { name: 'Azerbaijani Manat', code: 'AZN', symbol: '₼' },
      plugTypes: ['C', 'F'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/azerbaijan-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/azerbaijan',flag:'🇬🇧'}] },

  'Botswana': { countryId:'BW', countryName:'Botswana', capital:'Gaborone',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Botswana is one of the safest countries in Africa. Crime is relatively low compared to neighboring countries.','Petty crime (burglaries, phone snatching) occurs in Gaborone and Francistown.','Wildlife: Road travel at night is dangerous due to elephants and stray cattle on unfenced roads.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals.', iataReference:iata('BW') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'},{name:'Hepatitis A',requirement:'Recommended'}], malariaRisk:'Risk in the northern half of the country (Okavango Delta, Chobe) particularly from November to June.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/bwa/', cdcUrl:cdc('botswana'), travelHealthProUrl:thp(32, 'botswana'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '997', fire: '998' },
      currency: { name: 'Botswana Pula', code: 'BWP', symbol: 'P' },
      plugTypes: ['D', 'G', 'M'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/botswana-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/botswana',flag:'🇬🇧'}] },

  'Cameroon': { countryId:'CM', countryName:'Cameroon', capital:'Yaoundé',
    security:{ overallStatus:'Reconsider Travel',
      highlights:['Boko Haram/ISIS-WA: High risk of terrorism in the Far North region.','Anglophone Crisis: Civil war and separatist violence in the North-West and South-West regions. Do Not Travel to these areas.','Kidnapping: High risk in border areas with Nigeria and CAR.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'Visa required for almost all Western nationals. E-visa available at evisacam.cm.', iataReference:iata('CM') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory'},{name:'Polio',requirement:'Recommended'}], malariaRisk:'High risk throughout the country year-round.', yellowFeverRisk:'High risk', whoCountryUrl:'https://www.who.int/countries/cmr/', cdcUrl:cdc('cameroon'), travelHealthProUrl:thp(41, 'cameroon'), polioAlert:true },
    essentials: { 
      emergencyNumbers: { police: '117', ambulance: '119', fire: '118' },
      currency: { name: 'Central African CFA Franc', code: 'XAF', symbol: 'FCFA' },
      plugTypes: ['C', 'E'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/cameroon-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/cameroon',flag:'🇬🇧'}] },
  'Ivory Coast': { countryId:'CI', countryName:'Ivory Coast', capital:'Yamoussoukro',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Terrorism: High threat in northern border areas with Burkina Faso and Mali due to spillover from the Sahel conflict.','Crime: Armed robberies and carjackings occur in Abidjan, particularly in the "Zone 4" and "Plateau" areas at night.','Civil unrest: Political tensions can lead to protests; monitor local news carefully.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'E-visa available for most Western nationals at snedai.com. Must be printed and presented upon arrival.', iataReference:iata('CI') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory'}], malariaRisk:'High risk throughout the country year-round.', yellowFeverRisk:'High risk', whoCountryUrl:'https://www.who.int/countries/civ/', cdcUrl:cdc('cote-divoire'), travelHealthProUrl:thp(58, 'cote-divoire'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '111', ambulance: '185', fire: '180' },
      currency: { name: 'West African CFA Franc', code: 'XOF', symbol: 'CFA' },
      plugTypes: ['C', 'E'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/cote-d-ivoire-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/cote-divoire',flag:'🇬🇧'}] },

  'Namibia': { countryId:'NA', countryName:'Namibia', capital:'Windhoek',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Generally very safe. Petty crime (theft from vehicles) is the main concern in Windhoek and Swakopmund.','Road safety: Driving is on the left. High risk of accidents on gravel roads due to speed and dust. Avoid driving at night due to wildlife.','Health: In northern regions, be aware of malaria risk.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond stay', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals.', iataReference:iata('NA') },
    health:{ vaccinations:[{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'Risk in northern regions (Zambezi, Kavango) throughout the year.', yellowFeverRisk:'No risk', whoCountryUrl:'https://www.who.int/countries/nam/', cdcUrl:cdc('namibia'), travelHealthProUrl:thp(155, 'namibia'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '10111', ambulance: '211111', fire: '211111' },
      currency: { name: 'Namibian Dollar', code: 'NAD', symbol: 'N$' },
      plugTypes: ['D', 'M'],
      voltage: '220 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/namibia-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/namibia',flag:'🇬🇧'}] },

  'Senegal': { countryId:'SN', countryName:'Senegal', capital:'Dakar',
    security:{ overallStatus:'Exercise Normal Precautions',
      highlights:['Senegal is one of the more stable countries in West Africa.','Crime: Pickpocketing and bag snatching are common in Dakar, particularly in বাজারের (markets) and on beaches.','Casamance region: Ongoing low-level conflict; stick to main roads and avoid travel near the border with Guinea-Bissau.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:false, visaInfo:'90-day visa-free for most Western nationals.', iataReference:iata('SN') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Recommended'}], malariaRisk:'High risk throughout the country year-round.', yellowFeverRisk:'High risk', whoCountryUrl:'https://www.who.int/countries/sen/', cdcUrl:cdc('senegal'), travelHealthProUrl:thp(193, 'senegal'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '17', ambulance: '15', fire: '18' },
      currency: { name: 'West African CFA Franc', code: 'XOF', symbol: 'CFA' },
      plugTypes: ['C', 'D', 'E', 'K'],
      voltage: '230 V',
      frequency: '50 Hz',
      drivingSide: 'right'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/senegal-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/senegal',flag:'🇬🇧'}] },

  'Uganda': { countryId:'UG', countryName:'Uganda', capital:'Kampala',
    security:{ overallStatus:'Exercise Increased Caution',
      highlights:['Terrorism: Threat from ADF (Allied Democratic Forces) in border areas with DRC. Bombings have occurred in Kampala.','Crime: Armed robberies and home invasions occur in Kampala and larger towns. Avoid walking alone at night.','Anti-LGBTQ+ laws: Uganda has some of the world\'s harshest anti-LGBTQ+ laws. Being identified as LGBTQ+ can result in life imprisonment or the death penalty in extreme cases. Extreme caution is urged.'],
      interpolNotices:[{title:'INTERPOL General Secretariat News',url:'https://www.interpol.int/en/News-and-Events/News'}] },
    visaEntry:{ passportValidity:'6 months beyond arrival', visaRequired:true, visaInfo:'E-visa is mandatory via visas.immigration.go.ug. No visa-on-arrival.', iataReference:iata('UG') },
    health:{ vaccinations:[{name:'Yellow Fever',requirement:'Mandatory'},{name:'Routine vaccinations',requirement:'Recommended'}], malariaRisk:'High risk throughout the country year-round.', yellowFeverRisk:'High risk', whoCountryUrl:'https://www.who.int/countries/uga/', cdcUrl:cdc('uganda'), travelHealthProUrl:thp(229, 'uganda'), polioAlert:false },
    essentials: { 
      emergencyNumbers: { police: '999', ambulance: '911', fire: '911' },
      currency: { name: 'Ugandan Shilling', code: 'UGX', symbol: 'USh' },
      plugTypes: ['G'],
      voltage: '240 V',
      frequency: '50 Hz',
      drivingSide: 'left'
    },
    officialSources:[{agency:'US State Dept',url:'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/uganda-travel-advisory.html',flag:'🇺🇸'},{agency:'UK FCDO',url:'https://www.gov.uk/foreign-travel-advice/uganda',flag:'🇬🇧'}] },
};
