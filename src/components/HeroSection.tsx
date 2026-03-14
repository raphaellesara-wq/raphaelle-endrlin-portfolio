import { useLanguage } from "@/contexts/LanguageContext";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { label: t("לקוחות", "Clients"), value: "+20" },
    { label: t("שנות ניסיון", "Years Experience"), value: "3" },
    { label: t("אוטומציות פעילות", "Active Automations"), value: "+40" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-20 pb-16 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. שם מרכזי - רפאל (Secular One Bold) אנדרלין (Rubik Light) */}
        <div className="w-full text-center mb-10 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-tight">
            <span 
              className="text-[#1C1A28] font-bold inline-block"
              style={{ fontFamily: "'Secular One', sans-serif" }}
            >
              {t("רפאל", "Raphaëlle")}
            </span>
            <span 
              className="text-[#C9A0A8] font-light inline-block mr-4 md:mr-6"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* 2. תוכן מרכזי - חלוקה לטורים ללא רווחים מיותרים */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 md:gap-0">
          
          {/* טקסט שיווקי - צד ימין */}
          <div className="flex-1 text-right hero-fade-up order-2 md:order-1" style={{ animationDelay: "0.2s" }}>
            <div className="max-w-xl md:pr-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 leading-tight font-medium">
                {t(
                  "מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות ומסעות לקוח.",
                  "End-to-End Growth Engine: Website Design & Development, Business Automation, and Customer Journeys."
                )}
              </p>
            </div>
          </div>

          {/* אילוסטרציה גדולה מאוד - צד שמאל */}
          <div className="flex-1 w-full hero-fade-up order-1 md:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl aspect-square transform md:scale-110 lg:scale-125">
               <HeroIllustration />
            </div>
          </div>
        </div>

        {/* 3. שורת ביצועים - צבעים נייטרליים */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-auto pt-12 border-t border-slate-100 hero-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <span className="text-5xl font-bold text-slate-800 mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
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
