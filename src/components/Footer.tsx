import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-6" style={{ background: "#141220" }}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <span className="font-display text-xl font-normal tracking-tight" style={{ color: "hsl(var(--accent-green))" }}>
          RA.
        </span>
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Raphaelle Enderlin © 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;
