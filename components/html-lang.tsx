"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HtmlLang = () => {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
    }
  }, [language]);

  return null;
};

