"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang, type T } from "@/lib/i18n";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof translations)[Lang] };

const Ctx = createContext<LangCtx>({
  lang: "bm",
  setLang: () => {},
  t: translations.bm,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bm");

  useEffect(() => {
    const stored = localStorage.getItem("smartcalc-lang") as Lang | null;
    if (stored && stored in translations) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("smartcalc-lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
