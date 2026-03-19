import { useLanguage } from "@/contexts/LanguageContext";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = isRTL
    ? [
        { label: "שנות ניסיון", value: "3" },
        { label: "לקוחות", value: "30+" },
        { label: "אוטומציות", value: "40+" },
      ]
    : [
        { label: "Years Experience", value: "3" },
        { label: "Clients", value: "30+" },
        { label: "Automations", value: "40+" },
      ];

  return (
    <section
      className="relative flex flex-col items-center pt-8 md:pt-16 pb-5 md:pb-8 bg-white"
      style={{ overflow: "clip" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-4 md:px-6 relative z-10 flex flex-col items-center">

        {/* Title */}
        <div className="w-full text-center mb-4 md:mb-6 z-20 hero-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-3 md:gap-6 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>
              {t("רפאל", "Raphaëlle")}
            </span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* Mobile layout: illustration → stats → text */}
        <div className="flex flex-col items-center text-center gap-10 md:hidden w-full hero-fade-up">
          <HeroIllustration />

          <div className="flex gap-6 items-start justify-center w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-0">
                <span className="text-3xl font-black text-[#1C1A28] leading-none tracking-tighter">
                  {stat.value}
                </span>
                <div className="text-[10px] text-[#C9A0A8] font-semibold uppercase tracking-[0.1em] mt-2 leading-[1.2]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-1 bg-[#C9A0A8] mb-6" />
            <p className="text-xl text-slate-800 leading-[1.6] tracking-tight px-2"
               style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
              {isRTL ? (
                <>מנוע צמיחה מקצה לקצה:<br/>עיצוב ופיתוח אתרים,<br/>אוטומציות עסקיות ומסעות לקוח.</>
              ) : (
                <>End-to-End Growth Engine:<br/>Website Design & Development,<br/>Business Automation and Customer Journeys.</>
              )}
            </p>
          </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-row items-center justify-center w-full max-w-4xl mx-auto gap-0">

          {/* Illustration */}
          <div className="w-[50%] flex justify-center items-center hero-fade-up z-10 order-2">
            <div
              className={`relative w-full aspect-square transform transition-all duration-500
                scale-[1.6] lg:scale-[1.8]
                ${isRTL ? '-mr-[84%]' : '-ml-[84%]'}
              `}
            >
               <HeroIllustration />
            </div>
          </div>
        </div>

          {/* Text content */}
          <div
            className={`w-[50%] flex flex-col hero-fade-up z-20 order-1 ${isRTL ? 'items-end' : 'items-start'}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className={`w-full ${isRTL ? 'text-right' : 'text-left'}`}>

              {/* Stats — above paragraph text */}
              <div className="flex gap-8 mb-8 justify-start">
                {stats.map((stat, index) => (
                  <div key={index} style={{ display: 'grid', justifyItems: 'center', gap: 0 }}>
                    <span className="text-5xl font-black text-[#C9A0A8] leading-none tracking-tighter">
                      {stat.value}
                    </span>
                    <div className="text-sm text-black font-semibold uppercase tracking-[0.15em] mt-2 leading-[1.3] text-center whitespace-nowrap">
                      {!isRTL && index === 0
                        ? <><span>Years</span><br/><span>Experience</span></>
                        : stat.label
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className={`w-14 h-1 bg-[#C9A0A8] mb-5 ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`} />

              <p className="text-2xl lg:text-3xl text-slate-800 leading-[1.5] tracking-tight"
                 style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
                {isRTL ? (
                  <>מנוע צמיחה מקצה לקצה:<br/>עיצוב ופיתוח אתרים,<br/>אוטומציות עסקיות ומסעות לקוח.</>
                ) : (
                  <>End-to-End Growth Engine:<br/>Website Design & Development,<br/>Business Automation and Customer Journeys.</>
                )}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
