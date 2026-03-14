import { useLanguage } from "@/contexts/LanguageContext";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { label: t("אוטומציות פעילות", "Active Automations"), value: "40+" },
    { label: t("שנות ניסיון", "Years Experience"), value: "3" },
    { label: t("לקוחות", "Clients"), value: "20+" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-20 pb-12 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. כותרת השם - ממורכזת וגדולה (מבוסס על התיעוד ששלחת) */}
        <div className="w-full text-center mb-12 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span 
              className="text-[#1C1A28] font-bold"
              style={{ fontFamily: "'Secular One', sans-serif" }}
            >
              {t("רפאל", "Raphaëlle")}
            </span>
            <span 
              className="text-[#C9A0A8] font-light"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* 2. גוף ההירו - כאן ביצענו את ההגדלה המאסיבית וצמצום הרווחים */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 lg:gap-12 mb-8">
          
          {/* האילוסטרציה מקבלת כאן נפח ענק (flex-[1.5]) וצד שמאל (origin-left) */}
          <div className="flex-[1.5] w-full flex justify-center md:justify-start hero-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-2xl lg:max-w-4xl aspect-video md:scale-125 lg:scale-150 transform origin-left">
               <HeroIllustration />
            </div>
          </div>

          {/* הטקסט המעודכן - עם "רווח נשימה" נכון ללא חפיפה */}
          <div className="flex-1 text-right hero-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="max-w-xl">
              <div className="w-12 h-1 bg-[#C9A0A8] mb-6 mr-0 ml-auto" />
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-[1.2] font-semibold tracking-tight">
                {t(
                  "מנוע צמיחה מקצה לקצה- עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח",
                  "End-to-End Growth Engine- Website Design & Development, Business Automation, and Customer Journeys"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* 3. סטרייפ ביצועים - צבע שחור לטקסט וצמצום רווחים */}
        <div 
          className="w-full mt-auto pt-8 pb-4 border-t border-slate-100 hero-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-7xl font-black text-[#C9A0A8] leading-none tracking-tighter">
                  {stat.value}
                </span>
                {/* כאן שיניתי לשחור בולט (text-black) כפי שביקשת בתמונה */}
                <span className="text-[10px] md:text-sm text-black uppercase tracking-[0.2em] font-bold mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
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
