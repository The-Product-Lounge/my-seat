import type { Meta } from "@storybook/react";
import type { StoryObjWithPlay } from "@/play-function";

import {
	EventCardDetailsComponent,
	EventCardDetailsProps,
} from "@/lib/components/events/EventCardDetails";
import { expect, within } from "@storybook/test";
import dayjs from "dayjs";

const meta = {
	title: "lib/components/events/Event Card Details",
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
type StoryWithPlay = StoryObjWithPlay<typeof meta>;

export const EventCardDetailsExample: StoryWithPlay = {
	play: ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const thumbnail = canvas.queryByRole("img");
		expect(thumbnail).toHaveAttribute("src", args.thumbnail);
		const title = canvas.queryByText(args.title as string);
		expect(title).toBeInTheDocument();
		const displayedDate =
			dayjs(args.startDate).format("YYYY/MM/DD HH:mm - ") +
			dayjs(args.endDate).format("HH:mm");
		const date = canvas.queryByText(displayedDate);
		expect(date).toBeInTheDocument();
	},
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

export const EventCardDetailsWithoutImage: StoryWithPlay = {
	play: ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const thumbnail = canvas.queryByRole("img");
		expect(thumbnail).toHaveAttribute(
			"src",
			expect.stringContaining("empty-event-thumbnail.svg"),
		);
		const title = canvas.queryByText(args.title as string);
		expect(title).toBeInTheDocument();
		const displayedDate =
			dayjs(args.startDate).format("YYYY/MM/DD HH:mm - ") +
			dayjs(args.endDate).format("HH:mm");
		const date = canvas.queryByText(displayedDate);
		expect(date).toBeInTheDocument();
	},
	args: {
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

export const EventCardDetailsWithoutDates: StoryWithPlay = {
	play: ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const thumbnail = canvas.queryByRole("img");
		expect(thumbnail).toHaveAttribute("src", args.thumbnail);
		const title = canvas.queryByText(args.title as string);
		expect(title).toBeInTheDocument();
		const date = canvas.queryByText(
			dayjs(args.startDate).format("YYYY/MM/DD HH:mm - ") +
				dayjs(args.endDate).format("HH:mm"),
		);
		expect(date).not.toBeInTheDocument();
		expect(canvas.queryByText("Not set")).toBeInTheDocument();
	},
	args: {
		thumbnail: "https://via.placeholder.com/150",
		title: "Event Title",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=103-44927&mode=design&t=XmyVl8b1HgL69g4w-4",
		},
	},
};

export const EventCardDetailsWithoutDatesAndImage: StoryWithPlay = {
	play: ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const thumbnail = canvas.queryByRole("img");
		expect(thumbnail).toHaveAttribute(
			"src",
			expect.stringContaining("empty-event-thumbnail.svg"),
		);
		const title = canvas.queryByText(args.title as string);
		expect(title).toBeInTheDocument();
		const date = canvas.queryByText(
			dayjs(args.startDate).format("YYYY/MM/DD HH:mm - ") +
				dayjs(args.endDate).format("HH:mm"),
		);
		expect(date).not.toBeInTheDocument();
		expect(canvas.queryByText("Not set")).toBeInTheDocument();
	},
	args: {
		title: "Event Title",
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=103-44927&mode=design&t=XmyVl8b1HgL69g4w-4",
		},
	},
};
