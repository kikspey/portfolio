import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Section/Content/Content";
import Section from "@/components/Section/Section";
import Projects from "@/components/Section/Projects/Projects";
import Career from "@/components/Section/Career/Career";
import Footer from "@/components/Footer/Footer";
import Articles from "@/components/Section/Articles/Articles";
import Link from "next/link";
import {getScopedI18n} from "@/locales/server";

export default async function Home() {
    const sectionT = await getScopedI18n("sections");

    return (
        <>
            <Navbar/>
            <Section
                title={sectionT('greeting.title')}
                component={
                    <Content
                        contents={[
                            <>
                                {sectionT('greeting.bio1')}
                            </>,
                            <>
                                {sectionT('greeting.bio2')}
                            </>,
                        ]}
                    />
                }
            />
            <Section title={sectionT('projects')} component={<Projects/>}/>
            <Section title={sectionT('career')} component={<Career/>}/>
            <Section title={sectionT('articles')} component={<Articles/>}/>
            <Section
                title={sectionT('website.title')}
                component={
                    <Content
                        contents={[
                            <>
                                {sectionT('website.website').split(/(NextJS|MDX|Styled Components|▲ Vercel)/).map((part, i) => {
                                    if (part === 'NextJS') return <Link key={i} href="https://nextjs.org">{part}</Link>;
                                    if (part === 'MDX') return <Link key={i} href="https://mdxjs.com">{part}</Link>;
                                    if (part === 'Styled Components') return <Link key={i}
                                                                                   href="https://styled-components.com">{part}</Link>;
                                    if (part === '▲ Vercel') return <Link key={i}
                                                                          href="https://vercel.com">{part}</Link>;
                                    return part;
                                })}
                            </>,
                        ]}
                    />
                }
            />
            <Footer/>
        </>
    );
}