import fs from 'fs';
import path from 'path';

// Load existing locales
const localesDir = path.join(process.cwd(), 'src/locales');
const langs = ['en', 'es', 'fr', 'de'];

const data = {
    // We will inject the updated object keys into the json files
};

// Insights
const insights = {
    "relationshipTrust": {
        "high": "Target culture prioritizes collective harmony and relationship-driven trust.",
        "low": "Target culture focuses on task-based reliability and independent achievement.",
        "highCons": "Invest time in social rapport before business. Trust is personal, not just professional.",
        "lowCons": "Focus on delivering results and meeting deadlines. Personal rapport follows performance."
    },
    "adaptiveAgility": {
        "high": "Target culture is more comfortable with ambiguity and rapid pivots.",
        "low": "Target culture values structural predictability and detailed forward planning.",
        "highCons": "Stay flexible. Don't over-rely on fixed agendas; be ready for 'just-in-time' changes.",
        "lowCons": "Provide clear documentation and minimize surprises. Adhere strictly to schedules."
    },
    "processConsensus": {
        "high": "Decisions are more collaborative and require broad buy-in.",
        "low": "Decisions are more top-down and centralized for speed.",
        "highCons": "Build alignment through informal networking ('Nemawashi') before formal meetings.",
        "lowCons": "Direct your proposals to the key decision-makers. Speed is often prioritized over consensus."
    },
    "performanceVelocity": {
        "high": "High drive for competitive achievement and direct performance feedback.",
        "low": "Priority on group stability, tenure, and indirect feedback loops.",
        "highCons": "Set ambitious KPIs and don't be afraid of direct, constructive criticism.",
        "lowCons": "Soften negative feedback. Value the social impact and long-term stability above short-term metrics."
    },
    "communicationDirectness": {
        "high": "Messages are delivered explicitly and literally (Low-Context).",
        "low": "Messages are layered and rely on shared context (High-Context).",
        "highCons": "Be blunt and clear. Avoid subtle hints or heavy metaphors.",
        "lowCons": "Listen for what is NOT said. Pay attention to subtext, body language, and hierarchy."
    },
    "strategicFocus": {
        "high": "Decisions are guided by long-term principles and deep theoretical foundations.",
        "low": "Decisions are guided by immediate practical application and short-term wins.",
        "highCons": "Explain the 'Why' before the 'How'. Build a strong conceptual argument.",
        "lowCons": "Focus on the immediate ROI and practical execution steps. Keep it actionable."
    },
    "empoweredEquality": {
        "high": "Preference for flat structures where titles matter less than contribution.",
        "low": "Preference for clear hierarchies and deference to formal authority.",
        "highCons": "Encourage bottom-up input. Speak directly to any level without protocol.",
        "lowCons": "Respect the chain of command. Use professional titles and wait for formal introductions."
    }
};

