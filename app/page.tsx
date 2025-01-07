import Header from "@/components/Section/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Section/About/About";
import Section from "@/components/Section/Section";
import Projects from "@/components/Section/Projects/Projects";
import Career from "@/components/Section/Career/Career";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section title="Hi, I'm Kilian Peyron" component={<Header />} />
      <Section title="About" component={<About/>} />
      <Section title="Projects" component={<Projects />} />
      <Section title="Career" component={<Career />} />
      <Section title="Blog" />
      <Footer />
    </>
  );
}

/* Website open-source / Change theme button / Positions (Carreer) */