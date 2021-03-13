import React, { useState } from "react";
import Field from "./Field";

export default {
  title: "Example/Field",
  component: Field,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <Field
      {...args}
      onChange={(...params) => {
        args.onChange(...params);
        setValue(...params);
      }}
      value={value}
    />
  );
};

export const Email = Template.bind({});
Email.args = {
  id: "email",
  label: "User Email",
};

export const Email_with_value = Template.bind({});
Email_with_value.args = {
  id: "email",
  label: "User Email",
  value: "user@email.com",
};

export const Password = Template.bind({});
Password.args = {
  id: "password",
  type: "password",
  label: "Password",
};

export const Password_with_value = Template.bind({});
Password_with_value.args = {
  id: "password",
  type: "password",
  label: "Password",
  value: "1234",
};

export const Password_with_error = Template.bind({});
Password_with_error.args = {
  id: "password",
  type: "password",
  label: "Password",
  value: "1234",
  error: "Password Incorrect",
};
