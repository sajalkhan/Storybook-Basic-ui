import React from "react";
import { action } from "@storybook/addon-actions";

import LoginPage from "./index";
import Store from "./store";

export default {
  title: "Example/Login",
  component: LoginPage,
  argTypes: {
    onChange: { action: "onChange" },
  },
};

const store = new Store();

store.onSubmit = (e) =>
  store.form.onSubmit(e, {
    onSuccess(form) {
      action("Success")(form.values());
    },

    onError(form) {
      action("Error")(form.errors());
    },
  });

const Template = (args) => {
  return <LoginPage {...args} store={store} />;
};

export const Login_page = Template.bind({});
