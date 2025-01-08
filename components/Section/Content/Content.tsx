import { ReactNode } from "react";
import { ContentContainer, ContentPart } from "./Content.styles";

interface ContentProps {
  contents: ReactNode[];
}

const Content = (props: ContentProps) => {
  return (
    <ContentContainer>
      {props.contents.map((content, index) => (
        <ContentPart key={index}>{content}</ContentPart>
      ))}
    </ContentContainer>
  );
};

export default Content;
