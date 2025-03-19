export default {
    hello: 'Bonjour',
    navbar: {
        bannerTitle: "Révélation de Leitlearn"
    },
    sections: {
        greeting: {
            title: "Bonjour, je suis Kilian Peyron",
            bio1: 'Je suis Kilian Peyron, passionné de développement web depuis mes ' +
                '15 ans. Actuellement, j\'étudie l\'informatique à l\'IUT Lyon1. ' +
                'Je m\'investis dans l\'amélioration de mes compétences à travers mes études et ' +
                'projets personnels. Mon objectif est de devenir un développeur web qualifié ' +
                'capable de créer des sites web engageants et fonctionnels.',
            bio2: 'J\'ai de l\'expérience en développement web, particulièrement avec des technologies comme React, PHP, SCSS et Webpack. J\'ai également des connaissances en UI/UX et je m\'intéresse de plus en plus aux nouvelles technologies web comme NextJS et Vercel.',
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
        }
    }
} as const