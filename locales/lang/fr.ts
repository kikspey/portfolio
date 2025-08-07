export default {
    hello: 'Bonjour',
    navbar: {
        bannerTitle: "Leitlearn Beta est disponible !",
    },
    sections: {
        greeting: {
            title: "Bonjour,",
            bio1: "Je suis Kilian Peyron, passionné par le développement web depuis mes 15 ans, j’ai récemment obtenu mon BUT Informatique à l’IUT Lyon 1. À la rentrée, j’intègre Enedis en alternance tout en préparant mon diplôme d’ingénieur à CPE Lyon.",
            bio2: "Je conçois des sites et applications web performants et esthétiques avec React, Symfony et Tailwind. J’expérimente Next.js et Vercel, et j’optimise mes déploiements grâce à Docker et CI/CD.",
            bio3: "En parallèle, je co-fonde Vubuo, un studio indépendant de jeux vidéo. Nous développons plusieurs projets qui sortiront courant 2026, mêlant univers immersifs et direction artistique innovante.",
        },
        projects: "Projets",
        career: "Parcours",
        articles: "Articles",
        website: {
            title: "Site Web",
            website: 'Ce portfolio a été créé avec NextJS, MDX, Styled Components, et déployé avec ▲ Vercel.'
        }
    },
    career: {
        today: "Aujourd'hui",
        vubuo: {
            title: "Co-Fondateur",
            company: "Vubuo",
            location: "Lyon, France",
            description: "Vubuo crée de nouveaux mondes à travers des jeux, des histoires et des expériences numériques—construisant des franchises originales et des univers immersifs qui connectent et inspirent."
        },
        cnrs: {
            title: "Développeur en Alternance",
            company: "CNRS",
            location: "Lyon, France",
            description: "Je travaille sur le projet Datadrone à la MSH-LSE, en collaboration avec des chercheurs, en me concentrant sur l’amélioration et la maintenance d’un système de cartographie par drone utilisant Symfony et Vue.js."
        },
        rgu: {
            title: "Étudiant Chercheur",
            company: "Université Robert Gordon",
            location: "Aberdeen, GB",
            description: "Mon projet de stage a consisté à développer Heyhi, un chatbot IA en Python utilisant FastAPI pour le backend, React JS pour le frontend, et DiCE pour le modèle d'IA explicative."
        }
    },
    projects: {
        leitlearn: {
            description: "Leitlearn est une plateforme d'apprentissage innovante qui améliore l'efficacité grâce à la répétition quotidienne pour une meilleure révision."
        },
        datadrone: {
            description: "Datadrone est un projet de recherche dédié à la collecte, l’archivage et l’exploitation de données multi-capteurs (LiDAR, multispectral, thermique) issues de drones."
        },
        heyhi: {
            description: "Heyhi est un chatbot qui utilise un modèle explicatif avec DiCE pour déterminer si une requête sera acceptée et fournit les informations nécessaires pour en augmenter les chances d'acceptation."
        },
        leitlearnLegacy: {
            description: "Leitlearn (Legacy) est la première version de Leitlearn, une plateforme d'apprentissage qui a été abandonnée au profit de la version actuelle."
        }
    }
} as const