import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    onChange: { action: "onChange" },
    backgroundColor: { control: "color" },
    value: {
      control: {
        disable: false,
      },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Input
      {...args}
      onChange={(...params) => {
        args.onChange(...params);
        setValue(...params);
      }}
      value={value}
    />
  );
};

export const Small = Template.bind({});
Small.args = {
  type: "text",
  size: "small",
  value: "user@email.com",
  placeholder: "Small Size",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "password",
  size: "medium",
  placeholder: "Medium Size",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "large Size",
};
