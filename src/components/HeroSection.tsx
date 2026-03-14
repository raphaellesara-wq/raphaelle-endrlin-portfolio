import { useLanguage } from "@/contexts/LanguageContext";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { label: t("לקוחות", "Clients"), value: "20+" },
    { label: t("שנות ניסיון", "Years Experience"), value: "3" },
    { label: t("אוטומציות פעילות", "Active Automations"), value: "40+" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-20 pb-12 overflow-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* כותרת השם - ממורכזת למעלה */}
        <div className="w-full text-center mb-16 md:mb-24 z-20 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>
              {t("רפאל", "Raphaëlle")}
            </span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* פריסת ההירו: אילוסטרציה בשמאל | טקסט בימין */}
        {/* השתמשתי ב-flex-row-reverse כברירת מחדל לעברית כדי לכפות את הסדר שביקשת */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-6xl mx-auto gap-8 lg:gap-12 mb-20">
          
          {/* טור ימני: טקסט שיווקי */}
          <div className="w-full md:w-1/2 flex flex-col items-end hero-fade-up z-20" style={{ animationDelay: "0.2s" }}>
            <div className="text-right max-w-lg">
              <div className="w-12 h-1 bg-[#C9A0A8] mb-6 mr-0 ml-auto" />
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-bold leading-[1.2] tracking-tight">
                {t(
                  "מנוע צמיחה מקצה לקצה- עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח",
                  "End-to-End Growth Engine- Website Design & Development, Business Automation, and Customer Journeys"
                )}
              </p>
            </div>
          </div>

          {/* טור שמאלי: אילוסטרציה (מוגדלת ב-50% ומעלה) */}
          <div className="w-full md:w-1/2 flex justify-center items-center hero-fade-up z-10" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-[550px] aspect-square transform scale-150 lg:scale-[1.7] transition-transform">
               <HeroIllustration />
            </div>
          </div>

        </div>

        {/* סקשן סטטיסטיקות תחתון */}
        <div className="w-full mt-auto pt-10 border-t border-slate-100 hero-fade-up z-10" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-7xl font-black text-[#C9A0A8] leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-sm text-black uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          animation: heroFadeUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
