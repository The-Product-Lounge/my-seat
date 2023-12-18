import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "@/lib/components/inputs/Button.component";
import Image from "next/image";

import CreateEventImg from "@/../public/images/events/create event.svg";
import { expect, fn, within } from "@storybook/test";
import { getCanvas } from "@/stories/helper";
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

// stories on Button with with children as label, disabled, variant, color, size, fullWidth
export const ButtonWithOnlyLabel: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent(args.children as string);
		btn.click();
		expect(args.onClick).toHaveBeenCalled();
	},
	args: {
		children: "Open sesami!",
	},
};

export const ButtonWithFontWeight600: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent(args.children as string);
		btn.click();
		expect(args.onClick).toHaveBeenCalled();
		expect(btn).toHaveStyle({
			"font-weight": args.fontWeight,
		});
	},
	args: {
		children: "Open sesami!",
		fontWeight: "600",
	},
};

export const ButtonWithFontWeightBold: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent(args.children as string);
		btn.click();
		expect(args.onClick).toHaveBeenCalled();
		expect(btn).toHaveStyle({
			"font-weight": 700,
		});
	},
	args: {
		children: "Open sesami!",
		fontWeight: "bold",
	},
};

export const ButtonWithFontWeightNormal: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent(args.children as string);
		btn.click();
		expect(args.onClick).toHaveBeenCalled();
		expect(btn).toHaveStyle({
			"font-weight": args.fontWeight,
		});
	},
	args: {
		children: "Open sesami!",
		fontWeight: "normal",
	},
};

export const ButtonWithLoading: Story = {
	play: async ({ args, canvasElement }) => {
		const canvas = getCanvas(canvasElement);
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
		const canvas = getCanvas(canvasElement);
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
	play: async ({ args, canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		const btn = canvas.getByRole("button");
		expect(btn).toBeEnabled();
		expect(btn).toHaveTextContent(args.children as string);
		expect(btn).toContainElement(canvas.getByRole("img"));
		btn.click();
		expect(args.onClick).toHaveBeenCalled();
	},
	args: {
		children: "Create Event",
		startIcon: <Image src={CreateEventImg} alt="Create Event" />,
		color: "secondary",
	},
};
