import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Zap, Leaf, Droplet, Sparkles } from "lucide-react";

const categories = [
  {
    emoji: "🤖",
    he: "אוטומציות ו-AI",
    en: "Automation & AI",
    skills: ["MAKE.com", "N8N", "ChatGPT / Claude", "Perplexity"],
  },
  {
    emoji: "📧",
    he: "Email Marketing",
    en: "Email Marketing",
    skills: ["FlashyApp", "Klaviyo", "Mailchimp", "InforU Mobile"],
  },
  {
    emoji: "🎨",
    he: "עיצוב ויצירה",
    en: "Design & Creation",
    skills: ["Figma", "Canva Pro", "Adobe Suite", "Premiere Pro"],
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-10 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#1E1B2E" }}
    >
      {/* Pastel glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 start-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/[0.08] blur-[120px]" />
        <div className="absolute bottom-1/4 end-1/4 w-[350px] h-[350px] rounded-full bg-accent-pink/[0.06] blur-[100px]" />
        <div className="absolute top-1/2 end-1/2 w-[300px] h-[300px] rounded-full bg-accent-blue/[0.05] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              <path d="M11 2L12.5 8.5L19 7L13.5 11L17 17L11 13.5L5 17L8.5 11L3 7L9.5 8.5Z" fill="#A98ED4" />
            </svg>
            <Droplet size={20} strokeWidth={1.5} color="#72AEE8" />
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 20 C11 20 3 14 3 8 C3 5 6 3 11 3 C16 3 19 5 19 8 C19 14 11 20 11 20Z" stroke="#6DC4A0" strokeWidth="1.5" />
              <line x1="11" y1="20" x2="11" y2="10" stroke="#6DC4A0" strokeWidth="1.5" />
            </svg>
            <Zap size={20} strokeWidth={1.5} color="#F09A60" />
            <Star size={20} strokeWidth={1.5} color="#E88FA0" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "hsl(37 40% 61%)" }} />
            <span className="text-sm tracking-wide font-medium" style={{ color: "hsl(37 40% 61%)" }}>
              {t("כלים ומיומנויות", "Tools & Skills")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15] text-primary-foreground">
            {t("ה-", "My ")}
            <span className="italic" style={{ color: "hsl(37 40% 61%)" }}>Arsenal</span>
            {t(" שלי", "")}
          </h2>
        </div>

        {/* Skills grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: `${200 + i * 150}ms`,
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                const isDesign = i === 2;
                (e.currentTarget as HTMLElement).style.borderColor = isDesign
                  ? "rgba(109,196,160,0.5)"
                  : "hsl(37 40% 61% / 0.5)";
                (e.currentTarget as HTMLElement).style.boxShadow = isDesign
                  ? "0 0 20px rgba(109,196,160,0.2)"
                  : "0 0 20px rgba(201,169,110,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="text-2xl mb-3">{cat.emoji}</div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-5">
                {t(cat.he, cat.en)}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <div key={j} className="flex items-center justify-between text-sm">
                    <span className="text-primary-foreground/80">{skill}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: i === 2 ? "#6DC4A0" : "hsl(37 40% 61%)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
