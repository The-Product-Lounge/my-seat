/**
 * @file This file contains the storybook configuration for the TextField component.
 */

import type { Meta } from "@storybook/react";

import { TextField } from "@/lib/components/inputs/textfield/Textfield.component";
import { expect, userEvent, within } from "@storybook/test";
import { StoryObjWithPlay } from "@/play-function";

const meta = {
	title: "Lib/Inputs/Textfield",
	component: TextField,
	tags: ["autodocs"],
	argTypes: {
		error: { control: "text" },
	},
} satisfies Meta<typeof TextField>;

export default meta;
type StoryWithPlay = StoryObjWithPlay<typeof meta>;

/**
 * Story for a Textfield with only a label.
 */
export const TextfieldWithOnlyLabel: StoryWithPlay = {
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		expect(canvas.queryByLabelText(args.label as string)).toBeInTheDocument();
		const textfield =
			args.type === "password"
				? canvas.getByLabelText(args.label as string)
				: canvas.getByRole("textbox");
		expect(textfield).toBeEnabled();
		let value = "";
		if (args.defaultValue) {
			value = args.defaultValue as string;
		}
		expect(textfield).toHaveValue(value);
		if (args.error) {
			expect(canvas.queryByText(args.error as string)).toBeInTheDocument();
			expect(textfield).toBeInvalid();
			expect(canvas.queryByAltText("Error Icon")).toBeInTheDocument();
		}

		// Check if the textfield is focused when clicked
		await userEvent.click(textfield);
		expect(textfield).toHaveFocus();

		// Check textfield value when typing
		await userEvent.type(textfield, "Hello World");
		expect(textfield).toHaveValue(value + "Hello World");
	},
	args: {
		label: "Label",
	},
};

/**
 * Story for a Textfield with default text and a label.
 */
export const TextfieldWithDefaultTextAndLabel: StoryWithPlay = {
	play: async (context) => {
		await TextfieldWithOnlyLabel.play(context);
	},
	args: {
		defaultValue: "Default Text",
		label: "Label",
	},
};

/**
 * Story for a Textfield with an error message and a label.
 */
export const TextfieldWithErrorAndLabel: StoryWithPlay = {
	play: async (context) => {
		await TextfieldWithOnlyLabel.play(context);
	},
	args: {
		label: "Label",
		error: "Incorrect password, are you a spy?",
	},
};

/**
 * Story for a password Textfield with only a label.
 */
export const PasswordTextfieldWithOnlyLabel: StoryWithPlay = {
	play: async (context) => {
		await TextfieldWithOnlyLabel.play(context);
		const { canvasElement, args } = context;
		const canvas = within(canvasElement);
		const textfield = canvas.getByLabelText(args.label as string);

		// Check if the password is hidden
		expect(textfield).toHaveAttribute("type", "password");

		// Check if the password is visible
		await userEvent.click(canvas.getByLabelText("toggle password visibility"));
		expect(textfield).toHaveAttribute("type", "text");

		// Check if the password is hidden again
		await userEvent.click(canvas.getByLabelText("toggle password visibility"));
		expect(textfield).toHaveAttribute("type", "password");
	},
	args: {
		label: "Label",
		type: "password",
	},
};

/**
 * Story for a password Textfield with default text and a label.
 */
export const PasswordTextfieldWithDefaultTextAndLabel: StoryWithPlay = {
	play: async (context) => {
		await PasswordTextfieldWithOnlyLabel.play(context);
	},
	args: {
		defaultValue: "Default Text",
		label: "Label",
		type: "password",
	},
};

/**
 * Story for a password Textfield with an error message and a label.
 */
export const PasswordTextfieldWithErrorAndLabel: StoryWithPlay = {
	play: async (context) => {
		await PasswordTextfieldWithOnlyLabel.play(context);
	},
	args: {
		label: "Label",
		error: "Error",
		type: "password",
	},
};
