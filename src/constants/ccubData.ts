/**
 * CCUB (Cross-Cultural Understanding Benchmark) - Representative Data
 * Selected artifacts for 5 cultures across 9 categories.
 * 
 * Source: Derived from https://github.com/cmubig/CCUB.git
 */

export interface CCUBArtifact {
    id: string;
    category: string;
    description: string;
    imageUrl: string;
    cbiDimension?: string; // Mapping to CBI model
}

export const CCUB_DATA: Record<string, CCUBArtifact[]> = {
    "China": [
        {
            id: "chn-arch-1",
            category: "Architecture",
            description: "Traditional courtyard (Siheyuan) architecture emphasizing centralized authority and social harmony through structural alignment.",
            imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "processConsensus"
        },
        {
            id: "chn-festival-1",
            category: "Religion and Festivals",
            description: "Spring Festival (Lunar New Year) symbolizing collective identity and family-driven trust networks (Guanxi).",
            imageUrl: "https://images.unsplash.com/photo-1563220497-b6a31065ea07?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "relationshipTrust"
        },
        {
            id: "chn-food-1",
            category: "Food and Drink",
            description: "Tea ceremony illustrating high-context communication and the importance of subtle relationship building.",
            imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "communicationDirectness"
        }
    ],
    "India": [
        {
            id: "ind-clothing-1",
            category: "Clothing",
            description: "Intricately woven Saree, representing regional identity and the synthesis of historical continuity with modern expression.",
            imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "strategicFocus"
        },
        {
            id: "ind-arch-1",
            category: "Architecture",
            description: "Stepwells (Baori) showcasing community-driven resource management and hierarchical engineering precision.",
            imageUrl: "https://images.unsplash.com/photo-1524492707941-5f39636ea307?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "empoweredEquality"
        },
        {
            id: "ind-actions-1",
            category: "People and Actions",
            description: "Interactive street markets demonstrating adaptive agility and the navigation of complex, relationship-based environments.",
            imageUrl: "https://images.unsplash.com/photo-1476900257030-cf2084992524?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "adaptiveAgility"
        }
    ],
    "South Korea": [
        {
            id: "kor-city-1",
            category: "City",
            description: "Neon-lit streets of Seoul, representing extreme performance velocity and the 'Ppalli-ppalli' (hurry-hurry) work ethic.",
            imageUrl: "https://images.unsplash.com/photo-1546877625-cb8c71916608?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "performanceVelocity"
        },
        {
            id: "kor-food-1",
            category: "Food",
            description: "Kimjang (making kimchi), a communal activity emphasizing group consensus and harmonious collaborative processes.",
            imageUrl: "https://images.unsplash.com/photo-1583220175714-3230d70562f1?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "processConsensus"
        },
        {
            id: "kor-arch-1",
            category: "Architecture",
            description: "Gyeongbokgung Palace, illustrating Confucian hierarchy and the structured respect for authority and long-term principles.",
            imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "strategicFocus"
        }
    ],
    "Mexico": [
        {
            id: "mex-fest-1",
            category: "Religion and Festivals",
            description: "Día de los Muertos, showcasing the deep cultural bridge between tradition and contemporary celebration of social bonds.",
            imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "relationshipTrust"
        },
        {
            id: "mex-arch-1",
            category: "Architecture",
            description: "Contrast of colonial architecture and modern hubs, reflecting the high adaptive agility of Mexican urban life.",
            imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "adaptiveAgility"
        },
        {
            id: "mex-people-1",
            category: "People and Actions",
            description: "Vibrant community markets emphasizing trust-based informal economies and relational commerce.",
            imageUrl: "https://images.unsplash.com/photo-1566899738363-d14aa91e7048?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "relationshipTrust"
        }
    ],
    "Nigeria": [
        {
            id: "nga-cloth-1",
            category: "Clothing",
            description: "Aso Ebi (Uniform Dress), symbolizing group solidarity and the high value placed on relationship networks.",
            imageUrl: "https://images.unsplash.com/photo-1563600984132-73133649692c?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "relationshipTrust"
        },
        {
            id: "nga-arch-1",
            category: "Architecture",
            description: "The Emir's Palace in Kano, reflecting strong hierarchical leadership and respect for established authority.",
            imageUrl: "https://images.unsplash.com/photo-1517404281639-66dc64964f43?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "empoweredEquality"
        },
        {
            id: "nga-fest-1",
            category: "Religion and Festivals",
            description: "Durbar festival, representing strategic ceremonial focus and the display of performance-oriented leadership.",
            imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
            cbiDimension: "performanceVelocity"
        }
    ]
};
