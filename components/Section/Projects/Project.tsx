import { cdn } from "@/app/config";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardChevronIcon,
  CardContent,
  CardDescription,
  CardImage,
  CardLink,
  CardTitle,
} from "../Section.styles";

interface ProjectProps {
  title: string;
  description: string;
  img: string;
  link: string;
}

const Project = (props: ProjectProps) => {
  return (
    <CardLink href={props.link} passHref>
      <Card>
        <CardImage>
          <Image
            src={cdn + props.img}
            alt={props.title}
            layout="fill"
            objectFit="contain"
          />
        </CardImage>
        <CardContent>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardContent>
        <CardChevronIcon>
          <ChevronRight />
        </CardChevronIcon>
      </Card>
    </CardLink>
  );
};

export default Project;
