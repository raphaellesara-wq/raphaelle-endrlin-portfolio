import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Settings, Palette } from "lucide-react";

const cardIcons = [Mail, Settings, Palette];

const projects = [
  {
    emoji: "📧",
    heTitle: "Umina Superfood — מסעות לקוח ומועדון חברות",
    enTitle: "Umina Superfood — Customer Journeys & Loyalty Club",
    subtitle: "FlashyApp · Shopify · Rise.ai",
    heDesc:
      "בניית מועדון לקוחות ב-Shopify עם מנגנון קרדיטים (Rise.ai) ומסעות לקוח מותאמים אישית. עיצוב ניוזלטרים ומסעות שיווקיים לקהילת הסופרפוד.",
    enDesc:
      "Built a complete loyalty club with a credit system on Shopify via Rise.ai. Designed 3 customer journeys: welcome, birthday benefit, pre-expiry reminder. Branded newsletters and marketing campaigns for the superfood community.",
    tags: ["Shopify", "Rise.ai", "FlashyApp", "Customer Journey", "Email Design"],
    accent: "#6DC4A0",
    paleBg: "#D6F5EA",
  },
  {
    emoji: "🤖",
    heTitle: "אוטומציית Abandon Cart",
    enTitle: "Abandoned Cart Automation",
    subtitle: "FlashyApp · Customer Journey Automation",
    heDesc:
      "בניית מסע לקוח מורכב לשחזור עגלות נטושות עם לוגיקת IF/ELSE, עיכובים מחושבים ושליחת מיילים מותאמים אישית בזמן הנכון.",
    enDesc:
      "Built a complex abandoned cart flow with IF/ELSE logic, calculated time delays, and personalized email sequences.",
    tags: ["Automation", "FlashyApp", "Customer Journey", "Email Marketing"],
    accent: "#72AEE8",
    paleBg: "#DEEDFB",
  },
  {
    emoji: "🎨",
    heTitle: "עיצוב ניוזלטרים — לקוחות מגוונים",
    enTitle: "Newsletter Design — Diverse Clients",
    subtitle: "Figma · Canva · FlashyApp · Klaviyo",
    heDesc:
      "עיצוב ניוזלטרים ו-pop-up forms עבור מותגים: amika, laliteva, Nintendo Israel, צירים ועוד — כל אחד עם שפה ויזואלית ייחודית.",
    enDesc:
      "Newsletter and pop-up form design for brands: amika, laliteva, Nintendo Israel, Tzirim and more — each with a distinct visual identity.",
    tags: ["Figma", "Canva", "Newsletter Design", "Pop-up Forms"],
    accent: "#E88FA0",
    paleBg: "#FCE4E9",
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#F09A60" }} />
            <span className="text-sm tracking-wide font-medium" style={{ color: "#F09A60" }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15]">
            {t("עבודות שאני ", "Work I'm ")}
            <span className="text-accent-pink italic">{t("גאה בהן", "Proud Of")}</span>
          </h2>
        </div>

        {/* Cards grid: first full-width, then 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative rounded-[20px] border bg-background p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                i === 0 ? "md:col-span-2" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{
                borderColor: "#EEEAF5",
                borderInlineStart: `4px solid ${project.accent}`,
                transitionDelay: `${200 + i * 150}ms`,
              }}
            >
              {(() => { const Icon = cardIcons[i]; return (
                <Icon size={32} strokeWidth={1.5} color={project.accent} className="absolute top-6 end-6 opacity-80" />
              ); })()}
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 pe-10">
                {project.emoji} {t(project.heTitle, project.enTitle)}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{project.subtitle}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {t(project.heDesc, project.enDesc)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full font-medium"
                    style={{
                      fontSize: "11px",
                      padding: "4px 12px",
                      backgroundColor: project.paleBg,
                      color: project.accent,
                    }}
                  >
                    {tag}
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

export default ProjectsSection;
