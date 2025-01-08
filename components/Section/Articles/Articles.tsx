import Article from "./Article";
import { ArticlesContainer } from "./Articles.styles";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const articlesDirectory = path.join(process.cwd(), "content/blog");

const getAllPosts = () => {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.mdx?$/, ""),
      data,
      content,
    };
  });

  allPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return allPosts;
};

const Articles = () => {
  const posts = getAllPosts();

  return (
    <ArticlesContainer>
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <Article
            title={post.data.title}
            date={new Date(post.data.date).toLocaleDateString()}
          />
        </Link>
      ))}
    </ArticlesContainer>
  );
};

export default Articles;
