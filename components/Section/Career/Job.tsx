import {
  JobContainer,
  JobCompany,
  JobCompanyLogo,
  JobContent,
  JobDate,
  JobDescription,
  JobLocation,
  JobTitle,
} from "./Career.styles";
import Image from "next/image";

interface JobProps {
  title: string;
  beginDate: string;
  endDate: string;
  company: string;
  companyLogo: string;
  location: string;
  description: string;
}

const Job = (props: JobProps) => {
  return (
    <JobContainer>
      <JobCompanyLogo>
        <Image
          src={props.companyLogo}
          alt={props.company}
          layout="fill"
          objectFit="contain"
        />
      </JobCompanyLogo>
      <JobContent>
        <JobTitle>{props.title}</JobTitle>
        <JobCompany>{props.company}</JobCompany>
        <JobDate>
          {props.beginDate} - {props.endDate}
        </JobDate>
        <JobLocation>{props.location}</JobLocation>
        <JobDescription>{props.description}</JobDescription>
      </JobContent>
    </JobContainer>
  );
};

export default Job;
