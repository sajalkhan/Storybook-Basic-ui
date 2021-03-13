import React from "react";
import cn from "classnames";

import Label from "../atoms/label/Label";
import Input from "../atoms/input/Input";

const Field = ({
  error = "",
  type = "text",
  label = "",
  value = "",
  ...props
}) => (
  <div
    className={cn("field", {
      "field-value": value && value.length > 0,
      "field-error": error && error.length > 0,
    })}
  >
    <Label htmlFor={props.id}>{label}</Label>
    <Input type={type} value={value} {...props} />
    {error && <p>{error}</p>}
  </div>
);

export default Field;
