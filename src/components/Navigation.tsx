import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.blog, href: "#blog" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="font-display text-xl font-bold text-primary">
            Katsuki Chihiro
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')}
              className="ml-4"
            >
              {language === 'en' ? '日本語' : 'English'}
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg animate-fade-up">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="ghost"
                onClick={() => {
                  setLanguage(language === 'en' ? 'ja' : 'en');
                  setIsOpen(false);
                }}
              >
                {language === 'en' ? '日本語' : 'English'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;