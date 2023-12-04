/**
 * @file This file contains the stories for the Paper component.
 */

import type { Meta, StoryObj } from "@storybook/react";

import Paper from "@mui/material/Paper";

/**
 * Metadata for the Paper component story.
 */
const meta = {
  title: "Lib/Layout/Paper",
  component: Paper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Represents a login paper component story.
 */
export const LoginPaper: Story = {
  args: {
    variant: "login",
    children: "Paper",
  },
};

/**
 * Represents a logo paper component story.
 */
export const LogoPaper: Story = {
  args: {
    variant: "logo",
    children: "Paper",
  },
};
