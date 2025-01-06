import Header from "@/components/Section/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Section/About/About";
import Section from "@/components/Section/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section title="Hi, I'm Kilian Peyron" component={<Header />} />
      <Section title="About" component={<About/>} />
      <Section title="Projects" />
      <Section title="Blog" />
    </>
  );
}
