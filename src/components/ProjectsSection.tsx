import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pink = "#C9A0A8";
const olive = "#8B9E6B";

const projects = [
  {
    heTitle: "מועדון לקוחות חכם (Shopify & Rise.ai)",
    enTitle: "Smart Loyalty Club (Shopify & Rise.ai)",
    heDesc: "הקמת מערכת נאמנות אוטומטית המעניקה קרדיטים והטבות יום הולדת ללא מגע יד אדם. המערכת כוללת 3 מסעות לקוח שיווקיים לשימור לקוחות וחידוש חברות.",
    enDesc: "Automated loyalty system providing credits and rewards. Includes 3 marketing journeys for customer retention.",
    heResult: "חסיכון בזמן יקר, יצירת מערכת אוטומטית לחלוטין ואחוזי המרה גבוהים.",
    enResult: "Significant time savings, fully automated system, and high conversion rates.",
    tools: [
      { name: "Shopify", img: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
      { name: "Rise.ai", img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Shopping_cart_icon.svg" },
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
        
        {/* כותרת הסקשן - Secular One, ללא Italic */}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-[40px] border border-slate-100 p-8 md:p-10 flex flex-col transition-all duration-500 shadow-sm hover:shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* כותרת קטנה וורודה ב-Secular One */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center leading-tight" style={{ color: pink, fontFamily: "'Secular One', sans-serif" }}>
                {t(project.heTitle, project.enTitle)}
              </h3>

              {/* תיאור */}
              <p className="text-base md:text-lg text-slate-600 text-center leading-relaxed mb-6 font-light">
                {t(project.heDesc, project.enDesc)}
              </p>

              {/* תוצאה - בולטת יותר */}
              <div className="mt-auto mb-8 p-5 rounded-2xl bg-[#FDF5F2] border border-[#F5E6E0]">
                <p className="text-sm md:text-base text-slate-800 text-center leading-snug">
                  <span className="font-bold block mb-1" style={{ color: olive }}>{t("התוצאה בשטח:", "Field Result:")}</span>
                  {t(project.heResult, project.enResult)}
                </p>
              </div>

              {/* קו מפריד */}
              <div className="w-full h-[1px] bg-slate-100 mb-6" />

              {/* לוגואים מתוקנים */}
              <div className="flex justify-center gap-4">
                {project.tools.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                      <img 
                        src={tool.img} 
                        alt={tool.name} 
                        className="w-6 h-6 object-contain"
                        onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2111/2111432.png"; }}
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
