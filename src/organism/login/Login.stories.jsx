import React from "react";
import { action } from "@storybook/addon-actions";

import Login from "./Login";
import Loginform from "./login.form";

export default {
  title: "Example/Login Form",
  component: Login,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

const onSubmit = (form) => (e) =>
  form.onSubmit(e, {
    onSuccess(form) {
      action("Submit")(form.values());
    },

    onError(form) {
      action("Error")(form.errors());
    },
  });

const Template = (args) => {
  return <Login {...args} form={Loginform} onSubmit={onSubmit(Loginform)} />;
};

export const Loginpage = Template.bind({});
