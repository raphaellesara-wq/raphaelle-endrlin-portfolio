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
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }}
      className="fixed z-40 transition-all duration-300"
      style={{
        bottom: 28,
        left: 28,
        background: "#A98ED4",
        color: "white",
        borderRadius: 100,
        padding: "10px 18px",
        fontSize: 13,
        fontWeight: 600,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(10px)",
        boxShadow: "0 4px 16px rgba(169, 142, 212, 0.3)",
        border: "none",
        cursor: "pointer",
      }}
    >
      {t("✉ צור קשר", "✉ Contact Me")}
    </button>
  );
};

export default BackToTopButton;
