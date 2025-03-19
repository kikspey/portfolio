export default {
    hello: 'Hola',
    navbar: {
        bannerTitle: "Anuncio de Leitlearn"
    },
    sections: {
        greeting: {
            title: "Hola, soy Kilian Peyron",
            bio1: 'Soy Kilian Peyron, un entusiasta del desarrollo web desde los ' +
                '15 años. Actualmente, estudio Informática en el IUT Lyon1. ' +
                'Me dedico a mejorar mis habilidades a través de mis estudios y ' +
                'proyectos personales. Mi objetivo es convertirme en un desarrollador web competente ' +
                'capaz de crear sitios web atractivos y funcionales.',
            bio2: 'Tengo experiencia en desarrollo web, especialmente con tecnologías como React, PHP, SCSS y Webpack. También tengo conocimientos en UI/UX y estoy cada vez más interesado en nuevas tecnologías web, como NextJS y Vercel.',
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
        cnrs: {
            title: "Desarrollador en Formación Dual",
            company: "CNRS",
            location: "Lyon, Francia",
            description: "Estoy trabajando en la mejora y mantenimiento de un proyecto de mapeo con drones utilizando Symfony y Vue.js en MSH-LSE."
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
        heyhi: {
            description: "Heyhi es un chatbot que utiliza un modelo explicativo con DiCE para determinar si una solicitud será aceptada y proporciona la información necesaria para aumentar las posibilidades de aceptación."
        }
    }
} as const