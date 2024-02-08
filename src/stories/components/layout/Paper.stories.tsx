/**
 * @file This file contains the stories for the Paper component.
 */

import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "./Paper.helper";

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
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=103-48789&mode=design&t=VaN9x2EyOS4CFHKy-0",
		},
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
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=113-5106&mode=design&t=ssy0F29wbdZ5uOTS-4",
		},
	},
};
