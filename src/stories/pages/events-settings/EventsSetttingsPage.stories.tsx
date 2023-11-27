import type { Meta, StoryObj } from "@storybook/react";

import EventsSettings from "@/app/event-settings/page";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "fullscreen",
  },
  title: "Pages/event-settings/EventsSettings",
  component: EventsSettings,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  //   tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof EventsSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EventsSettingsExample: Story = {};
