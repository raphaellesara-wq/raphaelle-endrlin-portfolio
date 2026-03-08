import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "newsletters" | "popups" | "webdesign";

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setCount(w < 641 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

interface GalleryCardData {
  src: string;
  heLabel: string;
  enLabel: string;
  heDesc?: string;
  enDesc?: string;
  tags: string[];
  accent: string;
  paleBg: string;
  objectFit?: "contain" | "cover";
  imageBg?: string;
  imageMaxHeight?: number;
}

const tabs: { key: TabKey; he: string; en: string }[] = [
  { key: "newsletters", he: "ניוזלטרים", en: "Newsletters" },
  { key: "popups", he: "Pop-up Forms", en: "Pop-up Forms" },
  { key: "webdesign", he: "עיצוב ואוטומציה", en: "Web Design & Automation" },
];

const galleryData: Record<TabKey, GalleryCardData[]> = {
  newsletters: [
    {
      src: "/popup-umina.png",
      heLabel: "Umina Superfood — ניוזלטר ברוכות הבאות",
      enLabel: "Umina Superfood — Welcome Newsletter",
      tags: ["FlashyApp", "Figma", "Email Design"],
      accent: "#6DC4A0",
      paleBg: "#D6F5EA",
    },
    {
      src: "/amika-detox.png",
      heLabel: "amika — ניוזלטר טיפוח קרקפת",
      enLabel: "amika — Scalp Care Newsletter",
      tags: ["FlashyApp", "Email Design"],
      accent: "#E88FA0",
      paleBg: "#FEF0F3",
    },
    {
      src: "/amika-blonde.png",
      heLabel: "amika — הסוד לבלונד מושלם",
      enLabel: "amika — The Blonde Secret",
      tags: ["FlashyApp", "Email Design"],
      accent: "#F09A60",
      paleBg: "#FDDEC0",
    },
    {
      src: "/childnmore.png",
      heLabel: "ChildNMore — ניוזלטר מוצרי ילדים",
      enLabel: "ChildNMore — Kids Products Newsletter",
      tags: ["Email Design", "Figma"],
      accent: "#E88FA0",
      paleBg: "#FEF0F3",
    },
    {
      src: "/noviia.png",
      heLabel: "NOVIIA — ניוזלטר מוצרי שיער",
      enLabel: "NOVIIA — Hair Products Newsletter",
      tags: ["Email Design", "Klaviyo"],
      accent: "#72AEE8",
      paleBg: "#D8EEFB",
    },
  ],
  popups: [
    {
      src: "/popup-umina.png",
      heLabel: "Umina Superfood — טופס הרשמה",
      enLabel: "Umina Superfood — Signup Form",
      tags: ["Shopify", "FlashyApp", "Pop-up Design"],
      accent: "#6DC4A0",
      paleBg: "#D6F5EA",
      imageMaxHeight: 480,
      imageBg: "#F8F6FF",
    },
    {
      src: "/popup-nintendo.png",
      heLabel: "Nintendo Israel — הרשמה לניוזלטר",
      enLabel: "Nintendo Israel — Newsletter Signup",
      tags: ["Shopify", "Pop-up Design"],
      accent: "#E88FA0",
      paleBg: "#FEF0F3",
      imageMaxHeight: 480,
      imageBg: "#F8F6FF",
    },
    {
      src: "/popup-tzirim.png",
      heLabel: "צירים — קהילת הריון",
      enLabel: "Tzirim — Pregnancy Community",
      tags: ["Klaviyo", "Pop-up Design"],
      accent: "#A98ED4",
      paleBg: "#EDE6FA",
      imageMaxHeight: 480,
      imageBg: "#F8F6FF",
    },
  ],
  webdesign: [
    {
      src: "/shiri-tam.png",
      heLabel: "Shiri Tam — חנות תכשיטים ב-Shopify",
      enLabel: "Shiri Tam — Shopify Jewelry Store",
      heDesc: "עיצוב ובניית חנות תכשיטים ב-Shopify — Figma עד פרודקשן",
      enDesc: "Jewelry store design & build on Shopify — from Figma to production",
      tags: ["Shopify", "Figma", "Web Design"],
      accent: "#F09A60",
      paleBg: "#FDDEC0",
      objectFit: "cover",
      imageMaxHeight: 320,
    },
    {
      src: "/make-gym.png",
      heLabel: "Make.com — אוטומציה חכמה לניהול פניות",
      enLabel: "Make.com — Smart Inquiry Automation",
      heDesc: "אוטומציה משולבת AI לקליטת פניות, ניתוח חכם ושליחת התראות בטלגרם",
      enDesc: "AI-powered automation for intake, smart analysis & Telegram alerts",
      tags: ["Make.com", "Claude AI", "Google Sheets", "Telegram"],
      accent: "#72AEE8",
      paleBg: "#D8EEFB",
      objectFit: "contain",
      imageBg: "#F0F8FF",
      imageMaxHeight: 320,
    },
  ],
};

/* ── Lightbox ── */
const Lightbox = ({
  card,
  onClose,
  t,
}: {
  card: GalleryCardData;
  onClose: () => void;
  t: (he: string, en: string) => string;
}) => {
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-200"
      style={{ background: "rgba(28,24,48,0.88)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative bg-background rounded-[20px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-3 fade-in duration-250"
        style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-background flex items-center justify-center border border-border shadow-md hover:scale-110 transition-transform"
        >
          <X size={18} className="text-foreground" />
        </button>

        {/* Image */}
        <div
          className="flex items-start justify-center"
          style={{
            background: card.imageBg ?? "#F8F6FF",
            overflow: isTall ? "auto" : "hidden",
            ...(isTall ? { maxHeight: "calc(90vh - 80px)" } : {}),
          }}
        >
          <img
            src={card.src}
            alt={card.enLabel}
            className="block"
            style={{
              maxHeight: "calc(90vh - 80px)",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalHeight > 1200) setIsTall(true);
            }}
          />
        </div>

        {/* Info bar */}
        <div className="px-5 py-3.5 border-t border-border flex-shrink-0" style={{ minHeight: 60 }}>
          <p className="font-bold text-foreground" style={{ fontSize: 14 }}>
            {t(card.heLabel, card.enLabel)}
          </p>
          {card.heDesc && (
            <p className="text-muted-foreground mt-1" style={{ fontSize: 12 }}>
              {t(card.heDesc, card.enDesc ?? "")}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full font-medium inline-flex"
                style={{
                  fontSize: 11,
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
    </div>
  );
};

/* ── Gallery Card (thumbnail) ── */
const GalleryCard = ({
  card,
  index,
  isVisible,
  onClick,
  t,
}: {
  card: GalleryCardData;
  index: number;
  isVisible: boolean;
  onClick: () => void;
  t: (he: string, en: string) => string;
}) => (
  <div
    onClick={onClick}
    className="group rounded-2xl border overflow-hidden bg-background cursor-pointer transition-all duration-250"
    style={{
      borderColor: "#EEEAF5",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(8px)",
      transitionDelay: `${80 * index}ms`,
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(44,44,58,0.12)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = isVisible ? "translateY(0)" : "translateY(8px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
    }}
  >
    {/* Thumbnail */}
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: 200, background: card.imageBg ?? "#F8F6FF" }}
    >
      <img
        src={card.src}
        alt={card.enLabel}
        loading="lazy"
        className="w-full h-full block"
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#A98ED4]/0 group-hover:bg-[#A98ED4]/15 transition-colors duration-250" />
      {/* Zoom icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-lg scale-0 group-hover:scale-100 transition-transform duration-250">
        <ZoomIn size={18} style={{ color: "#A98ED4" }} />
      </div>
    </div>

    {/* Info */}
    <div className="px-4 py-3.5">
      <p className="font-semibold text-foreground mb-2" style={{ fontSize: 13 }}>
        {t(card.heLabel, card.enLabel)}
      </p>
      {card.heDesc && (
        <p className="text-muted-foreground mb-2" style={{ fontSize: 12 }}>
          {t(card.heDesc, card.enDesc ?? "")}
        </p>
      )}
      <div className="flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full font-medium inline-flex"
            style={{
              fontSize: 11,
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

/* ── Main Section ── */
const DesignShowcase = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const [activeTab, setActiveTab] = useState<TabKey>("newsletters");
  const [lightboxCard, setLightboxCard] = useState<GalleryCardData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const visibleCount = useVisibleCount();

  const closeLightbox = useCallback(() => setLightboxCard(null), []);
  const cards = galleryData[activeTab];
  const maxIndex = Math.max(0, cards.length - visibleCount);

  // Reset on tab change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const goPrev = useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setCurrentIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const cardPercent = 100 / visibleCount;
  const gapPx = visibleCount === 1 ? 0 : 20;
  const adjustedGap = gapPx * (visibleCount - 1) / visibleCount;
  const offset = currentIndex * cardPercent;
  const translateDir = isRTL ? offset : -offset;

  return (
    <>
      <section id="showcase" ref={sectionRef} className="relative" style={{ background: "linear-gradient(135deg, #1A7A5E 0%, #2A9D7F 50%, #1F8A6E 100%)", padding: "0" }}>
        {/* Wave divider */}
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: "100%", height: 40, display: "block", marginBottom: -1 }}>
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
        <div className="container mx-auto px-6 md:px-[60px]" style={{ paddingTop: 40, paddingBottom: 80 }}>
          {/* Header */}
          <div
            className={`mb-8 md:mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
             <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: "#A8F0D8" }} />
              <span className="text-sm tracking-wide font-medium" style={{ color: "#A8F0D8" }}>
                {t("עיצוב", "Design")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15] text-white">
              {t("כך נראית ", "This Is What The ")}
              <em className="not-italic" style={{ color: "#A8F0D8" }}>
                {t("העבודה בפועל", "Work Looks Like")}
              </em>
            </h2>
            <p className="text-sm md:text-base mt-3 max-w-lg" style={{ color: "rgba(255,255,255,0.80)" }}>
              {t(
                "ניוזלטרים, pop-ups, עיצוב אתרים ואוטומציות — מהפרויקטים האחרונים שלי",
                "Newsletters, pop-ups, web design and automations from recent projects"
              )}
            </p>
          </div>

          {/* Tabs */}
          <div
            className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="rounded-full px-5 py-2 text-sm font-medium border transition-all duration-200"
                style={
                  activeTab === tab.key
                    ? { backgroundColor: "#fff", color: "#1A7A5E", borderColor: "#fff", fontWeight: 700 }
                    : { backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.25)" }
                }
              >
                {t(tab.he, tab.en)}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative" style={{ overflow: "visible" }}>
            {/* Arrows — hidden on mobile */}
            {visibleCount > 1 && (
              <>
                <button
                  onClick={isRTL ? goNext : goPrev}
                  disabled={isRTL ? currentIndex >= maxIndex : currentIndex <= 0}
                  className="hidden sm:flex absolute z-10 items-center justify-center w-11 h-11 rounded-full border transition-all duration-200"
                  style={{
                    top: "40%",
                    transform: "translateY(-50%)",
                    [isRTL ? "left" : "right"]: -22,
                    background: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.30)",
                    color: "white",
                    opacity: (isRTL ? currentIndex >= maxIndex : currentIndex <= 0) ? 0.25 : 1,
                    cursor: (isRTL ? currentIndex >= maxIndex : currentIndex <= 0) ? "default" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled) {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.borderColor = "white";
                      e.currentTarget.style.color = "#1A7A5E";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
                <button
                  onClick={isRTL ? goPrev : goNext}
                  disabled={isRTL ? currentIndex <= 0 : currentIndex >= maxIndex}
                  className="hidden sm:flex absolute z-10 items-center justify-center w-11 h-11 rounded-full border transition-all duration-200"
                  style={{
                    top: "40%",
                    transform: "translateY(-50%)",
                    [isRTL ? "right" : "left"]: -22,
                    background: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.30)",
                    color: "white",
                    opacity: (isRTL ? currentIndex <= 0 : currentIndex >= maxIndex) ? 0.25 : 1,
                    cursor: (isRTL ? currentIndex <= 0 : currentIndex >= maxIndex) ? "default" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!e.currentTarget.disabled) {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.borderColor = "white";
                      e.currentTarget.style.color = "#1A7A5E";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.30)";
                    e.currentTarget.style.color = "white";
                  }}
                >
                  {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
              </>
            )}

            {/* Track */}
            <div style={{ overflow: "hidden" }}>
              <div
                className="flex"
                style={{
                  gap: gapPx,
                  transform: `translateX(${translateDir}%)`,
                  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  willChange: "transform",
                }}
                onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchStart === null) return;
                  const delta = touchStart - e.changedTouches[0].clientX;
                  if (isRTL) {
                    if (delta < -50) goNext();
                    if (delta > 50) goPrev();
                  } else {
                    if (delta > 50) goNext();
                    if (delta < -50) goPrev();
                  }
                  setTouchStart(null);
                }}
              >
                {cards.map((card, i) => (
                  <div
                    key={card.src + i}
                    style={{
                      flex: `0 0 calc(${cardPercent}% - ${adjustedGap}px)`,
                      minWidth: 0,
                    }}
                  >
                    <GalleryCard
                      card={card}
                      index={i}
                      isVisible={isVisible}
                      onClick={() => setLightboxCard(card)}
                      t={t}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            {cards.length > visibleCount && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className="rounded-full transition-all duration-250"
                    style={{
                      width: i === currentIndex ? 24 : 8,
                      height: 8,
                      borderRadius: i === currentIndex ? 4 : "50%",
                      backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.30)",
                      cursor: "pointer",
                      border: "none",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxCard && <Lightbox card={lightboxCard} onClose={closeLightbox} t={t} />}
    </>
  );
};

export default DesignShowcase;
