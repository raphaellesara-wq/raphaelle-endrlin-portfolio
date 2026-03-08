import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

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

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ backgroundColor: "#FDFBF8" }}>
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] rounded-full bg-accent-pink/[0.06] blur-[100px]" />
        <div className="absolute bottom-1/4 end-1/4 w-[400px] h-[400px] rounded-full bg-accent-orange/[0.07] blur-[100px]" />
        <div className="absolute top-1/2 end-1/3 w-[300px] h-[300px] rounded-full bg-accent-purple/[0.05] blur-[100px]" />
      </div>

      {/* Floating pastel shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Shape 1 — soft blob */}
        <svg className="absolute top-[10%] start-[15%] animate-float-slow" width="280" height="280" viewBox="0 0 280 280" aria-hidden="true">
          <path d="M140,30 C190,20 250,60 260,120 C270,180 230,250 170,260 C110,270 40,240 25,180 C10,120 40,50 90,35 C110,28 125,32 140,30Z" fill="#FEF0F3" opacity="0.7" />
        </svg>
        {/* Shape 2 — rounded shape */}
        <svg className="absolute top-[8%] end-[12%] animate-float-slower" width="140" height="140" viewBox="0 0 140 140" aria-hidden="true">
          <path d="M70,10 C100,10 130,40 130,70 C130,100 100,130 70,130 C40,130 10,100 10,70 C10,40 40,10 70,10Z" fill="#D6F5EA" opacity="0.5" />
        </svg>
        {/* Shape 3 — small circle */}
        <svg className="absolute bottom-[15%] end-[20%] animate-float-mid" width="90" height="90" viewBox="0 0 90 90" aria-hidden="true">
          <circle cx="45" cy="45" r="45" fill="#EDE6FA" opacity="0.6" />
        </svg>
        {/* Shape 4 — dot cluster */}
        <svg className="absolute top-[25%] end-[35%]" width="40" height="36" viewBox="0 0 40 36" aria-hidden="true">
          <circle cx="20" cy="4" r="4" fill="#E88FA0" opacity="0.4" />
          <circle cx="8" cy="28" r="4" fill="#F09A60" opacity="0.4" />
          <circle cx="32" cy="28" r="4" fill="#6DC4A0" opacity="0.4" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Main text */}
          <div className="order-1 space-y-5 md:space-y-6">
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

            {/* H1 — responsive clamp */}
            <h1
              className="font-display font-extrabold leading-[1.05] animate-fade-up"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                letterSpacing: "-0.03em",
                animationDelay: "150ms",
              }}
            >
              {t("רפאל", "Raphaëlle")}
              <br />
              <span className="text-accent-pink">{t("אנדרלין", "Endrlin")}</span>
            </h1>

            {/* Italic sub */}
            <p
              className="text-base md:text-lg italic text-muted-foreground font-body animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {t("Raphaëlle Endrlin", "רפאל אנדרלין")}
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
          <div className="order-2 hidden lg:flex justify-center lg:justify-start">
            <div
              className="relative w-full max-w-sm rounded-2xl border border-border bg-card shadow-lg overflow-hidden animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {/* Rainbow gradient top line */}
              <div
                className="h-1 w-full"
                style={{
                  background: "linear-gradient(to left, hsl(350 68% 73%), hsl(24 84% 66%), hsl(155 44% 60%), hsl(210 68% 68%), hsl(268 46% 69%))",
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
                        style={isMint ? { backgroundColor: "#E8F7F2" } : undefined}
                      >
                        <div
                          className="text-3xl font-display font-normal"
                          style={isMint ? { color: "#4AAF8C" } : undefined}
                        >
                          {stat.value}
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
