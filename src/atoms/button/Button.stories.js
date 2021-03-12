import React from "react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    backgroundColor: { control: "color" },
  },
  args: {
    children: "Button",
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  variant: "primary",
  children: "Submit",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
};
