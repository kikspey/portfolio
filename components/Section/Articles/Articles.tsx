import Article from "./Article";
import { ArticlesContainer } from "./Articles.styles";

const Articles = () => {
  return (
    <ArticlesContainer>
        <Article title="Article 1" date="2025"/>
        <Article title="Article 2" date="2025"/>
    </ArticlesContainer>
  );
};

export default Articles;
