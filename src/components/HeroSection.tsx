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
      className="relative flex flex-col items-center justify-center pt-24 pb-16"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-6xl px-6 flex flex-col items-center text-center">
        
        {/* כותרת שם - דגש מקסימלי על רפאל */}
        <div className="mb-12 hero-fade-up">
          <h1 
            style={{ fontFamily: "'Secular One', sans-serif" }} 
            className="text-6xl md:text-8xl lg:text-9xl tracking-tighter flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2"
          >
            {/* רפאל - מודגש מאוד וכהה */}
            <span className="text-[#1C1A28] font-black italic md:not-italic">
              {t("רפאל", "Raphaëlle")}
            </span>
            
            {/* אנדרלין - דק מאוד ובהיר */}
            <span className="text-[#C9A0A8] font-extralight opacity-80">
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* אילוסטרציה - ממורכזת */}
        <div className="relative w-full max-w-sm md:max-w-md aspect-square mb-12 hero-fade-up flex justify-center items-center" style={{ animationDelay: "0.2s" }}>
          <div className="w-full h-full">
             <HeroIllustration />
          </div>
        </div>

        {/* שורת ביצועים - ירוק זית #819b6f */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 hero-fade-up w-full max-w-4xl"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-[#819b6f] mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-medium">
                {stat.label}
              </span>
              <div className="w-10 h-[2px] bg-[#819b6f]/30 mt-4" />
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
