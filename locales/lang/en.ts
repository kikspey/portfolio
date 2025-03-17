export default {
    hello: 'Hello',
    navbar: {
        bannerTitle: "Leitlearn announcement"
    },
    sections: {
        greeting: {
            title: "Hi, I'm Kilian Peyron",
            bio1: 'I\'m Kilian Peyron, a web development enthusiast since I was ' +
                '15. Currently, I\'m studying Computer Science at IUT Lyon1. ' +
                'I\'m dedicated to improving my skills through my studies and ' +
                'personal projects. My goal is to become a skilled web developer ' +
                'who can create engaging and functional websites.',
            bio2: 'I have experience in web development, especially with technologies like React, PHP, SCSS, and Webpack. I also have knowledge in UI/UX and am becoming more interested in new web technologies, like NextJS and Vercel.',
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
        cnrs: {
            title: "Work-Study Developer",
            company: "CNRS",
            location: "Lyon, France",
            description: "I'm working on the improvement and maintenance of a drone mapping project using Symfony and Vue.js at MSH-LSE."
        },
        rgu: {
            title: "Student Researcher",
            company: "Robert Gordon University",
            location: "Aberdeen, GB",
            description: "My internship project consists of developing an AI chatbot in Python using FastAPI for the backend, integrating React JS for the front-end, and utilizing DiCE for the explanatory AI model."
        }
    },
    projects: {
        leitlearn: {
            description: "Leitlearn is an innovative learning platform that enhances effectiveness through daily repetition for better review."
        }
    }
} as const