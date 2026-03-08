import { useEffect, useState, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";

const navItems = [
  { href: "#about", he: "אודות", en: "About" },
  { href: "#experience", he: "ניסיון", en: "Experience" },
  { href: "#skills", he: "כלים", en: "Skills" },
  { href: "#contact", he: "צור קשר", en: "Contact" },
];

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-5 md:px-6">
        <div className="font-display text-2xl tracking-tight text-foreground">
          ר.א
        </div>

        {/* Desktop nav + toggle */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`nav-link text-sm font-medium pb-1 transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? "text-accent-pink"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(link.he, link.en)}
            </button>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border/50 animate-fade-up">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium py-2 text-start transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-pink"
                    : "text-muted-foreground"
                }`}
              >
                {t(link.he, link.en)}
              </button>
            ))}
            <LanguageToggle className="self-start mt-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
