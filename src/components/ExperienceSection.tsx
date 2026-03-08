import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const mavenBullets = {
  he: [
    "בניית אוטומציות שיווקיות ב-FlashyApp, Klaviyo, Mailchimp ו-InforU Mobile",
    "ניהול סגמנטציה והתאמה אישית של מסעות לקוח וניוזלטרים",
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
    "בניית מועדון לקוחות, שיפור אתרי Shopify",
    "בניית מסעות לקוח בשלל נושאים: ברוכים הבאים, ימי הולדת, הטבות למועדון לקוחות, נטישת עגלה ונטישת אתר",
    "בניית ועיצוב אתרים ללקוחות בעזרת Figma ו-Google Sites (Stitch)",
    "ניהול סוציאל, יצירת תוכן ועריכת סרטונים עבור אמנים עצמאיים",
    "בניית אוטומציות בשילוב בינה מלאכותית, סוכנים חכמים ובוטים לעסקים",
  ],
  en: [
    "Built a loyalty club on Shopify for Umina Superfood using Rise.ai — a credit system earned upon membership purchase, redeemable on orders",
    "Designed 3 professional customer journeys: welcome benefit, birthday benefit, and pre-expiry membership renewal reminder",
    "Built and designed client websites using Figma and Google Sites (Stitch)",
    "Social media management, content creation and video editing for independent artists",
  ],
};

const freelanceAchievements = [
  { he: "Umina Superfood", en: "Umina Superfood" },
  { he: "Rise.ai + Shopify", en: "Rise.ai + Shopify" },
  { he: "Figma + Google Sites", en: "Figma + Google Sites" },
];

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
    <section id="experience" ref={sectionRef} className="py-10 md:py-16 relative" style={{ background: "#FAFAF8" }}>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]">
            {t("מה שעשיתי", "What I've Built")}
            <br />
            <em className="not-italic text-accent-orange">{t("בפועל", "In Practice")}</em>
          </h2>
        </div>

        {/* Timeline cards */}
        <div className="space-y-5">
          {/* MAVEN MEDIA card */}
          <div
            className={`relative rounded-2xl border border-border bg-card p-6 md:p-10 overflow-hidden transition-all duration-700 delay-200 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Decorative cross mark */}
            <svg className="absolute hidden md:block pointer-events-none" width="12" height="12" viewBox="0 0 12 12" style={{ top: 20, right: 20, opacity: 0.3 }} aria-hidden="true">
              <line x1="2" y1="6" x2="10" y2="6" stroke="#3D8B6E" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="6" y1="2" x2="6" y2="10" stroke="#3D8B6E" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
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
            className={`relative rounded-2xl border border-border bg-card p-6 md:p-10 overflow-hidden transition-all duration-700 delay-400 hover:-translate-y-1 hover:shadow-lg ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            {/* Decorative diamond */}
            <svg className="absolute hidden md:block pointer-events-none" width="12" height="12" viewBox="0 0 12 12" style={{ bottom: 20, left: 20, opacity: 0.25 }} aria-hidden="true">
              <rect x="3" y="3" width="6" height="6" rx="1" stroke="#7B68A8" strokeWidth="1.5" fill="none" transform="rotate(45 6 6)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                <div>
                  <span className="text-xs text-muted-foreground font-medium">2021 – present</span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-normal text-foreground mt-1">
                    Freelance
                  </h3>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-orange-pale text-accent-orange self-start">
                  {t("עצמאי", "Freelance")}
                </span>
              </div>

              <p className="text-sm md:text-base font-medium text-foreground mb-5">
                {t("ניהול שיווק, אוטומציות ובניית אתרים", "Marketing, Automations & Web Design")}
              </p>

              <ul className="space-y-2 mb-6">
                {freeBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-orange shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {freelanceAchievements.map((a, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
