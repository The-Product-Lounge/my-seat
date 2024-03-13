import type { Meta } from "@storybook/react";
import type { StoryObjWithPlay } from "@/play-function";
import { expect, within } from "@storybook/test";

/**
 * EventBackgroundProps
 */
interface EventBackgroundProps {
	/**
	 * The url of the background image
	 */
	url: string;
}

const EventBackground = (props: EventBackgroundProps) => <>Example {props} </>;

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
