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
      {/* Small decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-[18%] end-[25%]" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
          <circle cx="4" cy="4" r="4" fill="hsl(var(--accent-pink))" opacity="0.5" />
        </svg>
        <svg className="absolute top-[12%] end-[18%]" width="7" height="7" viewBox="0 0 7 7" aria-hidden="true">
          <circle cx="3.5" cy="3.5" r="3.5" fill="hsl(var(--accent-orange))" opacity="0.5" />
        </svg>
        <svg className="absolute top-[24%] end-[14%]" width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
          <circle cx="3" cy="3" r="3" fill="hsl(var(--accent-green))" opacity="0.5" />
        </svg>
      </div>

      {/* Geometric cluster illustration — top-right corner */}
      <svg
        className="absolute hidden md:block pointer-events-none"
        style={{ top: -20, right: -20, opacity: 0.18, zIndex: 0, animation: "slowRotate 60s linear infinite", transformOrigin: "center" }}
        width="220" height="220" viewBox="0 0 220 220" fill="none"
        aria-hidden="true"
      >
        <circle cx="140" cy="80" r="70" stroke="#3D8B6E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="120" r="45" stroke="#7B68A8" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="160" cy="50" r="4" fill="#3D8B6E" />
        <circle cx="80" cy="90" r="3" fill="#D4798A" />
        <circle cx="180" cy="140" r="2.5" fill="#7B68A8" />
        <line x1="40" y1="180" x2="180" y2="40" stroke="#3D8B6E" strokeWidth="1" strokeDasharray="4 6" strokeLinecap="round" />
        <rect x="50" y="50" width="20" height="20" rx="3" stroke="#C4834A" strokeWidth="1.5" fill="none" transform="rotate(45 60 60)" strokeLinecap="round" />
        <path d="M 30 190 Q 80 140 140 160 Q 180 175 210 150" stroke="#4E7FA8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
