import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const LOGOS: Record<string, React.ReactElement> = {
  "Figma": (
    <svg viewBox="0 0 38 57" width="16" height="24" aria-hidden="true">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#FF7262"/>
    </svg>
  ),
  "Canva Pro": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#00C4CC"/>
      <text x="12" y="16.5" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial,sans-serif">C</text>
    </svg>
  ),
  "Adobe Suite": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#FF0000"/>
      <text x="12" y="16.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial,sans-serif">Ai</text>
    </svg>
  ),
  "Premiere Pro": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#9999FF"/>
      <text x="12" y="17" textAnchor="middle" fill="#1A1A1A" fontSize="10" fontWeight="bold" fontFamily="Arial,sans-serif">Pr</text>
    </svg>
  ),
  "FlashyApp": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#FF6B2B"/>
      <path d="M14 4L7 13h5.5l-2.5 7 9-11H13.5z" fill="white"/>
    </svg>
  ),
  "Klaviyo": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#1D1D1B"/>
      <text x="12" y="17" textAnchor="middle" fill="#00B67A" fontSize="14" fontWeight="bold" fontFamily="Arial,sans-serif">K</text>
    </svg>
  ),
  "Mailchimp": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#FFE01B"/>
      <text x="12" y="15.5" textAnchor="middle" fill="#241C15" fontSize="8" fontWeight="bold" fontFamily="Arial,sans-serif">MC</text>
    </svg>
  ),
  "InforU Mobile": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" fill="#0066CC"/>
      <rect x="8" y="5" width="8" height="10" rx="1" fill="white" opacity="0.25"/>
      <circle cx="12" cy="18" r="1.5" fill="white"/>
    </svg>
  ),
  "MAKE.com": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#6E3FF3"/>
      <circle cx="9" cy="10" r="3" fill="#FF5C5C" opacity="0.85"/>
      <circle cx="15" cy="10" r="3" fill="#FFC53D" opacity="0.85"/>
      <circle cx="12" cy="15.5" r="3" fill="#52C7F0" opacity="0.85"/>
    </svg>
  ),
  "N8N": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#EA4B71"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial,sans-serif">n8n</text>
    </svg>
  ),
  "ChatGPT / Claude": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#10A37F"/>
      <rect x="7" y="9" width="10" height="8" rx="2" fill="white" opacity="0.85"/>
      <circle cx="10" cy="12.5" r="1.2" fill="#10A37F"/>
      <circle cx="14" cy="12.5" r="1.2" fill="#10A37F"/>
      <rect x="9" y="7" width="6" height="2" rx="1" fill="white" opacity="0.5"/>
    </svg>
  ),
  "Perplexity": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1C1C2E"/>
      <text x="12" y="17" textAnchor="middle" fill="#20E0D0" fontSize="14" fontWeight="bold" fontFamily="Arial,sans-serif">P</text>
    </svg>
  ),
};

const TOOLS = [
  { name: "Figma" },
  { name: "Canva Pro" },
  { name: "Adobe Suite" },
  { name: "Premiere Pro" },
  { name: "FlashyApp" },
  { name: "Klaviyo" },
  { name: "Mailchimp" },
  { name: "InforU Mobile" },
  { name: "MAKE.com" },
  { name: "N8N" },
  { name: "ChatGPT / Claude" },
  { name: "Perplexity" },
];

// 4 columns × 3 rows: column col has tools at indices col, col+4, col+8
const COLS = [0, 1, 2, 3].map(col => [0, 1, 2].map(row => TOOLS[col + row * 4]));

const LC = "hsl(var(--accent-purple))";

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-8 md:py-16 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-5 md:px-6">
        {/* Section header */}
        <div className={`mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent-blue" />
            <span className="text-sm tracking-wide font-medium text-accent-blue">
              {t("כלים ומיומנויות", "Tools & Skills")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-foreground">
            {t("כלי העבודה ", "My ")}
            <em className="not-italic text-accent-blue">{t("שלי", "Toolkit")}</em>
          </h2>
        </div>

        {/* Desktop: top-to-bottom automation diagram */}
        <div className="hidden md:block">
          {/* Hub card — centered at top */}
          <div className="flex justify-center">
            <div
              className="flex flex-col items-center rounded-2xl border-2"
              style={{
                width: 228,
                padding: "16px 18px 12px",
                borderColor: LC,
                background: "hsl(var(--accent-purple-pale))",
                gap: 10,
              }}
            >
              <div className="grid grid-cols-4 gap-1.5">
                {TOOLS.map(tool => (
                  <div
                    key={tool.name}
                    className="w-7 h-7 rounded-md flex items-center justify-center bg-white/70"
                    title={tool.name}
                  >
                    {LOGOS[tool.name]}
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-bold text-foreground/60 tracking-wide uppercase">
                {t("הכלים שלי", "My Tools")}
              </span>
            </div>
          </div>

          {/* Tree connector: stem → horizontal bar → 4 drops */}
          <svg
            width="100%"
            height="52"
            viewBox="0 0 100 52"
            preserveAspectRatio="none"
            style={{ display: "block", overflow: "visible" }}
            aria-hidden="true"
          >
            {/* Vertical stem from hub */}
            <line x1="50" y1="0" x2="50" y2="22" stroke={LC} strokeWidth="0.6" opacity="0.45" strokeDasharray="2.5 2"/>
            {/* Horizontal bar */}
            <line x1="12.5" y1="22" x2="87.5" y2="22" stroke={LC} strokeWidth="0.6" opacity="0.45"/>
            {/* 4 vertical drops to columns */}
            {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="22" x2={x} y2="52" stroke={LC} strokeWidth="0.6" opacity="0.45" strokeDasharray="2.5 2"/>
                <circle cx={x} cy="22" r="1.2" fill={LC} opacity="0.55"/>
              </g>
            ))}
          </svg>

          {/* 4 columns × 3 rows of tool cards */}
          <div className="grid grid-cols-4 gap-4">
            {COLS.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3">
                {col.map(tool => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2.5 bg-card rounded-xl border border-border hover:shadow-md transition-shadow"
                    style={{ padding: "10px 14px" }}
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-muted">
                      {LOGOS[tool.name]}
                    </div>
                    <span className="text-xs font-semibold text-foreground leading-tight">{tool.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: hub + 3-column grid */}
        <div className="md:hidden">
          <div
            className="flex items-center justify-center gap-3 rounded-2xl border-2 p-4 mb-3"
            style={{ borderColor: LC, background: "hsl(var(--accent-purple-pale))" }}
          >
            <span className="font-bold text-foreground">{t("הכלים שלי", "My Tools")}</span>
          </div>
          <div className="flex justify-center mb-3">
            <div style={{ width: 1, height: 22, background: LC, opacity: 0.4 }} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {TOOLS.map(tool => (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-2 bg-card rounded-xl border border-border p-3 text-center"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-muted">
                  {LOGOS[tool.name]}
                </div>
                <span className="text-[10px] font-semibold text-foreground leading-tight">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
