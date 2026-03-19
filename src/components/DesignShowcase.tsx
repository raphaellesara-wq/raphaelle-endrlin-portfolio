import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

type TabKey = "newsletters" | "popups" | "webdesign" | "automation";

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
      <div className="relative bg-background rounded-[20px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-3 fade-in duration-250" style={{ maxWidth: "min(95vw, 950px)", maxHeight: "90vh", width: "auto" }}>
        <button onClick={onClose} className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-background flex items-center justify-center border border-border shadow-md hover:scale-110 transition-transform">
          <X size={18} className="text-foreground" />
        </button>
        <div style={{ overflow: isTall ? "auto" : "hidden", display: "flex", alignItems: "center", justifyContent: "center", ...(isTall ? { maxHeight: "calc(90vh - 80px)" } : { maxHeight: "calc(90vh - 80px)" }) }}>
          <img
            src={card.src}
            alt={card.enLabel}
            className="block"
            style={{ maxHeight: "calc(90vh - 80px)", maxWidth: "min(95vw, 950px)", width: "auto", height: "auto", display: "block" }}
            onLoad={(e) => { if (e.currentTarget.naturalHeight > 1200) setIsTall(true); }}
          />
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

const categoryMeta: { key: TabKey; he: string; en: string; accent: string; paleBg: string }[] = [
  { key: "newsletters",  he: "ניוזלטרים",              en: "Newsletters",        accent: "#4E7FA8", paleBg: "#EEF4FA" },
  { key: "popups",       he: "Pop-up Forms",            en: "Pop-up Forms",       accent: "#D4798A", paleBg: "#FDF4F5" },
  { key: "webdesign",    he: "עיצוב ופיתוח אתרים",    en: "Web Design & Dev",   accent: "#C4834A", paleBg: "#FDF1E8" },
  { key: "automation",   he: "אוטומציות",               en: "Automations",        accent: "#3D8B6E", paleBg: "#EDF6F2" },
];

