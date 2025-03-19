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