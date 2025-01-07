import Project from "./Project";
import { ProjectsContainer } from "./Projects.styles";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project
        title="Leitlearn"
        description="Description 1"
        img="/hhn/portfolio/leitlearn-portfolio.avif"
        link="link1"
      />
      <Project
        title="HyperID"
        description="Description 1"
        img="/hhn/portfolio/hyperid-portfolio.avif"
        link="link1"
      />
    </ProjectsContainer>
  );
};

export default Projects;
