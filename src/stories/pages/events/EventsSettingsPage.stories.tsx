/**
 * @file This file contains the stories for the EventsSettingsPage component.
 */

import type { Meta } from "@storybook/react";

import EventsSettings from "@/app/event-settings/page";
import { EmptyEventsText } from "@/app/event-settings/EmptyEventsText.component";
import { Toolbar } from "@/app/event-settings/Toolbar.component";
import { expect, within } from "@storybook/test";
import { StoryObjWithPlay } from "@/play-function";

/**
 * The metadata for the EventsSettingsPage stories.
 */
const meta = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
		layout: "fullscreen",
	},
	title: "Pages/Events Settings",
	component: EventsSettings,
} satisfies Meta<typeof EventsSettings>;

export default meta;
type StoryWithPlay = StoryObjWithPlay<typeof meta>;

/**
 * Example story for the EventsSettings component.
 */
export const EventsSettingsExample: StoryWithPlay = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.queryByRole("toolbar")).toBeInTheDocument();
	},
};

/**
 * Example story for the EmptyEventsText component.
 */
export const EmptyEventsTextExample: StoryWithPlay = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(
			canvas.queryByText(
				"No upcoming events yet. Click ‘Create Event’ to get started!",
			),
		).toBeInTheDocument();
	},
	render: () => <EmptyEventsText />,
};

/**
 * Example story for the Toolbar component.
 */
export const EventsToolbarExample: StoryWithPlay = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas.queryByRole("toolbar")).toBeInTheDocument();
		expect(canvas.queryByAltText("Logo")).toBeInTheDocument();
		const createEventLink = canvas.getByRole("link");
		expect(createEventLink).toBeInTheDocument();
		expect(createEventLink).toHaveAttribute(
			"href",
			"/event-settings/create-event",
		);
		expect(canvas.queryByAltText("Create Event")).toBeInTheDocument();
	},
	render: () => <Toolbar />,
};
