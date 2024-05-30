"use client";

import { cn, getRandomColor } from "@/utils/cn";
import React, { useEffect, useState } from "react";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  itemGap = "2rem",
  className,
  shadow = false,
  blendWithBackground = false,
}: any) => {
  const containerRef: any = React.useRef(null);
  const scrollerRef: any = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item: any) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      style={{ mixBlendMode: blendWithBackground ? "multiply" : "inherit" }}
      className={cn(
        "scroller relative z-20  max-w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        style={{ gap: itemGap }}
        className={cn(
          `flex min-w-full shrink-0 w-max flex-nowrap items-center`,
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item: any, idx: number) => {
          return (
            <div
              className={`w-fit h-fit  ml-4 rounded-lg text-center ${
                shadow ? "shadow-t1" : ""
              } flex justify-center items-center`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
