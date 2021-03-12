import React from "react";

function Input(props) {
  const { size = "medium", onChange, ...rest } = props;
  return (
    <input
      className={`input ${size}`}
      {...rest}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
