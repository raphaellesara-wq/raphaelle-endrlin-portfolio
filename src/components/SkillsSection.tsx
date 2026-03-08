import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, Zap, Droplet } from "lucide-react";

const categories = [
  {
    he: "עיצוב ויצירה",
    en: "Design & Creation",
    skills: ["Figma", "Canva Pro", "Adobe Suite", "Premiere Pro"],
    accent: "#E88FA0",
    paleBg: "#FEF0F3",
    tagColor: "#E88FA0",
    blobColor: "#E88FA0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#E88FA0" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <circle cx="9" cy="11" r="1.5" fill="#E88FA0" stroke="none" />
        <circle cx="14" cy="8" r="1.5" fill="#E88FA0" stroke="none" />
        <circle cx="19" cy="11" r="1.5" fill="#E88FA0" stroke="none" />
        <path d="M14 24 C14 24 20 20 20 16 C20 14 18 13 16 14" />
      </svg>
    ),
  },
  {
    he: "Email Marketing",
    en: "Email Marketing",
    skills: ["FlashyApp", "Klaviyo", "Mailchimp", "InforU Mobile"],
    accent: "#6DC4A0",
    paleBg: "#D6F5EA",
    tagColor: "#4AAF8C",
    blobColor: "#6DC4A0",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#6DC4A0" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="7" width="22" height="16" rx="3" />
        <path d="M3 9 L14 17 L25 9" />
      </svg>
    ),
  },
  {
    he: "אוטומציות ו-AI",
    en: "Automation & AI",
    skills: ["MAKE.com", "N8N", "ChatGPT / Claude", "Perplexity"],
    accent: "#A98ED4",
    paleBg: "#EDE6FA",
    tagColor: "#8B6FC4",
    blobColor: "#A98ED4",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#A98ED4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      className="py-10 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Mini icons row */}
        <div
          className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
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

        {/* Section header */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#F09A60" }} />
            <span className="text-sm tracking-wide font-medium" style={{ color: "#F09A60" }}>
              {t("כלים ומיומנויות", "Tools & Skills")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]" style={{ color: "#2C2C3A" }}>
            {t("ה-", "My ")}
            <span className="italic" style={{ color: "#F09A60" }}>Arsenal</span>
            {t(" שלי", "")}
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group relative rounded-[20px] border overflow-hidden transition-all duration-250 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: `${200 + i * 150}ms`,
                backgroundColor: "#fff",
                borderColor: "#EEEAF5",
                padding: "32px 28px",
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
                className="absolute top-0 left-0 right-0 h-1 rounded-t-[20px]"
                style={{ backgroundColor: cat.accent }}
              />
              {/* Corner blob */}
              <div
                className="absolute -bottom-8 -left-5 w-[100px] h-[100px] rounded-full"
                style={{ backgroundColor: cat.blobColor, opacity: 0.06 }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4"
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
              <h3 className="mb-5" style={{ fontSize: 16, fontWeight: 700, color: "#2C2C3A" }}>
                {t(cat.he, cat.en)}
              </h3>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center rounded-full"
                    style={{
                      fontSize: 13,
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