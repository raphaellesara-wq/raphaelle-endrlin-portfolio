import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const mavenBullets = {
  he: [
    "בניית אוטומציות ב-FlashyApp, Klaviyo, MailChimp, InforU Mobile",
    "ניהול סגמנטציה והתאמה אישית למסעות לקוח",
    "ניהול SMS בהיקפים רחבים + Google Analytics",
    "עיצוב ניוזלטרים ב-Figma, Canva Pro, Photoroom",
  ],
  en: [
    "Built automations with FlashyApp, Klaviyo, MailChimp, InforU Mobile",
    "Managed segmentation & personalized customer journeys",
    "Large-scale SMS campaigns + Google Analytics",
    "Designed newsletters in Figma, Canva Pro, Photoroom",
  ],
};

const freelanceBullets = {
  he: [
    "ניהול תוכן ופרסום בסושיאל לאמנים עצמאיים",
    "יצירת וידאו ותוכן ויזואלי",
  ],
  en: [
    "Social content management & advertising for independent artists",
    "Video creation & visual content",
  ],
};

const achievements = [
  { he: "20+ לקוחות", en: "20+ Clients" },
  { he: "50%+ Open Rate", en: "50%+ Open Rate" },
  { he: "פי 2 מהממוצע", en: "2x Industry Avg" },
];

const ExperienceSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const bullets = t("he", "en") === "he" ? mavenBullets.he : mavenBullets.en;
  const freeBullets = t("he", "en") === "he" ? freelanceBullets.he : freelanceBullets.en;

  return (
    <section id="experience" ref={sectionRef} className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-orange" />
            <span className="text-sm tracking-wide text-muted-foreground font-medium">
              {t("ניסיון תעסוקתי", "Work Experience")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15]">
            {t("מה שעשיתי", "What I've Built")}
            <br />
            <span className="text-accent-orange italic">{t("בפועל", "In Practice")}</span>
          </h2>
        </div>

        {/* Timeline cards */}
        <div className="space-y-6 md:space-y-8">
          {/* MAVEN MEDIA card */}
          <div
            className={`relative rounded-2xl border border-border bg-card p-6 md:p-10 overflow-hidden transition-all duration-700 delay-200 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="absolute top-0 end-0 w-[300px] h-[300px] rounded-full bg-accent-orange/[0.06] blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <span className="text-xs text-muted-foreground font-medium">2022–2025</span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-normal text-foreground mt-1">
                    MAVEN MEDIA
                  </h3>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-pink-pale text-accent-pink self-start">
                  {t("משרד פרסום", "Ad Agency")}
                </span>
              </div>

              <p className="text-sm md:text-base font-medium text-foreground mb-5">
                {t(
                  "מנהלת מחלקת Email Marketing ואוטומציות",
                  "Email Marketing & Automation Department Lead"
                )}
              </p>

              <ul className="space-y-2 mb-6">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {achievements.map((a, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-foreground text-primary-foreground"
                  >
                    {t(a.he, a.en)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Freelance card */}
          <div
            className={`rounded-2xl border border-border bg-card p-6 md:p-10 transition-all duration-700 delay-400 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
              <div>
                <span className="text-xs text-muted-foreground font-medium">2021–2022</span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-normal text-foreground mt-1">
                  Freelance
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-orange-pale text-accent-orange self-start">
                {t("עצמאי", "Freelance")}
              </span>
            </div>

            <p className="text-sm md:text-base font-medium text-foreground mb-5">
              {t("ניהול סושיאל ותוכן", "Social Media & Content Management")}
            </p>

            <ul className="space-y-2">
              {freeBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
