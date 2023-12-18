/**
 * @file This file contains the stories for the LoginPage component.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect, waitFor, Mock, screen, fn } from "@storybook/test";
import HomePage from "@/app/page";

import { LoginForm } from "@/app/LoginForm.component";
import { signIn as signInMod } from "next-auth/react";
import { getCanvas } from "@/stories/helper";

const signIn = signInMod as Mock;

/**
 * The metadata for the LoginPage stories.
 */
const meta = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
	title: "Pages/Login Page",
	component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Fills in the form with the given credentials.
 *
 * @param canvas - The canvas to use for the queries.
 * @param email - The email to fill in.
 * @param password - The password to fill in.
 */
const fillForm = async ({
	canvas,
	email,
	password,
}: {
	canvas: typeof screen;
	email: string;
	password: string;
}) => {
	if (email !== "") {
		// Fill in email input
		const emailInput = canvas.getByLabelText("Email", {
			selector: "input",
		});
		await userEvent.type(emailInput, email);
	}

	if (password !== "") {
		// Fill in password input
		const passwordInput = canvas.getByLabelText("Password", {
			selector: "input",
		});
		await userEvent.type(passwordInput, password);
	}

	// Submit the form
	const submitButton = canvas.getByRole("button", { name: "Open sesami!" });
	await userEvent.click(submitButton);
};

/**
 * Example story for rendering the HomePage component.
 */
export const HomePageExample: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		expect(canvas.queryByText("Wait!")).toBeInTheDocument();
		expect(canvas.queryByText("What is the secret word?")).toBeInTheDocument();
		expect(
			canvas.queryByRole("button", { name: "Open sesami!" }),
		).toBeEnabled();
	},
	parameters: {
		layout: "fullscreen",
	},
	render: () => <HomePage />,
};

/**
 * Example story for testing the LoginForm component.
 */
export const LoginFormExample: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);

		const btn = canvas.getByRole("button", { name: "Open sesami!" });
		btn.onclick = fn();
		const form = canvas.getByRole("form");
		form.onsubmit = fn();

		await fillForm({
			canvas,
			email: "bla@bla.bla",
			password: "bla",
		});

		expect(btn.onclick).toHaveBeenCalled();
		expect(form.onsubmit).toHaveBeenCalled();
		expect(signIn).toHaveBeenCalledWith("credentials", {
			redirect: false,
			email: "bla@bla.bla",
			password: "bla",
		});
	},
};

/**
 * Example story for testing the LoginForm component with credentials error.
 */
export const LoginFormWrongCredentials: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		const email = "bla@bla.bla";
		const password = "bla";

		await fillForm({
			canvas,
			email,
			password,
		});
		// Asserts that the error message is displayed
		expect(signIn).toHaveBeenCalledWith("credentials", {
			redirect: false,
			email,
			password,
		});
		await expect(
			canvas.getByText("Incorrect password, are you a spy?"),
		).toBeInTheDocument();
	},
	render: () => {
		// Mocks an error response
		signIn.mockImplementation(async () => ({
			error: "Error",
		}));
		return <LoginForm />;
	},
};

/**
 * Example story for testing the LoginForm component without email.
 */
export const LoginFromWithoutEmail: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		await fillForm({
			canvas,
			email: "",
			password: "bla",
		});
		// Asserts that the error message is displayed
		await expect(canvas.getByText("Email is required")).toBeInTheDocument();
	},
};

/**
 * Example story for testing the LoginForm component without password.
 */
export const LoginFromWithoutPassword: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		await fillForm({
			canvas,
			email: "Bla@bla.bla",
			password: "",
		});
		// Asserts that the error message is displayed
		expect(signIn).not.toHaveBeenCalled();
		expect(canvas.getByText("Password is required")).toBeInTheDocument();
	},
};

/**
 * Example story for testing the LoginForm component without password and email.
 */
export const LoginFromWithoutPasswordAndEmail: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		await fillForm({
			canvas,
			email: "",
			password: "",
		});
		// Asserts that the error message is displayed
		expect(signIn).not.toHaveBeenCalled();
		expect(canvas.queryByText("Password is required")).toBeInTheDocument();
		expect(canvas.getByText("Email is required")).toBeInTheDocument();
	},
};

/**
 * Example story for testing the LoginForm component with a timeout.
 */
export const LoginFormTimeout: Story = {
	play: async ({ canvasElement }) => {
		const canvas = getCanvas(canvasElement);
		await fillForm({
			canvas,
			email: "bla@bla.bla",
			password: "bla",
		});

		// Asserts that the loading spinner is displayed and then disappears
		expect(canvas.getByRole("progressbar")).toBeInTheDocument();

		await waitFor(() =>
			expect(canvas.queryByRole("progressbar")).not.toBeInTheDocument(),
		);
	},
	render: () => {
		// Mocks a slow response
		signIn.mockImplementationOnce(async () => {
			await new Promise((resolve) => setTimeout(resolve, 500));
			return {
				ok: true,
			};
		});
		return <LoginForm />;
	},
};
