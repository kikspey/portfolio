import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {
    PostContainer,
    PostMetadata,
    PostDate,
    PostTitle,
    PostContent, PostAuthors, PostAuthor,
} from "@/components/Posts/Posts.styles";
import Link from "next/link";
import {Button} from "@/ui/Button";
import {Clock10, MoveLeft} from "lucide-react";
import {cdn} from "@/app/[locale]/config";
import Image from "next/image";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ slug: string; locale: string }>;
}) {
    const resolvedParams = await params;
    const {slug, locale} = resolvedParams;

    const {default: Post, metadata} = await import(
        `@/content/blog/${slug}.mdx`
        );

    return (
        <>
            <Navbar/>
            <PostContainer>
                <PostMetadata>
                    <Link href={`/${locale}`} passHref>
                        <Button
                            icon={<MoveLeft width={20} height={20}/>}
                            variant="secondary"
                        >
                            Back
                        </Button>
                    </Link>
                    <PostAuthors>
                        {metadata.author.map((author: {
                            name: string;
                            image: string;
                            link: string;
                        }) => (
                            <Link href={author.link} key={author.link} target="_blank" passHref>
                                <PostAuthor>
                                    <Image
                                        src={cdn + author.image}
                                        alt={author.name}
                                        width={35}
                                        height={35}
                                    />
                                </PostAuthor>
                            </Link>
                        ))}
                    </PostAuthors>
                    <PostTitle>{metadata.title}</PostTitle>
                    <PostDate>
                        <Clock10 width={16}/>
                        {metadata.date}
                    </PostDate>
                </PostMetadata>
                <PostContent>
                    <Post/>
                </PostContent>
            </PostContainer>
            <Footer/>
        </>
    );
}

export const dynamicParams = false;