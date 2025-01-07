import { Clock10 } from "lucide-react";
import {
  ArticleContainer,
  ArticleDate,
  ArticleDateIcon,
  ArticleTitle,
} from "./Articles.styles";

interface ArticleProps {
  title: string;
  date: string;
}

const Article = (props: ArticleProps) => {
  return (
    <ArticleContainer>
      <ArticleTitle>{props.title}</ArticleTitle>
      <ArticleDate>
        {props.date}
        <ArticleDateIcon>
          <Clock10 width={20} />
        </ArticleDateIcon>
      </ArticleDate>
    </ArticleContainer>
  );
};

export default Article;
