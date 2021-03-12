import React from "react";
import Icon from "./Icon";

export default {
  title: "Example/Icon",
  component: Icon,
};

export const IconFacebook = () => <Icon>facebook</Icon>;

const Template = (args) => <Icon {...args} />;
export const IconGoogle = Template.bind({});
IconGoogle.args = {
  children: "google",
};
