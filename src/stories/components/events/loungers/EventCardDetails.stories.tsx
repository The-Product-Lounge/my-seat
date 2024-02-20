import {
	EventCardDetailsComponent,
	EventCardDetailsProps,
} from "@/lib/components/events/loungers/EventCardDetails";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "lib/components/events/loungers/EventCardDetails",
	component: EventCardDetailsComponent,
	argTypes: {
		thumbnail: {
			control: {
				type: "text",
			},
		},
		title: {
			control: {
				type: "text",
			},
		},
		startDate: {
			control: {
				type: "date",
			},
		},
		endDate: {
			control: {
				type: "date",
			},
		},
	},
	tags: ["autodocs"],
} as Meta<EventCardDetailsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EventCardDetailsExample: Story = {
	args: {
		thumbnail: "https://via.placeholder.com/150",
		title: "Event Title",
		startDate: "2024-08-01",
		endDate: "2024-08-02",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=103-44927&mode=design&t=XmyVl8b1HgL69g4w-4",
		},
	},
};
