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
        
        {/* 1. כותרת השם - ממורכזת וגבוהה, מופרדת מהתוכן כדי שלא תהיה חפיפה */}
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

        {/* 2. גוף ההירו - חלוקה קשיחה ל-2 חלקים עם מרווח 10% במרכז */}
        <div className="grid grid-cols-12 items-center w-full gap-0 mb-20">
          
          {/* צד שמאל של המסך */}
          <div className="col-span-12 md:col-span-5 flex justify-center hero-fade-up order-2 md:order-none">
            {isRTL ? (
              /* בעברית: אילוסטרציה בשמאל, מקורבת למרכז */
              <div className="relative w-full max-w-[500px] aspect-square scale-125 md:scale-[1.6] transform origin-right">
                <HeroIllustration />
              </div>
            ) : (
              /* באנגלית: טקסט בשמאל, מיושר לשמאל */
              <div className="text-left w-full">
                <div className="w-12 h-1 bg-[#C9A0A8] mb-6 ml-0" />
                <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-semibold leading-tight">
                  {t(
                    "מנוע צמיחה מקצה לקצה- עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח",
                    "End-to-End Growth Engine- Website Design & Development, Business Automation, and Customer Journeys"
                  )}
                </p>
              </div>
            )}
          </div>

          {/* מרווח 10% בדיוק (2 עמודות מתוך 12) */}
          <div className="hidden md:block col-span-2" />

          {/* צד ימין של המסך */}
          <div className="col-span-12 md:col-span-5 flex justify-center hero-fade-up order-1 md:order-none">
            {isRTL ? (
              /* בעברית: טקסט בימין, מיושר לימין */
              <div className="text-right w-full">
                <div className="w-12 h-1 bg-[#C9A0A8] mb-6 mr-0 ml-auto" />
                <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 font-semibold leading-tight">
                  {t(
                    "מנוע צמיחה מקצה לקצה- עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח",
                    "End-to-End Growth Engine- Website Design & Development, Business Automation, and Customer Journeys"
                  )}
                </p>
              </div>
            ) : (
              /* באנגלית: אילוסטרציה בימין, מקורבת למרכז */
              <div className="relative w-full max-w-[500px] aspect-square scale-125 md:scale-[1.6] transform origin-left">
                <HeroIllustration />
              </div>
            )}
          </div>
        </div>

        {/* 3. סטרייפ ביצועים תחתון */}
        <div className="w-full pt-10 border-t border-slate-100 hero-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-5xl md:text-7xl font-black text-[#C9A0A8]">{stat.value}</span>
                <span className="text-[10px] md:text-sm text-black font-bold uppercase tracking-widest mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
