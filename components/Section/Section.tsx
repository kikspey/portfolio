import { StyledSection, SectionTitle } from "./Section.styles";

interface SectionProps {
  title: string;
  component?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <StyledSection>
      <SectionTitle>{props.title}</SectionTitle>
      {props.component}
    </StyledSection>
  );
};

export default Section;
