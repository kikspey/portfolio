import Project from "./Project";
import { StyledProjects } from "./Projects.styles";

const Projects = () => {
  return (
    <StyledProjects>
        <Project title="Leitlearn" description="Description 1" img="/hhn/portfolio/leitlearn-portfolio.avif" link="link1" />
        <Project title="HyperID" description="Description 1" img="/hhn/portfolio/hyperid-portfolio.avif" link="link1" />
    </StyledProjects>
  );
};

export default Projects;
