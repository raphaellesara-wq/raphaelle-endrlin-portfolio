import { useLanguage } from "@/contexts/LanguageContext";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import HeroIllustration from "./HeroIllustration";

const tools = [
  {
    name: "Claude",
    color: "#C97B4B",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#C97B4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "FlashyApp",
    color: "#7B2FBE",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#7B2FBE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Klaviyo",
    color: "#1F3A5F",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4z" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 4l8 8 8-8" stroke="#1F3A5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Mailchimp",
    color: "#FFE01B",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" stroke="#D4B800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v18" stroke="#D4B800" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "N8N",
    color: "#FF6D5A",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="12" r="3" stroke="#FF6D5A" strokeWidth="1.5"/>
        <circle cx="18" cy="12" r="3" stroke="#FF6D5A" strokeWidth="1.5"/>
        <path d="M9 12h6" stroke="#FF6D5A" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Make.com",
    color: "#6D00CC",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#6D00CC" strokeWidth="1.5"/>
        <path d="M8 12l3 3 5-6" stroke="#6D00CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    color: "#A259FF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="8" y="2" width="4" height="6" rx="2" stroke="#F24E1E" strokeWidth="1.3"/>
        <rect x="12" y="2" width="4" height="6" rx="2" stroke="#FF7262" strokeWidth="1.3"/>
        <rect x="8" y="8" width="4" height="6" rx="2" stroke="#A259FF" strokeWidth="1.3"/>
        <rect x="12" y="8" width="4" height="6" rx="2" stroke="#1ABCFE" strokeWidth="1.3"/>
        <rect x="8" y="14" width="4" height="6" rx="2" stroke="#0ACF83" strokeWidth="1.3"/>
      </svg>
    ),
  },
];

const HeroSection = () => {
  const { t } = useLanguage();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);

  const clientCount = useCountUp(20, 1500, statsVisible);
  const openRate = useCountUp(50, 1500, statsVisible);
  const yearsCount = useCountUp(3, 1000, statsVisible);
  const langCount = useCountUp(21, 1500, statsVisible);

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
      style={{
        minHeight: "auto",
        overflow: "hidden",
        paddingTop: 72,
        paddingBottom: 40,
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
          100% { transform: scale(1); }
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
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.10);
        }
      `}</style>

      <div
        className="w-full flex flex-col items-center text-center"
        style={{ maxWidth: 900, padding: "0 24px" }}
      >
        {/* 1. TAG */}
        <div
          className="hero-fade-up flex items-center justify-center gap-3"
          style={{ animationDelay: "0.1s" }}
        >
          <div style={{ width: 28, height: 1, background: "#B8B4BC" }} />
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

        {/* 2. NAME */}
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

        {/* 3. DESC */}
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

        {/* 4. BUBBLES */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: 12, marginTop: 32 }}
          ref={statsRef}
        >
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="bubble-pop bubble-circle flex flex-col items-center"
              style={{
                animationDelay: `${0.5 + i * 0.09}s`,
                cursor: "default",
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 40,
                  height: 40,
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {tool.icon}
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 7.5,
                  color: "#B8B4BC",
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* 5. BUTTONS */}
        <div
          className="hero-fade-up flex items-center justify-center gap-3"
          style={{ animationDelay: "0.65s", marginTop: 36 }}
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
    </section>
  );
};

export default HeroSection;
