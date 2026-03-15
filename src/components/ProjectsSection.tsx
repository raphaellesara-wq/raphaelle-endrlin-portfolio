import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";
const oliveDark = "#8B9E6B"; 
// ירוק זית עדין מאוד למראה מעוב ומקצועי
const olivePremium = "rgba(139, 158, 107, 0.08)"; 

const projects = [
  {
    heTitle: "מועדון לקוחות חכם (Shopify & Rise.ai)",
    enTitle: "Smart Loyalty Club (Shopify & Rise.ai)",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. המערכת כוללת 3 מסעות לקוח שיווקיים לשימור לקוחות וחידוש חברות.",
    heResult: "חיסכון בזמן יקר, יצירת מערכת אוטומטית לחלוטין ואחוזי המרה גבוהים.",
    tools: [
      { name: "Shopify", img: "/הורדה (1).png" }, // לוגו שופיפי שהעלית
      { name: "Rise.ai", img: "/הורדה (1).jpeg" }, // לוגו Rise
      { name: "Flashy", img: "/הורדה (2).png" }, // לוגו פלאשי
      { name: "Canva", img: "/הורדה.jpeg" } // לוגו קנבה
    ],
  },
  {
    heTitle: "מסע לקוח פרסונלי מבוסס זמן",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון של המשתמשת ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס.",
    heResult: "מעורבות גבוהה של מעל 60% פתיחה לאורך שנה והצטרפות של אלפי נשים למאגר הלקוחות.",
    tools: [
      { name: "Flashy", img: "/הורדה (2).png" },
      { name: "Figma", img: "/Figma-logo.svg.png" },
      { name: "Canva", img: "/הורדה.jpeg" }
    ],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "אוטומציה מורכבת המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת בעזרת AI למניעת אובדן פוטנציאל עסקי.",
    heResult: "ניהול פניות מסודר וקיצור משמעותי בזמני התגובה בעזרת סיווג אוטומטי של המחלקה הרלוונטית.",
    tools: [
      { name: "Make", img: "/הורדה (2).jpeg" }, // לוגו Make
      { name: "Telegram", img: "https://cdn.worldvectorlogo.com/logos/telegram-1.svg" }, 
      { name: "Sheets", img: "/הורדה.png" } // לוגו Sheets
    ],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white -mt-20 relative z-20 font-sans">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* כותרת הסקשן */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px]" style={{ background: pink }} />
            <span className="text-sm tracking-[0.2em] font-medium uppercase" style={{ color: pink }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9]" style={{ fontFamily: "'Secular One', sans-serif" }}>
            {t("ניסיון ", "Field ")}
            <span style={{ color: pink }}>{t("בשטח", "Experience")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-[45px] border border-slate-100 p-10 flex flex-col transition-all duration-500 shadow-sm hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* כותרת כרטיסייה קטנה וורודה */}
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center leading-tight" style={{ color: pink, fontFamily: "'Secular One', sans-serif" }}>
                {t(project.heTitle, project.enTitle)}
              </h3>

              <p className="text-lg text-slate-500 text-center leading-relaxed mb-8 font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              {/* תיבת התוצאה בירוק זית יוקרתי */}
              <div 
                className="mt-auto mb-10 p-6 rounded-[30px] border border-slate-50 transition-all hover:scale-[1.02]" 
                style={{ backgroundColor: olivePremium }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 px-3 py-1 rounded-full bg-white shadow-sm" style={{ color: oliveDark }}>
                    {t("התוצאה בשטח", "Field Result")}
                  </span>
                  <p className="text-sm md:text-base text-slate-800 text-center font-medium leading-relaxed">
                    {t(project.heResult, project.enResult)}
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100 mb-8" />

              {/* לוגואים מבוססי קבצים שהעלית */}
              <div className="flex justify-center gap-6">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group/tool">
                    <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-all group-hover/tool:border-pink-200">
                      <img 
                        src={tool.img} 
                        alt={tool.name} 
                        className="w-8 h-8 object-contain transition-transform group-hover/tool:scale-110"
                      />
                    </div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{tool.name}</span>
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
