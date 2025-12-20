"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CybersecurityEncryptionProps {
  children: React.ReactNode;
}

export const CybersecurityEncryption = ({ children }: CybersecurityEncryptionProps) => {
  const { t } = useLanguage();
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    if (isDecrypted) {
      setIsHovered(false);
    }
    setIsDecrypted(!isDecrypted);
  };

  useEffect(() => {
    if (!isDecrypted) {
      setIsHovered(false);
    }
  }, [isDecrypted]);

  return (
    <div className="relative w-full" id="cybersecurity">
      <AnimatePresence mode="wait">
        {!isDecrypted ? (
          <motion.div
            key="encrypted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-screen w-full flex-row items-center justify-center"
          >
            <div className="absolute top-0 z-[5] w-auto">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-2xl font-medium text-gray-200 sm:text-3xl md:text-[40px]"
              >
                {t.encryption.title}{" "}
                <span className="bg-gradient-to-r from-purple to-blue-500 bg-clip-text text-transparent">
                  {t.encryption.titleHighlight}
                </span>
              </motion.div>
            </div>

            <div className="absolute z-[20] flex w-auto translate-y-[-50px] flex-col items-center justify-center">
              <motion.div
                className="group flex w-auto cursor-pointer flex-col items-center"
                onClick={handleToggle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    y: isHovered ? 44 : 20,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Image
                    src="/lock-top.png"
                    alt="Lock top"
                    width={50}
                    height={50}
                  />
                </motion.div>
                <Image
                  src="/lock-main.png"
                  alt="Lock main"
                  width={70}
                  height={70}
                  className="z-10"
                />

                <motion.div
                  className="absolute inset-0 rounded-full bg-purple/20 blur-3xl"
                  animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.6 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                className="z-[20] my-[20px] border border-purple/50 bg-black-100/80 px-4 py-2 backdrop-blur-sm md:px-[20px] md:py-[6px]"
                animate={{
                  borderColor: isHovered ? "rgba(168, 85, 247, 0.8)" : "rgba(168, 85, 247, 0.3)",
                }}
              >
                <motion.h1
                  className="text-xs font-semibold sm:text-sm md:text-[14px]"
                  animate={{
                    color: isHovered ? "#10b981" : "#a855f7",
                  }}
                >
                  {isHovered ? t.encryption.decryption : t.encryption.encryption}
                </motion.h1>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-[20px] z-[20] px-4 md:px-[5px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center text-base font-medium text-gray-300 sm:text-lg md:text-[20px]">
                <motion.span
                  animate={{
                    opacity: isHovered ? 0 : 1,
                  }}
                >
                  {t.encryption.protectedContent}
                </motion.span>
                <motion.span
                  className="text-purple"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  style={{
                    position: isHovered ? "relative" : "absolute",
                  }}
                >
                  {t.encryption.clickToDecrypt}
                </motion.span>
              </div>
            </motion.div>

            <div className="absolute flex w-full items-start justify-center">
              <video
                loop
                muted
                autoPlay
                playsInline
                className="h-auto w-full opacity-50"
              >
                <source src="/videos/encryption-bg.webm" type="video/webm" />
              </video>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black-100/50 via-transparent to-black-100/50" />
          </motion.div>
        ) : (
          <motion.div
            key="decrypted"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className="fixed right-8 top-24 z-[100] cursor-pointer"
              onClick={handleToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="group flex items-center gap-3 rounded-full border border-purple/50 bg-black-100/90 px-6 py-3 backdrop-blur-sm transition-all hover:border-purple hover:bg-black-100">
                <svg
                  className="h-5 w-5 text-purple transition-colors group-hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm font-semibold text-purple transition-colors group-hover:text-red-500">
                  {t.encryption.encrypt}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
