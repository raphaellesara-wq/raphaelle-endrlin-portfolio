import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Mail,
  RefreshCw,
  GitBranch,
  Settings,
  AppWindow,
  Heart,
  FileText,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const cards = [
  {
    icon: Mail,
    accent: "#6DC4A0",
    paleBg: "#D6F5EA",
    gradient: "linear-gradient(135deg, #D6F5EA 0%, #F0FBF7 100%)",
    label: "Umina — ניוזלטר ברוכות הבאות",
    heTitle: "ברוכות הבאות לממלכת הסופרפוד",
    enTitle: "Welcome to the Superfood Kingdom",
    tags: ["Email Design", "FlashyApp", "Figma"],
  },
  {
    icon: RefreshCw,
    accent: "#E88FA0",
    paleBg: "#FEF0F3",
    gradient: "linear-gradient(135deg, #FEF0F3 0%, #FFF8FA 100%)",
    label: "Umina — חידוש מועדון לקוחות",
    heTitle: "ניוזלטר חידוש חברות במועדון",
    enTitle: "Membership Renewal Newsletter",
    tags: ["Email Design", "Retention", "FlashyApp"],
  },
  {
    icon: GitBranch,
    accent: "#72AEE8",
    paleBg: "#D8EEFB",
    gradient: "linear-gradient(135deg, #D8EEFB 0%, #F0F8FF 100%)",
    label: "FlashyApp — Abandon Cart Journey",
    heTitle: "מסע לקוח — נטישת עגלה",
    enTitle: "Customer Journey — Abandoned Cart",
    tags: ["Customer Journey", "Automation", "FlashyApp"],
  },
  {
    icon: Settings,
    accent: "#A98ED4",
    paleBg: "#EDE6FA",
    gradient: "linear-gradient(135deg, #EDE6FA 0%, #F8F5FF 100%)",
    label: "Make.com — AI Agent + Telegram",
    heTitle: "אוטומציה חכמה לניהול פניות עסקיות",
    enTitle: "Smart Automation for Business Inquiries",
    tags: ["Make.com", "Claude AI", "Automation"],
    image: "/make-scenario.png",
  },
  {
    icon: AppWindow,
    accent: "#F09A60",
    paleBg: "#FDDEC0",
    gradient: "linear-gradient(135deg, #FDDEC0 0%, #FFF8F2 100%)",
    label: "Nintendo Israel — Pop-up Form",
    heTitle: "טופס הרשמה — Nintendo Israel",
    enTitle: "Signup Form — Nintendo Israel",
    tags: ["Pop-up Design", "Figma", "Shopify"],
    image: "/nintendo-popup.png",
  },
  {
    icon: Heart,
    accent: "#E88FA0",
    paleBg: "#FEF0F3",
    gradient: "linear-gradient(135deg, #FEF0F3 0%, #FFF8FA 100%)",
    label: "צירים — קהילת הריון",
    heTitle: "טופס הרשמה — קהילת צירים",
    enTitle: "Signup Form — Tzirim Community",
    tags: ["Pop-up Design", "Community", "Figma"],
  },
  {
    icon: FileText,
    accent: "#6DC4A0",
    paleBg: "#D6F5EA",
    gradient: "linear-gradient(135deg, #D6F5EA 0%, #F0FBF7 100%)",
    label: "Umina — ניוזלטר ישיר",
    heTitle: "ניוזלטר תוכן — סוד קרקפת הבריאה",
    enTitle: "Content Newsletter — Healthy Scalp Secrets",
    tags: ["Content Email", "FlashyApp", "Copywriting"],
  },
];

