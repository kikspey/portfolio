import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Section/Content/Content";
import Section from "@/components/Section/Section";
import Projects from "@/components/Section/Projects/Projects";
import Career from "@/components/Section/Career/Career";
import Footer from "@/components/Footer/Footer";
import Articles from "@/components/Section/Articles/Articles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section
        title="Hi, I'm Kilian Peyron"
        component={
          <Content
            contents={[
              <>
                I&apos;m Kilian Peyron, a web development enthusiast since I was
                15. Currently, I&apos;m studying Computer Science at IUT Lyon1.
                I’m dedicated to improving my skills through my studies and
                personal projects. My goal is to become a skilled web developer
                who can create engaging and functional websites.
              </>,
              <>
                I have experience in web development, especially with
                technologies like React, PHP, SCSS, and Webpack. I also have
                knowledge in UI/UX and am becoming more interested in new web
                technologies, like NextJS and Vercel.
              </>,
            ]}
          />
        }
      />
      <Section title="Projects" component={<Projects />} />
      <Section title="Career" component={<Career />} />
      <Section title="Articles" component={<Articles />} />
      <Section
        title="Website"
        component={
          <Content
            contents={[
              <>
                This portfolio was created using{" "}
                <Link href="https://nextjs.org">NextJS</Link>,{" "}
                <Link href="https://vercel.com">Vercel</Link>,{" "}
                <Link href="https://mdxjs.com">MDX</Link>, and{" "}
                <Link href="https://styled-components.com">
                  Styled Components
                </Link>
                .
              </>,
            ]}
          />
        }
      />
      <Footer />
    </>
  );
}
