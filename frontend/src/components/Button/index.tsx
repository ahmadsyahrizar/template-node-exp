import { styButton } from "./style";
import React from "react";
import { ButtonProps } from "./types";

const Button = ({ type, color, children , onClick, disabled}: ButtonProps) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} type={type} className={styButton(color)}>
        {children}
      </button>
    </>
  );
};

export default Button;
