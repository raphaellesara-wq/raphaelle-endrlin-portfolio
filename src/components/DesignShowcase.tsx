import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type TabKey = "newsletters" | "popups" | "webdesign";

interface GalleryCard {
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

const galleryData: Record<TabKey, GalleryCard[]> = {
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

const DesignShowcase = () => {
  const { t, isRTL } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);
  const [activeTab, setActiveTab] = useState<TabKey>("newsletters");

  const cards = galleryData[activeTab];
  const isPopups = activeTab === "popups";
  const isWebDesign = activeTab === "webdesign";

  return (
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

        {/* Gallery grid */}
        <div
          key={activeTab}
          className={`transition-all duration-300 ${
            isPopups
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : isWebDesign
              ? "grid grid-cols-1 md:grid-cols-2 gap-6"
              : "columns-1 sm:columns-2 gap-6 space-y-6"
          }`}
        >
          {cards.map((card, i) => (
            <GalleryCard
              key={card.src + i}
              card={card}
              index={i}
              isVisible={isVisible}
              isPopups={isPopups}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryCard = ({
  card,
  index,
  isVisible,
  isPopups,
  t,
}: {
  card: GalleryCard;
  index: number;
  isVisible: boolean;
  isPopups: boolean;
  t: (he: string, en: string) => string;
}) => {
  const maxH = card.imageMaxHeight ?? 420;
  const fit = card.objectFit ?? "contain";
  const bg = card.imageBg ?? "#FAFAFE";

  return (
    <div
      className={`rounded-2xl border overflow-hidden bg-background transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
        isPopups ? "" : "break-inside-avoid"
      }`}
      style={{
        borderColor: "#EEEAF5",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transitionDelay: `${80 * index}ms`,
      }}
    >
      {/* Image */}
      <div style={{ backgroundColor: bg, maxHeight: maxH, overflow: "hidden" }}>
        <img
          src={card.src}
          alt={card.enLabel}
          loading="lazy"
          className="w-full block"
          style={{ objectFit: fit, maxHeight: maxH, backgroundColor: bg }}
        />
      </div>

      {/* Caption */}
      <div className="p-5">
        <p className="font-semibold text-foreground" style={{ fontSize: 13 }}>
          {t(card.heLabel, card.enLabel)}
        </p>
        {card.heDesc && (
          <p className="text-muted-foreground mt-1" style={{ fontSize: 12 }}>
            {t(card.heDesc, card.enDesc ?? "")}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
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
};

export default DesignShowcase;
