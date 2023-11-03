import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@/lib/components/inputs/Button.component";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Lib/Inputs/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// stories on Button with with children as label, disabled, variant, color, size, fullWidth
export const ButtonWithOnlyLabel: Story = {
  args: {
    children: "Open sesami!",
  },
};

export const ButtonWithLoading: Story = {
  args: {
    children: "Open sesami!",
    isLoading: true,
  },
};

export const ButtonWithDisabled: Story = {
  args: {
    children: "Open sesami!",
    disabled: true,
  },
};

export const ButtonWithFullWidth: Story = {
  args: {
    children: "Open sesami!",
    fullWidth: true,
  },
};
