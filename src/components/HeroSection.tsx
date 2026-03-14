import { useLanguage } from "@/contexts/LanguageContext";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
  { label: t("לקוחות", "Clients"), value: "20+" },
  { label: t("שנות ניסיון", "Years Experience"), value: "3" },
  { label: t("אוטומציות", "Automations"), value: "40+" }];


  return (
    <section
      className="relative min-h-screen flex flex-col items-center pt-20 pb-12 overflow-hidden bg-white"
      dir={isRTL ? "rtl" : "ltr"}>
      
      <div className="container max-w-7xl px-6 relative z-10 flex flex-col items-center">
        
        {/* כותרת השם */}
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

        {/* גוף ההירו */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-[5%] mb-20">
          
          {/* צד טקסט + סטטיסטיקות ענקיות */}
          <div className={`w-full md:w-[55%] flex flex-col hero-fade-up z-20 ${isRTL ? 'items-end' : 'items-start'}`} style={{ animationDelay: "0.2s" }}>
            <div className={`w-full max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
              
              {/* סטרייפ סטטיסטיקות */}
              <div className={`flex gap-10 md:gap-14 mb-8 ${isRTL ? 'flex-row' : 'flex-row'}`}>
                {stats.map((stat, index) =>
                <div key={index} className="flex flex-col items-start gap-0">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#C9A0A8] leading-none tracking-tighter text-left">
                      {stat.value}
                    </span>
                    <span className="text-sm md:text-base lg:text-lg text-black font-semibold uppercase tracking-[0.15em] mt-2">
                      {stat.label}
                    </span>
                  </div>
                )}
              </div>

              {/* הקו הוורוד */}
              <div className={`w-16 h-1.5 bg-[#C9A0A8] mb-8 ${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'}`} />
              
              {/* הטקסט השיווקי */}
              <p
                className="text-2xl md:text-3xl lg:text-4xl text-slate-800 leading-[1.3] tracking-tight font-thin"
                style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 200 }}>
                
                {isRTL ?
                <>
                    מנוע צמיחה מקצה לקצה: עיצוב ופיתוח אתרים, אוטומציות עסקיות <span className="whitespace-nowrap" style={{ fontWeight: 200 }}>ומסעות לקוח.</span>
                  </> :

                <>
                    End-to-End Growth Engine: Website Design & Development, Business Automation and Customer <span className="whitespace-nowrap" style={{ fontWeight: 200 }}>Journeys.</span>
                  </>
                }
              </p>
            </div>
          </div>

          {/* צד אילוסטרציה - קירוב מוגבר (92% בעברית, 72% באנגלית) */}
          <div className="w-full md:w-[35%] flex justify-center items-center hero-fade-up z-10" style={{ animationDelay: "0.3s" }}>
            <div
              className={`relative w-full aspect-square transform scale-[2.5] md:scale-[2.8] lg:scale-[3.1] transition-all duration-500
                ${isRTL ? 'md:-mr-[92%]' : 'md:-ml-[72%]'} 
              `}>
              
               <HeroIllustration />
            </div>
          </div>

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
    </section>);

};

export default HeroSection;