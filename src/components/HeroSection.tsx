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
          className: "relative md:left-[-20px]" 
        },
        { label: <>Automations <br /> &nbsp;</>, value: "40+" },
      ];

  return (
    <section
      className="relative flex flex-col items-center pt-12 md:pt-24 pb-12 md:pb-24 overflow-x-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <div className="w-full text-center mb-12 md:mb-20 z-20 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>
              {t("רפאל", "Raphaëlle")}
            </span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* Desktop Layout - Re-engineered */}
        <div className="hidden md:flex relative w-full max-w-6xl mx-auto items-center min-h-[500px]">
          
          {/* Text content - Fixed Width to prevent shifting */}
          <div className={`w-[55%] flex flex-col z-20 hero-fade-up ${isRTL ? 'items-end text-right' : 'items-start text-left'}`} style={{ animationDelay: "0.2s" }}>
            <div className="w-full max-w-xl">
              <div className="flex gap-10 mb-8 items-start justify-start">
                {stats.map((stat, index) => (
                  <div key={index} className={`flex flex-col items-start gap-0 ${stat.className || ""}`}>
                    <span className="text-7xl font-black text-[#C9A0A8] leading-none tracking-tighter">
                      {stat.value}
                    </span>
                    <div className="text-sm text-black font-semibold uppercase tracking-[0.15em] mt-2 leading-[1.2]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`w-14 h-1 bg-[#C9A0A8] mb-8 ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`} />
              
              <p className="text-2xl lg:text-3xl text-slate-800 leading-[1.4] tracking-tight font-thin"
                 style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
                {isRTL ? (
                  <>מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות <span className="whitespace-nowrap">ומסעות לקוח.</span></>
                ) : (
                  <>End-to-End Growth Engine: Website Design & Development, Business Automation and Customer <span className="whitespace-nowrap">Journeys.</span></>
                )}
              </p>
            </div>
          </div>

          {/* Illustration - Absolute Positioned to Kill Scrollbars */}
          <div className={`absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none transition-all duration-700
            ${isRTL ? 'left-[40%]' : 'right-[40%]'} 
            w-[600px] lg:w-[800px] aspect-square flex justify-center items-center`}
          >
            <div className="transform scale-[1.8] lg:scale-[2.0]">
               <HeroIllustration />
            </div>
          </div>

        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center text-center gap-12 md:hidden w-full hero-fade-up">
          <div className="w-full max-w-[280px] transform scale-110 mb-4">
            <HeroIllustration />
          </div>

          <div className="flex gap-6 items-start justify-center w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-0">
                <span className="text-4xl font-black text-[#C9A0A8] leading-none tracking-tighter">
                  {stat.value}
                </span>
                <div className="text-[10px] text-black font-semibold uppercase tracking-[0.1em] mt-2 leading-[1.2]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-1 bg-[#C9A0A8] mb-6" />
            <p className="text-xl text-slate-800 leading-[1.4] tracking-tight font-thin px-4"
               style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
              {t("מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח.", "End-to-End Growth Engine: Website Design & Development, Business Automation and Customer Journeys.")}
            </p>
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
