import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  frequency: "daily" | "weekly" | "monthly";
  proficiency: number;
}

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const programmingLanguages: Skill[] = [
    { name: "Python", level: "advanced", frequency: "daily", proficiency: 90 },
    { name: "JavaScript", level: "advanced", frequency: "daily", proficiency: 85 },
    { name: "Rust", level: "intermediate", frequency: "weekly", proficiency: 70 },
    { name: "TypeScript", level: "advanced", frequency: "daily", proficiency: 85 },
  ];

  const frameworks: Skill[] = [
    { name: "React", level: "advanced", frequency: "daily", proficiency: 90 },
    { name: "Django", level: "advanced", frequency: "daily", proficiency: 85 },
    { name: "TensorFlow", level: "intermediate", frequency: "weekly", proficiency: 75 },
    { name: "Next.js", level: "intermediate", frequency: "weekly", proficiency: 80 },
  ];

  const tools: Skill[] = [
    { name: "Git", level: "advanced", frequency: "daily", proficiency: 90 },
    { name: "Docker", level: "intermediate", frequency: "weekly", proficiency: 75 },
    { name: "AWS", level: "intermediate", frequency: "weekly", proficiency: 70 },
    { name: "CI/CD", level: "intermediate", frequency: "weekly", proficiency: 75 },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-blue-500";
      case "intermediate":
        return "bg-purple-500";
      case "advanced":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "daily":
        return "bg-green-500";
      case "weekly":
        return "bg-yellow-500";
      case "monthly":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-display font-bold text-primary">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">{skill.name}</span>
                <Badge variant="secondary" className={`${getLevelColor(skill.level)} text-white`}>
                  {skill.level}
                </Badge>
                <Badge variant="secondary" className={`${getFrequencyColor(skill.frequency)} text-white`}>
                  {skill.frequency}
                </Badge>
              </div>
              <span className="text-sm text-gray-500">{skill.proficiency}%</span>
            </div>
            <Progress value={skill.proficiency} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-primary mb-12">
          {t.nav.skills}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <SkillCategory
            title={language === 'en' ? "Programming Languages" : "プログラミング言語"}
            skills={programmingLanguages}
          />
          <SkillCategory
            title={language === 'en' ? "Frameworks & Libraries" : "フレームワーク・ライブラリ"}
            skills={frameworks}
          />
          <SkillCategory
            title={language === 'en' ? "Tools & Technologies" : "ツール・技術"}
            skills={tools}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;