import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "newsletters" | "popups" | "webdesign" | "automation";

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
  { key: "webdesign", he: "עיצוב ופיתוח אתרים", en: "Web Design & Dev" },
  { key: "automation", he: "אוטומציות", en: "Automations" },
];

const galleryData: Record<TabKey, GalleryCardData[]> = {
  newsletters: [
    { src: "/noviia.png", heLabel: "NOVIIA — ניוזלטר מוצרי שיער", enLabel: "NOVIIA — Hair Products Newsletter", tags: ["Email Design", "Klaviyo"], accent: "#4E7FA8", paleBg: "#EEF4FA", objectFit: "contain" },
    { src: "/amika-detox.png", heLabel: "amika — ניוזלטר טיפוח קרקפת", enLabel: "amika — Scalp Care Newsletter", tags: ["FlashyApp", "Email Design"], accent: "#D4798A", paleBg: "#FDF4F5", objectFit: "contain" },
    { src: "/amika-blonde.png", heLabel: "amika — הסוד לבלונד מושלם", enLabel: "amika — The Blonde Secret", tags: ["FlashyApp", "Email Design"], accent: "#C4834A", paleBg: "#FDF1E8", objectFit: "contain" },
  ],
  popups: [
    { src: "/popup-umina.png", heLabel: "Umina Superfood — טופס הרשמה", enLabel: "Umina Superfood — Signup Form", tags: ["Shopify", "FlashyApp", "Pop-up Design"], accent: "#3D8B6E", paleBg: "#EDF6F2", imageMaxHeight: 480, imageBg: "#F6F5F0", objectFit: "contain" },
    { src: "/popup-nintendo.png", heLabel: "Nintendo Israel — הרשמה לניוזלטר", enLabel: "Nintendo Israel — Newsletter Signup", tags: ["Shopify", "Pop-up Design"], accent: "#D4798A", paleBg: "#FDF4F5", imageMaxHeight: 480, imageBg: "#F6F5F0", objectFit: "contain" },
    { src: "/popup-tzirim.png", heLabel: "צירים — קהילת הריון", enLabel: "Tzirim — Pregnancy Community", tags: ["Klaviyo", "Pop-up Design"], accent: "#7B68A8", paleBg: "#F2F0FA", imageMaxHeight: 480, imageBg: "#F6F5F0", objectFit: "contain" },
    { src: "/popup-childnmore.png", heLabel: "ChildNMore — פופאפ הרשמה", enLabel: "ChildNMore — Signup Pop-up", tags: ["Pop-up Design", "Figma"], accent: "#D4798A", paleBg: "#FDF4F5", imageMaxHeight: 480, imageBg: "#F6F5F0", objectFit: "contain" },
  ],
  webdesign: [
    { src: "/jewelry-site.png", heLabel: "Aurora — עיצוב חנות תכשיטים", enLabel: "Aurora — Jewelry Store Design", heDesc: "עיצוב דף הבית לחנות תכשיטים יוקרתית — מ-Figma לפרודקשן", enDesc: "Homepage design for a luxury jewelry store — from Figma to production", tags: ["Web Design", "Figma", "E-commerce"], accent: "#C4834A", paleBg: "#FDF1E8", objectFit: "cover", imageMaxHeight: 320 },
    { src: "/product-page.png", heLabel: "Lumina — עמוד מוצר", enLabel: "Lumina — Product Page", heDesc: "עיצוב עמוד מוצר מפורט וממיר לחנות תכשיטים", enDesc: "Detailed and high-converting product page design for a jewelry store", tags: ["Web Design", "Figma", "UI/UX"], accent: "#4E7FA8", paleBg: "#EEF4FA", objectFit: "cover", imageMaxHeight: 320 },
  ],
  automation: [
    { src: "/make-gym.png", heLabel: "Make.com — אוטומציה חכמה לניהול פניות", enLabel: "Make.com — Smart Inquiry Automation", heDesc: "אוטומציה משולבת AI לקליטת פניות, ניתוח חכם ושליחת התראות בטלגרם", enDesc: "AI-powered automation for intake, smart analysis & Telegram alerts", tags: ["Make.com", "Claude AI", "Google Sheets", "Telegram"], accent: "#3D8B6E", paleBg: "#EDF6F2", objectFit: "contain", imageBg: "#F6F5F0", imageMaxHeight: 320 },
  ],
};

