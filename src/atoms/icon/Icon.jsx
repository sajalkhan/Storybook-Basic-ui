import React from "react";

const Icon = ({ children }) => (
  <div
    className={
      children === "facebook" ? "icon icon-facebook" : "icon icon-google"
    }
  />
);

export default Icon;
