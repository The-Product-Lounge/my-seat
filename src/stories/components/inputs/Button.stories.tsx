import type { Meta } from "@storybook/react";
import type {
	StoryObjWithPlay,
	StoryObjWithPlayReturnElement,
} from "@/play-function";
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
type StoryWithPlayReturnElement = StoryObjWithPlayReturnElement<typeof meta>;
type StoryWithPlay = StoryObjWithPlay<typeof meta>;

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
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=113-5393&mode=design&t=ssy0F29wbdZ5uOTS-4",
		},
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

export const ButtonWithFontWeightBold: StoryWithPlay = {
	play: async (context) => {
		await ButtonWithFontWeight600.play(context);
	},
	args: {
		children: "Open sesami!",
		fontWeight: "font-bold",
	},
};

export const ButtonWithFontWeightNormal: StoryWithPlay = {
	play: async (context) => {
		await ButtonWithFontWeight600.play(context);
	},
	args: {
		children: "Open sesami!",
		fontWeight: "font-normal",
	},
};

export const ButtonWithLoading: StoryWithPlay = {
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

export const ButtonWithDisabled: StoryWithPlay = {
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
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/W21DiaSty7siqr2iKaCpqk/MySeat?type=design&node-id=113-5393&mode=design&t=ssy0F29wbdZ5uOTS-4",
		},
	},
};

export const SecondaryButtonWithIcon: StoryWithPlay = {
	play: async (context) => {
		await ButtonWithOnlyLabel.play(context);
	},
	args: {
		children: "Create Event",
		startIcon: <Image src={CreateEventImg} alt="Create Event" />,
		color: "secondary",
	},
};
