import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      
      {/* Placeholder sections for future implementation */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <h2 className="font-display text-3xl">Skills Section (Coming Soon)</h2>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-accent">
        <h2 className="font-display text-3xl">Projects Section (Coming Soon)</h2>
      </section>
      
      <section id="blog" className="min-h-screen flex items-center justify-center">
        <h2 className="font-display text-3xl">Blog Section (Coming Soon)</h2>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-accent">
        <h2 className="font-display text-3xl">Contact Section (Coming Soon)</h2>
      </section>
    </div>
  );
};

export default Index;