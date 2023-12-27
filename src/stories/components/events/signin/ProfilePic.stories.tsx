import { ProfilePic } from "@/lib/components/events/signin/ProfilePic.component";
import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
const meta = {
	parameters: {
		layout: "centered",
	},
	title: "Lib/Events/ProfilePic",
	component: ProfilePic,
	args: {
		onClick: fn(),
	},
	tags: ["autodocs"],
} as Meta<typeof ProfilePic>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const ProfilePicExample: Story = {};
