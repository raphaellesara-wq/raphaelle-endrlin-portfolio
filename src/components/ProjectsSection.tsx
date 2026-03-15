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
    enDesc: "Automated loyalty system providing credits and birthday rewards. Includes 3 marketing journeys for retention and membership renewal.",
    heResult: "חיסכון בזמן יקר, יצירת מערכת אוטומטית לחלוטין ואחוזי המרה גבוהים.",
    enResult: "Saved operational time and increased conversion rates.",
    tools: [
      { name: "Rise.ai", img: "/Rise.png" },
      { name: "Flashy", img: "/FlashyApp.png" },
      { name: "Canva", img: "/Canva.jpeg" }
    ],
  },
  {
    heTitle: "מסע לקוח פרסונלי מבוסס זמן",
    enTitle: "Personalized Pregnancy Journey",
    heDesc: "מערכת דיוור חכמה המחשבת את שבוע ההיריון של המשתמשת ומגישה תוכן אינפורמטיבי ומכירתי מותאם אישית לקידום מכשירי טנס.",
    enDesc: "Smart email system delivering tailored content based on pregnancy week to promote TENS devices.",
    heResult: "מעורבות גבוהה של מעל 60% פתיחה לאורך שנה והצטרפות של אלפי נשים למאגר הלקוחות.",
    enResult: "Increased warm audience and high brand engagement with 60%+ open rate.",
    tools: [
      { name: "Flashy", img: "/FlashyApp.png" },
      { name: "Figma", img: "/Figma-logo.svg.png" },
      { name: "Canva", img: "/Canva.jpeg" }
    ],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "אוטומציה מורכבת המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת בעזרת AI למניעת אובדן פוטנציאל עסקי.",
    enDesc: "Complex automation routing inquiries from Telegram groups to Google Sheets with real-time AI alerts.",
    heResult: "ניהול פניות מסודר וקיצור משמעותי בזמני התגובה בעזרת סיווג אוטומטי של המחלקה הרלוונטית.",
    enResult: "Organized lead management and significantly reduced response times via automatic classification.",
    tools: [
      { name: "Make", img: "/Make.com.jpeg" },
      { name: "Claude", img: "/Claude.jpeg" },
      { name: "Sheets", img: "/sheets.png" }
    ],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white -mt-20 relative z-20 font-sans">
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
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center leading-tight" style={{ color: pink, fontFamily: "'Secular One', sans-serif" }}>
                {t(project.heTitle, project.enTitle)}
              </h3>

              <p className="text-lg text-slate-500 text-center leading-relaxed mb-8 font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              <div 
                className="mt-auto mb-10 p-6 rounded-[30px] border border-slate-50" 
                style={{ backgroundColor: olivePremium }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] mb-2 px-3 py-1 rounded-full bg-white shadow-sm" style={{ color: oliveDark }}>
                    {t("התוצאה בשטח", "Field Result")}
                  </span>
                  <p className="text-sm md:text-base text-slate-800 text-center font-medium leading-relaxed italic">
                    "{t(project.heResult, project.enResult)}"
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-100 mb-8" />

              <div className="flex justify-center gap-6">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group/tool">
                    <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-all group-hover/tool:scale-110 overflow-hidden">
                      <img 
                        src={tool.img} 
                        alt={tool.name} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // ניסיון אחרון - אם לא מצא ב-root, יחפש בתיקיית הציבורית
                          const currentSrc = e.currentTarget.src;
                          if (!currentSrc.includes('/public/')) {
                             e.currentTarget.src = '/public' + tool.img;
                          }
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
