"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed left-8 top-8 z-50"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-black-100/90 p-1 backdrop-blur-sm">
        <button
          onClick={() => setLanguage("pt")}
          className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            language === "pt"
              ? "text-white"
              : "text-white-200 hover:text-white"
          }`}
        >
          {language === "pt" && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 rounded-full bg-purple"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">PT</span>
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            language === "en"
              ? "text-white"
              : "text-white-200 hover:text-white"
          }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 rounded-full bg-purple"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </div>
    </motion.div>
  );
};
