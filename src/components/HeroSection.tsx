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
          className: "relative md:left-[-20px] left-0" 
        },
        { label: <>Automations <br /> &nbsp;</>, value: "40+" },
      ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-20 md:pt-24 pb-16 overflow-x-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* כותרת השם */}
        <div className="w-full text-center mb-10 md:mb-20 z-20 hero-fade-up">
          <h1 className="text-5xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>
              {t("רפאל", "Raphaëlle")}
            </span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* גוף ההירו */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto md:gap-2 mb-12 md:mb-20">
          
          {/* צד אילוסטרציה - תיקון ה-Visibility במובייל */}
          <div className="w-full md:w-[42%] flex justify-center items-center hero-fade-up z-10 mb-12 md:mb-0 order-1 md:order-2">
            <div 
              className={`relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-full md:aspect-square transform transition-all duration-500
                /* Scale עדין מאוד במובייל כדי שלא יברח מהצדדים */
                scale-[1.1] md:scale-[2.0] lg:scale-[2.2]
                /* המרג'ין השלילי (הקירוב) מתבטל לחלוטין מתחת ל-md */
                ${isRTL ? 'md:-mr-[55%] mr-0' : 'md:-ml-[55%] ml-0'} 
              `}
            >
               {/* הוספת wrapper פנימי שמוודא שה-SVG תופס 100% */}
               <div className="w-full h-full flex items-center justify-center">
                  <HeroIllustration />
               </div>
            </div>
          </div>

          {/* צד טקסט */}
          <div className={`w-full md:w-[48%] flex flex-col hero-fade-up z-20 order-2 md:order-1 ${isRTL ? 'items-center md:items-end' : 'items-center md:items-start'}`} style={{ animationDelay: "0.2s" }}>
            <div className={`w-full max-w-xl ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
              
              {/* סטרייפ סטטיסטיקות */}
              <div className="flex gap-6 md:gap-10 mb-8 items-start justify-center md:justify-start">
                {stats.map((stat, index) => (
                  <div key={index} className={`flex flex-col items-center md:items-start gap-0 ${stat.className || ""}`}>
                    <span className="text-4xl md:text-7xl font-black text-[#C9A0A8] leading-none tracking-tighter">
                      {stat.value}
                    </span>
                    <div className="text-[10px] md:text-sm text-black font-semibold uppercase tracking-[0.1em] md:tracking-[0.15em] mt-2 leading-[1.2] min-h-[2.4em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`w-14 h-1 bg-[#C9A0A8] mb-6 mx-auto md:mx-0 ${isRTL ? 'md:mr-0 md:ml-auto' : 'md:ml-0 md:mr-auto'}`} />
              
              <p className="text-lg md:text-2xl lg:text-3xl text-slate-800 leading-[1.4] tracking-tight font-thin px-4 md:px-0"
                 style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
                {isRTL ? (
                  <>מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות <span className="whitespace-nowrap">ומסעות לקוח.</span></>
                ) : (
                  <>End-to-End Growth Engine: Website Design & Development, Business Automation and Customer <span className="whitespace-nowrap">Journeys.</span></>
                )}
              </p>
            </div>
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
