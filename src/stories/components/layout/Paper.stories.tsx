import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "../../../lib/components/layout/Paper.component";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Paper> = {
  title: "Layout/Paper",
  component: Paper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Rounded16pxBorderRadius: Story = {
  args: {
    children: "Paper",
    sx: {
      borderRadius: "16px",
      padding: "16px",
    },
  },
};
