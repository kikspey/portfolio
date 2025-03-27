export default {
    hello: 'Hallo',
    navbar: {
        bannerTitle: "Leitlearn Ankündigung"
    },
    sections: {
        greeting: {
            title: "Hallo,",
            bio1: 'Ich bin Kilian Peyron und begeistere mich seit meinem 15. Lebensjahr für Webentwicklung. ' +
                'Derzeit befinde ich mich im letzten Jahr meines BUT-Studiums in Informatik an der IUT Lyon 1 ' +
                'und bereite mich darauf vor, im September einen Masterstudiengang oder eine Ingenieurschule zu beginnen.',
            bio2: 'Ich arbeite aktiv daran, meine Fähigkeiten durch mein Studium ' +
                'und persönliche Projekte zu verbessern. Mein Ziel ist es, ein qualifizierter Webentwickler zu werden, ' +
                'der leistungsstarke, ansprechende und gut optimierte Websites und Anwendungen entwerfen kann.',
            bio3: 'Ich habe Erfahrung in der Webentwicklung, insbesondere mit React, Symfony und Tailwind, ' +
                'sowie in UI/UX. Ich interessiere mich für neue Webtechnologien wie Next.js und Vercel. ' +
                'Außerdem beherrsche ich DevOps-Tools wie Docker und CI/CD, ' +
                'die es mir ermöglichen, die Bereitstellung und Verwaltung von Projekten zu optimieren.',
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
        today: "Heute",
        cnrs: {
            title: "Dualer Student Developer",
            company: "CNRS",
            location: "Lyon, Frankreich",
            description: "Ich arbeite am Datadrone-Projekt bei MSH-LSE, in Zusammenarbeit mit Forschern, und konzentriere mich auf die Verbesserung und Wartung eines Drohnenkartierungssystems mit Symfony und Vue.js."
        },
        rgu: {
            title: "Studentischer Forscher",
            company: "Robert Gordon Universität",
            location: "Aberdeen, GB",
            description: "Mein Praktikumsprojekt bestand darin, Heyhi zu entwickeln, einen KI-Chatbot in Python, der FastAPI für das Backend, React JS für das Frontend und DiCE für das erklärbare KI-Modell verwendet."
        }
    },
    projects: {
        leitlearn: {
            description: "Leitlearn ist eine innovative Lernplattform, die durch tägliche Wiederholung die Effektivität für bessere Prüfungsvorbereitung steigert."
        },
        datadrone: {
            description: "Datadrone ist ein Forschungsprojekt, das sich der Erfassung, Archivierung und Nutzung von Multi-Sensor-Daten (LiDAR, multispektral, thermisch) aus Drohnen widmet."
        },
        heyhi: {
            description: "Heyhi ist ein Chatbot, der ein erklärbares Modell mit DiCE verwendet, um zu bestimmen, ob eine Anfrage akzeptiert wird, und die notwendigen Informationen bereitstellt, um die Chancen auf Akzeptanz zu erhöhen."
        },
        leitlearnLegacy: {
            description: "Leitlearn (Legacy) ist die erste Version von Leitlearn, einer Lernplattform, die zugunsten der aktuellen Version aufgegeben wurde."
        }
    }
} as const