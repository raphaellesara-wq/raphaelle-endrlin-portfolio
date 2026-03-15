import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";
const olive = "#8B9E6B";

const projects = [
  {
    heTitle: "מועדון לקוחות חכם (Shopify & Rise.ai)",
    enTitle: "Smart Loyalty Club (Shopify & Rise.ai)",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. המערכת כוללת 3 מסעות לקוח שיווקיים לשימור לקוחות וחידוש חברות.",
    enDesc: "Implementing an automated loyalty system with credits and rewards. Includes 3 marketing journeys for retention and renewal.",
    tools: [
      { name: "Shopify", img: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
      { name: "Rise.ai", img: "https://static.wixstatic.com/media/7f4851_5e5d590469b6408283a0026e499d63c4~mv2.png" },
      { name: "Flashy", img: "https://flashyapp.com/wp-content/uploads/2021/03/flashy-logo-icon.png" },
      { name: "Canva", img: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }
    ],
  },
  {
    heTitle: "מסע לקוח פרסונלי מבוסס זמן",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון של המשתמשת ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס.",
    enDesc: "A smart email system that calculates pregnancy weeks to deliver tailored informative content for TENS devices.",
    tools: [
      { name: "Flashy", img: "https://flashyapp.com/wp-content/uploads/2021/03/flashy-logo-icon.png" },
      { name: "Figma", img: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Canva", img: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }
    ],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "אוטומציה מורכבת המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת למניעת אובדן פוטנציאל עסקי.",
    enDesc: "Complex automation routing leads from Telegram to Google Sheets with real-time alerts to ensure no opportunity is missed.",
    tools: [
      { name: "Make", img: "https://cdn.worldvectorlogo.com/logos/make-com.svg" },
      { name: "Telegram", img: "https://cdn.worldvectorlogo.com/logos/telegram-1.svg" },
      { name: "Sheets", img: "https://cdn.worldvectorlogo.com/logos/google-sheets-4.svg" }
    ],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white -mt-20 relative z-20 font-sans">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* כותרת הסקשן - ללא Italic */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px]" style={{ background: pink }} />
            <span className="text-sm md:text-base tracking-[0.2em] font-medium uppercase" style={{ color: pink }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9]" style={{ fontFamily: "'Secular One', sans-serif" }}>
            {t("ניסיון ", "Field ")}
            <span style={{ color: pink }}>{t("בשטח", "Experience")}</span>
          </h2>
        </div>

        {/* גריד הכרטיסיות */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-[45px] border border-slate-50 p-12 flex flex-col transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.05)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* נקודה דקורטיבית קטנה למעלה */}
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full opacity-20" style={{ background: olive }} />

              {/* כותרת הפרויקט - Secular One מודגש */}
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center leading-tight px-2" style={{ fontFamily: "'Secular One', sans-serif" }}>
                {t(project.heTitle, project.enTitle)}
              </h3>

              {/* תיאור הפרויקט */}
              <p className="text-xl text-slate-500 text-center leading-relaxed mb-12 flex-grow font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              {/* קו מפריד עדין לפני האייקונים */}
              <div className="w-full h-[1px] bg-slate-100 mb-10" />

              {/* שורת אייקונים נקייה בתחתית */}
              <div className="flex justify-center gap-6">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full border border-slate-50 flex items-center justify-center bg-white shadow-sm hover:scale-110 transition-transform duration-300">
                      <img src={tool.img} alt={tool.name} className="w-7 h-7 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tool.name}</span>
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
