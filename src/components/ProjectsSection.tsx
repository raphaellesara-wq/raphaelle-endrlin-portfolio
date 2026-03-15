import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";
const oliveDark = "#8B9E6B"; // הירוק זית המקורי מהאילוסטרציה
const oliveSoft = "#F4F7F0"; // ירוק זית בהיר מאוד ועדין לרקע התיבה

const projects = [
  {
    heTitle: "מועדון לקוחות חכם (Shopify & Rise.ai)",
    enTitle: "Smart Loyalty Club (Shopify & Rise.ai)",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. המערכת כוללת 3 מסעות לקוח שיווקיים לשימור לקוחות וחידוש חברות.",
    enDesc: "Automated loyalty system with credits and rewards. Includes 3 marketing journeys for customer retention.",
    heResult: "חיסכון בזמן יקר, יצירת מערכת אוטומטית לחלוטין ואחוזי המרה גבוהים.",
    enResult: "Significant time savings, fully automated system, and high conversion rates.",
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
    enDesc: "Smart email system calculating pregnancy weeks to deliver tailored content promoting TENS devices.",
    heResult: "מעורבות גבוהה של מעל 60% פתיחה לאורך שנה והצטרפות של אלפי נשים למאגר הלקוחות.",
    enResult: "High engagement (60%+ open rate) and thousands of new leads joined the database.",
    tools: [
      { name: "Flashy", img: "https://flashyapp.com/wp-content/uploads/2021/03/flashy-logo-icon.png" },
      { name: "Figma", img: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Canva", img: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }
    ],
  },
  {
    heTitle: "מערכת ניהול לידים אוטומטית",
    enTitle: "Automated Lead Management System",
    heDesc: "אוטומציה מורכבת המנתבת פניות מקבוצות טלגרם ישירות ל-Google Sheets ומייצרת התראות בזמן אמת בעזרת AI למניעת אובדן פוטנציאל עסקי.",
    enDesc: "Complex automation routing leads from Telegram to Google Sheets with real-time AI alerts.",
    heResult: "ניהול פניות מסודר וקיצור משמעותי בזמני התגובה בעזרת סיווג אוטומטי של המחלקה הרלוונטית.",
    enResult: "Organized lead management and significantly faster response times via automated classification.",
    tools: [
      { name: "Make", img: "https://www.vectorlogo.zone/logos/make_com/make_com-icon.svg" },
      { name: "Telegram", img: "https://cdn.worldvectorlogo.com/logos/telegram-1.svg" },
      { name: "Sheets", img: "https://www.vectorlogo.zone/logos/google_sheets/google_sheets-icon.svg" }
    ],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white -mt-20 relative z-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        
        {/* כותרת הסקשן */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

        {/* גריד פרויקטים */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-[45px] border border-slate-100 p-10 flex flex-col transition-all duration-500 shadow-[0_5px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center leading-tight" style={{ color: pink, fontFamily: "'Secular One', sans-serif" }}>
                {t(project.heTitle, project.enTitle)}
              </h3>

              <p className="text-lg text-slate-500 text-center leading-relaxed mb-8 font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              {/* תיבת התוצאה - ירוק זית עדין ויוקרתי */}
              <div 
                className="mt-auto mb-10 p-6 rounded-[24px] border transition-colors hover:border-olive-300" 
                style={{ backgroundColor: oliveSoft, borderColor: `${oliveDark}20` }}
              >
                <p className="text-sm md:text-base text-slate-800 text-center leading-relaxed">
                  <span className="font-bold block mb-1 uppercase tracking-wider text-[11px]" style={{ color: oliveDark }}>
                    {t("התוצאה בשטח:", "Field Result:")}
                  </span>
                  {t(project.heResult, project.enResult)}
                </p>
              </div>

              <div className="w-full h-[1px] bg-slate-100 mb-8" />

              {/* לוגואים מתוקנים ללא GitHub Fallback */}
              <div className="flex justify-center gap-6">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group/tool">
                    <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center bg-white shadow-sm transition-all group-hover/tool:shadow-md group-hover/tool:border-pink-200">
                      <img 
                        src={tool.img} 
                        alt={tool.name} 
                        className="w-7 h-7 object-contain opacity-90 group-hover/tool:scale-110 transition-transform"
                      />
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
