import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "../../../lib/components/layout/Paper.component";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Layout/Paper",
  component: Paper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LoginPaper: Story = {
  args: {
    variant: "login",
    children: "Paper",
  },
};

export const LogoPaper: Story = {
  args: {
    variant: "logo",
    children: "Paper",
  },
};
