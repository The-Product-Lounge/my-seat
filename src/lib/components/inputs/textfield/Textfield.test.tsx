import { test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import * as stories from "@/stories/components/inputs/TextField.stories";

const StoriesObject = composeStories(stories);

describe("Textfield", async () => {
	for (const [key, story] of Object.entries(StoriesObject)) {
		if (story.play)
			test(`test${story.storyName
				.replace(/([A-Z]|\d+)/g, " $1")
				.toLowerCase()}`, async () => {
				render(story());
				await story.play({
					// @ts-ignore
					canvasElement: screen,
					args: story.args,
				});
			});
	}
});
