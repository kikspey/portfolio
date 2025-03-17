import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {
    PostContainer,
    PostMetadata,
    PostDate,
    PostTitle,
    PostContent,
} from "@/components/Posts/Posts.styles";
import Link from "next/link";
import {Button} from "@/ui/Button";
import {Clock10, MoveLeft} from "lucide-react";

export default async function Page({
                                       params,
                                   }: {
    params: { slug: string; locale: string };
}) {
    const slug = params.slug;
    const locale = params.locale;

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

export async function generateStaticParams() {
    const locales = ['en', 'fr', 'de', 'es'];
    const slugs = [
        "aberdeen-internship",
        "leitlearn-announcement"
    ];

    return locales.flatMap(locale =>
        slugs.map(slug => ({
            locale,
            slug,
        }))
    );
}

export const dynamicParams = false;