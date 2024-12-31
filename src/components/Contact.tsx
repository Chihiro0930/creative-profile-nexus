import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { Mail, Github } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    // TODO: Implement form submission logic once backend is set up
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-accent">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center mb-8">
          {t.contact.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg">{t.contact.description}</p>
            
            <div className="space-y-4">
              <a
                href="mailto:hirorohiro1120@gmail.com"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                hirorohiro1120@gmail.com
              </a>
              
              <a
                href="https://github.com/Chihiro0930"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-background p-6 rounded-lg shadow-lg">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                {t.contact.form.name}
              </label>
              <Input
                id="name"
                {...register("name", { required: true })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{t.contact.form.nameRequired}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                {t.contact.form.email}
              </label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{t.contact.form.emailRequired}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                {t.contact.form.message}
              </label>
              <Textarea
                id="message"
                {...register("message", { required: true })}
                className={errors.message ? "border-red-500" : ""}
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{t.contact.form.messageRequired}</p>
              )}
            </div>

            <Button type="submit" className="w-full">
              {t.contact.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;