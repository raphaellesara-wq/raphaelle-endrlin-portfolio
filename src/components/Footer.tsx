import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <span className="font-display text-xl font-normal tracking-tight" style={{ color: "#6DC4A0" }}>
          RA.
        </span>
        <span className="text-sm text-muted-foreground">
          Raphaelle Enderlin © 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;
