import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import HeroIllustration from "@/components/HeroIllustration";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);

  const clientCount = useCountUp(20, 1500, statsVisible);
  const openRate = useCountUp(50, 1500, statsVisible);
  const yearsCount = useCountUp(3, 1000, statsVisible);
  const journeyCount = useCountUp(40, 1500, statsVisible);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        minHeight: "auto",
        overflow: "visible",
        paddingTop: 72,
        paddingBottom: 80,
        background: "transparent",
        borderBottom: "none",
        boxShadow: "none",
      }}
    >
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.6s ease-out forwards;
        }
        .stats-card-enter {
          opacity: 0;
          animation: heroFadeUp 0.7s ease-out 0.3s forwards;
        }
        .illustration-wrap {
          width: 100%;
          max-width: 480px;
        }
        @media (max-width: 640px) {
          .illustration-wrap {
            max-width: 300px;
          }
        }
      `}</style>

      <div
        className="w-full flex flex-col"
        style={{ maxWidth: 1100, padding: "0 24px" }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

          {/* RIGHT SIDE — Text content */}
          <div className={`flex-1 flex flex-col ${isRTL ? "items-end text-right" : "items-start text-left"}`}>
            <div
              className="hero-fade-up flex items-center gap-3"
              style={{ animationDelay: "0.1s" }}
            >
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: 11,
                  textTransform: "uppercase",
                  color: "#B8B4BC",
                  letterSpacing: "0.06em",
                }}
              >
                {t("מומחית שיווק דיגיטלי ואוטומציות AI", "Email Marketing & AI Automation Specialist")}
              </span>
              <div style={{ width: 28, height: 1, background: "#B8B4BC" }} />
            </div>

            <div
              className="hero-fade-up"
              style={{ animationDelay: "0.25s", marginTop: 20 }}
            >
              <div
                style={{
                  fontFamily: "'Secular One', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(56px, 10vw, 96px)",
                  lineHeight: 0.95,
                  color: "#1C1A28",
                  letterSpacing: "-0.01em",
                }}
              >
                {t("רפאל", "Raphaëlle")}
              </div>
              <div
                style={{
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: 200,
                  fontSize: "clamp(44px, 8vw, 80px)",
                  lineHeight: 1,
                  color: "#C9A0A8",
                  marginTop: 2,
                }}
              >
                {t("אנדרלין", "Enderlin")}
              </div>
            </div>

            <p
              className="hero-fade-up"
              style={{
                animationDelay: "0.4s",
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 300,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#5A5564",
                maxWidth: 520,
                marginTop: 24,
              }}
            >
              {t(
                "אני עוזרת לעסקים לבנות מערכות שיווק במייל ואוטומציות מבוססות AI. מהאסטרטגיה ועד הביצוע — עם דגש על תוצאות מדידות.",
                "I help businesses build smart email marketing systems and AI-powered automations — from strategy to execution, with a focus on measurable results."
              )}
            </p>

            <div
              className="hero-fade-up flex items-center gap-3"
              style={{ animationDelay: "0.65s", marginTop: 32 }}
            >
              {isRTL ? (
                <>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#fff",
                      padding: "13px 32px",
                      borderRadius: 50,
                      border: "none",
                      background: "#1C1A28",
                      cursor: "pointer",
                    }}
                  >
                    צור קשר
                  </button>
                  <button
                    onClick={() => scrollTo("#experience")}
                    className="transition-all duration-200"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#9A9499",
                      padding: "13px 32px",
                      borderRadius: 50,
                      border: "1px solid rgba(180,170,155,0.4)",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    הניסיון שלי
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => scrollTo("#experience")}
                    className="transition-all duration-200"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#9A9499",
                      padding: "13px 32px",
                      borderRadius: 50,
                      border: "1px solid rgba(180,170,155,0.4)",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    My Experience
                  </button>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#fff",
                      padding: "13px 32px",
                      borderRadius: 50,
                      border: "none",
                      background: "#1C1A28",
                      cursor: "pointer",
                    }}
                  >
                    Get in Touch
                  </button>
                </>
              )}
            </div>
          </div>

          {/* LEFT SIDE — Stats Card */}
          <div
            ref={statsRef}
            className="stats-card-enter w-full lg:w-auto"
            style={{ maxWidth: 420 }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                border: "1px solid rgba(180,170,155,0.18)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: 4,
                  background: "linear-gradient(90deg, #8A9E7A, #C9A0A8, #8B7DB5, #7BBFB0, #E8B87A)",
                }}
              />

              <div style={{ padding: "28px 28px 20px" }}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 42,
                        fontWeight: 600,
                        color: "#1C1A28",
                        lineHeight: 1.1,
                      }}
                    >
                      +{openRate}%
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rubik', sans-serif",
                        fontSize: 12,
                        color: "#9A9499",
                        marginTop: 4,
                      }}
                    >
                      {t("מעורבות והצלחה", "Engagement & Success")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 42,
                        fontWeight: 600,
                        color: "#1C1A28",
                        lineHeight: 1.1,
                      }}
                    >
                      +{clientCount}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rubik', sans-serif",
                        fontSize: 12,
                        color: "#9A9499",
                        marginTop: 4,
                      }}
                    >
                      {t("לקוחות", "Clients")}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div
                    className="text-center"
                    style={{
                      background: "#F5F4F2",
                      borderRadius: 14,
                      padding: "20px 12px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 38,
                        fontWeight: 500,
                        color: "#8A9E7A",
                        lineHeight: 1.1,
                      }}
                    >
                      {journeyCount}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rubik', sans-serif",
                        fontSize: 11,
                        color: "#9A9499",
                        marginTop: 6,
                        lineHeight: 1.4,
                      }}
                    >
                      {t("מסעות לקוח ואוטומציות עסקיות", "Customer Journeys & Automations")}
                    </div>
                  </div>
                  <div
                    className="text-center"
                    style={{
                      background: "#F5F4F2",
                      borderRadius: 14,
                      padding: "20px 12px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 38,
                        fontWeight: 500,
                        color: "#8A9E7A",
                        lineHeight: 1.1,
                      }}
                    >
                      {yearsCount}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Rubik', sans-serif",
                        fontSize: 11,
                        color: "#9A9499",
                        marginTop: 6,
                      }}
                    >
                      {t("שנות ניסיון", "Years Experience")}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { he: "שיווק במייל", en: "Email Marketing", color: "#C9A0A8" },
                    { he: "אוטומציות AI", en: "AI Automations", color: "#8B7DB5" },
                    { he: "עיצוב", en: "Design", color: "#9A9499" },
                  ].map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: "'Rubik', sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: tag.color,
                        padding: "6px 16px",
                        borderRadius: 50,
                        border: `1px solid ${tag.color}33`,
                        background: `${tag.color}0A`,
                      }}
                    >
                      {t(tag.he, tag.en)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ILLUSTRATION */}
        <div
          className="stats-card-enter w-full flex justify-center"
          style={{ marginTop: 40 }}
        >
          <div className="illustration-wrap">
            <HeroIllustration />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
