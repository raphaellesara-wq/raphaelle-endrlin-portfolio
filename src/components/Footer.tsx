import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-bar">
      <div className="footer-left">
        <span className="footer-name">Raphaelle Enderlin</span>
        <span className="footer-copy">© 2025</span>
      </div>
      <div className="footer-links">
        <a href="mailto:raphaellesara@gmail.com" className="footer-link">
          {t("אימייל", "Email")}
        </a>
        <a
          href="https://www.linkedin.com/in/raphaelle-endrlin/"
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
