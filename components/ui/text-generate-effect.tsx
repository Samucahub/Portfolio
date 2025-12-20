"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useMemo } from "react";

import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(" "), [words]);
  
  useEffect(() => {
    // Reset opacity to 0 first
    animate(
      "span",
      {
        opacity: 0,
      },
      {
        duration: 0,
      }
    ).then(() => {
      // Then animate to 1
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    });
  }, [animate, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} key={words}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}-${words}`}
              className={cn("text-white opacity-0", idx > 3 && "text-purple")}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
