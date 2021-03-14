import React from "react";
import { action } from "@storybook/addon-actions";

import Signup from "./SignUp";
import Signupform from "./signup.form";

export default {
  title: "Example/SignupForm",
  component: Signup,
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
  return <Signup {...args} form={Signupform} onSubmit={onSubmit(Signupform)} />;
};

export const SignupForm = Template.bind({});
