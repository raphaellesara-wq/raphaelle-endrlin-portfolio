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
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-16 md:py-24 relative overflow-hidden bg-white z-10"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* כאן הסוד ליישור: max-w-7xl יחד עם px-4 md:px-6 
         מבטיח שהטקסט יתחיל באותו קו בדיוק כמו בלוק הפרויקטים.
      */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${isRTL ? 'items-start text-right' : 'items-start text-left'} space-y-12`}>
          
          {/* תגית אודות עם קו דקורטיבי מיושר */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {isRTL ? (
              <>
                <div className="w-12 md:w-16 h-px" style={{ background: pink }} />
                <span className="text-sm md:text-base tracking-[0.2em] font-medium uppercase" style={{ color: pink }}>
                  {t("אודות", "About Me")}
                </span>
              </>
            ) : (
              <>
                <span className="text-sm md:text-base tracking-[0.2em] font-medium uppercase" style={{ color: pink }}>
                  {t("אודות", "About Me")}
                </span>
                <div className="w-12 md:w-16 h-px" style={{ background: pink }} />
              </>
            )}
          </div>

          {/* כותרת מוגדלת */}
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

          {/* פסקאות - הסרתי את הגבלת ה-900px המיותרת */}
          <div className="space-y-8 w-full max-w-3xl">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-lg md:text-2xl leading-relaxed text-slate-500 font-light transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
