import type { Meta, StoryObj } from "@storybook/react";

import {
  TextField as SrcTextField,
  TextFieldProps,
} from "@/lib/components/inputs/textfield/Textfield.component";
import React from "react";

const TextField: React.FC<
  TextFieldProps & { ref?: React.Ref<HTMLInputElement> }
> = (props) => {
  return <SrcTextField {...props} />;
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Lib/Inputs/Textfield",
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    error: { control: "text" },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// stories on textfield with label without default value, textfield with default value and label, textfield with error
export const TextfieldWithOnlyLabel: Story = {
  args: {
    label: "Label",
  },
};

export const TextfieldWithDefaultTextAndLabel: Story = {
  args: {
    defaultValue: "Default Text",
    label: "Label",
  },
};

export const TextfieldWithErrorAndLabel: Story = {
  args: {
    label: "Label",
    error: "Incorrect password, are you a spy?",
  },
};

// password textfield with label without default value, password textfield with default value and label, password textfield with error

export const PasswordTextfieldWithOnlyLabel: Story = {
  args: {
    label: "Label",
    type: "password",
  },
};

export const PasswordTextfieldWithDefaultTextAndLabel: Story = {
  args: {
    defaultValue: "Default Text",
    label: "Label",
    type: "password",
  },
};

export const PasswordTextfieldWithErrorAndLabel: Story = {
  args: {
    label: "Label",
    error: "Error",
    type: "password",
  },
};
