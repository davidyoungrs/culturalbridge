import fs from 'fs';
import path from 'path';

const localesDir = path.join(process.cwd(), 'src/locales');
const langs = ['en', 'es', 'fr', 'de'];

const quizData = {
    en: {
        quiz: {
            title: "Cultural Style Assessment",
            numQuestions: "{{count}} questions",
            subtitle: "Discover your personal cross-cultural communication profile",
            yourProfile: "Your Cultural Profile",
            profilePrefix: "Profile:",
            retake: "Retake Assessment",
            reveal: "Reveal My Cultural Profile",
            q1: { scenario: "When reviewing a colleague's work that requires correction, you usually:", optA: "Address the specific points immediately and clearly", optB: "Provide observations that allow them to identify the adjustments themselves" },
            q2: { scenario: "When sharing critical project updates with a partner, you prefer to:", optA: "Present the facts directly and focus on next steps", optB: "Build a broader context and suggest implications gradually" },
            q3: { scenario: "In professional written correspondence, your style is typically:", optA: "Concise and focused on the immediate objective", optB: "Contextual, incorporating detail and nuanced formatting" },
            q4: { scenario: "When leading an initiative with significant time constraints, you tend to:", optA: "Determine the primary direction yourself to maintain momentum", optB: "Seek collective input before finalizing the path forward" },
            q5: { scenario: "If you find yourself disagreeing with a team's majority view, you usually:", optA: "Synthesize your perspective and advocate for an alternative", optB: "Support the final group consensus to maintain team alignment" },
            q6: { scenario: "Your preferred collaborative environment involves:", optA: "Rapid iterations where decisions are made through active leadership", optB: "Comprehensive discussions that integrate all available perspectives" },
            q7: { scenario: "When organizing your weekly activity, you prefer to:", optA: "Maintain a steady sequence with specific windows for each task", optB: "Establish broad goals and adapt your focus as situations evolve" },
            q8: { scenario: "At the start of a scheduled assembly, your arrival is consistently:", optA: "Slightly early — appearing precisely when expected demonstrates reliability", optB: "Variable — you engage once the group has reached a critical mass" },
            q9: { scenario: "If an unexpected opportunity emerges during a project, you would:", optA: "Prioritize the existing plan and evaluate the new lead later", optB: "Adjust the current workflow to explore the possibility immediately" },
            q10: { scenario: "In a new professional collaboration, confidence is established through:", optA: "Demonstrable reliability and the consistent delivery of outcomes", optB: "Sustained engagement and understanding personal motivations" },
            q11: { scenario: "You feel most secure in a partnership when:", optA: "The agreement is codified with detailed operational terms", optB: "You have established strong mutual understanding with the other party" },
            q12: { scenario: "At professional networking events, you prefer to:", optA: "Maximize interactions and exchange relevant information efficiently", optB: "Focus on fewer, more meaningful conversations to build rapport" }
        }
    },
    es: {
        quiz: {
            title: "Evaluación de Estilo Cultural",
            numQuestions: "{{count}} preguntas",
            subtitle: "Descubra su perfil de comunicación intercultural",
            yourProfile: "Su Perfil Cultural",
            profilePrefix: "Perfil:",
            retake: "Volver a realizar la evaluación",
            reveal: "Revelar Mi Perfil Cultural",
            q1: { scenario: "Al revisar el trabajo de un colega que requiere corrección, usted suele:", optA: "Abordar los puntos específicos de forma inmediata y clara", optB: "Hacer observaciones que le permitan identificar los ajustes por sí mismos" },
            q2: { scenario: "Al compartir actualizaciones críticas con un socio, prefiere:", optA: "Presentar los hechos directamente y enfocarse en los siguientes pasos", optB: "Construir un contexto más amplio y sugerir implicaciones gradualmente" },
            q3: { scenario: "En correspondencia profesional escrita, su estilo suele ser:", optA: "Conciso y centrado en el objetivo inmediato", optB: "Contextual, incorporando detalles y matices" },
            q4: { scenario: "Al liderar una iniciativa con tiempo limitado, tiende a:", optA: "Determinar la dirección principal usted mismo para mantener el impulso", optB: "Buscar la opinión del equipo antes de finalizar el camino a seguir" },
            q5: { scenario: "Si se encuentra en desacuerdo con la opinión mayoritaria del equipo, suele:", optA: "Sintetizar su perspectiva y defender una alternativa", optB: "Apoyar el consenso final del grupo para mantener la alineación" },
            q6: { scenario: "Su entorno colaborativo preferido implica:", optA: "Iteraciones rápidas donde las decisiones se toman por liderazgo activo", optB: "Debates exhaustivos que integran todas las perspectivas disponibles" },
            q7: { scenario: "Al organizar su actividad semanal, prefiere:", optA: "Mantener una secuencia constante con ventanas específicas para cada tarea", optB: "Establecer metas amplias y adaptar su enfoque según evolucionen las cosas" },
            q8: { scenario: "Al inicio de una reunión programada, su llegada es consistentemente:", optA: "Ligeramente temprana: llegar puntualmente demuestra fiabilidad", optB: "Variable: participa una vez que el grupo alcanza una masa crítica" },
            q9: { scenario: "Si surge una oportunidad inesperada durante un proyecto, usted:", optA: "Priorizar el plan existente y evaluar la nueva opción después", optB: "Ajustar el flujo actual para explorar la posibilidad de inmediato" },
            q10: { scenario: "En una nueva colaboración, la confianza se establece mediante:", optA: "Fiabilidad demostrable y entrega consistente de resultados", optB: "Participación continua y comprensión de las motivaciones personales" },
            q11: { scenario: "Se siente más seguro en una asociación cuando:", optA: "El acuerdo está codificado con términos operativos detallados", optB: "Ha establecido un fuerte entendimiento mutuo con la otra parte" },
            q12: { scenario: "En eventos de networking profesional, prefiere:", optA: "Maximizar interacciones e intercambiar información eficientemente", optB: "Centrarse en menos conversaciones, pero más significativas" }
        }
    },
    fr: {
        quiz: {
            title: "Évaluation du style culturel",
            numQuestions: "{{count}} questions",
            subtitle: "Découvrez votre profil de communication interculturelle",
            yourProfile: "Votre profil culturel",
            profilePrefix: "Profil :",
            retake: "Repasser l'évaluation",
            reveal: "Révéler mon profil culturel",
            q1: { scenario: "Lors de la révision du travail d'un collègue nécessitant des corrections, vous avez l'habitude de :", optA: "Aborder les points spécifiques immédiatement et clairement", optB: "Faire des observations qui lui permettent d'identifier lui-même les ajustements" },
            q2: { scenario: "Lors du partage de mises à jour critiques avec un partenaire, vous préférez :", optA: "Présenter les faits directement et vous concentrer sur les prochaines étapes", optB: "Construire un contexte plus large et suggérer les implications progressivement" },
            q3: { scenario: "Dans la correspondance professionnelle écrite, votre style est généralement :", optA: "Concis et concentré sur l'objectif immédiat", optB: "Contextuel, intégrant des détails et des nuances" },
            q4: { scenario: "Lorsque vous dirigez une initiative avec d'importantes contraintes de temps, vous avez tendance à :", optA: "Déterminer vous-même la direction principale pour maintenir l'élan", optB: "Rechercher une contribution collective avant de finaliser la voie à suivre" },
            q5: { scenario: "Si vous vous trouvez en désaccord avec l'avis majoritaire de l'équipe, vous avez l'habitude de :", optA: "Synthétiser votre point de vue et plaider pour une alternative", optB: "Soutenir le consensus final du groupe pour maintenir l'alignement" },
            q6: { scenario: "Votre environnement de collaboration préféré implique :", optA: "Des itérations rapides où les décisions sont prises par un leadership actif", optB: "Des discussions approfondies qui intègrent toutes les perspectives" },
            q7: { scenario: "Lors de l'organisation de votre activité hebdomadaire, vous préférez :", optA: "Maintenir une séquence constante avec des créneaux pour chaque tâche", optB: "Fixer des objectifs généraux et adapter votre concentration selon l'évolution" },
            q8: { scenario: "Au début d'une réunion programmée, votre arrivée est généralement :", optA: "Légèrement en avance — cela prouve votre fiabilité", optB: "Variable — vous vous engagez une fois que le groupe a atteint une masse critique" },
            q9: { scenario: "Si une opportunité inattendue se présente lors d'un projet, vous allez :", optA: "Prioriser le plan existant et évaluer la nouvelle opportunité plus tard", optB: "Ajuster le workflow actuel pour explorer la possibilité immédiatement" },
            q10: { scenario: "Dans une nouvelle collaboration professionnelle, la confiance s'établit par :", optA: "Une fiabilité démontrable et des résultats constants", optB: "Un engagement soutenu et la compréhension des motivations" },
            q11: { scenario: "Vous vous sentez le plus en sécurité dans un partenariat lorsque :", optA: "L'accord est codifié avec des conditions opérationnelles détaillées", optB: "Vous avez établi une forte compréhension mutuelle avec l'autre partie" },
            q12: { scenario: "Lors des événements de networking, vous préférez :", optA: "Maximiser les interactions et échanger des informations efficacement", optB: "Vous concentrer sur moins de conversations, mais plus significatives" }
        }
    },
    de: {
        quiz: {
            title: "Kulturelles Stil-Assessment",
            numQuestions: "{{count}} Fragen",
            subtitle: "Entdecken Sie Ihr interkulturelles Kommunikationsprofil",
            yourProfile: "Ihr kulturelles Profil",
            profilePrefix: "Profil:",
            retake: "Bewertung wiederholen",
            reveal: "Mein kulturelles Profil anzeigen",
            q1: { scenario: "Wenn Sie die Arbeit eines Kollegen überprüfen, die korrigiert werden muss, tun Sie normalerweise Folgendes:", optA: "Die spezifischen Punkte sofort und klar ansprechen", optB: "Beobachtungen mitteilen, damit diese die Anpassungen selbst vornehmen können" },
            q2: { scenario: "Wenn Sie kritische Projekt-Updates mit einem Partner teilen, bevorzugen Sie:", optA: "Die Fakten direkt präsentieren und sich auf die nächsten Schritte konzentrieren", optB: "Einen breiteren Kontext aufbauen und Auswirkungen schrittweise andeuten" },
            q3: { scenario: "In der schriftlichen Geschäftskorrespondenz ist Ihr Stil typischerweise:", optA: "Präzise und auf das unmittelbare Ziel fokussiert", optB: "Kontextbezogen, mit Details und Nuancen" },
            q4: { scenario: "Wenn Sie eine Initiative unter Zeitdruck leiten, neigen Sie dazu:", optA: "Die Hauptrichtung selbst zu bestimmen, um Dynamik zu erhalten", optB: "Erst kollektives Feedback einholen, bevor der Weg festgelegt wird" },
            q5: { scenario: "Wenn Sie der Mehrheitsmeinung eines Teams widersprechen, tun Sie normalerweise Folgendes:", optA: "Ihre Perspektive zusammenfassen und für eine Alternative eintreten", optB: "Den finalen Gruppenkonsens unterstützen, um die Ausrichtung zu wahren" },
            q6: { scenario: "Ihre bevorzugte Arbeitsumgebung beinhaltet:", optA: "Schnelle Iterationen, bei denen Entscheidungen durch aktive Führung getroffen werden", optB: "Umfassende Diskussionen, die alle verfügbaren Perspektiven integrieren" },
            q7: { scenario: "Bei der Organisation Ihrer wöchentlichen Aktivitäten bevorzugen Sie Folgendes:", optA: "Einen festen Ablauf mit spezifischen Zeitfenstern für jede Aufgabe", optB: "Festlegung breiter Ziele und Anpassung des Fokus je nach Situation" },
            q8: { scenario: "Zu Beginn eines geplanten Meetings ist Ihre Ankunft immer:", optA: "Leicht verfrüht – Pünktlichkeit zeigt Zuverlässigkeit", optB: "Variabel – Sie stoßen dazu, sobald die Gruppe vollzählig ist" },
            q9: { scenario: "Wenn sich während eines Projekts unerwartet eine Möglichkeit bietet, würden Sie:", optA: "Den bestehenden Plan priorisieren und die neue Chance später prüfen", optB: "Den aktuellen Arbeitsablauf anpassen, um die Möglichkeit sofort zu erkunden" },
            q10: { scenario: "Bei einer neuen Zusammenarbeit wird Vertrauen aufgebaut durch:", optA: "Nachweisbare Zuverlässigkeit und konstante Ergebnislieferungen", optB: "Nachhaltiges Engagement und das Verstehen persönlicher Motivationen" },
            q11: { scenario: "Sie fühlen sich in einer Partnerschaft am sichersten, wenn:", optA: "Die Vereinbarung in detaillierten operativen Bedingungen festgehalten ist", optB: "Sie ein starkes gegenseitiges Verständnis mit der anderen Partei aufgebaut haben" },
            q12: { scenario: "Auf Networking-Events bevorzugen Sie Folgendes:", optA: "Interaktionen maximieren und relevante Informationen effizient austauschen", optB: "Sich auf weniger, dafür bedeutsamere Gespräche konzentrieren" }
        }
    }
};

for (const lang of langs) {
    const file = path.join(localesDir, `${lang}.json`);
    const content = JSON.parse(fs.readFileSync(file, 'utf8'));

    content.quiz = quizData[lang].quiz;

    fs.writeFileSync(file, JSON.stringify(content, null, 4));
}

console.log('Successfully injected translated quiz strings!');
