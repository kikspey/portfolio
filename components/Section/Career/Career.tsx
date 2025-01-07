import { cdn } from "@/app/config";
import { CareerContainer } from "./Career.styles";
import Job from "./Job";

const Career = () => {
  return (
    <CareerContainer>
      <Job
        title="Work-Study Developer"
        beginDate="Sep 2024"
        endDate="Present"
        company="CNRS"
        companyLogo={cdn + "/hhn/portfolio/career/cnrs.avif"}
        location="Lyon, France"
        description="I'm working on improving an MSH-LSE research project."
      />
      <Job
        title="Student Researcher"
        beginDate="Apr 2024"
        endDate="Jun 2024"
        company="Robert Gordon University"
        companyLogo={cdn + "/hhn/portfolio/career/rgu.avif"}
        location="Aberdeen, GB"
        description="My internship project consists of developing an AI chatbot in Python using FastAPI for the backend, integrating React JS for the front-end, and utilizing DiCE for the explanatory AI model."
      />
    </CareerContainer>
  );
};

export default Career;
