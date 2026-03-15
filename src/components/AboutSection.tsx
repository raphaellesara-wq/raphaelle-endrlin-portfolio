import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import AboutIllustration from "@/components/AboutIllustration";

const pink = "#C9A0A8";

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
    <section 
      id="about" 
      ref={sectionRef} 
      // צמצום נוסף: py-12 הפך ל-pt-4 (למעלה) ו-pb-20 (למטה). ה-margin השלילי גדל ל-36.
      className="pt-4 pb-20 md:pt-8 md:pb-32 -mt-20 md:-mt-36 relative overflow-hidden bg-white z-10"
    >
      <div className="container mx-auto px-6 max-w-[1300px]">
        <div className="grid lg:grid-cols-[1fr_450px] items-center gap-16 lg:gap-24">
          
          {/* צד הטקסט */}
          <div className="space-y-10">
            <div
              className={`flex items-center gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <div className="w-12 h-px" style={{ background: pink }} />
              <span className="text-sm md:text-base tracking-[0.2em] font-medium uppercase" style={{ color: pink }}>
                {t("אודות", "About Me")}
              </span>
            </div>

            <h2
              className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-slate-900 transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontFamily: "'Secular One', sans-serif" }}
            >
              {t("אסטרטגיה שפוגשת", "Strategy Meets")}
              <br />
              <span style={{ color: pink }}>
                {t("טכנולוגיה", "Technology")}
              </span>
            </h2>

            <div className="space-y-6 max-w-2xl">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-lg md:text-xl leading-relaxed text-slate-500 font-light transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className={`pt-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
               <div className="w-20 h-1 rounded-full" style={{ background: pink, opacity: 0.3 }} />
            </div>
          </div>

          {/* צד האילוסטרציה */}
          <div
            className={`hidden lg:flex justify-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-10" style={{ background: pink }} />
              <div className="relative z-10 w-full transform scale-125">
                 <AboutIllustration />
              </div>
            </div>
          </div>

          <div className="lg:hidden flex justify-center pt-10">
             <div className="w-full max-w-[280px] opacity-80">
                <AboutIllustration />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
