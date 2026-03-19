import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const paragraphs = [
    t(
      "שלוש שנות ניסיון בניהול מחלקת Email Marketing במשרד הפרסום MAVEN MEDIA. ניהלתי מעל 20 לקוחות, תוך השגת אחוזי פתיחה של 50%+ — פי 2 מממוצע הענף.",
      "Three years of proven experience leading Email Marketing at MAVEN MEDIA — 20+ clients, 50%+ open rates, 2x industry average."
    ),
    t(
      "כיום אני מתמחה ב-AI ואוטומציות עסקיות עם MAKE.com ו-N8N, ומשלבת את הניסיון השיווקי שלי עם כלי הדור הבא.",
      "Currently advancing in AI & business automation with MAKE.com and N8N."
    ),
    t(
      "מחפשת תפקיד שמשלב שיווק, אוטומציה ועיצוב — בארגון שמאמין בחדשנות ולמידה מתמדת. דוברת 4 שפות בשוטף.",
      "Seeking a role combining marketing, automation, and design. Fluent in 4 languages."
    ),
  ];

  return (
    <section id="about" ref={sectionRef} className="py-6 md:py-10 relative" style={{ background: "transparent" }}>
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[1fr_380px] items-center gap-0 lg:gap-0">
          {/* Text column */}
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-5">
            <div
              className={`flex items-center gap-3 transition-all duration-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <div className="w-8 h-px bg-muted-foreground/30" />
              <span className="text-sm tracking-wide text-muted-foreground font-medium">
                {t("אודות", "About")}
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] transition-all duration-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              {t("אסטרטגיה שפוגשת", "Strategy Meets")}
              <br />
              <em className="not-italic text-muted-foreground">
                {t("טכנולוגיה", "Technology")}
              </em>
            </h2>

          {/* פסקאות - מיושרות לקו האפס של הכותרת */}
          <div className="space-y-8 w-full max-w-3xl">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl transition-all duration-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                {para}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
