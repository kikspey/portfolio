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
                I&apos;m a third-year student pursuing a Bachelor&apos;s degree
                in Information Technology (BUT Informatique) in Lyon, France,
                and I&apos;m passionate about new technologies.
              </>,
            ]}
          />
        }
      />
      <Section
        title="About"
        component={
          <Content
            contents={[
              <>
                Passionate about new technologies, I am dedicated to improving
                my skills and exploring innovative solutions. My goal is to
                create impactful digital experiences by combining technical
                expertise and creativity.
              </>,
              <>
                My skills include web development with technologies like React,
                PHP, SCSS, and Webpack. Additionally, I have experience in
                programming languages such as C++, Java, and Python, gained
                through academic projects and personal initiatives. I&apos;m
                constantly expanding my knowledge to keep up with the
                ever-evolving tech landscape.,
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
