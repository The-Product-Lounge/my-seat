import type { Meta, StoryObj } from "@storybook/react";
// src/components/Button/Button.stories.js
import { EventCardMetadata } from "@/lib/components/events/EventCardMetadata";
//import { EventCard } from "@/lib/components/events/EventCard";

const meta = {
	title: "Components/Events/EventCardMetadata",
	component: EventCardMetadata,
	argTypes: {
		startTime: { control: "date" },
		endTime: { control: "date" },
		image: {
			url: { control: "string" },
			alt: { control: "string" },
		},
		loungers: { control: "number" },
		tables: { control: "number" },
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
		image: {
			url: "../../../public/images/events/rick cover image.png",
			alt: "rick image",
		},
		loungers: 2,
		tables: 1,
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
