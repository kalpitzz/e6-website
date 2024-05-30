import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card } from "./Cards";

export const HoverCard = ({
  items,
  className,
  cardClassName,
  animateClassName,
  type,
}: any) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4  ",
        className
      )}
    >
      {items.map((item: any, idx: number) => (
        <div
          key={idx}
          className={` relative group block p-2 h-full w-full ${cardClassName} `}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={`absolute inset-0 h-full w-full bg-secondary-color  block  rounded-3xl ${animateClassName}`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card type={type} data={item}>
            {item.description}
          </Card>
        </div>
      ))}
    </div>
  );
};
