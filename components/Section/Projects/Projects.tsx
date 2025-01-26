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
    </CardsContainer>
  );
};

export default Projects;
