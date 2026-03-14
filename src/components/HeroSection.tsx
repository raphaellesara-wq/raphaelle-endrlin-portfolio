import { useLanguage } from "@/contexts/LanguageContext";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = isRTL 
    ? [
        { label: <>שנות <br /> ניסיון</>, value: "3" },
        { label: <>לקוחות <br /> &nbsp;</>, value: "30+" },
        { label: <>אוטומציות <br /> &nbsp;</>, value: "40+" },
      ]
    : [
        { label: <>Years <br /> Experience</>, value: "3" },
        { 
          label: <>Clients <br /> &nbsp;</>, 
          value: "30+",
          className: "relative left-[-20px]" 
        },
        { label: <>Automations <br /> &nbsp;</>, value: "40+" },
      ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-24 pb-16 overflow-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* כותרת השם */}
        <div className="w-full text-center mb-12 md:mb-20 z-20 hero-fade-up">
          <h1 className="text-5xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>
              {t("רפאל", "Raphaëlle")}
            </span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* גוף ההירו - במובייל הופך ל-reverse כדי שהאיור יהיה מעל הטקסט */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8 md:gap-2 mb-20">
          
          {/* צד טקסט */}
          <div className={`w-full md:w-[48%] flex flex-col hero-fade-up z-20 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`} style={{ animationDelay: "0.2s" }}>
            <div className="w-full max-w-xl">
              
              {/* סטרייפ סטטיסטיקות */}
              <div className={`flex gap-6 md:gap-10 mb-6 items-start justify-center md:justify-start ${isRTL ? 'flex-row' : 'flex-row'}`}>
                {stats.map((stat, index) => (
                  <div key={index} className={`flex flex-col items-start gap-0 ${stat.className || ""}`}>
                    <span className="text-4xl md:text-7xl font-black text-[#C9A0A8] leading-none tracking-tighter">
                      {stat.value}
                    </span>
                    <div className="text-[10px] md:text-sm text-black font-semibold uppercase tracking-[0.1em] md:tracking-[0.15em] mt-2 leading-[1.2] min-h-[2.4em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`w-14 h-1 bg-[#C9A0A8] mb-6 ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`} />
              
              <p className="text-lg md:text-2xl lg:text-3xl text-slate-800 leading-[1.4] tracking-tight font-thin"
                 style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
                {isRTL ? (
                  <>מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות <span className="whitespace-nowrap">ומסעות לקוח.</span></>
                ) : (
                  <>End-to-End Growth Engine: Website Design & Development, Business Automation and Customer <span className="whitespace-nowrap">Journeys.</span></>
                )}
              </p>
            </div>
          </div>

          {/* צד אילוסטרציה - תיקון למובייל */}
          <div className="w-full md:w-[42%] flex justify-center items-center hero-fade-up z-10 mb-8 md:mb-0" style={{ animationDelay: "0.3s" }}>
            <div 
              className={`relative w-[280px] h-[280px] md:w-full md:aspect-square transform transition-all duration-500
                scale-[1.2] md:scale-[2.0] lg:scale-[2.2]
                /* המרג'ין השלילי (הקירוב) עובד רק מדסקטופ (md) */
                ${isRTL ? 'md:-mr-[55%]' : 'md:-ml-[55%]'} 
              `}
            >
               <HeroIllustration />
            </div>
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
