import type { Meta, StoryObj } from "@storybook/react";
// src/components/Button/Button.stories.js
import React from "react";
import NewEvent from "./NewEvent";
import dayjs from "dayjs";

const meta = {
	title: "Components/Events/EventMetaData",
	component: NewEvent,
	argTypes: {
		startTime: { control: "date" },
		endTime: { control: "date" },
	},
} satisfies Meta<typeof NewEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewEventExample: Story = {
	args: {
		details: "My House",
		startTime: new Date(2023, 11, 31, 18, 30, 0, 0),
		endTime: new Date(2023, 11, 31, 19, 30, 0, 0),
		place: "Shay's roof",
	},
};
