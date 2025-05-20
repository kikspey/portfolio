import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {
  PostContainer,
  PostMetadata,
  PostDate,
  PostTitle,
  PostContent,
  PostAuthors,
  PostAuthor,
} from "@/components/Posts/Posts.styles";
import Link from "next/link";
import { Button } from "@/ui/Button";
import { Clock10, MoveLeft } from "lucide-react";
import { cdn } from "@/app/[locale]/config";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug, locale } = await params;
  let metadata;
  try {
    ({ metadata } = await import(`@/content/blog/${slug}.mdx`));
  } catch {
    return {};
  }

  const title = metadata?.title || "Article";
  const description = metadata?.description || "";
  const ogImage =
    metadata?.image || "https://assets.6ix.fr/portfolio/banner.jpg";
  const url = `https://kilianpeyron.com/${locale}/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;

  let Post, metadata;
  try {
    ({ default: Post, metadata } = await import(`@/content/blog/${slug}.mdx`));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return;
  }

  return (
    <>
      <Navbar />
      <PostContainer>
        <PostMetadata>
          <Link href={`/${locale}`} passHref>
            <Button
              icon={<MoveLeft width={20} height={20} />}
              variant="secondary"
            >
              Back
            </Button>
          </Link>
          <PostTitle>{metadata.title}</PostTitle>
          <PostDate>
            <Clock10 width={16} />
            {metadata.date}
          </PostDate>
          <PostAuthors>
            {metadata.author.map(
              (author: { name: string; image: string; link: string }) => (
                <Link
                  href={author.link}
                  key={author.link}
                  target="_blank"
                  passHref
                >
                  <PostAuthor>
                    <Image
                      src={cdn + author.image}
                      alt={author.name}
                      width={35}
                      height={35}
                    />
                  </PostAuthor>
                </Link>
              )
            )}
          </PostAuthors>
        </PostMetadata>
        <PostContent>
          <Post />
        </PostContent>
      </PostContainer>
      <Footer />
    </>
  );
}

export const dynamicParams = false;
