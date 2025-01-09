import { cdn } from "@/app/config";
import {
  ProjectChevronIcon,
  ProjectContainer,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
} from "./Projects.styles";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const Project = (props: ProjectProps) => {
  return (
    <ProjectLink href={props.link} passHref>
      <ProjectContainer>
        <ProjectImage>
          <Image
            src={cdn + props.img}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        </ProjectImage>
        <ProjectContent>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectDescription>{props.description}</ProjectDescription>
        </ProjectContent>
        <ProjectChevronIcon>
          <ChevronRight />
        </ProjectChevronIcon>
      </ProjectContainer>
    </ProjectLink>
  );
};

export default Project;
