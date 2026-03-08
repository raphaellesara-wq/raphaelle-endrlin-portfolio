import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="fixed top-4 left-4 z-50 flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2 text-sm font-body transition-all hover:shadow-md hover:border-accent/40"
      aria-label="Toggle language"
    >
      <span className={lang === "he" ? "font-semibold text-accent" : "text-muted-foreground"}>
        עברית
      </span>
      <span className="text-border mx-1">|</span>
      <span className={lang === "en" ? "font-semibold text-accent" : "text-muted-foreground"}>
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
