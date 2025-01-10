"use client";

import { useEffect, useState } from "react";
import Article from "./Article";
import { ArticleLink, ArticlesContainer } from "./Articles.styles";

type Post = {
  metadata: {
    title: string;
    date: string;
  };
  slug: string;
};

const Articles = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <ArticlesContainer>
      {posts.map((post: Post) => (
        <ArticleLink href={`/blog/${post.slug}`} key={post.slug}>
          <Article
            title={post.metadata.title}
            date={new Date(post.metadata.date).toLocaleDateString()}
          />
        </ArticleLink>
      ))}
    </ArticlesContainer>
  );
};

export default Articles;
