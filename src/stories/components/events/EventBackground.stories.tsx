import type { Meta, StoryObj } from "@storybook/react";
import { EventBackground } from "@/lib/components/events/EventBackground";

const meta = {
	title: "lib/components/events/Event Background",
	component: EventBackground,
	tags: ["autodocs"],
} as Meta<typeof EventBackground>;

export default meta;
type Story = StoryObj<typeof EventBackground>;
export const EventBackgroundExample: Story = {};