/* ── Category Preview Card ── */
const CategoryCard = ({ meta, isVisible, index, onClick, t }: {
  meta: typeof categoryMeta[0]; isVisible: boolean; index: number;
  onClick: () => void; t: (he: string, en: string) => string;
}) => {
  const images = galleryData[meta.key];
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-border transition-all duration-300"
      style={{
        background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${100 * index}ms`,
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(44,44,58,0.12)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = isVisible ? "translateY(0)" : "translateY(12px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
    >
      {/* Preview collage */}
      <div className="relative w-full overflow-hidden" style={{ height: 220, background: meta.paleBg }}>
        {images.length === 1 && (
          <img src={images[0].src} alt="" className="w-full h-full object-cover object-top" />
        )}
        {images.length === 2 && (
          <div className="flex h-full gap-0.5">
            {images.map((img) => <img key={img.src} src={img.src} alt="" className="w-1/2 h-full object-cover object-top" />)}
          </div>
        )}
        {images.length >= 3 && (
          <div className="flex h-full gap-0.5">
            <img src={images[0].src} alt="" className="h-full object-cover object-top" style={{ width: "50%" }} />
            <div className="flex flex-col gap-0.5" style={{ width: "50%" }}>
              <img src={images[1].src} alt="" className="w-full object-cover object-top" style={{ height: "50%" }} />
              <img src={images[2].src} alt="" className="w-full object-cover object-top" style={{ height: "50%" }} />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/8 transition-colors duration-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-lg scale-0 group-hover:scale-100 transition-transform duration-250">
          <ZoomIn size={18} className="text-foreground" />
        </div>
      </div>
      {/* Label */}
      <div className="px-5 py-4 flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: meta.accent }} />
        <p className="font-display font-bold text-foreground text-base md:text-lg">{t(meta.he, meta.en)}</p>
      </div>
    </div>
  );
};

/* ── Gallery Modal (carousel) ── */
const GalleryModal = ({ meta, onClose, onOpenLightbox, t }: {
  meta: typeof categoryMeta[0]; onClose: () => void;
  onOpenLightbox: (card: GalleryCardData) => void; t: (he: string, en: string) => string;
}) => {
  const cards = galleryData[meta.key];
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + cards.length) % cards.length), [cards.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % cards.length), [cards.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose, prev, next]);

  const card = cards[index];

  return (
    <div
      className="fixed inset-0 z-[998] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
      style={{ background: "rgba(28,26,40,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Scrollable modal — height adapts to image */}
      <div
        className="bg-background rounded-2xl overflow-hidden animate-in slide-in-from-bottom-3 fade-in duration-250"
        style={{ maxWidth: 480, width: "100%", maxHeight: "90vh" }}
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart === null) return;
          const delta = touchStart - e.changedTouches[0].clientX;
          if (delta > 50) next();
          else if (delta < -50) prev();
          setTouchStart(null);
        }}
      >
        {/* Header — sticky at top while scrolling */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-border bg-background">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: meta.accent }} />
            <h3 className="font-display font-bold text-foreground text-base md:text-lg">{t(meta.he, meta.en)}</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{index + 1} / {cards.length}</span>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:scale-110 transition-transform">
              <X size={18} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Image — contained, whole design visible */}
        <div className="relative flex items-center justify-center" style={{ background: "rgba(28,26,40,0.92)", height: "60vh" }}>
          <img
            key={card.src}
            src={card.src}
            alt={card.enLabel}
            className="animate-in fade-in duration-200"
            onClick={() => onOpenLightbox(card)}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", cursor: "zoom-in" }}
          />
          {/* Desktop arrows — float over image */}
          {cards.length > 1 && (
            <>
              <button onClick={prev} className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 border border-border items-center justify-center shadow-md hover:scale-110 transition-transform">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 border border-border items-center justify-center shadow-md hover:scale-110 transition-transform">
                <ChevronRight size={20} />
              </button>
            </>
          )}
          <button onClick={() => onOpenLightbox(card)} className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center shadow border border-border hover:scale-110 transition-transform">
            <ZoomIn size={16} className="text-foreground" />
          </button>
        </div>

        {/* Info + dots */}
        <div className="px-5 py-4 border-t border-border">
          <p className="font-display font-bold text-foreground text-base md:text-lg mb-1">{t(card.heLabel, card.enLabel)}</p>
          {card.heDesc && <p className="text-muted-foreground text-sm mb-2 leading-relaxed">{t(card.heDesc, card.enDesc ?? "")}</p>}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {card.tags.map((tag) => (
              <span key={tag} className="rounded-full font-medium text-xs border border-transparent" style={{ padding: "3px 10px", backgroundColor: card.paleBg, color: card.accent }}>{tag}</span>
            ))}
          </div>
          {cards.length > 1 && (
            <div className="flex justify-center gap-2 pt-1">
              {cards.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)}
                  style={{ width: i === index ? 24 : 8, height: 8, borderRadius: i === index ? 4 : "50%", backgroundColor: i === index ? meta.accent : "#D1D5DB", border: "none", padding: 0, transition: "all 0.25s" }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Main Section ── */
const DesignShowcase = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const [activeCategory, setActiveCategory] = useState<typeof categoryMeta[0] | null>(null);
  const [lightboxCard, setLightboxCard] = useState<GalleryCardData | null>(null);

  const closeLightbox = useCallback(() => setLightboxCard(null), []);
  const closeModal = useCallback(() => setActiveCategory(null), []);

  return (
    <>
      <section id="showcase" ref={sectionRef} className="showcase-section relative py-12 md:py-24" style={{ background: "white" }}>
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

          {/* 2×2 category grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} style={{ transitionDelay: "150ms" }}>
            {categoryMeta.map((meta, i) => (
              <CategoryCard key={meta.key} meta={meta} isVisible={isVisible} index={i} onClick={() => setActiveCategory(meta)} t={t} />
            ))}
          </div>
        </div>
      </section>

      {activeCategory && (
        <GalleryModal meta={activeCategory} onClose={closeModal} onOpenLightbox={setLightboxCard} t={t} />
      )}
      {lightboxCard && <Lightbox card={lightboxCard} onClose={closeLightbox} t={t} />}
    </>
  );
};

export default DesignShowcase;
