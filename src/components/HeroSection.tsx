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
      className="relative min-h-screen flex flex-col items-center pt-20 pb-12 overflow-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. שם - ממורכז בראש הדף */}
        <div className="w-full text-center mb-16 md:mb-20 hero-fade-up z-20">
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

        {/* 2. גוף ההירו - חלוקה לטורים עם מרווח 25% ומרכוז */}
        <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center w-full gap-16 lg:gap-32 mb-20`}>
          
          {/* טור אילוסטרציה - קרוב למרכז, גודל +50% */}
          <div className="flex-1 w-full max-w-[450px] md:max-w-xl lg:max-w-2xl flex justify-center hero-fade-up z-10" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square scale-125 md:scale-[1.75] lg:scale-[2.0] transform origin-center">
               <HeroIllustration />
            </div>
          </div>

          {/* טור טקסט שיווקי - מיושר לפי השפה וקרוב למרכז */}
          <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'} hero-fade-up z-20`} style={{ animationDelay: "0.3s" }}>
            <div className={`max-w-lg ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`}>
              <div className={`w-12 h-1 bg-[#C9A0A8] mb-6 ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`} />
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-[1.2] font-semibold tracking-tight">
                {t(
                  "מנוע צמיחה מקצה לקצה- עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח",
                  "End-to-End Growth Engine- Website Design & Development, Business Automation, and Customer Journeys"
                )}
              </p>
            </div>
          </div>

        </div>

        {/* 3. סקשן ביצועים */}
        <div 
          className="w-full mt-auto pt-10 pb-6 border-t border-slate-100 hero-fade-up z-10"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-7xl font-black text-[#C9A0A8] leading-none tracking-tighter mb-2">
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
