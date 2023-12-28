import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { vi, test, expect, describe, afterEach } from "vitest";
import * as stories from "@/stories/pages/events/LoginPage.stories";
import { composeStories } from "@storybook/react";

const {
	LoginFormExample,
	LoginFormTimeout,
	LoginFormWrongCredentials,
	LoginFromWithoutEmail,
	LoginFromWithoutPassword,
	LoginFromWithoutPasswordAndEmail,
	HomePageExample,
} = composeStories(stories);

// ----------------------------------------
// ------------- Mocks --------------------
// ----------------------------------------
vi.mock("next/navigation", () => ({
	useRouter: vi.fn().mockReturnValue({
		push: vi.fn(),
	}),
}));

vi.mock("next-auth/react", () => ({
	signIn: vi.fn(),
}));

// ----------------------------------------
// ------------- Tests --------------------
// ----------------------------------------

describe("LoginForm", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	test("login page", async () => {
		const { container } = render(<HomePageExample />);
		await HomePageExample.play?.({
			canvasElement: container,
		});
	});

	test("login in with valid credentials", async () => {
		const { container } = render(<LoginFormExample />);

		await LoginFormExample.play?.({
			canvasElement: container,
		});

		expect(useRouter().push).toHaveBeenCalledWith("/event-settings");
	});

	test("login without email show error", async () => {
		const { container } = render(<LoginFromWithoutEmail />);
		await LoginFromWithoutEmail.play?.({
			canvasElement: container,
		});

		expect(useRouter().push).not.toHaveBeenCalled();
	});

	test("login without password show error", async () => {
		const { container } = render(<LoginFromWithoutPassword />);
		await LoginFromWithoutPassword.play?.({
			canvasElement: container,
		});

		expect(useRouter().push).not.toHaveBeenCalled();
	});

	test("login without password and email show error", async () => {
		const { container } = render(<LoginFromWithoutPasswordAndEmail />);
		await LoginFromWithoutPasswordAndEmail.play?.({
			canvasElement: container,
		});

		expect(useRouter().push).not.toHaveBeenCalled();
	});

	test("login with invalid credentials show error", async () => {
		const { container } = render(<LoginFormWrongCredentials />);
		await LoginFormWrongCredentials.play?.({
			canvasElement: container,
		});

		expect(useRouter().push).not.toHaveBeenCalled();
	});

	test("login with timeout shows progressbar", async () => {
		const { container } = render(<LoginFormTimeout />);
		await LoginFormTimeout.play?.({
			canvasElement: container,
		});

		expect(useRouter().push).toHaveBeenCalled();
	});
});
