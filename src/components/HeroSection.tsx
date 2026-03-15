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
    <section className="relative w-full bg-white overflow-x-hidden pt-24 md:pt-32 pb-12 md:pb-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Title */}
        <div className="w-full text-center mb-16 md:mb-24 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight flex flex-row flex-wrap justify-center gap-4 md:gap-8 items-baseline">
            <span className="text-[#1C1A28] font-bold" style={{ fontFamily: "'Secular One', sans-serif" }}>{t("רפאל", "Raphaëlle")}</span>
            <span className="text-[#C9A0A8] font-light" style={{ fontFamily: "'Rubik', sans-serif" }}>{t("אנדרלין", "Enderlin")}</span>
          </h1>
        </div>

        {/* Desktop Layout - Using Grid for stability */}
        <div className="hidden md:grid grid-cols-2 items-center w-full gap-0 overflow-visible">
          
          {/* Text content - Left/Right side */}
          <div className={`flex flex-col z-20 hero-fade-up ${isRTL ? 'order-1 items-start text-right' : 'order-1 items-start text-left'}`}>
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

          {/* Illustration - Occupies space so content doesn't jump */}
          <div className={`relative flex justify-center items-center overflow-visible ${isRTL ? 'order-2' : 'order-2'}`}>
            <div className={`relative w-full aspect-square transform scale-[1.5] lg:scale-[1.7] transition-all duration-500 pointer-events-none ${isRTL ? '-mr-[45%]' : '-ml-[45%]'}`}>
               <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center text-center gap-12 md:hidden w-full hero-fade-up">
          <div className="w-full max-w-[280px] transform scale-125 mb-4"><HeroIllustration /></div>
          {/* ... mobile stats ... */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
