import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Zap, Droplet } from "lucide-react";

const categories = [
  {
    he: "עיצוב ויצירה",
    en: "Design & Creation",
    skills: ["Figma", "Canva Pro", "Adobe Suite", "Premiere Pro"],
    accent: "var(--accent-pink)",
    accentHsl: "hsl(var(--accent-pink))",
    paleBg: "hsl(var(--accent-pink-pale))",
    tagColor: "hsl(var(--accent-pink))",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(var(--accent-pink))" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <circle cx="9" cy="11" r="1.5" fill="hsl(var(--accent-pink))" stroke="none" />
        <circle cx="14" cy="8" r="1.5" fill="hsl(var(--accent-pink))" stroke="none" />
        <circle cx="19" cy="11" r="1.5" fill="hsl(var(--accent-pink))" stroke="none" />
        <path d="M14 24 C14 24 20 20 20 16 C20 14 18 13 16 14" />
      </svg>
    ),
  },
  {
    he: "Email Marketing",
    en: "Email Marketing",
    skills: ["FlashyApp", "Klaviyo", "Mailchimp", "InforU Mobile"],
    accent: "var(--accent-green)",
    accentHsl: "hsl(var(--accent-green))",
    paleBg: "hsl(var(--accent-green-pale))",
    tagColor: "hsl(var(--accent-green))",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(var(--accent-green))" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="7" width="22" height="16" rx="3" />
        <path d="M3 9 L14 17 L25 9" />
      </svg>
    ),
  },
  {
    he: "אוטומציות ו-AI",
    en: "Automation & AI",
    skills: ["MAKE.com", "N8N", "ChatGPT / Claude", "Perplexity"],
    accent: "var(--accent-purple)",
    accentHsl: "hsl(var(--accent-purple))",
    paleBg: "hsl(var(--accent-purple-pale))",
    tagColor: "hsl(var(--accent-purple))",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(var(--accent-purple))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3 L8 16 H14 L12 25 L20 12 H14 Z" />
      </svg>
    ),
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-10 md:py-16 pb-20 relative overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      {/* Tools constellation SVG */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-0">
        <svg
          id="arsenal-svg"
          width="500" height="200" viewBox="0 0 500 200" fill="none"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          style={{ opacity: 0.25 }}
        >
          <line x1="80" y1="100" x2="180" y2="60" stroke="#A98ED4" strokeWidth="1" strokeDasharray="4 5" opacity="0.6" />
          <line x1="180" y1="60" x2="250" y2="100" stroke="#A98ED4" strokeWidth="1" strokeDasharray="4 5" opacity="0.6" />
          <line x1="250" y1="100" x2="320" y2="60" stroke="#3D8B6E" strokeWidth="1" strokeDasharray="4 5" opacity="0.6" />
          <line x1="320" y1="60" x2="420" y2="100" stroke="#3D8B6E" strokeWidth="1" strokeDasharray="4 5" opacity="0.6" />
          <line x1="80" y1="100" x2="250" y2="140" stroke="#C4834A" strokeWidth="1" strokeDasharray="4 5" opacity="0.4" />
          <line x1="250" y1="140" x2="420" y2="100" stroke="#C4834A" strokeWidth="1" strokeDasharray="4 5" opacity="0.4" />
          <circle cx="80" cy="100" r="16" stroke="#A98ED4" strokeWidth="1.5" fill="none" />
          <circle cx="80" cy="100" r="6" fill="#A98ED4" fillOpacity="0.3" />
          <rect x="168" y="48" width="24" height="24" rx="4" stroke="#A98ED4" strokeWidth="1.5" fill="none" transform="rotate(15 180 60)" />
          <circle cx="180" cy="60" r="3" fill="#A98ED4" fillOpacity="0.4" />
          <rect x="237" y="89" width="26" height="18" rx="3" stroke="#3D8B6E" strokeWidth="1.5" fill="none" />
          <path d="M237 92 L250 101 L263 92" stroke="#3D8B6E" strokeWidth="1.5" fill="none" />
          <path d="M316 48 L311 62 L319 62 L314 76 L325 59 L317 59 Z" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.1" />
          <path d="M420 84 L436 100 L420 116 L404 100 Z" stroke="#C4834A" strokeWidth="1.5" fill="none" />
          <circle cx="420" cy="100" r="3" fill="#C4834A" fillOpacity="0.4" />
          <circle cx="250" cy="140" r="14" stroke="#C4834A" strokeWidth="1.5" fill="none" />
          <circle cx="250" cy="140" r="5" stroke="#C4834A" strokeWidth="1" fill="none" />
          <circle cx="140" cy="45" r="2.5" fill="#A98ED4" opacity="0.5" />
          <circle cx="370" cy="130" r="2" fill="#3D8B6E" opacity="0.5" />
          <circle cx="200" cy="155" r="2" fill="#C4834A" opacity="0.4" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Mini icons row */}
        <div
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path d="M11 2L12.5 8.5L19 7L13.5 11L17 17L11 13.5L5 17L8.5 11L3 7L9.5 8.5Z" fill="hsl(var(--accent-purple))" />
          </svg>
          <Droplet size={20} strokeWidth={1.5} color="hsl(var(--accent-blue))" />
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 20 C11 20 3 14 3 8 C3 5 6 3 11 3 C16 3 19 5 19 8 C19 14 11 20 11 20Z" stroke="hsl(var(--accent-green))" strokeWidth="1.5" />
            <line x1="11" y1="20" x2="11" y2="10" stroke="hsl(var(--accent-green))" strokeWidth="1.5" />
          </svg>
          <Zap size={20} strokeWidth={1.5} color="hsl(var(--accent-orange))" />
          <Star size={20} strokeWidth={1.5} color="hsl(var(--accent-pink))" />
        </div>

        {/* Section header */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="text-sm tracking-wide font-medium text-accent-blue">
              {t("כלים ומיומנויות", "Tools & Skills")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-foreground">
            {t("ה-", "My ")}
            <em className="not-italic text-accent-blue">Arsenal</em>
            {t(" שלי", "")}
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group relative rounded-[20px] border border-border transition-all duration-250 ease-out flex flex-col bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: `${200 + i * 150}ms`,
                padding: "32px 28px",
                minHeight: 280,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(44,44,58,0.10)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = isVisible ? "translateY(0)" : "translateY(5px)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                style={{ backgroundColor: cat.accentHsl }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4 shrink-0"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  backgroundColor: cat.paleBg,
                }}
              >
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="mb-5 text-foreground" style={{ fontSize: 17, fontWeight: 700 }}>
                {t(cat.he, cat.en)}
              </h3>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center rounded-full border border-transparent"
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      padding: "5px 12px",
                      backgroundColor: cat.paleBg,
                      color: cat.tagColor,
                    }}
                  >
                    {skill}
                  </span>
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
