import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";
const oliveDark = "#8B9E6B"; 
const olivePremium = "rgba(139, 158, 107, 0.08)"; 

const projects = [
  {
    heTitle: "מועדון לקוחות חכם (Shopify & Rise.ai)",
    enTitle: "Smart Loyalty Club (Shopify & Rise.ai)",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. המערכת כוללת 3 מסעות לקוח שיווקיים לשימור לקוחות וחידוש חברות.",
    heResult: "חיסכון בזמן יקר, יצירת מערכת אוטומטית לחלוטין ואחוזי המרה גבוהים.",
    tools: [
      { name: "Rise.ai", fileName: "Rise.png" },
      { name: "Flashy", fileName: "FlashyApp.png" },
      { name: "Canva", fileName: "Canva.jpeg" }
    ],
  },
  {
    heTitle: "מסע לקוח פרסונלי מבוסס זמן",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון של המשתמשת ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס.",
    heResult: "מעורבות גבוהה של מעל 60% פתיחה לאורך שנה והצטרפות של אלפי נשים למאגר הלקוחות.",
    tools: [
      { name: "Flashy", fileName: "FlashyApp.png" },
      { name: "Figma", fileName: "Figma-logo.svg.png" },
      { name: "Canva", fileName: "Canva.jpeg" }
    ],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "אוטומציה מורכבת המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת בעזרת AI למניעת אובדן פוטנציאל עסקי.",
    heResult: "ניהול פניות מסודר וקיצור משמעותי בזמני התגובה בעזרת סיווג אוטומטי של המחלקה הרלוונטית.",
    tools: [
      { name: "Make", fileName: "Make.com.jpeg" },
      { name: "Claude", fileName: "Claude.jpeg" },
      { name: "Sheets", fileName: "sheets.png" }
    ],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white -mt-20 relative z-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
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
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center" style={{ color: pink, fontFamily: "'Secular One', sans-serif" }}>
                {t(project.heTitle, project.enTitle)}
              </h3>

              <p className="text-lg text-slate-500 text-center leading-relaxed mb-8 font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              <div className="mt-auto mb-10 p-6 rounded-[30px] border border-slate-50" style={{ backgroundColor: olivePremium }}>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-white shadow-sm" style={{ color: oliveDark }}>
                    {t("התוצאה בשטח", "Field Result")}
                  </span>
                  <p className="text-sm md:text-base text-slate-800 text-center font-medium italic">
                    "{t(project.heResult, project.enResult)}"
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100 mb-8" />

              <div className="flex justify-center gap-6">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm overflow-hidden">
                      <img 
                        src={`/${tool.fileName}`} 
                        alt={tool.name} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // אם לא מצא ב-root, מנסה לחפש בנתיבים נפוצים אחרים של Lovable
                          const target = e.currentTarget;
                          if (target.src.includes('/public/')) return;
                          target.src = `/public/${tool.fileName}`;
                        }}
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
