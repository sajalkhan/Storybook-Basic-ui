import React from "react";
import Logo from "./Logo";

export default {
  title: "Example/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;
export const BurgerLogo = Template.bind({});
BurgerLogo.args = {
  children: "Burger Time",
};
