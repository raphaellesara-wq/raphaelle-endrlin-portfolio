import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="fixed top-4 left-4 z-50 flex items-center gap-1 rounded-full border border-border bg-card/80 backdrop-blur-sm px-4 py-2 text-sm font-body transition-all duration-200 hover:shadow-md hover:border-accent-purple/40"
      aria-label="Toggle language"
    >
      <span
        className={`transition-all duration-200 ${
          lang === "he" ? "font-semibold text-accent-purple" : "text-muted-foreground opacity-60"
        }`}
      >
        עברית
      </span>
      <span className="text-border mx-1">|</span>
      <span
        className={`transition-all duration-200 ${
          lang === "en" ? "font-semibold text-accent-purple" : "text-muted-foreground opacity-60"
        }`}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
