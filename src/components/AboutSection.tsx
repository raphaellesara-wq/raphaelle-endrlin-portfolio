import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white relative z-10 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Remove side padding from container on desktop to align with Projects */}
      <div className="max-w-7xl mx-auto px-4 md:px-0"> 
        <div className={`flex flex-col ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
          
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {isRTL ? (
               <>
                <div className="w-16 h-px bg-[#C9A0A8]" />
                <span className="text-sm font-bold tracking-[0.3em] text-[#C9A0A8] uppercase">{t("אודות", "ABOUT ME")}</span>
               </>
            ) : (
               <>
                <span className="text-sm font-bold tracking-[0.3em] text-[#C9A0A8] uppercase">{t("אודות", "ABOUT ME")}</span>
                <div className="w-16 h-px bg-[#C9A0A8]" />
               </>
            )}
          </div>

          <h2 className={`text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-10 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ fontFamily: "'Secular One', sans-serif" }}>
            {t("אסטרטגיה שפוגשת", "Strategy Meets")} <br />
            <span className="text-[#C9A0A8]">{t("טכנולוגיה", "Technology")}</span>
          </h2>

          <div className="max-w-3xl space-y-6 text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
             <p>{t("שלוש שנות ניסיון בניהול מחלקת Email Marketing...", "Three years of experience...")}</p>
             <p>{t("כיום אני מתמחה ב-AI ואוטומציות עסקיות...", "Currently advancing in AI...")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
