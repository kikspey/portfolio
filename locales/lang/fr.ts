export default {
    hello: 'Bonjour',
    navbar: {
        bannerTitle: "Révélation de Leitlearn"
    },
    sections: {
        greeting: {
            title: "Bonjour, je suis Kilian Peyron",
            bio1: 'Je suis Kilian Peyron, passionné de développement web depuis mes 15 ans. ' +
                'Actuellement en dernière année de BUT Informatique à l\'IUT Lyon 1, ' +
                'je me prépare à intégrer un master ou une école d’ingénieur en septembre.',
            bio2: 'Je m’investis activement dans l’amélioration de mes compétences à travers ' +
                'mes études et mes projets personnels. Mon objectif est de devenir un développeur web qualifié, ' +
                'capable de concevoir des sites et applications performants, engageants et bien optimisés.',
            bio3: 'J’ai de l’expérience en développement web, notamment avec React, Symfony et Tailwind, ' +
                'ainsi qu’en UI/UX. Je m’intéresse aux nouvelles technologies web comme Next.js et Vercel. ' +
                'Par ailleurs, je maîtrise des outils DevOps tels que Docker et CI/CD, ' +
                'ce qui me permet d’optimiser le déploiement et la gestion des projets.',
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
        cnrs: {
            title: "Développeur en Alternance",
            company: "CNRS",
            location: "Lyon, France",
            description: "Je travaille sur l'amélioration et la maintenance d'un projet de cartographie par drone utilisant Symfony et Vue.js à la MSH-LSE."
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
        heyhi: {
            description: "Heyhi est un chatbot qui utilise un modèle explicatif avec DiCE pour déterminer si une requête sera acceptée et fournit les informations nécessaires pour en augmenter les chances d'acceptation."
        },
        leitlearnLegacy: {
            description: "Leitlearn (Legacy) est la première version de Leitlearn, une plateforme d'apprentissage qui a été abandonnée au profit de la version actuelle."
        }
    }
} as const