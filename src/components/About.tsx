import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              About Me
            </h2>
            <p className="text-gray-600">
              With over 5 years of experience in software development, I specialize in
              building scalable web applications and implementing machine learning
              solutions. My passion lies in creating efficient, user-friendly
              applications that solve real-world problems.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;