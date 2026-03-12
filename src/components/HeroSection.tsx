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
      className="relative min-h-screen flex flex-col items-center pt-24 pb-16 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* 1. השם - ממורכז לחלוטין בראש הדף */}
        <div className="w-full text-center mb-16 md:mb-24 hero-fade-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
            <span className="text-[#1C1A28] font-bold inline-block ml-4">
              {t("רפאל", "Raphaëlle")}
            </span>
            <span 
              className="text-[#C9A0A8] font-light inline-block"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              {t("אנדרלין", "Enderlin")}
            </span>
          </h1>
        </div>

        {/* 2. גוף ההירו - חלוקה לטורים: טקסט מימין, איור משמאל */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full mb-20">
          
          {/* טקסט שיווקי - צד ימין */}
          <div className="flex-1 text-right hero-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed font-light">
              {t(
                "אני עוזרת לעסקים לבנות מערכות שיווק במייל ואוטומציות מבוססות AI. מהאסטרטגיה ועד הביצוע — עם דגש על תוצאות מדידות.",
                "I help businesses build email marketing systems and AI-based automations. From strategy to execution — with an emphasis on measurable results."
              )}
            </p>
          </div>

          {/* אילוסטרציה גדולה - צד שמאל */}
          <div className="flex-1 w-full flex justify-center md:justify-start hero-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg lg:max-w-2xl aspect-square md:scale-110 lg:scale-125">
               <HeroIllustration />
            </div>
          </div>
        </div>

        {/* 3. שורת ביצועים - נייטרלית */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-12 border-t border-slate-100 hero-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-right">
              <span className="text-5xl font-bold text-slate-800 mb-2">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
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
