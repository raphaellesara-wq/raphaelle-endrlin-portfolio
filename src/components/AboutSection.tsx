import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AboutIllustration from "@/components/AboutIllustration";

const AboutSection = () => {
  const { t } = useLanguage();
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
    <section id="about" ref={sectionRef} className="py-6 md:py-12 relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[1fr_340px] items-center gap-4 lg:gap-4">
          {/* Text column */}
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-5">
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="w-8 h-px bg-muted-foreground/30" />
              <span className="text-sm tracking-wide text-muted-foreground font-medium">
                {t("אודות", "About")}
              </span>
            </div>

            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1] transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {t("אסטרטגיה שפוגשת", "Strategy Meets")}
              <br />
              <em className="not-italic text-muted-foreground">
                {t("טכנולוגיה", "Technology")}
              </em>
            </h2>

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

          {/* Illustration — beside text on desktop */}
          <div
            className="hidden lg:flex about-illust-wrap"
            style={{
              opacity: isVisible ? 0.85 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s',
            }}
          >
            <AboutIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
