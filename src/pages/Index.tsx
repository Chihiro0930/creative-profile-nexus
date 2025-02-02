import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Contact />
      
      {/* Placeholder sections for future implementation */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-accent">
        <h2 className="font-display text-3xl">Projects Section (Coming Soon)</h2>
      </section>
      
      <section id="blog" className="min-h-screen flex items-center justify-center">
        <h2 className="font-display text-3xl">Blog Section (Coming Soon)</h2>
      </section>
    </div>
  );
};

export default Index;