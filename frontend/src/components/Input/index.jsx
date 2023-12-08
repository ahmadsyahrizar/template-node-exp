import React from "react";
import "./style.css";

const Input = ({ value, handleOnChange }) => {
  return (
    <input
      className="styInput"
      placeholder="example: John Doe"
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
