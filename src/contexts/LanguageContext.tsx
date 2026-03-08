import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type Language = "he" | "en";

interface LanguageContextType {
  lang: Language;
  toggle: () => void;
  t: (he: string, en: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("he");
  const isRTL = lang === "he";

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "he" ? "en" : "he"));
  }, []);

  const t = useCallback((he: string, en: string) => (lang === "he" ? he : en), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
