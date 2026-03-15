import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const accent = "#C9A0A8";

const projects = [
  {
    heTitle: "מועדון לקוחות חכם",
    enTitle: "Smart Loyalty Club",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. תוצאה: חיסכון בזמן תפעולי והעלאת אחוזי המרה.",
    enDesc: "Automated loyalty system providing credits and rewards. Result: Saved operational time and increased conversion.",
    tools: ["Shopify", "Rise.ai", "Flashy", "Canva"],
  },
  {
    heTitle: "מסע לקוח פרסונלי מבוסס זמן",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס. תוצאה: הגדלת הקהל החם ומעורבות גבוהה במותג.",
    enDesc: "Smart email system delivering tailored content based on pregnancy week. Result: Increased warm audience and high brand engagement.",
    tools: ["Flashy", "Figma", "Canva"],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management",
    heDesc: "אוטומציה המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת. תוצאה: תגובה מהירה ללידים וייעול תהליך המכירה.",
    enDesc: "Real-time routing of leads from Telegram to Google Sheets. Result: Rapid response time and efficient sales process.",
    tools: ["Make", "Telegram API", "Google Sheets"],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-5 md:px-6">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: accent }} />
            <span className="text-sm tracking-wide font-medium" style={{ color: accent }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]">
            {t("ניסיון ", "Field ")}
            <em className="not-italic" style={{ color: accent }}>{t("בשטח", "Experience")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative rounded-[20px] border border-border bg-card p-5 md:p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{
                transitionDelay: `${(i + 1) * 150}ms`,
                borderInlineStart: `3px solid ${accent}`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(44,44,58,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <h3 className="font-bold text-foreground mb-2" style={{ fontSize: 17 }}>
                {t(project.heTitle, project.enTitle)}
              </h3>
              <p className="mb-4 text-muted-foreground" style={{ fontSize: 14, lineHeight: 1.7 }}>
                {t(project.heDesc, project.enDesc)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full font-medium border"
                    style={{ fontSize: 11, padding: "3px 10px", color: accent, borderColor: `${accent}44` }}
                  >
                    {tool}
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
