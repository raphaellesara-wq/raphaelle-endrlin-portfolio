import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ShoppingBag, Baby, MessageSquare } from "lucide-react";

const pink = "#C9A0A8";
const olive = "#556B2F"; // גוון ירוק זית עמוק ונוכח יותר

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
    <section 
      id="projects" 
      ref={sectionRef} 
      // צמצום רווחים משמעותי מההירו בעזרת מרג'ין שלילי
      className="py-12 md:py-24 bg-white -mt-12 md:-mt-24 relative z-20"
    >
      <div className="container mx-auto px-5 md:px-6">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: pink }} />
            <span className="text-sm md:text-base tracking-[0.2em] font-bold uppercase" style={{ color: pink }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          {/* הגדלת הכותרת שתתאים להירו */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter">
            {t("ניסיון ", "Field ")}
            <em className="not-italic font-light" style={{ color: pink }}>{t("בשטח", "Experience")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-[32px] border border-slate-100 bg-white p-8 md:p-10 flex flex-col transition-all duration-700 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{
                  transitionDelay: `${(i + 1) * 150}ms`,
                  // בורדר ירוק זית עבה יותר בצד
                  borderInlineStart: `6px solid ${olive}`,
                  // רקע ירוק זית עדין מאוד לכל הכרטיסייה
                  backgroundColor: `${olive}05` 
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Icon Container מוגדל */}
                <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-white" style={{ background: `${olive}15` }}>
                  <Icon size={28} strokeWidth={1.5} style={{ color: olive }} />
                </div>

                {/* Title מוגדל */}
                <h3 className="font-display font-bold text-slate-900 text-2xl md:text-3xl leading-tight mb-2">
                  {t(project.heTitle, project.enTitle)}
                </h3>

                {/* Subtitle */}
                <p className="text-base md:text-lg font-semibold mb-6" style={{ color: pink }}>
                  {t(project.heSubtitle, project.enSubtitle)}
                </p>

                {/* Description מוגדל */}
                <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8 flex-1 font-light">
                  {t(project.heDesc, project.enDesc)}
                </p>

                {/* Tools - עיצוב בולט יותר */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full font-bold border text-xs md:text-sm px-4 py-1.5 transition-colors group-hover:bg-white"
                      style={{ color: olive, borderColor: `${olive}30`, background: `${olive}10` }}
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
