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
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const [activeTab, setActiveTab] = useState<TabKey>("newsletters");
  const [lightboxCard, setLightboxCard] = useState<GalleryCardData | null>(null);

  const closeLightbox = useCallback(() => setLightboxCard(null), []);
  const cards = galleryData[activeTab];

  const gridClass =
    activeTab === "popups"
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      : activeTab === "webdesign"
      ? "grid grid-cols-1 md:grid-cols-2 gap-5"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";

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
                    ? { backgroundColor: "#6DC4A0", color: "#fff", borderColor: "#6DC4A0" }
                    : { backgroundColor: "#fff", color: "#9A8FA8", borderColor: "#E8E4F5" }
                }
              >
                {t(tab.he, tab.en)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div key={activeTab} className={gridClass}>
            {cards.map((card, i) => (
              <GalleryCard
                key={card.src + i}
                card={card}
                index={i}
                isVisible={isVisible}
                onClick={() => setLightboxCard(card)}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxCard && <Lightbox card={lightboxCard} onClose={closeLightbox} t={t} />}
    </>
  );
};

export default DesignShowcase;
