import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-bar">
      <div className="footer-left">
        <span className="footer-name">Raphaelle Enderlin</span>
        <span className="footer-copy">© 2025</span>
      </div>
      <span className="footer-copy" style={{ fontSize: 11, opacity: 0.6 }}>
        {t("האתר נוצר בעזרת Vibe Coding", "Built with Vibe Coding")}
      </span>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/raphaelle-enderlin-6b47401b0"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
