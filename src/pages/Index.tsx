import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import HowIWork from "@/components/HowIWork";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Testimonials />
      <Services />
      <Packages />
      <HowIWork />
      <Footer />
    </main>
  );
};

export default Index;
