import Hero             from "@/components/Hero";
import About            from "@/components/About";
import Stats            from "@/components/Stats";
import CTABanner        from "@/components/CTABanner";
import Team             from "@/components/Team";
import Services         from "@/components/Services";
import PortfolioPreview from "@/components/PortfolioPreview";
import Blog             from "@/components/Blog";
import Contact          from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Stats />
        <CTABanner />
        <Team />
        <Services />
        <PortfolioPreview />
        <Blog />
      </main>
      <Contact />
    </>
  );
}
