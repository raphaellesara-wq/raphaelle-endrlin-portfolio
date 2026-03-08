import { useState, useCallback, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Settings, Palette, Zap, Search, ChevronLeft, ChevronRight } from "lucide-react";

const cardIcons = [Settings, Palette, Zap, Search];

const featuredProject = {
  heTitle: "Umina Superfood — מסעות לקוח ומועדון חברות",
  enTitle: "Umina Superfood — Customer Journeys & Loyalty Club",
  subtitle: "FlashyApp · Shopify · Rise.ai",
  heDesc:
    "בניית מועדון לקוחות ב-Shopify עם מנגנון קרדיטים (Rise.ai) ומסעות לקוח מותאמים אישית. עיצוב ניוזלטרים ומסעות שיווקיים לקהילת הסופרפוד.",
  enDesc:
    "Built a complete loyalty club with a credit system on Shopify via Rise.ai. Designed 3 customer journeys: welcome, birthday benefit, pre-expiry reminder. Branded newsletters and marketing campaigns for the superfood community.",
  tags: ["Shopify", "Rise.ai", "FlashyApp", "Customer Journey", "Email Design"],
  accent: "#6DC4A0",
};

const carouselProjects = [
  {
    heTitle: "אוטומציית Abandon Cart",
    enTitle: "Abandoned Cart Automation",
    subtitle: "FlashyApp · Customer Journey Automation",
    heDesc:
      "בניית מסע לקוח מורכב לשחזור עגלות נטושות עם לוגיקת IF/ELSE, עיכובים מחושבים ושליחת מיילים מותאמים אישית בזמן הנכון.",
    enDesc:
      "Built a complex abandoned cart flow with IF/ELSE logic, calculated time delays, and personalized email sequences.",
    tags: ["Automation", "FlashyApp", "Customer Journey", "Email Marketing"],
    accent: "#72AEE8",
  },
  {
    heTitle: "עיצוב ניוזלטרים — לקוחות מגוונים",
    enTitle: "Newsletter Design — Diverse Clients",
    subtitle: "Figma · Canva · FlashyApp · Klaviyo",
    heDesc:
      "עיצוב ניוזלטרים ו-pop-up forms עבור מותגים: amika, laliteva, Nintendo Israel, צירים ועוד — כל אחד עם שפה ויזואלית ייחודית.",
    enDesc:
      "Newsletter and pop-up form design for brands: amika, laliteva, Nintendo Israel, Tzirim and more — each with a distinct visual identity.",
    tags: ["Figma", "Canva", "Newsletter Design", "Pop-up Forms"],
    accent: "#E88FA0",
  },
  {
    heTitle: "אוטומציית התראות לעסקים — Make.com",
    enTitle: "Business Inquiry Automation — Make.com",
    subtitle: "Make.com · Google Sheets · Claude AI · Telegram",
    heDesc:
      "בניית אוטומציה לניהול פניות נכנסות לעסקים: קליטת נתונים מטפסי פניות, ניתוח חכם בעזרת Claude AI, ושליחת התראות מיידיות למנהל בטלגרם. הפתרון מצמצם זמן תגובה ומונע פניות שנופלות בין הכסאות.",
    enDesc:
      "Built a business inquiry automation: capturing form submissions, AI-powered analysis with Claude, and instant Telegram alerts to managers. Reduces response time and ensures no lead is missed.",
    tags: ["Make.com", "Claude AI", "Google Sheets", "Telegram", "Business Automation"],
    accent: "#A98ED4",
  },
  {
    heTitle: "סוכן AI לניתוח ושיפור אתרי Shopify",
    enTitle: "AI Agent for Shopify Site Analysis",
    subtitle: "Make.com · Web Scraping · Claude AI · Shopify",
    heDesc:
      "סוכן AI שסורק אתרי ecommerce בשופיפיי, מנתח את המבנה, העיצוב וחוויית המשתמש, ומייצר דוח מפורט עם המלצות מעשיות לשיפור. הפתרון משלב web scraping ובינה מלאכותית לאבחון מהיר ואפקטיבי.",
    enDesc:
      "An AI agent that scrapes Shopify ecommerce sites, analyzes structure, design and UX, then generates a detailed improvement report. Combines web scraping and AI for fast, actionable insights.",
    tags: ["Make.com", "Web Scraping", "Claude AI", "Shopify", "UX Analysis"],
    accent: "#F09A60",
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w <= 640 ? 1 : w <= 1023 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const ProjectsSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const visibleCount = useVisibleCount();
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = carouselProjects.length - visibleCount;

  // Touch handling
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => setCurrentIndex(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex]
  );

  // Reset index when visible count changes
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(Math.max(0, maxIndex));
  }, [maxIndex, currentIndex]);

  // Each card is (100% / visibleCount) with gap accounted
  const gap = 20;
  const cardPercent = 100 / visibleCount;
  // translateX: move by cardPercent per index, adjust for gap
  const offset = currentIndex * (cardPercent);
  const translateDir = isRTL ? offset : -offset;

  const totalDots = maxIndex + 1;

  const renderCard = (project: typeof carouselProjects[0], iconIdx: number) => {
    const Icon = cardIcons[iconIdx];
    return (
      <div
        className="group relative rounded-[20px] border bg-background p-8 transition-all duration-200 ease-out h-full"
        style={{
          borderColor: "#EEEAF5",
          borderBottom: "3px solid transparent",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(-3px)";
          el.style.boxShadow = "0 8px 24px rgba(44,44,58,0.08)";
          el.style.borderBottom = `3px solid ${project.accent}`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
          el.style.borderBottom = "3px solid transparent";
        }}
      >
        <Icon
          size={20}
          strokeWidth={1.5}
          color={project.accent}
          className="absolute top-6 end-6 opacity-60"
        />
        <h3 className="font-bold text-foreground mb-1 pe-8" style={{ fontSize: 17 }}>
          {t(project.heTitle, project.enTitle)}
        </h3>
        <p className="text-muted-foreground mb-3" style={{ fontSize: 12, marginTop: 4 }}>
          {project.subtitle}
        </p>
        <p
          className="mb-4"
          style={{
            fontSize: 14,
            color: "#6B6880",
            lineHeight: 1.7,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {t(project.heDesc, project.enDesc)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full font-medium"
              style={{
                fontSize: 11,
                padding: "3px 10px",
                backgroundColor: "transparent",
                color: project.accent,
                border: `1px solid ${project.accent}66`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-10 md:py-16" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#E88FA0" }} />
            <span className="text-sm tracking-wide font-medium" style={{ color: "#E88FA0" }}>
              {t("פרויקטים", "Projects")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.1]">
            {t("עבודות ", "Work I'm ")}
            <span className="text-accent-pink italic">{t("שגאה בהן", "Proud Of")}</span>
          </h2>
        </div>

        {/* Featured Umina card */}
        <div
          className={`mb-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div
            className="group relative rounded-[20px] border bg-background p-8 transition-all duration-200 ease-out"
            style={{
              borderColor: "#EEEAF5",
              borderInlineStart: `4px solid ${featuredProject.accent}`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 8px 24px rgba(44,44,58,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <Mail
              size={20}
              strokeWidth={1.5}
              color={featuredProject.accent}
              className="absolute top-6 end-6 opacity-60"
            />
            <h3 className="font-bold text-foreground mb-1 pe-8" style={{ fontSize: 17 }}>
              {t(featuredProject.heTitle, featuredProject.enTitle)}
            </h3>
            <p className="text-muted-foreground mb-3" style={{ fontSize: 12, marginTop: 4 }}>
              {featuredProject.subtitle}
            </p>
            <p
              className="mb-4"
              style={{
                fontSize: 14,
                color: "#6B6880",
                lineHeight: 1.7,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {t(featuredProject.heDesc, featuredProject.enDesc)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {featuredProject.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full font-medium"
                  style={{
                    fontSize: 11,
                    padding: "3px 10px",
                    backgroundColor: "transparent",
                    color: featuredProject.accent,
                    border: `1px solid ${featuredProject.accent}66`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Arrow buttons — hidden on mobile */}
          <button
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center z-10 transition-all duration-200"
            style={{
              [isRTL ? "left" : "right"]: -22,
              background: "white",
              border: "1px solid #EEEAF5",
              boxShadow: "0 4px 16px rgba(44,44,58,0.10)",
              opacity: currentIndex >= maxIndex ? 0.3 : 1,
              cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
            }}
            disabled={currentIndex >= maxIndex}
            onClick={() => goTo(currentIndex + 1)}
            onMouseEnter={(e) => {
              if (currentIndex < maxIndex) {
                const el = e.currentTarget;
                el.style.background = "#A98ED4";
                el.style.borderColor = "#A98ED4";
                el.style.boxShadow = "0 6px 20px rgba(169,142,212,0.30)";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "white";
              el.style.borderColor = "#EEEAF5";
              el.style.boxShadow = "0 4px 16px rgba(44,44,58,0.10)";
            }}
          >
            {isRTL ? (
              <ChevronLeft size={20} className="text-foreground group-hover:text-white" />
            ) : (
              <ChevronRight size={20} className="text-foreground" />
            )}
          </button>

          <button
            className="hidden sm:flex absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center z-10 transition-all duration-200"
            style={{
              [isRTL ? "right" : "left"]: -22,
              background: "white",
              border: "1px solid #EEEAF5",
              boxShadow: "0 4px 16px rgba(44,44,58,0.10)",
              opacity: currentIndex <= 0 ? 0.3 : 1,
              cursor: currentIndex <= 0 ? "not-allowed" : "pointer",
            }}
            disabled={currentIndex <= 0}
            onClick={() => goTo(currentIndex - 1)}
            onMouseEnter={(e) => {
              if (currentIndex > 0) {
                const el = e.currentTarget;
                el.style.background = "#A98ED4";
                el.style.borderColor = "#A98ED4";
                el.style.boxShadow = "0 6px 20px rgba(169,142,212,0.30)";
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "white";
              el.style.borderColor = "#EEEAF5";
              el.style.boxShadow = "0 4px 16px rgba(44,44,58,0.10)";
            }}
          >
            {isRTL ? (
              <ChevronRight size={20} className="text-foreground" />
            ) : (
              <ChevronLeft size={20} className="text-foreground" />
            )}
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                gap,
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "transform",
                transform: `translateX(${translateDir}%)`,
              }}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const delta = e.changedTouches[0].clientX - touchStartX.current;
                const minSwipe = 50;
                if (Math.abs(delta) > minSwipe) {
                  // In RTL, swipe directions are reversed
                  const direction = isRTL ? (delta > 0 ? 1 : -1) : (delta > 0 ? -1 : 1);
                  goTo(currentIndex + direction);
                }
                touchStartX.current = null;
              }}
            >
              {carouselProjects.map((project, i) => (
                <div
                  key={i}
                  style={{
                    flex: `0 0 calc(${cardPercent}% - ${(gap * (visibleCount - 1)) / visibleCount}px)`,
                    minWidth: 0,
                  }}
                >
                  {renderCard(project, i)}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-7">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-250 rounded-full"
                style={{
                  width: i === currentIndex ? 24 : 8,
                  height: 8,
                  borderRadius: i === currentIndex ? 4 : "50%",
                  background: i === currentIndex ? "#A98ED4" : "#EEEAF5",
                  cursor: "pointer",
                  border: "none",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
