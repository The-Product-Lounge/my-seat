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
    render(<HomePageExample />);
    await HomePageExample.play?.({
      // @ts-ignore
      canvasElement: screen,
    });
  });

  test("login in with valid credentials", async () => {
    render(<LoginFormExample />);

    await LoginFormExample.play?.({
      // @ts-ignore
      canvasElement: screen,
    });

    expect(useRouter().push).toHaveBeenCalledWith("/event-settings");
  });

  test("login without email show error", async () => {
    render(<LoginFromWithoutEmail />);
    await LoginFromWithoutEmail.play?.({
      // @ts-ignore
      canvasElement: screen,
    });

    expect(useRouter().push).not.toHaveBeenCalled();
  });

  test("login without password show error", async () => {
    render(<LoginFromWithoutPassword />);
    await LoginFromWithoutPassword.play?.({
      // @ts-ignore
      canvasElement: screen,
    });

    expect(useRouter().push).not.toHaveBeenCalled();
  });

  test("login without password and email show error", async () => {
    render(<LoginFromWithoutPasswordAndEmail />);
    await LoginFromWithoutPasswordAndEmail.play?.({
      // @ts-ignore
      canvasElement: screen,
    });

    expect(useRouter().push).not.toHaveBeenCalled();
  });

  test("login with invalid credentials show error", async () => {
    render(<LoginFormWrongCredentials />);
    await LoginFormWrongCredentials.play?.({
      // @ts-ignore
      canvasElement: screen,
    });

    expect(useRouter().push).not.toHaveBeenCalled();
  });

  test("login with timeout shows progressbar", async () => {
    render(<LoginFormTimeout />);
    await LoginFormTimeout.play?.({
      // @ts-ignore
      canvasElement: screen,
    });

    expect(useRouter().push).toHaveBeenCalled();
  });
});
