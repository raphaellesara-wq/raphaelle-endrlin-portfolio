import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const BackToTopButton = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-40 transition-all duration-300"
      style={{
        bottom: 28,
        left: 28,
        background: "#8B9A6B",
        color: "white",
        borderRadius: 100,
        padding: "10px 18px",
        fontSize: 13,
        fontWeight: 600,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        boxShadow: "0 4px 16px rgba(139,154,107,0.3)",
        border: "none",
        cursor: "pointer",
      }}
    >
      {t("↑ חזרה למעלה", "↑ Back to Top")}
    </button>
  );
};

export default BackToTopButton;
