export default {
    hello: 'Hallo',
    navbar: {
        bannerTitle: "Leitlearn Ankündigung"
    },
    sections: {
        greeting: {
            title: "Hallo, ich bin Kilian Peyron",
            bio1: 'Ich bin Kilian Peyron, ein Webentwicklungs-Enthusiast seit ich ' +
                '15 Jahre alt bin. Derzeit studiere ich Informatik an der IUT Lyon1. ' +
                'Ich widme mich der Verbesserung meiner Fähigkeiten durch mein Studium und ' +
                'persönliche Projekte. Mein Ziel ist es, ein qualifizierter Webentwickler zu werden, ' +
                'der ansprechende und funktionale Websites erstellen kann.',
            bio2: 'Ich habe Erfahrung in der Webentwicklung, insbesondere mit Technologien wie React, PHP, SCSS und Webpack. Ich habe auch Kenntnisse in UI/UX und interessiere mich zunehmend für neue Webtechnologien wie NextJS und Vercel.',
        },
        projects: "Projekte",
        career: "Karriere",
        articles: "Artikel",
        website: {
            title: "Webseite",
            website: 'Dieses Portfolio wurde mit NextJS, MDX, Styled Components erstellt und mit ▲ Vercel bereitgestellt.'
        }
    },
    career: {
        cnrs: {
            title: "Dualer Student Developer",
            company: "CNRS",
            location: "Lyon, Frankreich",
            description: "Ich arbeite an der Verbesserung und Wartung eines Drohnen-Kartierungsprojekts mit Symfony und Vue.js bei MSH-LSE."
        },
        rgu: {
            title: "Studentischer Forscher",
            company: "Robert Gordon Universität",
            location: "Aberdeen, GB",
            description: "Mein Praktikumsprojekt besteht aus der Entwicklung eines KI-Chatbots in Python mit FastAPI für das Backend, React JS für das Frontend und DiCE für das erklärbare KI-Modell."
        }
    },
    projects: {
        leitlearn: {
            description: "Leitlearn ist eine innovative Lernplattform, die durch tägliche Wiederholung die Effektivität für bessere Prüfungsvorbereitung steigert."
        }
    }
} as const