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
      {/* Minimal botanical accents — positioned in empty corners */}
      {/* Top-left leaf cluster */}
      <svg
        className="hidden md:block"
        aria-hidden="true"
        style={{ position: 'absolute', top: 80, left: 30, pointerEvents: 'none', zIndex: 0, opacity: 0.22, userSelect: 'none' }}
        width="120" height="140" viewBox="0 0 120 140" fill="none"
      >
        <path d="M60 135 Q58 100 60 65 Q61 40 63 15" stroke="#3D8B6E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M60 95 Q30 78 28 50 Q50 45 60 78 Z" stroke="#3D8B6E" strokeWidth="1.5" fill="#3D8B6E" fillOpacity="0.06" strokeLinejoin="round" />
        <path d="M60 65 Q85 50 88 28 Q68 24 60 52 Z" stroke="#7B68A8" strokeWidth="1.5" fill="#7B68A8" fillOpacity="0.05" strokeLinejoin="round" />
        <circle cx="63" cy="10" r="4" stroke="#D4798A" strokeWidth="1.5" fill="none" />
        <circle cx="63" cy="10" r="1.5" fill="#D4798A" fillOpacity="0.35" />
        <circle cx="18" cy="42" r="2" fill="#C4834A" opacity="0.4" />
        <circle cx="95" cy="22" r="1.5" fill="#3D8B6E" opacity="0.4" />
      </svg>

      {/* Bottom-center wave + dots */}
      <svg
        className="hidden md:block"
        aria-hidden="true"
        style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 0, opacity: 0.18, userSelect: 'none' }}
        width="260" height="40" viewBox="0 0 260 40" fill="none"
      >
        <path d="M0 25 Q30 10 65 25 Q100 40 130 25 Q160 10 195 25 Q230 40 260 25" stroke="#3D8B6E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="20" cy="8" r="2" fill="#D4798A" opacity="0.5" />
        <circle cx="130" cy="5" r="1.5" fill="#7B68A8" opacity="0.4" />
        <circle cx="240" cy="10" r="2" fill="#C4834A" opacity="0.45" />
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
