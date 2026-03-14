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
        
        {/* כותרת השם - ממורכזת למעלה */}
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

        {/* גוף ההירו - טקסט (ימין) > אילוסטרציה (שמאל) */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-[7%] mb-20">
          
          {/* צד ימין: טקסט שיווקי מעודכן - דק מאוד עם הגנה על ירידת שורה */}
          <div className="w-full md:w-[45%] flex flex-col items-end hero-fade-up z-20" style={{ animationDelay: "0.2s" }}>
            <div className="text-right w-full max-w-lg">
              <div className="w-12 h-1 bg-[#C9A0A8] mb-6 mr-0 ml-auto" />
              <p 
                className="text-2xl md:text-4xl lg:text-5xl text-slate-800 leading-[1.3] tracking-tight font-thin"
                style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}
              >
                {isRTL ? (
                  <>
                    מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות <span className="whitespace-nowrap">ומסעות לקוח</span>
                  </>
                ) : (
                  t(
                    "End-to-End Growth Engine: Website Design & Development, Business Automation, and Customer Journeys",
                    "End-to-End Growth Engine: Website Design & Development, Business Automation, and Customer Journeys"
                  )
                )}
              </p>
            </div>
          </div>

          {/* צד שמאל: אילוסטרציה - מקורבת למרכז ב-57% */}
          <div className="w-full md:w-[45%] flex justify-center items-center hero-fade-up z-10" style={{ animationDelay: "0.3s" }}>
            <div 
              className={`relative w-full aspect-square transform scale-[1.8] md:scale-[2.0] lg:scale-[2.2] transition-all duration-500
                ${isRTL ? 'md:-mr-[57%]' : 'md:-ml-[57%]'} 
              `}
            >
               <HeroIllustration />
            </div>
          </div>

        </div>

        {/* סטטיסטיקות תחתונות */}
        <div className="w-full mt-auto pt-10 border-t border-slate-100 hero-fade-up z-10" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-3 gap-4 md:gap-12 w-full max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text
