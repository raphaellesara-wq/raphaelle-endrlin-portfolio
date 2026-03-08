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
    <section id="about" ref={sectionRef} className="py-10 md:py-16 relative" style={{ background: "#FFFFFF", overflow: "visible" }}>
      {/* Botanical frame — left side */}
      <svg
        id="about-botanical"
        className="hidden md:block"
        width="160" height="380" viewBox="0 0 160 380" fill="none"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
        style={{ position: 'absolute', left: -30, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0, opacity: 0.4, userSelect: 'none' }}
      >
        <path d="M80 375 Q76 310 80 240 Q83 180 78 110 Q75 70 82 30" stroke="#3D8B6E" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M80 300 Q130 270 135 230 Q100 220 80 270 Z" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.07"/>
        <path d="M80 270 Q115 255 130 235" stroke="#3D8B6E" strokeWidth="1" fill="none"/>
        <path d="M80 230 Q25 200 20 160 Q60 148 80 200 Z" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.07"/>
        <path d="M80 200 Q42 185 22 162" stroke="#3D8B6E" strokeWidth="1" fill="none"/>
        <path d="M80 160 Q118 138 120 108 Q92 100 80 140 Z" stroke="#7B68A8" strokeWidth="1.5" fill="#7B68A8" fillOpacity="0.06"/>
        <path d="M80 95 Q50 75 52 50 Q72 46 80 82 Z" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.06"/>
        <circle cx="82" cy="26" r="6" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <circle cx="82" cy="26" r="2.5" fill="#D4798A" fillOpacity="0.3"/>
        <ellipse cx="82" cy="17" rx="3" ry="5" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <ellipse cx="82" cy="35" rx="3" ry="5" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <ellipse cx="73" cy="26" rx="5" ry="3" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <ellipse cx="91" cy="26" rx="5" ry="3" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <circle cx="140" cy="290" r="2.5" fill="#C4834A" opacity="0.4"/>
        <circle cx="18" cy="140" r="2" fill="#D4798A" opacity="0.4"/>
        <circle cx="130" cy="100" r="2" fill="#3D8B6E" opacity="0.4"/>
        <circle cx="30" cy="330" r="1.5" fill="#7B68A8" opacity="0.35"/>
        <line x1="148" y1="192" x2="152" y2="196" stroke="#C4834A" strokeWidth="1.5"/>
        <line x1="152" y1="192" x2="148" y2="196" stroke="#C4834A" strokeWidth="1.5"/>
        <line x1="15" y1="68" x2="19" y2="72" stroke="#7B68A8" strokeWidth="1.5"/>
        <line x1="19" y1="68" x2="15" y2="72" stroke="#7B68A8" strokeWidth="1.5"/>
      </svg>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3 mb-1">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="10" width="28" height="20" rx="3" stroke="hsl(var(--accent-pink))" strokeWidth="1.5" />
                <path d="M4 12 L18 21 L32 12" stroke="hsl(var(--accent-pink))" strokeWidth="1.5" />
              </svg>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 4 L10 20 H18 L16 32 L26 16 H18 L20 4Z" stroke="hsl(var(--accent-orange))" strokeWidth="1.5" />
              </svg>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 4 L20 14 L30 12 L22 18 L28 27 L18 22 L8 27 L14 18 L6 12 L16 14Z" stroke="hsl(var(--accent-purple))" strokeWidth="1.5" />
              </svg>
            </div>
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="w-8 h-px bg-accent-purple" />
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
              <em className="not-italic text-accent-purple">
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

          {/* Sidebar cards */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className={`rounded-[20px] border border-border bg-background p-6 transition-all duration-700 delay-300 hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ borderInlineStart: "3px solid hsl(var(--accent-green))" }}
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

            <div
              className={`rounded-[20px] border border-border bg-background p-6 transition-all duration-700 delay-500 hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ borderInlineStart: "3px solid hsl(var(--accent-green))" }}
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
