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

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 start-1/4 w-[500px] h-[500px] rounded-full bg-accent-pink/[0.06] blur-[100px]" />
        <div className="absolute bottom-1/4 end-1/4 w-[400px] h-[400px] rounded-full bg-accent-orange/[0.07] blur-[100px]" />
        <div className="absolute top-1/2 end-1/3 w-[300px] h-[300px] rounded-full bg-accent-purple/[0.05] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Main text — appears first in RTL (right side) */}
          <div className="order-1 space-y-6">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <div className="w-8 h-px bg-accent-pink" />
              <span className="text-sm tracking-wide text-muted-foreground font-medium">
                {t("מומחית שיווק ואוטומציות AI", "Email Marketing & AI Automation Specialist")}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.1] tracking-tight animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              {t("רפאל", "Raphaëlle")}
              <br />
              <span className="text-accent-pink">{t("אנדרלין", "Endrlin")}</span>
            </h1>

            {/* Italic sub */}
            <p
              className="text-lg italic text-muted-foreground font-body animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {t("Raphaëlle Endrlin", "רפאל אנדרלין")}
            </p>

            {/* Description */}
            <p
              className="text-base leading-relaxed text-muted-foreground max-w-lg animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              {t(
                "אני עוזרת לעסקים לבנות מערכות שיווק במייל חכמות ואוטומציות מבוססות AI — מאסטרטגיה ועד ביצוע, עם דגש על תוצאות מדידות.",
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
              className="flex items-center gap-4 pt-2 animate-fade-up"
              style={{ animationDelay: "750ms" }}
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-full px-8 font-medium transition-all duration-300 hover:bg-accent-purple hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_hsl(var(--accent-purple)/0.4)]"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("צור קשר", "Get in Touch")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-medium border-border transition-all duration-300 hover:bg-accent-purple-pale hover:text-accent-purple hover:border-accent-purple/30 hover:-translate-y-0.5"
                onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("הניסיון שלי", "My Experience")}
              </Button>
            </div>
          </div>

          {/* Stats card — left in RTL */}
          <div className="order-2 flex justify-center lg:justify-start">
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
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-display font-normal text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {t(stat.heLabel, stat.enLabel)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Separator */}
                <div className="h-px w-full bg-border mb-5" />

                {/* Pill tags */}
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