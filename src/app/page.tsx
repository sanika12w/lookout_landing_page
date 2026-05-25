import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Experience from "@/components/Experience";
import Privacy from "@/components/Privacy";
import WhyLookout from "@/components/WhyLookout";
import Ecosystem from "@/components/Ecosystem";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Experience />
        <Privacy />
        <WhyLookout />
        <Ecosystem />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
