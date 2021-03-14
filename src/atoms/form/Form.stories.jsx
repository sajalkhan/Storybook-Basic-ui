import React, { useState } from "react";
import { Submit } from "../button/Button.stories";
import { action } from "@storybook/addon-actions";
import Form from "./Form";

export default {
  title: "Atoms|Form",
  component: Form,
  argTypes: {
    onChange: { action: "onSubmit" },
  },
};

const Template = (args) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form
        {...args}
        onSubmit={(e) => {
          e.preventDefault();
          action("onSubmit")(e);

          setCount(count + 1);
        }}
      >
        <Submit variant="success">Submit</Submit>
      </Form>

      <pre style={{ marginTop: 10, marginLeft: 10 }}>{count}</pre>
    </>
  );
};

export const SubmitForm = Template.bind({});
SubmitForm.args = {
  count: 0,
};
