import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ShoppingBag, Baby, MessageSquare } from "lucide-react";

// צבעים שנדגמו מהאילוסטרציה ליצירת המשכיות
const pink = "#C9A0A8"; // הוורוד העתיק מהכותרת
const illustrationOlive = "#8B9E6B"; // הירוק זית המדויק מהעלים באיור
const illustrationPeach = "#FDF5F2"; // גוון הרקע העדין מהאיור

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
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס. תוצאה: הגדלת הקהל החם ומעורבות גבוהה.",
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
      // py-12 מצמצם את הריווח האנכי המוגזם
      className="py-12 md:py-20 bg-white -mt-16 md:-mt-24 relative z-20"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]"> {/* max-w-1400 הופך את הבלוק לרחב יותר */}
        
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px" style={{ background: pink }} />
            <span className="text-sm md:text-base tracking-[0.2em] font-bold uppercase" style={{ color: pink }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter text-slate-900">
            {t("ניסיון ", "Field ")}
            <em className="not-italic font-light" style={{ color: pink }}>{t("בשטח", "Experience")}</em>
          </h2>
        </div>

        {/* גריד רחב עם רווחים גדולים יותר בין הכרטיסיות */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-[40px] border border-slate-100 bg-white p-10 md:p-12 flex flex-col transition-all duration-700 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(139,158,107,0.15)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{
                  transitionDelay: `${(i + 1) * 150}ms`,
                  // בורדר עליון עדין במקום צדי, ליצירת מראה רחב יותר
                  borderTop: `4px solid ${illustrationOlive}`,
                  backgroundColor: illustrationPeach // צבע רקע עדין מהאיור
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Icon Container */}
                <div className="mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `${illustrationOlive}20` }}>
                  <Icon size={32} strokeWidth={1.5} style={{ color: illustrationOlive }} />
                </div>

                <h3 className="font-display font-bold text-slate-900 text-3xl md:text-4xl leading-tight mb-3">
                  {t(project.heTitle, project.enTitle)}
                </h3>

                <p className="text-lg md:text-xl font-semibold mb-6" style={{ color: pink }}>
                  {t(project.heSubtitle, project.enSubtitle)}
                </p>

                <p className="text-xl md:text-2xl leading-relaxed text-slate-600 mb-10 flex-1 font-light italic">
                  "{t(project.heDesc, project.enDesc)}"
                </p>

                {/* Tools - Tags מעוצבים יותר */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-xl font-bold border text-sm px-5 py-2 transition-all group-hover:bg-white group-hover:border-transparent shadow-sm"
                      style={{ color: illustrationOlive, borderColor: `${illustrationOlive}40`, background: "white" }}
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
