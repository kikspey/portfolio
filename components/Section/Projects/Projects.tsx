import { CardsContainer } from "../Section.styles";
import Project from "./Project";

const Projects = () => {
  return (
    <CardsContainer>
      <Project
        title="Leitlearn"
        description="Leitlearn is an innovative learning platform that enhances effectiveness through daily repetition for better review."
        img="/xra/portfolio/leitlearn-portfolio.avif"
        link="https://leitlearn.com"
      />
      <Project
        title="Vibi.tv"
        description=""
        img="/xra/portfolio/vibi-portfolio.avif"
        link="https://vibi.tv"
      />
    </CardsContainer>
  );
};

export default Projects;
