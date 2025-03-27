export default {
    hello: 'Hello',
    navbar: {
        bannerTitle: "Leitlearn announcement"
    },
    sections: {
        greeting: {
            title: "Hi,",
            bio1: 'I am Kilian Peyron, passionate about web development since I was 15 years old. ' +
                'Currently in my final year of a BUT in Computer Science at IUT Lyon 1, ' +
                'I am preparing to enter a master’s program or an engineering school in September.',
            bio2: 'I am actively working on improving my skills through my studies ' +
                'and personal projects. My goal is to become a skilled web developer, ' +
                'capable of designing high-performing, attractive, and well-optimized websites and applications.',
            bio3: 'I have experience in web development, particularly with React, Symfony, and Tailwind, ' +
                'as well as in UI/UX. I am interested in new web technologies such as Next.js and Vercel. ' +
                'Additionally, I have expertise in DevOps tools like Docker and CI/CD, ' +
                'allowing me to optimize deployment and project management.',
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