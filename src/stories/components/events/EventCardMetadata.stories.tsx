import type { Meta, StoryObj } from "@storybook/react";
// src/components/Button/Button.stories.js
import React from "react";
import { EventCardMetadata } from "@/lib/components/events/EventCardMetadata";
import dayjs from "dayjs";

const meta = {
	title: "Components/Events/EventMetaData",
	component: EventCardMetadata,
	argTypes: {
		startTime: { control: "date" },
		endTime: { control: "date" },
	},
} satisfies Meta<typeof EventCardMetadata>;

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

export const AnotherEventExample: Story = {
	args: {
		details: "Rick Party",
		startTime: new Date(2023, 11, 31, 18, 30, 0, 0),
		endTime: new Date(2023, 11, 31, 20, 30, 0, 0),
		place: "Canada",
	},
};

export const EventExampleWithoutStartDate: Story = {
	args: {
		details: "Rick Party",
		endTime: new Date(2023, 11, 31, 20, 30, 0, 0),
		place: "Canada",
	},
};

export const EventExampleWithoutPlace: Story = {
	args: {
		details: "Rick Party",
		startTime: new Date(2023, 11, 31, 18, 30, 0, 0),
		endTime: new Date(2023, 11, 31, 20, 30, 0, 0),
	},
};
