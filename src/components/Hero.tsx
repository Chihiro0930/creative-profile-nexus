import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-up">
            Hi, I'm Katsuki Chihiro
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            I am a software engineer, web developer, and machine learning enthusiast,
            passionate about creating innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToProjects}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              onClick={scrollToAbout}
              className="group"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;