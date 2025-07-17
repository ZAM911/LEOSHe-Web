import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PlatformInnovation from "@/components/PlatformInnovation";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudiesNew";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PlatformInnovation />
      <Services />
      <Features />
      <CaseStudies />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
