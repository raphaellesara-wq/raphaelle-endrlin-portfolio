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
      className="relative min-h-[90vh] flex flex-col items-center pt-24 pb-16 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. שם - ממורכז (השארתי את מה שעבד) */}
        <div className="w-full text-center mb-16 md:mb-20 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span 
              className="text-[#1C1A28] font-bold inline-block"
              style={{ fontFamily: "'Secular One', sans-serif" }}
            >
              {t("רפאל", "Raphaëlle")}
            </span>
            <span 
              className="text-[#C9A0A8] font-light inline-block"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* 2. גוף ההירו - הגדלתי את הכל! */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 w-full mb-20 md:mb-28">
          
          {/* טקסט שיווקי - צד ימין - מוגדל ומעוצב */}
          <div className="flex-1 text-right hero-fade-up max-w-xl md:scale-105" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* קו דקורטיבי קטן מעל */}
              <div className="w-16 h-1 bg-[#C9A0A8] mb-6 mr-auto md:ml-0 md:mr-0 ml-auto" />
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-[1.2] font-semibold tracking-tight">
                {t(
                  "מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח.",
                  "End-to-End Growth Engine: Website Design & Development, Business Automation, and Customer Journeys."
                )}
              </p>
            </div>
          </div>

          {/* אילוסטרציה ענקית - צד שמאל */}
          <div className="flex-1 w-full max-w-xl lg:max-w-3xl flex justify-center hero-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full aspect-square md:scale-125 lg:scale-150 transform origin-center">
               <HeroIllustration />
            </div>
          </div>
        </div>

        {/* 3. סטרייפ ביצועים - מוגדל וממורכז בצבע אנדרלין */}
        <div 
          className="w-full mt-auto pt-16 pb-6 border-t border-slate-100 hero-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* מספר ענק בצבע Dusty Rose (#C9A0A8) */}
                <span className="text-6xl md:text-7xl font-extrabold text-[#C9A0A8] mb-2 leading-none tracking-tighter">
                  {stat.value}
                </span>
                {/* תווית בצבע Dusty Rose קצת שקוף */}
                <span className="text-xs md:text-sm text-[#C9A0A8]/80 uppercase tracking-[0.3em] font-medium">
                  {stat.label}
                </span>
                {/* קו דקורטיבי קטן */}
                <div className="w-8 h-[2px] bg-[#C9A0A8]/30 mt-4" />
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
