import {CardsContainer} from "../Section.styles";
import Project from "./Project";
import {getScopedI18n} from "@/locales/server";

const Projects = async () => {
    const t = await getScopedI18n("projects");

    return (
        <CardsContainer>
            <Project
                title="Leitlearn"
                description={t("leitlearn.description")}
                img="/projects/leitlearn.avif"
                link="https://leitlearn.com"
                users={[
                    {name: "Kilian Peyron", image: "/users/1726908516601.avif", linkedin: "https://linkedin.com/in/user1"},
                    {name: "Aiman Manchout", image: "/users/1722035304181.avif", linkedin: "https://linkedin.com/in/user2"}
                ]}
            />
            <Project
                title="Heyhi"
                description={t("heyhi.description")}
                img="/projects/heyhi.avif"
                link="https://github.com/Shonned/Heyhi"
            />
        </CardsContainer>
    );
};

export default Projects;