import {CardsContainer} from "../Section.styles";
import Project from "./Project";
import {getScopedI18n} from "@/locales/server";

const Projects = async () => {
    const t = await getScopedI18n("projects");

    const users = {
        kilian: {name: "Kilian Peyron", image: "/users/1726908516601.avif"},
        leo: {name: "Léo Trux", image: "/users/1701692097162.avif"},
        aiman: {name: "Aiman Manchout", image: "/users/1722035304181.avif"}
    };

    const projects = [
        {
            title: "Leitlearn",
            description: t("leitlearn.description"),
            img: "/projects/leitlearn.avif",
            link: "https://leitlearn.com",
            users: [users.kilian, users.leo, users.aiman]
        },
        {
            title: "Datadrone",
            description: t("datadrone.description"),
            img: "/projects/datadrone.avif",
            link: "https://www.msh-lse.fr/",
            users: [users.kilian]
        },
        {
            title: "Heyhi",
            description: t("heyhi.description"),
            img: "/projects/heyhi.avif",
            link: "https://github.com/Shonned/Heyhi",
            users: [users.kilian]
        },
        {
            title: "Leitlearn (Legacy)",
            description: t("leitlearnLegacy.description"),
            img: "/projects/leitlearn-legacy.avif",
            link: "",
            users: [users.kilian, users.leo, users.aiman]
        }
    ];

    return (
        <CardsContainer>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    link={project.link}
                    users={project.users}
                />
            ))}
        </CardsContainer>
    );
};

export default Projects;