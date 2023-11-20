import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvents, { UserEvent } from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/app/LoginForm";
import { signIn } from "next-auth/react";

// ----------------------------------------
// ------------- Mocks --------------------
// ----------------------------------------
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

// ----------------------------------------
// ------------- Tests --------------------
// ----------------------------------------

describe("LoginForm", () => {
  let userEvent: UserEvent;

  /**
   * Fill in the form with the given email and password and submit it
   * @param email {string}  The email to fill in
   * @param password {string} The password to fill in
   */
  const fillForm = async (email: string, password: string) => {
    // Fill in email input
    if (email !== "") {
      const emailInput = screen.getByLabelText("Email", {
        selector: "input",
      });
      await userEvent.type(emailInput, email);
    }

    if (password !== "") {
      // Fill in password input
      const passwordInput = screen.getByLabelText("Password", {
        selector: "input",
      });
      await userEvent.type(passwordInput, password);
    }

    // Submit the form
    const submitButton = screen.getByRole("button", { name: "Open sesami!" });
    await userEvent.click(submitButton);
  };

  beforeEach(() => {
    userEvent = userEvents.setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("login in with valid credentials", async () => {
    render(<LoginForm />);
    const email = "bla@bla.bla";
    const password = "bla";

    await fillForm(email, password);

    expect(signIn).toHaveBeenCalledWith("credentials", {
      redirect: false,
      email,
      password,
    });
    expect(useRouter().push).toHaveBeenCalledWith("/event-settings");
  });

  test("login without email show error", async () => {
    render(<LoginForm />);
    const email = "";
    const password = "bla";

    await fillForm(email, password);

    expect(signIn).not.toHaveBeenCalled();
    expect(useRouter().push).not.toHaveBeenCalled();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  test("login without password show error", async () => {
    render(<LoginForm />);
    const email = "bla@bla";
    const password = "";

    await fillForm(email, password);

    expect(signIn).not.toHaveBeenCalled();
    expect(useRouter().push).not.toHaveBeenCalled();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  test("login without password and email show error", async () => {
    render(<LoginForm />);
    const email = "";
    const password = "";

    await fillForm(email, password);

    expect(signIn).not.toHaveBeenCalled();
    expect(useRouter().push).not.toHaveBeenCalled();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
  });

  test("login with invalid credentials show error", async () => {
    render(<LoginForm />);
    const signInMocked = jest.mocked(signIn);
    signInMocked.mockReturnValueOnce({ error: "Invalid credentials" } as any);

    const email = "bla@bla.bla";
    const password = "bla";

    await fillForm(email, password);

    expect(signIn).toHaveBeenCalledWith("credentials", {
      redirect: false,
      email,
      password,
    });
    expect(useRouter().push).not.toHaveBeenCalled();
    expect(
      screen.getByText("Incorrect password, are you a spy?"),
    ).toBeInTheDocument();
  });
});
