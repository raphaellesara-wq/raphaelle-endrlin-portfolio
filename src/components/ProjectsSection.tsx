import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ShoppingBag, Baby, MessageSquare } from "lucide-react";

const pink = "#C9A0A8";
const olive = "#8B9E6B";

const projects = [
  {
    icon: ShoppingBag,
    heTitle: "מועדון לקוחות חכם",
    enTitle: "Automated Loyalty Club",
    heSubtitle: "Shopify & Rise.ai",
    enSubtitle: "Shopify & Rise.ai",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. תוצאה: חיסכון בזמן תפעולי והעלאת אחוזי המרה.",
    enDesc: "Automated loyalty system providing credits and rewards. Result: Saved operational time and increased conversion.",
    tools: ["Shopify", "Rise.ai", "Flashy", "Canva"],
  },
  {
    icon: Baby,
    heTitle: "מסע לקוח פרסונלי",
    enTitle: "Personalized Journey",
    heSubtitle: "Flashy · מסע מבוסס זמן",
    enSubtitle: "Flashy · Time-Based Flow",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס. תוצאה: הגדלת הקהל החם ומעורבות גבוהה במותג.",
    enDesc: "Smart email system delivering tailored content based on pregnancy week. Result: Increased warm audience and high brand engagement.",
    tools: ["Flashy", "Figma", "Canva"],
  },
  {
    icon: MessageSquare,
    heTitle: "ניהול לידים אוטומטי",
    enTitle: "Automated Lead Management",
    heSubtitle: "Make · Telegram · Google Sheets",
    enSubtitle: "Make · Telegram · Google Sheets",
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
            <div className="w-8 h-px" style={{ background: pink }} />
            <span className="text-sm tracking-wide font-medium" style={{ color: pink }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]">
            {t("ניסיון ", "Field ")}
            <em className="not-italic" style={{ color: pink }}>{t("בשטח", "Experience")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-[20px] border border-border bg-card p-6 md:p-8 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{
                  transitionDelay: `${(i + 1) * 150}ms`,
                  borderInlineStart: `3px solid ${olive}`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(44,44,58,0.10)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Icon */}
                <div className="mb-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${olive}18` }}>
                  <Icon size={20} strokeWidth={1.5} style={{ color: olive }} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-foreground text-xl md:text-2xl leading-tight mb-1">
                  {t(project.heTitle, project.enTitle)}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium mb-4" style={{ color: pink }}>
                  {t(project.heSubtitle, project.enSubtitle)}
                </p>

                {/* Description */}
                <p className="text-[15px] md:text-base leading-relaxed text-muted-foreground mb-6 flex-1">
                  {t(project.heDesc, project.enDesc)}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full font-medium border text-xs px-3 py-1"
                      style={{ color: olive, borderColor: `${olive}40`, background: `${olive}0A` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
