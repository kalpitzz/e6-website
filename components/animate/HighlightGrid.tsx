import React from "react";

function HighlightGrid(props: any) {
  return (
    <div
      className={`w-full h-full bg-transparent bg-grid-[#E0E0FF]/[0.6] relative flex items-center justify-center ${props?.className}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <div className="z-30">{props?.children}</div>
    </div>
  );
}
export default HighlightGrid;