const translations = {
    es: {
        insights: {
            "relationshipTrust": {
                "high": "La cultura objetivo prioriza la armonía colectiva y la confianza basada en relaciones.",
                "low": "La cultura objetivo se centra en la fiabilidad en tareas y el logro independiente.",
                "highCons": "Invierta tiempo en relaciones sociales antes que en negocios. La confianza es personal.",
                "lowCons": "Céntrese en dar resultados y cumplir plazos. La relación personal sigue al rendimiento."
            },
            "adaptiveAgility": {
                "high": "La cultura objetivo se siente más cómoda con la ambigüedad y los cambios rápidos.",
                "low": "La cultura objetivo valora la previsibilidad estructural y la planificación detallada.",
                "highCons": "Manténgase flexible. Evite agendas estrictas; prepárese para cambios de última hora.",
                "lowCons": "Proporcione documentación clara y minimice las sorpresas. Respete estrictamente los horarios."
            },
            "processConsensus": {
                "high": "Las decisiones son más colaborativas y requieren un amplio consenso.",
                "low": "Las decisiones son jerárquicas y centralizadas para mayor velocidad.",
                "highCons": "Genere consenso a través de redes informales ('Nemawashi') antes de reuniones formales.",
                "lowCons": "Dirija sus propuestas a los principales responsables de la toma de decisiones. La velocidad se prioriza sobre el consenso."
            },
            "performanceVelocity": {
                "high": "Gran impulso hacia el logro competitivo y la retroalimentación directa sobre el rendimiento.",
                "low": "Prioridad en la estabilidad del grupo, antigüedad y retroalimentación indirecta.",
                "highCons": "Establezca KPIs ambiciosos y no tema la crítica directa y constructiva.",
                "lowCons": "Suavice la retroalimentación negativa. Valore el impacto social y la estabilidad a largo plazo sobre las métricas a corto plazo."
            },
            "communicationDirectness": {
                "high": "Los mensajes se entregan de forma explícita y literal (Bajo Contexto).",
                "low": "Los mensajes son indirectos y dependen de un contexto compartido (Alto Contexto).",
                "highCons": "Sea directo y claro. Evite indirectas o metáforas complejas.",
                "lowCons": "Escuche lo que NO se dice. Preste atención al subtexto, el lenguaje corporal y la jerarquía."
            },
            "strategicFocus": {
                "high": "Las decisiones están guiadas por principios a largo plazo y fundamentos teóricos profundos.",
                "low": "Las decisiones están guiadas por aplicaciones prácticas inmediatas y ganancias a corto plazo.",
                "highCons": "Explique el 'Por qué' antes del 'Cómo'. Construya un argumento conceptual sólido.",
                "lowCons": "Céntrese en el ROI inmediato y los pasos prácticos de ejecución. Manténgalo accionable."
            },
            "empoweredEquality": {
                "high": "Preferencia por estructuras horizontales donde los títulos importan menos que la contribución.",
                "low": "Preferencia por jerarquías claras y deferencia a la autoridad formal.",
                "highCons": "Fomente la participación de abajo hacia arriba. Hable directamente con cualquier nivel sin protocolos.",
                "lowCons": "Respete la cadena de mando. Use títulos profesionales y espere presentaciones formales."
            }
        }
    },
    fr: {
        insights: {
            "relationshipTrust": {
                "high": "La culture cible donne la priorité à l'harmonie collective et à la confiance relationnelle.",
                "low": "La culture cible se concentre sur la fiabilité des tâches et l'accomplissement indépendant.",
                "highCons": "Investissez du temps dans les relations sociales avant les affaires. La confiance est personnelle.",
                "lowCons": "Concentrez-vous sur les résultats et le respect des délais. La relation personnelle suit la performance."
            },
            "adaptiveAgility": {
                "high": "La culture cible est plus à l'aise avec l'ambiguïté et les pivots rapides.",
                "low": "La culture cible valorise la prévisibilité structurelle et la planification détaillée.",
                "highCons": "Restez flexible. Ne comptez pas trop sur des agendas fixes ; soyez prêt pour des changements de dernière minute.",
                "lowCons": "Fournissez une documentation claire et minimisez les surprises. Respectez strictement les horaires."
            },
            "processConsensus": {
                "high": "Les décisions sont plus collaboratives et nécessitent une large adhésion.",
                "low": "Les décisions sont plus descendantes et centralisées pour plus de rapidité.",
                "highCons": "Créez l'alignement grâce à des réseaux informels ('Nemawashi') avant les réunions formelles.",
                "lowCons": "Adressez vos propositions aux principaux décideurs. La vitesse prime souvent sur le consensus."
            },
            "performanceVelocity": {
                "high": "Forte volonté d'accomplissement compétitif et de retour direct sur les performances.",
                "low": "Priorité à la stabilité du groupe, l'ancienneté et les retours indirects.",
                "highCons": "Fixez des KPI ambitieux et ne craignez pas les critiques directes et constructives.",
                "lowCons": "Adoucissez les retours négatifs. Valorisez l'impact social et la stabilité à long terme plutôt que les métriques à court terme."
            },
            "communicationDirectness": {
                "high": "Les messages sont transmis de manière explicite et littérale (Contexte Faible).",
                "low": "Les messages sont superposés et dépendent d'un contexte partagé (Contexte Fort).",
                "highCons": "Soyez direct et clair. Évitez les allusions subtiles ou les métaphores lourdes.",
                "lowCons": "Écoutez ce qui N'EST PAS dit. Faites attention aux sous-entendus, au langage corporel et à la hiérarchie."
            },
            "strategicFocus": {
                "high": "Les décisions sont guidées par des principes à long terme et des fondements théoriques profonds.",
                "low": "Les décisions sont guidées par une application pratique immédiate et des gains à court terme.",
                "highCons": "Expliquez le 'Pourquoi' avant le 'Comment'. Construisez un argument conceptuel fort.",
                "lowCons": "Concentrez-vous sur le ROI immédiat et les étapes d'exécution pratiques. Restez pragmatique."
            },
            "empoweredEquality": {
                "high": "Préférence pour des structures horizontales où les titres importent moins que la contribution.",
                "low": "Préférence pour des hiérarchies claires et la déférence envers l'autorité formelle.",
                "highCons": "Encouragez la participation ascendante. Parlez directement à n'importe quel niveau sans protocole.",
                "lowCons": "Respectez la voie hiérarchique. Utilisez les titres professionnels et attendez les présentations formelles."
            }
        }
    },
    de: {
        insights: {
            "relationshipTrust": {
                "high": "Die Zielkultur priorisiert kollektive Harmonie und beziehungsgesteuertes Vertrauen.",
                "low": "Die Zielkultur konzentriert sich auf aufgabenbezogene Zuverlässigkeit und unabhängige Leistung.",
                "highCons": "Investieren Sie Zeit in soziale Beziehungen vor dem Geschäftlichen. Vertrauen ist persönlich.",
                "lowCons": "Konzentrieren Sie sich auf Ergebnisse und die Einhaltung von Fristen. Die persönliche Beziehung folgt der Leistung."
            },
            "adaptiveAgility": {
                "high": "Die Zielkultur fühlt sich mit Mehrdeutigkeit und schnellen Wechseln wohler.",
                "low": "Die Zielkultur schätzt strukturelle Vorhersehbarkeit und detaillierte Vorausplanung.",
                "highCons": "Bleiben Sie flexibel. Verlassen Sie sich nicht zu sehr auf feste Agenden; seien Sie bereit für kurzfristige Änderungen.",
                "lowCons": "Sorgen Sie für klare Dokumentation und minimieren Sie Überraschungen. Halten Sie sich strikt an Zeitpläne."
            },
            "processConsensus": {
                "high": "Entscheidungen sind kollaborativer und erfordern eine breite Zustimmung.",
                "low": "Entscheidungen werden für mehr Geschwindigkeit eher von oben nach unten und zentral getroffen.",
                "highCons": "Schaffen Sie Übereinstimmung durch informelles Networking ('Nemawashi') vor formellen Treffen.",
                "lowCons": "Richten Sie Ihre Vorschläge an die wichtigsten Entscheidungsträger. Schnelligkeit wird oft über Konsens gestellt."
            },
            "performanceVelocity": {
                "high": "Hoher Drang nach wettbewerbsfähiger Leistung und direktem Leistungsfeedback.",
                "low": "Priorität auf Gruppenstabilität, Betriebszugehörigkeit und indirekte Feedbackschleifen.",
                "highCons": "Setzen Sie ehrgeizige KPIs und scheuen Sie sich nicht vor direkter, konstruktiver Kritik.",
                "lowCons": "Mildern Sie negatives Feedback ab. Bewerten Sie die soziale Auswirkung und langfristige Stabilität höher als kurzfristige Metriken."
            },
            "communicationDirectness": {
                "high": "Botschaften werden explizit und wörtlich übermittelt (Low-Context).",
                "low": "Botschaften sind vielschichtig und beruhen auf gemeinsamem Kontext (High-Context).",
                "highCons": "Seien Sie direkt und klar. Vermeiden Sie subtile Andeutungen oder schwere Metaphern.",
                "lowCons": "Hören Sie auf das, was NICHT gesagt wird. Achten Sie auf den Subtext, Körpersprache und Hierarchie."
            },
            "strategicFocus": {
                "high": "Entscheidungen werden von langfristigen Prinzipien und tiefen theoretischen Grundlagen geleitet.",
                "low": "Entscheidungen werden von unmittelbarer praktischer Anwendung und kurzfristigen Gewinnen geleitet.",
                "highCons": "Erklären Sie das 'Warum' vor dem 'Wie'. Bauen Sie ein starkes konzeptionelles Argument auf.",
                "lowCons": "Konzentrieren Sie sich auf den unmittelbaren ROI und praktische Ausführungsschritte. Halten Sie es umsetzbar."
            },
            "empoweredEquality": {
                "high": "Präferenz für flache Strukturen, in denen Titel weniger zählen als der Beitrag.",
                "low": "Präferenz für klare Hierarchien und Respekt vor formeller Autorität.",
                "highCons": "Fördern Sie Bottom-up-Input. Sprechen Sie direkt mit jeder Ebene ohne Protokoll.",
                "lowCons": "Respektieren Sie den Dienstweg. Verwenden Sie professionelle Titel und warten Sie auf formelle Vorstellungen."
            }
        }
    }
}

for (const lang of langs) {
    const file = path.join(localesDir, `${lang}.json`);
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));

    if (lang === 'en') {
        content.insights = insights;
    } else {
        content.insights = translations[lang].insights;
    }

    fs.writeFileSync(file, JSON.stringify(content, null, 4));
}

console.log('Successfully injected translated insights!');
