import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AboutIllustration from "@/components/AboutIllustration";

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  const paragraphs = [
    t(
      "בעלת שלוש שנות ניסיון בניהול מחלקת Email Marketing במשרד הפרסום MAVEN MEDIA. ניהלתי מעל 20 לקוחות, תוך השגת אחוזי פתיחה של 50%+, פי 2 מהממוצע בתחום .",
      "Three years of proven experience leading Email Marketing at MAVEN MEDIA — 20+ clients, 50%+ open rates, 2x industry average."
    ),
    t(
      "כיום אני מתמחה ב-AI ואוטומציות עסקיות עם MAKE.com ו-N8N, ומשלבת את הניסיון שצברתי עם כלי העתיד. ",
      "Currently mastering in AI & business automation with MAKE.com and N8N."
    ),
    t(
      "מחפשת תפקיד שמשלב בניית מערכות אוטומטיות יחד עם יצירתיות- בארגון שמאמין בחדשנות ולמידה מתמדת.",
      "Seeking a role combining marketing, automation, and design."
    ),
  ];

  return (
    <section id="about" ref={sectionRef} className="pt-6 pb-2 md:pt-10 md:pb-4 lg:pb-10 relative" style={{ background: "transparent" }}>
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

            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl transition-all duration-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Illustration — beside text on desktop, below on mobile */}
          <div
            className="hidden lg:flex about-illust-wrap justify-center"
            style={{
              opacity: isVisible ? 0.9 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.98)',
              transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
              maxWidth: '360px',
              width: '100%',
            }}
          >
            <AboutIllustration />
          </div>

          {/* Mobile illustration — centered, balanced */}
          <div
            className="flex lg:hidden justify-center"
            style={{
              opacity: isVisible ? 0.85 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.97)',
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              maxWidth: '220px',
              width: '100%',
              margin: '8px auto 0',
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
