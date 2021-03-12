import React from "react";
import Lable from "./Label";

export default {
  title: "Example/Lable",
  component: Lable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Label = () => <Lable>welcome to story book</Lable>;
