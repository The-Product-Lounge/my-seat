import type { Meta } from "@storybook/react";
import type { StoryObjWithPlay } from "@/play-function";
import { expect, within } from "@storybook/test";
import { EventBackground } from "@/lib/components/events/EventBackground";

const meta = {
	title: "Example/EventBackground",
	component: EventBackground,
	tags: ["autodocs"],
} as Meta<typeof EventBackground>;

export default meta;
type StoryWithPlay = StoryObjWithPlay<typeof meta>;

export const EventBackgroundExample: StoryWithPlay = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas).toBeInTheDocument();
		const backgroundImage = canvas.queryByRole("img") as HTMLImageElement;
		expect(decodeURIComponent(backgroundImage.src)).toContain(
			args.url as string,
		);
	},
	args: {
		url: "https://example.com/image.jpg",
	},
};

export const EventBackgroundExampleWithNoImage: StoryWithPlay = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		expect(canvas).toBeInTheDocument();
		const backgroundImage = canvas.queryByRole("img") as HTMLImageElement;
		expect(backgroundImage).not.toBeInTheDocument();
	},
	args: {
		url: "",
	},
};
