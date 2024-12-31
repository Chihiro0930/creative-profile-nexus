import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              {t.about.title}
            </h2>
            <p className="text-gray-600">
              {t.about.description}
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Chihiro0930" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:hirorohiro1120@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
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