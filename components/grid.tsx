"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

export const Grid = () => {
  const { t } = useLanguage();

  const translatedGridItems = gridItems.map((item) => {
    if (item.id === 1) return { ...item, title: t.grid.item1 };
    if (item.id === 2) return { ...item, title: t.grid.item2 };
    if (item.id === 3) return { ...item, title: t.grid.item3, description: t.grid.item3desc };
    if (item.id === 4) return { ...item, title: t.grid.item4 };
    if (item.id === 5) return { ...item, title: t.grid.item5, description: t.grid.item5desc };
    if (item.id === 6) return { ...item, title: t.grid.item6 };
    return item;
  });

  return (
    <section id="about">
      <BentoGrid>
        {translatedGridItems.map((gridItem) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
    </section>
  );
};
