import About from "./components/About";
import Edit from "./components/Edit";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    // <div className="flex flex-col bg-amber-100">
    <div className="flex flex-col bg-gradient-to-b from-[#160078] to-[#010030]">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="edit">
        <Edit />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