const DesignShowcase = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const CARD_WIDTH = 360;
  const GAP = 20;

  const scroll = useCallback(
    (dir: "prev" | "next") => {
      if (!scrollRef.current) return;
      const amount = dir === "next" ? CARD_WIDTH + GAP : -(CARD_WIDTH + GAP);
      scrollRef.current.scrollBy({ left: isRTL ? -amount : amount, behavior: "smooth" });
    },
    [isRTL]
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollPos = Math.abs(el.scrollLeft);
      const idx = Math.round(scrollPos / (CARD_WIDTH + GAP));
      setActiveIndex(Math.min(idx, cards.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox escape key
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  return (
    <>
      <section id="showcase" ref={sectionRef} className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div
            className={`mb-8 md:mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: "#6DC4A0" }} />
              <span className="text-sm tracking-wide font-medium" style={{ color: "#6DC4A0" }}>
                {t("עיצוב", "Design")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15]">
              {t("כך נראית ", "This Is What The ")}
              <em className="not-italic" style={{ color: "#6DC4A0" }}>
                {t("העבודה בפועל", "Work Looks Like")}
              </em>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-lg">
              {t(
                "ניוזלטרים, מסעות לקוח ואוטומציות — מהפרויקטים האחרונים שלי",
                "Newsletters, customer journeys and automations from recent projects"
              )}
            </p>
          </div>

          {/* Carousel wrapper */}
          <div className="relative">
            {/* Arrows */}
            <button
              onClick={() => scroll("prev")}
              className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-background border transition-colors duration-200 hover:text-white"
              style={{
                [isRTL ? "right" : "left"]: "-22px",
                borderColor: "#EEEAF5",
                color: "#2C2C3A",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#A98ED4";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "";
                (e.currentTarget as HTMLElement).style.color = "#2C2C3A";
              }}
              aria-label="Previous"
            >
              {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <button
              onClick={() => scroll("next")}
              className="absolute top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-background border transition-colors duration-200 hover:text-white"
              style={{
                [isRTL ? "left" : "right"]: "-22px",
                borderColor: "#EEEAF5",
                color: "#2C2C3A",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#A98ED4";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "";
                (e.currentTarget as HTMLElement).style.color = "#2C2C3A";
              }}
              aria-label="Next"
            >
              {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>

            {/* Scrollable track */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={`shrink-0 rounded-[20px] border bg-background cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      width: CARD_WIDTH,
                      borderColor: "#EEEAF5",
                      scrollSnapAlign: "start",
                      transitionDelay: `${200 + i * 100}ms`,
                    }}
                    onClick={() => setLightboxIndex(i)}
                  >
                    {/* Image area */}
                    {'image' in card && card.image ? (
                      <div className="rounded-t-[20px] overflow-hidden" style={{ height: 240 }}>
                        <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div
                        className="flex flex-col items-center justify-center rounded-t-[20px]"
                        style={{ height: 240, background: card.gradient }}
                      >
                        <Icon size={48} strokeWidth={1.5} color={card.accent} />
                        <span className="mt-3 text-xs font-medium text-center px-4" style={{ color: card.accent }}>
                          {card.label}
                        </span>
                      </div>
                    )}

                    {/* Caption */}
                    <div className="p-5">
                      <p className="font-semibold text-foreground" style={{ fontSize: 15 }}>
                        {t(card.heTitle, card.enTitle)}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full font-medium"
                            style={{
                              fontSize: 10,
                              padding: "3px 10px",
                              backgroundColor: card.paleBg,
                              color: card.accent,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {cards.map((card, i) => (
                <button
                  key={i}
                  className="w-2 h-2 rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: i === activeIndex ? card.accent : "#EEEAF5",
                  }}
                  onClick={() => {
                    scrollRef.current?.scrollTo({
                      left: (isRTL ? -1 : 1) * i * (CARD_WIDTH + GAP),
                      behavior: "smooth",
                    });
                  }}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Hint text */}
          <p className="text-center mt-4" style={{ fontSize: 12, color: "#AAAABC" }}>
            {t("* לחצי על כל כרטיס להגדלה", "* Click any card to enlarge")}
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(44, 44, 58, 0.85)" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 end-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="rounded-[20px] overflow-hidden max-w-lg w-full bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const card = cards[lightboxIndex];
              const Icon = card.icon;
              return (
                <>
                  {'image' in card && card.image ? (
                    <div className="overflow-hidden" style={{ height: 320 }}>
                      <img src={card.image} alt={card.label} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center"
                      style={{ height: 320, background: card.gradient }}
                    >
                      <Icon size={64} strokeWidth={1.5} color={card.accent} />
                      <span className="mt-4 text-sm font-medium text-center px-6" style={{ color: card.accent }}>
                        {card.label}
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    <p className="font-semibold text-foreground text-lg">
                      {t(card.heTitle, card.enTitle)}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full font-medium"
                          style={{
                            fontSize: 11,
                            padding: "4px 12px",
                            backgroundColor: card.paleBg,
                            color: card.accent,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
};

export default DesignShowcase;
