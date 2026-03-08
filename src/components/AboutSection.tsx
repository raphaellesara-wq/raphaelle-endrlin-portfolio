import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const languages = [
  { he: "עברית", detail_he: "שפת אם", en: "Hebrew", detail_en: "Native" },
  { he: "Français", detail_he: "שפת אם", en: "Français", detail_en: "Native" },
  { he: "English", detail_he: "Fluent", en: "English", detail_en: "Fluent" },
  { he: "Español", detail_he: "Fluent", en: "Español", detail_en: "Fluent" },
];

const education = [
  {
    he: "קורס AI ואוטומציות — Letsai",
    en: "AI & Automation Course — Letsai",
    year: "2025→",
  },
  {
    he: "BA מדע המדינה — האוניברסיטה הפתוחה",
    en: "BA Political Science — Open University",
    year: "2025→",
  },
];

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const paragraphs = [
    t(
      "שלוש שנות ניסיון מוכח בניהול מחלקת Email Marketing במשרד הפרסום MAVEN MEDIA — עם מעל 20 לקוחות ואחוזי פתיחה של 50%+, פי 2 מהממוצע בתעשייה.",
      "Three years of proven experience leading Email Marketing at MAVEN MEDIA — 20+ clients, 50%+ open rates, 2x industry average."
    ),
    t(
      "כיום מעמיקה הכשרה ב-AI ואוטומציות עסקיות עם MAKE.com ו-N8N — משלבת ניסיון שיווקי עם כלי הדור הבא.",
      "Currently advancing in AI & business automation with MAKE.com and N8N."
    ),
    t(
      "מחפשת תפקיד שמשלב שיווק, אוטומציה ועיצוב בארגון שמעריך למידה וחדשנות. דוברת 4 שפות.",
      "Seeking a role combining marketing, automation, and design. Fluent in 4 languages."
    ),
  ];

  return (
    <section id="about" ref={sectionRef} className="py-10 md:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Text content — wider column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="w-8 h-px bg-accent-pink" />
              <span className="text-sm tracking-wide text-muted-foreground font-medium">
                {t("אודות", "About")}
              </span>
            </div>

            {/* H2 */}
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15] transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {t("אסטרטגיה שפוגשת", "Strategy Meets")}
              <br />
              <span className="text-accent-pink italic">
                {t("טכנולוגיה", "Technology")}
              </span>
            </h2>

            {/* Paragraphs */}
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-sm md:text-base leading-relaxed text-muted-foreground max-w-xl transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Sidebar cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Languages card */}
            <div
              className={`rounded-[20px] border border-border bg-background p-6 transition-all duration-700 delay-300 hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ borderInlineStart: "4px solid #6DC4A0" }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
                {t("שפות", "Languages")}
              </h3>
              <div className="space-y-3">
                {languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{t(lang.he, lang.en)}</span>
                    <span className="text-muted-foreground text-xs">{t(lang.detail_he, lang.detail_en)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div
              className={`rounded-[20px] border border-border bg-background p-6 transition-all duration-700 delay-500 hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ borderInlineStart: "4px solid #6DC4A0" }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
                {t("השכלה", "Education")}
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-sm text-foreground font-medium">{t(edu.he, edu.en)}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
