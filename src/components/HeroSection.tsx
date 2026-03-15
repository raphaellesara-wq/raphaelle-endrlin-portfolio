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
        { label: <>Clients <br /> &nbsp;</>, value: "30+" },
        { label: <>Automations <br /> &nbsp;</>, value: "40+" },
      ];

  return (
    <section
      className="relative flex flex-col items-center pt-12 md:pt-20 pb-0 overflow-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Container - matching the exact width of your other blocks */}
      <div className="container max-w-7xl px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <div className="w-full text-center mb-12 md:mb-16 z-20 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>{t("רפאל", "Raphaëlle")}</span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>{t("אנדרלין", "Enderlin")}</span>
          </h1>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex relative w-full items-center min-h-[400px] overflow-visible">
          
          {/* Text content - Force alignment to the grid */}
          <div className={`w-full md:w-1/2 flex flex-col z-20 hero-fade-up ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
            <div className="flex gap-10 mb-8 items-start">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start gap-0">
                  <span className="text-7xl font-black text-[#C9A0A8] leading-none tracking-tighter">{stat.value}</span>
                  <div className="text-sm text-black font-semibold uppercase tracking-[0.15em] mt-2 leading-[1.2]">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="w-14 h-1 bg-[#C9A0A8] mb-8" />
            <p className="text-2xl lg:text-3xl text-slate-800 leading-[1.4] tracking-tight font-thin max-w-xl">
              {t("מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח.", "End-to-End Growth Engine: Website Design & Development, Business Automation and Customer Journeys.")}
            </p>
          </div>

          {/* Illustration - Absolute to prevent scrolling and gaps */}
          <div className={`absolute top-1/2 -translate-y-1/2 z-0 pointer-events-none
            ${isRTL ? '-left-10 lg:-left-20' : '-right-10 lg:-right-20'} w-[500px] lg:w-[700px] aspect-square`}>
            <div className="transform scale-[1.3] lg:scale-[1.5]">
              <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center text-center gap-8 md:hidden w-full hero-fade-up pb-12">
          <div className="w-full max-w-[250px] transform scale-110 mb-4"><HeroIllustration /></div>
          <div className="flex gap-6 justify-center w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center"><span className="text-4xl font-black text-[#C9A0A8]">{stat.value}</span><div className="text-[10px] font-semibold uppercase mt-2">{stat.label}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
