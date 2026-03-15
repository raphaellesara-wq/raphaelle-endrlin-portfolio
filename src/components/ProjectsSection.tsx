import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";
const olive = "#8B9E6B"; // הירוק העדין מהאיור

const projects = [
  {
    heTitle: "מועדון לקוחות חכם (Shopify & Rise.ai)",
    enTitle: "Smart Loyalty Club (Shopify & Rise.ai)",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. המערכת כוללת 3 מסעות לקוח שיווקיים לשימור לקוחות וחידוש חברות.",
    enDesc: "Implementing an automated loyalty system providing credits and rewards. Includes 3 marketing journeys for retention and membership renewal.",
    tools: [
      { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
      { name: "Rise.ai", icon: "🛍️" },
      { name: "Flashy", icon: "⚡" },
      { name: "Canva", icon: "🎨" }
    ],
  },
  {
    heTitle: "מסע לקוח פרסונלי מבוסס זמן",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון של המשתמשת ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס.",
    enDesc: "A smart email system that calculates pregnancy weeks to deliver tailored informative and sales content for TENS devices.",
    tools: [
      { name: "Flashy", icon: "⚡" },
      { name: "Figma", icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Canva", icon: "🎨" }
    ],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "אוטומציה מורכבת המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת למניעת אובדן פוטנציאל עסקי.",
    enDesc: "Complex automation routing leads from Telegram groups to Google Sheets with real-time alerts to ensure no opportunity is missed.",
    tools: [
      { name: "Make", icon: "https://cdn.worldvectorlogo.com/logos/make-com.svg" },
      { name: "Telegram", icon: "https://cdn.worldvectorlogo.com/logos/telegram-1.svg" },
      { name: "Sheets", icon: "📊" }
    ],
  },
];

const ProjectsSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-white -mt-10 md:-mt-20 relative z-20"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* כותרת הסקשן בסגנון הנקי של האתר */}
        <div className={`mb-16 text-center md:text-right transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <span className="text-sm tracking-[0.2em] font-bold uppercase" style={{ color: pink }}>
              {t("פרויקטים", "Projects")}
            </span>
            <div className="w-12 h-px" style={{ background: pink }} />
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight">
            {t("ניסיון ", "Field ")}
            <span className="font-light italic" style={{ color: pink }}>{t("בשטח", "Experience")}</span>
          </h2>
        </div>

        {/* גריד רחב ונקי לפי התיעוד החדש */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group bg-white rounded-[40px] border border-slate-100 p-10 md:p-12 flex flex-col transition-all duration-500 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              {/* נקודת קישוט קטנה בצד לפי התיעוד */}
              <div className="absolute top-8 left-8 w-2 h-2 rounded-full opacity-20" style={{ background: olive }} />

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center leading-tight">
                {t(project.heTitle, project.enTitle)}
              </h3>

              <p className="text-lg text-slate-500 text-center leading-relaxed mb-10 flex-grow font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              {/* קו מפריד עדין */}
              <div className="w-full h-px bg-slate-100 mb-8" />

              {/* אייקונים של כלים בתחתית - בדיוק לפי התיעוד */}
              <div className="flex flex-wrap justify-center gap-4">
                {project.tools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm hover:scale-110 transition-transform">
                      {tool.icon.startsWith('http') ? (
                        <img src={tool.icon} alt={tool.name} className="w-6 h-6 object-contain grayscale hover:grayscale-0 transition-all" />
                      ) : (
                        <span className="text-xl">{tool.icon}</span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">{tool.name}</span>
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
