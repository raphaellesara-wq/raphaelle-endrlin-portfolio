import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t("אודות", "About") },
    { href: "#experience", label: t("ניסיון", "Experience") },
    { href: "#skills", label: t("כלים", "Skills") },
    { href: "#contact", label: t("צור קשר", "Contact") },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="font-display text-2xl font-bold tracking-tight text-foreground">
          ר.א
        </div>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground pb-1"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
