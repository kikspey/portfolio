export default {
    hello: 'Hola',
    navbar: {
        bannerTitle: "Leitlearn Beta está disponible !",
    },
    sections: {
        greeting: {
            title: "Hola,",
            bio1: 'Soy Kilian Peyron, apasionado por el desarrollo web desde los 15 años. ' +
                'Actualmente estoy en mi último año de BUT en Informática en el IUT Lyon 1, ' +
                'y me estoy preparando para ingresar a un máster o a una escuela de ingeniería en septiembre.',
            bio2: 'Trabajo activamente en mejorar mis habilidades a través de mis estudios ' +
                'y proyectos personales. Mi objetivo es convertirme en un desarrollador web cualificado, ' +
                'capaz de crear sitios y aplicaciones eficientes, atractivos y bien optimizados.',
            bio3: 'Tengo experiencia en desarrollo web, especialmente con React, Symfony y Tailwind, ' +
                'así como en UI/UX. Me interesan las nuevas tecnologías web como Next.js y Vercel. ' +
                'Además, domino herramientas DevOps como Docker y CI/CD, ' +
                'lo que me permite optimizar la implementación y la gestión de proyectos.',
        },
        projects: "Proyectos",
        career: "Trayectoria",
        articles: "Artículos",
        website: {
            title: "Sitio Web",
            website: 'Este portfolio fue creado usando NextJS, MDX, Styled Components, y desplegado con ▲ Vercel.'
        }
    },
    career: {
        today: "Hoy",
        cnrs: {
            title: "Desarrollador en Formación Dual",
            company: "CNRS",
            location: "Lyon, Francia",
            description: "Estoy trabajando en el proyecto Datadrone en MSH-LSE, colaborando con investigadores, centrándome en la mejora y mantenimiento de un sistema de mapeo con drones utilizando Symfony y Vue.js."
        },
        rgu: {
            title: "Investigador Estudiante",
            company: "Universidad Robert Gordon",
            location: "Aberdeen, GB",
            description: "Mi proyecto de prácticas consistió en desarrollar Heyhi, un chatbot IA en Python utilizando FastAPI para el backend, React JS para el frontend y DiCE para el modelo de IA explicativa."
        }
    },
    projects: {
        leitlearn: {
            description: "Leitlearn es una plataforma de aprendizaje innovadora que mejora la eficacia mediante la repetición diaria para un mejor repaso."
        },
        datadrone: {
            description: "Datadrone es un proyecto de investigación dedicado a la recopilación, archivo y explotación de datos multi-sensor (LiDAR, multiespectral, térmico) de drones."
        },
        heyhi: {
            description: "Heyhi es un chatbot que utiliza un modelo explicativo con DiCE para determinar si una solicitud será aceptada y proporciona la información necesaria para aumentar las posibilidades de aceptación."
        },
        leitlearnLegacy: {
            description: "Leitlearn (Legacy) es la primera versión de Leitlearn, una plataforma de aprendizaje que fue abandonada en favor de la versión actual."
        }
    }
} as const