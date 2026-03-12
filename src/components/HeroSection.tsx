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
      className="relative flex flex-col items-center justify-center pt-24 pb-16"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ minHeight: "80vh" }}
    >
      <div className="container max-w-5xl px-6 flex flex-col items-center text-center">
        
        {/* שם בשורה אחת במרכז - ללא שורת תיאור מעל */}
        <div className="mb-12 hero-fade-up">
          <h1 style={{ fontFamily: "'Secular One', sans-serif" }} className="text-5xl md:text-7xl lg:text-8xl tracking-tight">
            <span className="text-[#1C1A28]">{t("רפאל", "Raphaëlle")}</span>{" "}
            <span className="text-[#C9A0A8] font-light">{t("אנדרלין", "Enderlin")}</span>
          </h1>
        </div>

        {/* האילוסטרציה במרכז */}
        <div className="relative w-full max-w-2xl aspect-video mb-12 hero-fade-up" style={{ animationDelay: "0.2s" }}>
          <HeroIllustration />
        </div>

        {/* שלושת הפרטים במקום הכרטיס - נקיים וממורכזים */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-4 hero-fade-up w-full max-w-3xl"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-[#1C1A28] mb-2">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-medium">
                {stat.label}
              </span>
              <div className="w-8 h-[2px] bg-[#C9A0A8]/30 mt-3" />
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
