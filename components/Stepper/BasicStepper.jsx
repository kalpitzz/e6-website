import React from "react";

const Stepper = ({
  variant = 1,
  current,
  total,
  onStepClick,
  stepClass,
  progressClass,
  stepRender,
  progressBgCls = "",
}) => {
  const progress = (100 / (total - 1)) * current || 0;

  const selectStepper = () => {
    if (total > 1)
      switch (variant) {
        case 1:
          return (
            <div
              className={`relative flex justify-between items-center w-full h-fit`}
            >
              <div
                className={`absolute top-[50%] left-0 transform translate-y-[-50%]  bg-white w-full  h-[3px] ${progressClass}`}
              />

              <div
                style={{ width: `${progress}%` }}
                className={`absolute top-[50%] left-0 transform translate-y-[-50%]  bg-secondary-color  h-[4px] ${progressClass}`}
              />

              {new Array(total)?.fill(0).map((item, index) => {
                return (
                  <div
                    onClick={() => onStepClick(index)}
                    className={`z-10 cursor-pointer ${stepClass}`}
                  >
                    {stepRender ? stepRender(index) : index + 1}
                  </div>
                );
              })}
            </div>
          );

        case 2:
          return (
            <div
              className={`relative flex flex-col justify-between  w-fit h-full`}
            >
              <div
                className={`absolute top-0 left-[50%] transform translate-x-[-50%] rounded-full bg-white w-[3px]  min-h-full ${progressBgCls}`}
              />

              <div
                style={{ height: `${progress}%` }}
                className={`absolute top-0 left-[50%] transform translate-x-[-50%]  rounded-full bg-secondary-color  w-[4px] ${progressClass}`}
              />

              {new Array(total)?.fill(0).map((item, index) => {
                return (
                  <div
                    onClick={() => onStepClick(index)}
                    className={`z-10 cursor-pointer relative ${stepClass}`}
                  >
                    {stepRender ? stepRender(index) : index + 1}
                  </div>
                );
              })}
            </div>
          );

        default:
          return null;
      }
    else return null;
  };
  return selectStepper();
};

export default Stepper;
