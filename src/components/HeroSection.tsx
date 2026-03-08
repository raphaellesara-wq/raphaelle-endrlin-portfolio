import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "20+", heLabel: "לקוחות", enLabel: "Clients" },
  { value: "50%+", heLabel: "שיעור פתיחה", enLabel: "Open Rate" },
  { value: "3", heLabel: "שנות ניסיון", enLabel: "Years" },
  { value: "4", heLabel: "שפות", enLabel: "Languages" },
];

const tools = ["MAKE.com", "N8N", "Klaviyo", "FlashyApp", "Claude AI", "Figma"];

const pillTags = [
  { he: "שיווק במייל", en: "Email Marketing", color: "pink" },
  { he: "אוטומציות AI", en: "AI Automation", color: "blue" },
  { he: "עיצוב", en: "Design", color: "purple" },
];

const pillColorMap: Record<string, string> = {
  pink: "bg-accent-pink-pale text-accent-pink",
  blue: "bg-accent-blue-pale text-accent-blue",
  purple: "bg-accent-purple-pale text-accent-purple",
};

const HeroSection = () => {
  const { t } = useLanguage();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.3);

  const clientCount = useCountUp(20, 1500, statsVisible);
  const openRate = useCountUp(50, 1500, statsVisible);
  const yearsCount = useCountUp(3, 1000, statsVisible);
  const langCount = useCountUp(4, 1000, statsVisible);
  const statValues = [`${clientCount}+`, `${openRate}%+`, `${yearsCount}`, `${langCount}`];

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
      className="relative flex items-center pt-20 pb-16 md:pt-24 md:pb-20"
      style={{
        background: "#FAFAF8",
        minHeight: "100vh",
        overflow: "visible",
      }}
    >
      {/* Botanical browser doodle — bottom left */}
      <svg
        id="hero-botanical"
        className="hidden md:block"
        width="340" height="300" viewBox="0 0 340 300" fill="none"
        xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
        style={{ position: 'absolute', bottom: 0, left: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.18, userSelect: 'none' }}
      >
        <ellipse cx="100" cy="200" rx="90" ry="75" fill="#D4798A" fillOpacity="0.08"/>
        <ellipse cx="240" cy="120" rx="80" ry="95" fill="#3D8B6E" fillOpacity="0.07"/>
        <rect x="80" y="80" width="180" height="130" rx="8" stroke="#C4834A" strokeWidth="1.5" fill="white" fillOpacity="0.04"/>
        <line x1="80" y1="100" x2="260" y2="100" stroke="#C4834A" strokeWidth="1.5"/>
        <circle cx="95" cy="90" r="3" stroke="#C4834A" strokeWidth="1.5" fill="none"/>
        <circle cx="107" cy="90" r="3" stroke="#C4834A" strokeWidth="1.5" fill="none"/>
        <circle cx="119" cy="90" r="3" stroke="#C4834A" strokeWidth="1.5" fill="none"/>
        <rect x="92" y="110" width="80" height="55" rx="3" stroke="#C4834A" strokeWidth="1.5" fill="none"/>
        <path d="M132 125 Q136 118 140 125 Q147 121 144 128 Q151 132 144 135 Q147 142 140 139 Q136 146 132 139 Q125 142 128 135 Q121 132 128 128 Q125 121 132 125 Z" stroke="#D4798A" strokeWidth="1.5" fill="#D4798A" fillOpacity="0.06"/>
        <circle cx="136" cy="132" r="4" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <line x1="182" y1="114" x2="248" y2="114" stroke="#C4834A" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="182" y1="123" x2="242" y2="123" stroke="#C4834A" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="182" y1="132" x2="248" y2="132" stroke="#C4834A" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="182" y1="141" x2="236" y2="141" stroke="#C4834A" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M92 155 Q110 148 128 155 Q146 162 164 155 Q182 148 200 155" stroke="#3D8B6E" strokeWidth="1.5" fill="none"/>
        <path d="M40 60 Q20 20 60 10 Q80 50 40 60 Z" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.06"/>
        <line x1="40" y1="60" x2="55" y2="20" stroke="#3D8B6E" strokeWidth="1"/>
        <path d="M55 160 Q55 145 70 145 Q85 145 85 160 Q85 178 65 178 Q45 178 45 155 Q45 132 72 132" stroke="#7B68A8" strokeWidth="1.5" fill="none"/>
        <path d="M290 180 Q310 160 305 140" stroke="#3D8B6E" strokeWidth="1.5" fill="none"/>
        <path d="M298 168 Q318 160 315 148" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.06"/>
        <path d="M282 172 Q265 162 268 148" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.06"/>
        <circle cx="280" cy="250" r="4" stroke="#D4798A" strokeWidth="1.5" fill="none"/>
        <line x1="280" y1="242" x2="280" y2="238" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="280" y1="258" x2="280" y2="262" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="272" y1="250" x2="268" y2="250" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="288" y1="250" x2="292" y2="250" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="274" y1="244" x2="271" y2="241" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="286" y1="256" x2="289" y2="259" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="274" y1="256" x2="271" y2="259" stroke="#D4798A" strokeWidth="1.5"/>
        <line x1="286" y1="244" x2="289" y2="241" stroke="#D4798A" strokeWidth="1.5"/>
        <path d="M30 240 Q50 210 45 180" stroke="#7B68A8" strokeWidth="1.5" fill="none"/>
        <path d="M35 230 Q50 220 45 210" stroke="#7B68A8" strokeWidth="1" fill="none"/>
        <path d="M32 218 Q47 208 43 198" stroke="#7B68A8" strokeWidth="1" fill="none"/>
        <path d="M30 205 Q45 196 41 186" stroke="#7B68A8" strokeWidth="1" fill="none"/>
        <circle cx="295" cy="50" r="2" fill="#3D8B6E" opacity="0.5"/>
        <circle cx="305" cy="44" r="1.5" fill="#3D8B6E" opacity="0.4"/>
        <circle cx="312" cy="55" r="2" fill="#3D8B6E" opacity="0.5"/>
        <circle cx="300" cy="62" r="1.5" fill="#3D8B6E" opacity="0.3"/>
        <circle cx="318" cy="48" r="1.5" fill="#3D8B6E" opacity="0.4"/>
        <circle cx="308" cy="65" r="1" fill="#3D8B6E" opacity="0.3"/>
      </svg>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div
          className="grid lg:grid-cols-2 items-center"
          style={{ gap: 48 }}
        >
          {/* Main text */}
          <div className="order-1 space-y-5 md:space-y-6" style={{ overflow: "visible", position: "relative", zIndex: 2 }}>
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="w-8 h-px bg-accent-pink" />
              <span className="text-xs sm:text-sm tracking-wide text-muted-foreground font-medium">
                {t("מומחית שיווק דיגיטלי ואוטומציות AI", "Email Marketing & AI Automation Specialist")}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="hero-name animate-fade-up"
              style={{
                animationDelay: "150ms",
                overflow: "visible",
                whiteSpace: "normal",
                wordBreak: "keep-all",
              }}
            >
              {t("רפאל", "Raphaëlle")}
              <br />
              <span className="hero-name-line2 text-accent-pink">{t("אנדרלין", "Enderlin")}</span>
            </h1>

            {/* Italic sub */}
            <p
              className="text-base md:text-lg italic text-muted-foreground font-body animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {t("Raphaëlle Enderlin", "רפאל אנדרלין")}
            </p>

            {/* Description */}
            <p
              className="text-sm md:text-base leading-relaxed text-muted-foreground max-w-lg animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              {t(
                "אני עוזרת לעסקים לבנות מערכות שיווק במייל ואוטומציות מבוססות AI. מהאסטרטגיה ועד הביצוע — עם דגש על תוצאות מדידות.",
                "I help businesses build smart email marketing systems and AI-powered automations — from strategy to execution, with a focus on measurable results."
              )}
            </p>

            {/* Tool badges */}
            <div
              className="flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: "600ms" }}
            >
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-card text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 animate-fade-up"
              style={{ animationDelay: "750ms" }}
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-6 sm:px-8 font-medium transition-all duration-300 hover:bg-accent-purple hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_hsl(var(--accent-purple)/0.4)]"
                onClick={() => scrollTo("#contact")}
              >
                {t("צור קשר", "Get in Touch")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 font-medium border-border transition-all duration-300 hover:bg-accent-purple-pale hover:text-accent-purple hover:border-accent-purple/30 hover:-translate-y-0.5"
                onClick={() => scrollTo("#experience")}
              >
                {t("הניסיון שלי", "My Experience")}
              </Button>
            </div>
          </div>

          {/* Stats card — hidden on mobile */}
          <div
            className="order-2 hidden lg:flex justify-center"
            ref={statsRef}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              className="relative w-full max-w-sm rounded-2xl border border-border bg-card shadow-lg overflow-hidden animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {/* Rainbow gradient top line */}
              <div
                className="h-1 w-full"
                style={{
                  background: "linear-gradient(to left, hsl(var(--accent-pink)), hsl(var(--accent-orange)), hsl(var(--accent-green)), hsl(var(--accent-blue)), hsl(var(--accent-purple)))",
                }}
              />

              <div className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {stats.map((stat, i) => {
                    const isMint = i >= 2;
                    return (
                      <div
                        key={i}
                        className="text-center rounded-xl p-3"
                        style={isMint ? { backgroundColor: "hsl(var(--accent-green-pale))" } : undefined}
                      >
                        <div
                          className="stat-number"
                          style={isMint ? { color: "hsl(var(--accent-green))" } : undefined}
                        >
                          {statValues[i]}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {t(stat.heLabel, stat.enLabel)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="h-px w-full bg-border mb-5" />

                <div className="flex flex-wrap justify-center gap-2">
                  {pillTags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${pillColorMap[tag.color]}`}
                    >
                      {t(tag.he, tag.en)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
