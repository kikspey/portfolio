export default {
    hello: 'Hello',
    navbar: {
        bannerTitle: "Leitlearn Beta is available !",
    },
    sections: {
        greeting: {
            title: "Hi,",
            bio1: "I’m Kilian Peyron, passionate about web development since I was 15, I recently earned my Bachelor of Technology in Computer Science from IUT Lyon 1. This fall, I’ll join Enedis as a work-study student while pursuing my engineering degree at CPE Lyon.",
            bio2: "I design high-performance, visually appealing websites and applications with React, Symfony, and Tailwind. I’m exploring Next.js and Vercel, and I streamline my deployments using Docker and CI/CD.",
            bio3: "In parallel, I co-founded Vubuo, an independent game studio. We’re currently developing several projects set to launch throughout 2026, blending immersive worlds with innovative art direction.",
        },
        projects: "Projects",
        career: "Career",
        articles: "Articles",
        website: {
            title: "Website",
            website: 'This portfolio was created using NextJS, MDX, Styled Components, and shipped with ▲ Vercel.'
        }
    },
    career: {
        today: "Today",
        vubuo: {
            title: "Co-Founder",
            company: "Vubuo",
            location: "Lyon, France",
            description: "Vubuo creates new worlds through games, stories, and digital experiences—building original franchises and immersive universes that connect and inspire."
        },
        cnrs: {
            title: "Work-Study Developer",
            company: "CNRS",
            location: "Lyon, France",
            description: "I'm working on the Datadrone project at MSH-LSE, collaborating with researchers, focusing on the improvement and maintenance of a drone mapping system using Symfony and Vue.js."
        },
        rgu: {
            title: "Student Researcher",
            company: "Robert Gordon University",
            location: "Aberdeen, GB",
            description: "My internship project consisted of developing Heyhi, an AI chatbot in Python using FastAPI for the backend, React JS for the frontend, and DiCE for the explainable AI model."
        }
    },
    projects: {
        leitlearn: {
            description: "Leitlearn is an innovative learning platform that enhances effectiveness through daily repetition for better review."
        },
        datadrone: {
            description: "Datadrone is a research project dedicated to collecting, archiving, and exploiting multi-sensor data (LiDAR, multispectral, thermal) from drones."
        },
        heyhi: {
            description: "Heyhi is a chatbot that uses an explanatory model with DiCE to determine if a request will be accepted and provides the necessary information to increase the chances of acceptance."
        },
        leitlearnLegacy: {
            description: "Leitlearn (Legacy) is the first version of Leitlearn, a learning platform that was abandoned in favor of the current version."
        }
    }
} as const