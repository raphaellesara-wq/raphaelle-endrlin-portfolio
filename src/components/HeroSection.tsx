import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tools = [
  {
    name: "Claude",
    color: "#C97B4B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 18L12 7L16 18" stroke="#C97B4B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="9.5" y1="15" x2="14.5" y2="15" stroke="#C97B4B" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Flashy",
    color: "#7B2FBE",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 3L7 13H12L10.5 21L18 11H13Z" fill="#7B2FBE" opacity="0.82"/>
      </svg>
    ),
  },
  {
    name: "Klaviyo",
    color: "#1F3A5F",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="4" width="3.5" height="16" rx="0.8" fill="#1F3A5F" opacity="0.80"/>
        <path d="M8.5 12L16 4V8.5L11.5 12L16 15.5V20Z" fill="#1F3A5F" opacity="0.80"/>
      </svg>
    ),
  },
  {
    name: "Mailchimp",
    color: "#FFE01B",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="13.5" rx="5.5" ry="5" fill="#FFE01B" opacity="0.92"/>
        <circle cx="6.5" cy="14" r="1.8" fill="#FFE01B" opacity="0.72"/>
        <circle cx="17.5" cy="14" r="1.8" fill="#FFE01B" opacity="0.72"/>
        <circle cx="10" cy="12" r="1" fill="#241C15"/>
        <circle cx="14" cy="12" r="1" fill="#241C15"/>
        <path d="M9.5 15Q12 17 14.5 15" stroke="#241C15" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "N8N",
    color: "#FF6D5A",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="7" cy="12" r="3" fill="#FF6D5A" opacity="0.78"/>
        <circle cx="17" cy="12" r="3" fill="#FF6D5A" opacity="0.78"/>
        <line x1="10" y1="12" x2="14" y2="12" stroke="#FF6D5A" strokeWidth="1.6" opacity="0.62"/>
      </svg>
    ),
  },
  {
    name: "Make.com",
    color: "#6D00CC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="12" r="3.2" stroke="#6D00CC" strokeWidth="1.3" fill="none" opacity="0.78"/>
        <circle cx="15" cy="9" r="2.6" stroke="#6D00CC" strokeWidth="1.2" fill="none" opacity="0.62"/>
        <circle cx="15" cy="15" r="2.6" stroke="#6D00CC" strokeWidth="1.2" fill="none" opacity="0.62"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#A259FF",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="7.5" y="4" width="4.5" height="4.5" rx="0.8" fill="#F24E1E" opacity="0.87"/>
        <rect x="12" y="4" width="4.5" height="4.5" rx="0.8" fill="#FF7262" opacity="0.87"/>
        <rect x="7.5" y="8.5" width="4.5" height="4.5" rx="0.8" fill="#A259FF" opacity="0.87"/>
        <rect x="7.5" y="13" width="4.5" height="7" rx="0.8" fill="#0ACF83" opacity="0.87"/>
        <circle cx="14.25" cy="10.75" r="2.25" fill="#1ABCFE" opacity="0.87"/>
      </svg>
    ),
  },
];

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);

  const clientCount = useCountUp(20, 1500, statsVisible);
  const openRate = useCountUp(50, 1500, statsVisible);
  const yearsCount = useCountUp(3, 1000, statsVisible);
  const journeyCount = useCountUp(21, 1500, statsVisible);

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
        background: "radial-gradient(ellipse 70% 40% at 15% 10%,#F5F2EE,transparent), radial-gradient(ellipse 50% 45% at 85% 55%,#F2EEE9,transparent), linear-gradient(180deg,#FDFCFB 0%,#FAF8F5 50%,#F8F5F1 100%)",
        borderBottom: "none",
        boxShadow: "none",
      }}
    >
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bubblePop {
          0% { opacity: 0; transform: scale(0.3); }
          60% { opacity: 1; transform: scale(1.12); }
          80% { transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes countFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.6s ease-out forwards;
        }
        .bubble-pop {
          opacity: 0;
          animation: bubblePop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .bubble-circle {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .bubble-circle:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 6px 16px rgba(0,0,0,0.10);
        }
        .stats-card-enter {
          opacity: 0;
          animation: heroFadeUp 0.7s ease-out 0.3s forwards;
        }
      `}</style>

      <div
        className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16"
        style={{ maxWidth: 1100, padding: "0 24px" }}
      >
        {/* RIGHT SIDE — Text content */}
        <div className={`flex-1 flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
          {/* TAG */}
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

          {/* NAME */}
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

          {/* DESC */}
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

          {/* BUBBLES */}
          <div
            className="flex flex-wrap justify-end"
            style={{ gap: 12, marginTop: 28 }}
          >
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="bubble-pop bubble-circle flex flex-col items-center"
                style={{
                  animationDelay: `${0.6 + i * 0.09}s`,
                  cursor: "default",
                  gap: 4,
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(180,170,155,0.22)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  {tool.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 7.5,
                    color: "#B8B4BC",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div
            className="hero-fade-up flex items-center gap-3"
            style={{ animationDelay: "0.65s", marginTop: 32 }}
          >
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
              {t("הניסיון שלי", "My Experience")}
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
              {t("צור קשר", "Get in Touch")}
            </button>
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
            {/* Rainbow top bar */}
            <div
              style={{
                height: 4,
                background: "linear-gradient(90deg, #F24E1E, #FFE01B, #0ACF83, #1ABCFE, #A259FF, #C9A0A8)",
              }}
            />

            <div style={{ padding: "28px 28px 20px" }}>
              {/* Top row: +50% and +20 */}
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

              {/* Bottom row: 21 and 3 */}
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

              {/* Tags */}
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
    </section>
  );
};

export default HeroSection;