/* ── Lightbox ── */
const Lightbox = ({ card, onClose, t }: { card: GalleryCardData; onClose: () => void; t: (he: string, en: string) => string }) => {
  const [isTall, setIsTall] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-200"
      style={{ background: "rgba(28,26,40,0.88)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-[20px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-3 fade-in duration-250" style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto" }}>
        <button onClick={onClose} className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-background flex items-center justify-center border border-border shadow-md hover:scale-110 transition-transform">
          <X size={18} className="text-foreground" />
        </button>
        <div className="flex items-start justify-center" style={{ background: card.imageBg ?? "#F6F5F0", overflow: isTall ? "auto" : "hidden", ...(isTall ? { maxHeight: "calc(90vh - 80px)" } : {}) }}>
          <img src={card.src} alt={card.enLabel} className="block" style={{ maxHeight: "calc(90vh - 80px)", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }} onLoad={(e) => { if (e.currentTarget.naturalHeight > 1200) setIsTall(true); }} />
        </div>
        <div className="px-5 py-4 border-t border-border flex-shrink-0" style={{ minHeight: 60 }}>
          <p className="font-display font-bold text-foreground text-lg md:text-xl">{t(card.heLabel, card.enLabel)}</p>
          {card.heDesc && <p className="text-muted-foreground mt-1.5 text-sm md:text-base leading-relaxed">{t(card.heDesc, card.enDesc ?? "")}</p>}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {card.tags.map((tag) => (
              <span key={tag} className="rounded-full font-medium inline-flex border border-transparent" style={{ fontSize: 11, padding: "3px 10px", backgroundColor: card.paleBg, color: card.accent }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Gallery Card ── */
const GalleryCard = ({ card, index, isVisible, onClick, t }: { card: GalleryCardData; index: number; isVisible: boolean; onClick: () => void; t: (he: string, en: string) => string }) => (
  <div
    onClick={onClick}
    className="showcase-card group rounded-2xl overflow-hidden cursor-pointer transition-all duration-250 border border-border"
    style={{ background: "white", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(8px)", transitionDelay: `${80 * index}ms` }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(44,44,58,0.10)"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = isVisible ? "translateY(0)" : "translateY(8px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
  >
    <div className="relative w-full overflow-hidden flex items-center justify-center border-b border-border" style={{ height: 200, background: card.imageBg ?? "#F6F5F0" }}>
      <img src={card.src} alt={card.enLabel} loading="lazy" className="w-full h-full block" style={{ objectFit: card.objectFit || "cover", objectPosition: "top" }} />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-250" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-lg scale-0 group-hover:scale-100 transition-transform duration-250">
        <ZoomIn size={18} className="text-foreground" />
      </div>
    </div>
    <div className="px-5 py-4">
      <p className="font-display font-bold text-foreground mb-1.5 text-base md:text-lg">{t(card.heLabel, card.enLabel)}</p>
      {card.heDesc && <p className="text-muted-foreground mb-3 text-xs md:text-sm leading-relaxed">{t(card.heDesc, card.enDesc ?? "")}</p>}
      <div className="flex flex-wrap gap-1.5">
        {card.tags.map((tag) => (
          <span key={tag} className="rounded-full font-medium inline-flex border border-transparent" style={{ fontSize: 11, padding: "3px 10px", backgroundColor: card.paleBg, color: card.accent }}>{tag}</span>
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

  useEffect(() => { setCurrentIndex(0); }, [activeTab]);

  const goPrev = useCallback(() => setCurrentIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(() => setCurrentIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const cardPercent = 100 / visibleCount;
  const gapPx = visibleCount === 1 ? 0 : 20;
  const adjustedGap = gapPx * (visibleCount - 1) / visibleCount;
  const offset = currentIndex * cardPercent;
  const translateDir = isRTL ? offset : -offset;

  return (
    <>
      <section id="showcase" ref={sectionRef} className="showcase-section relative py-12 md:py-24" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #F4F1ED 15%, #EAE2D6 50%, #F4F1ED 85%, #FFFFFF 100%)" }}>
        <div className="container mx-auto px-5 md:px-6">
          {/* Header */}
          <div className={`mb-8 md:mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-green" />
              <span className="text-sm tracking-wide font-medium text-accent-green">{t("עיצוב", "Design")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-2">
              {t("עבודות ", "Selected ")}
              <em className="not-italic text-accent-green">{t("נבחרות", "Work")}</em>
            </h2>
            <p className="text-sm md:text-base mt-3 max-w-lg text-muted-foreground">
              {t("ניוזלטרים, pop-ups, עיצוב אתרים ואוטומציות — מהפרויקטים האחרונים שלי", "Newsletters, pop-ups, web design and automations from recent projects")}
            </p>
          </div>

          {/* Tabs */}
          <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: "150ms" }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="rounded-full px-5 py-2 text-sm font-medium border transition-all duration-200"
                style={activeTab === tab.key
                  ? { backgroundColor: "hsl(var(--accent-green))", color: "white", borderColor: "hsl(var(--accent-green))", fontWeight: 600 }
                  : { backgroundColor: "rgba(255,255,255,0.7)", color: "hsl(var(--muted-foreground))", borderColor: "hsl(var(--border))" }}
              >
                {t(tab.he, tab.en)}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative" style={{ overflow: "visible" }}>
            {visibleCount > 1 && (
              <>
                <button onClick={isRTL ? goNext : goPrev} disabled={isRTL ? currentIndex >= maxIndex : currentIndex <= 0}
                  className="hidden sm:flex absolute z-10 items-center justify-center w-11 h-11 rounded-full bg-background border border-border transition-all duration-200"
                  style={{ top: "40%", transform: "translateY(-50%)", [isRTL ? "left" : "right"]: -22, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", opacity: (isRTL ? currentIndex >= maxIndex : currentIndex <= 0) ? 0.25 : 1, cursor: (isRTL ? currentIndex >= maxIndex : currentIndex <= 0) ? "default" : "pointer" }}
                >
                  {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </button>
                <button onClick={isRTL ? goPrev : goNext} disabled={isRTL ? currentIndex <= 0 : currentIndex >= maxIndex}
                  className="hidden sm:flex absolute z-10 items-center justify-center w-11 h-11 rounded-full bg-background border border-border transition-all duration-200"
                  style={{ top: "40%", transform: "translateY(-50%)", [isRTL ? "right" : "left"]: -22, boxShadow: "0 4px 16px rgba(0,0,0,0.10)", opacity: (isRTL ? currentIndex <= 0 : currentIndex >= maxIndex) ? 0.25 : 1, cursor: (isRTL ? currentIndex <= 0 : currentIndex >= maxIndex) ? "default" : "pointer" }}
                >
                  {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
              </>
            )}

            <div style={{ overflow: "hidden" }}>
              <div
                className="flex"
                style={{ gap: gapPx, transform: `translateX(${translateDir}%)`, transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)", willChange: "transform" }}
                onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchStart === null) return;
                  const delta = touchStart - e.changedTouches[0].clientX;
                  if (isRTL) { if (delta < -50) goNext(); if (delta > 50) goPrev(); }
                  else { if (delta > 50) goNext(); if (delta < -50) goPrev(); }
                  setTouchStart(null);
                }}
              >
                {cards.map((card, i) => (
                  <div key={card.src + i} style={{ flex: `0 0 calc(${cardPercent}% - ${adjustedGap}px)`, minWidth: 0 }}>
                    <GalleryCard card={card} index={i} isVisible={isVisible} onClick={() => setLightboxCard(card)} t={t} />
                  </div>
                ))}
              </div>
            </div>

            {cards.length > visibleCount && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} className="rounded-full transition-all duration-250"
                    style={{ width: i === currentIndex ? 24 : 8, height: 8, borderRadius: i === currentIndex ? 4 : "50%", backgroundColor: i === currentIndex ? "hsl(var(--accent-green))" : "hsl(var(--border))", cursor: "pointer", border: "none", padding: 0 }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {lightboxCard && <Lightbox card={lightboxCard} onClose={closeLightbox} t={t} />}
    </>
  );
};

export default DesignShowcase;
