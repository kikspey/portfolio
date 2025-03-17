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
                img="/xra/portfolio/leitlearn-portfolio.avif"
                link="https://leitlearn.com"
            />
        </CardsContainer>
    );
};

export default Projects;