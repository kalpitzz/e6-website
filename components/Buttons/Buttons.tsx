import React from "react";

function Buttons(props: any) {
  switch (props?.variant) {
    case "primary":
      return (
        <button className={`primary-btn-1  ${props.btnclass}`} {...props}>
          {props?.label}
        </button>
      );
    case "primary-2":
      return (
        <button
          className={`primary-btn-2  px-4 py-3  font-semibold ${props?.btnclass}`}
          {...props}
        >
          {props?.label}
        </button>
      );
    case "primary-3":
      return (
        <button
          className={`relative primary-btn-3  flex justify-center items-center ${props?.btnclass}`}
          {...props}
        >
          {props?.prefix ? props?.prefix : null}
          {props?.label}
          {props?.suffix ? props?.suffix : null}
        </button>
      );

    default:
      return (
        <button className={props?.btnclass} {...props}>
          {props?.label}
        </button>
      );
  }
}

export default Buttons;
