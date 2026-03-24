import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Tool logo components using SVG shapes per brand
const ToolLogo = ({ name }: { name: string }) => {
  const logos: Record<string, JSX.Element> = {
    Shopify: (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#96BF48" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="sans-serif">S</text>
      </svg>
    ),
    "Rise.ai": (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#FF6B35" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="sans-serif">R</text>
      </svg>
    ),
    FlashyApp: (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#1E40AF" />
        <path d="M28 10 L18 27 H26 L22 40 L34 21 H26 Z" fill="white" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#F24E1E" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Fg</text>
      </svg>
    ),
    Canva: (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#00C4CC" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="sans-serif">C</text>
      </svg>
    ),
    "Make.com": (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#6D00CC" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Mk</text>
      </svg>
    ),
    "Claude AI": (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="10" fill="#D97706" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">AI</text>
      </svg>
    ),
    Telegram: (
      <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="25" fill="#2AABEE" />
        <path d="M10 25 L38 14 L28 38 L22 30 Z" fill="white" opacity="0.8" />
        <path d="M22 30 L20 38 L26 32 Z" fill="white" />
      </svg>
    ),
  };
  return logos[name] ?? (
    <svg viewBox="0 0 50 50" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" rx="10" fill="#94A3B8" />
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
        {name.slice(0, 2)}
      </text>
    </svg>
  );
};

const projects = [
  {
    heTitle: "מועדון לקוחות חכם — Umina Superfood",
    enTitle: "Smart Loyalty Club — Umina Superfood",
    heDesc: "בניית מועדון לקוחות בשופיפיי עם מנגנון קרדיטים אוטומטי דרך Rise.ai — הקצאת קרדיטים עם רכישת החברות ו-3 מסעות לקוח: ברכת הצטרפות, הטבת יום הולדת והתראה לפני סיום החברות.",
    enDesc: "Built a complete loyalty program on Shopify using Rise.ai: automatic credit allocation upon membership purchase, plus 3 automated customer journeys — welcome series, birthday benefit, and a pre-expiry renewal reminder.",
    heResult: "חיסכון בזמן, יצירת מערכת אוטומטית לחלוטין ואחוזי המרה גבוהים.",
    enResult: "Time saved through full automation — high conversion rates and hands-off membership management.",
    tools: ["Shopify", "Rise.ai", "FlashyApp", "Canva"],
    accent: "hsl(var(--accent-green))",
    paleBg: "hsl(var(--accent-green-pale))",
  },
  {
    heTitle: "מסע לקוח פרסונלי לנשים הריוניות",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "בניית מסע לקוח מותאם אישית לנשים הריוניות, המתאים את תדירות התוכן לשלב ההריון. שלב מוקדם — ניוזלטר אחד בשבוע; שלב מאוחר — שניים בשבוע.",
    enDesc: "Built a personalized email journey for pregnant women, adapting content frequency to their pregnancy stage. Early-stage subscribers receive 1 newsletter/week; closer to birth, 2/week.",
    heResult: "מעורבות גבוהה של מעל 60% פתיחה לאורך שנה והצטרפות של אלפי נשים למאגר הלקוחות.",
    enResult: "60%+ open rate sustained over a year, with thousands of women joining the customer database.",
    tools: ["FlashyApp", "Figma", "Canva"],
    accent: "hsl(var(--accent-pink))",
    paleBg: "hsl(var(--accent-pink-pale))",
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "בניית מערכת ניהול פניות חכמה לחדר כושר. Claude AI מנתח כל פנייה נכנסת ומזהה מחלקה, רמת דחיפות וסיכום — ושולח התראה מיידית בטלגרם למחלקה הרלוונטית.",
    enDesc: "Built an AI-powered inquiry routing system for a gym. Claude AI analyzes each incoming form submission to extract department, urgency, and summary — then instantly dispatches a Telegram alert to the right team.",
    heResult: "ניהול פניות מסודר וקיצור משמעותי בזמני התגובה באמצעות סיווג אוטומטי של המחלקה הרלוונטית.",
    enResult: "Organized inquiry management and significantly reduced response times through automated department routing.",
    tools: ["Make.com", "Claude AI", "Telegram"],
    accent: "hsl(var(--accent-purple))",
    paleBg: "hsl(var(--accent-purple-pale))",
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pt-2 pb-6 md:pt-4 md:pb-10 lg:pt-10"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container mx-auto px-5 md:px-6">

        {/* Section header */}
        <div
          className={`mb-10 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-pink" />
            <span className="text-sm tracking-wide font-medium text-accent-pink">
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
            {t("ניסיון ", "Field ")}
            <em className="not-italic text-accent-pink">{t("בשטח", "Experience")}</em>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-[20px] border border-border bg-card p-5 md:p-6 flex flex-col transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 40px rgba(44,44,58,0.10)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px]"
                style={{ backgroundColor: project.accent }}
              />

              {/* Title */}
              <h3
                className="mb-3 leading-snug"
                style={{ fontSize: 17, fontWeight: 700, color: project.accent }}
              >
                {t(project.heTitle, project.enTitle)}
              </h3>

              {/* Description */}
              <p
                className="mb-4"
                style={{
                  fontSize: 14,
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: 1.7,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {t(project.heDesc, project.enDesc)}
              </p>

              {/* Field Result box */}
              <div
                className="rounded-[12px] px-4 py-3 mb-5"
                style={{ backgroundColor: project.paleBg }}
              >
                <p
                  className="mb-1 uppercase tracking-widest"
                  style={{ fontSize: 10, fontWeight: 600, color: project.accent }}
                >
                  {t("התוצאה בשטח", "Field Result")}
                </p>
                <p
                  className="italic"
                  style={{
                    fontSize: 13,
                    color: "hsl(var(--foreground))",
                    lineHeight: 1.65,
                  }}
                >
                  "{t(project.heResult, project.enResult)}"
                </p>
              </div>

              {/* Tool logos */}
              <div className="flex flex-wrap items-end gap-4 mt-auto pt-2">
                {project.tools.map((tool) => (
                  <div key={tool} className="flex flex-col items-center gap-1">
                    <ToolLogo name={tool} />
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: "hsl(var(--muted-foreground))",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tool}
                    </span>
                  </div>
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
