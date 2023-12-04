import { test, describe, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { useRouter } from "next/router";

import * as stories from "@/stories/pages/events/EventsSettingsPage.stories";
import React from "react";

const StoriesObject = composeStories(stories);

describe("Events Settings", async () => {
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
