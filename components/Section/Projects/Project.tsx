import { cdn } from "@/app/config";
import { StyledProject, StyledProjectContent, StyledProjectDescription, StyledProjectImage, StyledProjectLink, StyledProjectTitle } from "./Projects.styles";
import { ChevronRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const Project = (props: ProjectProps) => {
  return (
    <StyledProject>
      <StyledProjectImage src={cdn + props.img} />
      <StyledProjectContent>
        <StyledProjectTitle>{props.title}</StyledProjectTitle>
        <StyledProjectDescription>{props.description}</StyledProjectDescription>
      </StyledProjectContent>
      <StyledProjectLink href={props.link}><ChevronRight /></StyledProjectLink>
    </StyledProject>
  );
};

export default Project;
