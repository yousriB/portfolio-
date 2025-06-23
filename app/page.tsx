import Navbar from "@/components/navbar";
import HeroGeometric from "@/components/kokonutui/hero-geometric";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ExperienceSection from "@/components/experience-section";
import ApproachSection from "@/components/approach-section";
import Marquee from "@/components/marquee";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroGeometric
        badge="Creative Developer"
        title1="Yousri"
        title2="Ben Ali"
      />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ExperienceSection />
      <ApproachSection />
      <Marquee />
      <CtaSection />
      <Footer />
    </main>
  );
}
