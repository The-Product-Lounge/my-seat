import { test, describe } from "vitest";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import * as stories from "@/stories/components/events/EventCardDetails.stories";

const StoriesObject = composeStories(stories);

describe("Event Card Details", async () => {
	for (const [, story] of Object.entries(StoriesObject)) {
		if (story.play)
			test(`test${story.storyName
				.replace(/([A-Z]|\d+)/g, " $1")
				.toLowerCase()}`, async () => {
				const { container } = render(story());
				await story.play({
					canvasElement: container,
					args: story.args,
				});
			});
	}
});
