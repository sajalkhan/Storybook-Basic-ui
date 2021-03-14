import React from "react";

import { action } from "@storybook/addon-actions";

import Signup from "./index";
import Store from "./store";

export default {
  title: "Example/SignupPage",
  component: Signup,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

const store = new Store();
store.onSubmit = (e) =>
  store.form.onSubmit(e, {
    onSuccess(form) {
      action("Submit")(form.values());
    },

    onError(form) {
      action("Error")(form.errors());
    },
  });

const Template = (args) => {
  return <Signup {...args} store={store} />;
};

export const Signup_Page = Template.bind({});
