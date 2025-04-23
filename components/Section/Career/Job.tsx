import { ChevronRight } from "lucide-react";
import { JobCompany, JobContainer, JobDate, JobLocation } from "./Job.styles";
import Image from "next/image";
import {
  CardChevronIcon,
  CardContent,
  CardDescription,
  CardImage,
  CardLink,
  CardTitle,
} from "../Section.styles";

interface JobProps {
  title: string;
  beginDate: string;
  endDate: string;
  company: string;
  companyLogo: string;
  location: string;
  description: string;
  link: string;
}

const Job = (props: JobProps) => {
  return (
    <CardLink href={props.link} passHref>
      <JobContainer>
        <CardImage>
          <Image
            src={props.companyLogo}
            alt={props.company}
            layout="fill"
            objectFit="contain"
          />
        </CardImage>
        <CardContent>
          <CardTitle>{props.title}</CardTitle>
          <JobCompany>{props.company}</JobCompany>
          <JobDate>
            {props.beginDate} - {props.endDate}
          </JobDate>
          <JobLocation>{props.location}</JobLocation>
          <CardDescription>{props.description}</CardDescription>
        </CardContent>
        <CardChevronIcon>
          <ChevronRight />
        </CardChevronIcon>
      </JobContainer>
    </CardLink>
  );
};

export default Job;
