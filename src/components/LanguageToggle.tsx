import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className={`flex items-center rounded-full border h-9 overflow-hidden text-sm font-body transition-all duration-200 ${className}`}
      style={{ borderColor: "#EEEAF5" }}
      aria-label="Toggle language"
    >
      <span
        className="px-3 h-full flex items-center transition-all duration-200"
        style={
          lang === "he"
            ? { backgroundColor: "#A98ED4", color: "#fff" }
            : { color: "#9A8FA8" }
        }
      >
        עברית
      </span>
      <span
        className="px-3 h-full flex items-center transition-all duration-200"
        style={
          lang === "en"
            ? { backgroundColor: "#A98ED4", color: "#fff" }
            : { color: "#9A8FA8" }
        }
      >
        EN
      </span>
    </button>
  );
};

export default LanguageToggle;
