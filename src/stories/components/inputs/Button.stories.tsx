import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import type {
	PlayFunction,
	PlayFunctionContext,
	Renderer,
} from "@storybook/types";
import { Button, ButtonProps } from "@/lib/components/inputs/Button.component";
import Image from "next/image";

import CreateEventImg from "@/../public/images/events/create event.svg";
import { expect, fn, within } from "@storybook/test";

const meta = {
	title: "Lib/Inputs/Button",
	component: Button,
	args: {
		onClick: fn(),
	},
	tags: ["autodocs"],
} as Meta<ButtonProps>;

export default meta;
export type Story = StoryObj<typeof meta>;

interface StoryWithPlayReturnElement extends Omit<Story, "play"> {
	play: (
		context: PlayFunctionContext<ReactRenderer, ButtonProps>,
	) => HTMLElement | Promise<HTMLElement>;
}

interface StoryWithPlay extends Omit<Story, "play"> {
	play: (
		context: PlayFunctionContext<ReactRenderer, ButtonProps>,
	) => void | Promise<void>;
}

// stories on Button with with children as label, disabled, variant, color, size, fullWidth
export const ButtonWithOnlyLabel: StoryWithPlayReturnElement = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent(args.children as string);
		btn.click();
		expect(args.onClick).toHaveBeenCalled();
		return btn;
	},
	args: {
		children: "Open sesami!",
	},
};

export const ButtonWithFontWeight600: StoryWithPlay = {
	play: async (context) => {
		const { args } = context;
		const btn = await ButtonWithOnlyLabel.play(context);
		expect(btn.className).toContain(args.fontWeight as string);
	},
	args: {
		children: "Open sesami!",
		fontWeight: "font-semibold",
	},
};

export const ButtonWithFontWeightBold: Story = {
	play: async (context) => {
		await ButtonWithFontWeight600.play(context);
	},
	args: {
		children: "Open sesami!",
		fontWeight: "font-bold",
	},
};

export const ButtonWithFontWeightNormal: Story = {
	play: async (context) => {
		await ButtonWithFontWeight600.play(context);
	},
	args: {
		children: "Open sesami!",
		fontWeight: "font-normal",
	},
};

export const ButtonWithLoading: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeDisabled();
		expect(btn).toContainElement(canvas.getByRole("progressbar"));
		expect(btn).not.toHaveTextContent(args.children as string);
	},
	args: {
		children: "Open sesami!",
		isLoading: true,
	},
};

export const ButtonWithDisabled: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeDisabled();
		expect(btn).toHaveTextContent(args.children as string);
	},
	args: {
		children: "Open sesami!",
		disabled: true,
	},
};

export const SecondaryButtonWithIcon: Story = {
	play: async (context) => {
		await ButtonWithOnlyLabel.play(context);
	},
	args: {
		children: "Create Event",
		startIcon: <Image src={CreateEventImg} alt="Create Event" />,
		color: "secondary",
	},
};
