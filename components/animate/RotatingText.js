// interface Props {
//   texts: string[]
//   duration?: number
//   className?: string
//   color?: string
//   direction?: 'vertical' | 'horizontal'
// }

import { memo } from "react";

const RotatingText = ({
  texts,
  duration = 3,
  direction = "vertical",
  containerClassName = "",
  className,
  color,
}) => {
  const createText = (text, startTime) => {
    return (
      <span
        key={text + startTime}
        style={{
          animation: `${direction}-rotate ${
            duration * texts.length
          }s linear infinite 0s`,
          animationDelay: `${startTime}s`,
          color: color || "inherit",
        }}
        className={className || " "}
      >
        {text}
      </span>
    );
  };

  return (
    <span className={`rotating-text-container ${containerClassName}`}>
      {texts.map((text, i) => createText(text, i * duration))} &nbsp;
    </span>
  );
};

export default memo(RotatingText);
