/**
 * @file This file contains the stories for the EventsSettingsPage component.
 */

import type { Meta } from "@storybook/react";

import EventPage from "@/app/[eventId]/page";

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
	title: "Pages/Event",
	component: EventPage,
} satisfies Meta<typeof EventPage>;

export default meta;
type StoryWithPlay = StoryObjWithPlay<typeof meta>;

/**
 * Example story for the EventsSettings component.
 */
export const EventsPageExample: StoryWithPlay = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas).toBeInTheDocument();
	},
	args: {
		params: {
			eventId: "123",
		},
	},
};
