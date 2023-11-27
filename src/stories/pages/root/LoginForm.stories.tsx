import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { LoginForm } from "@/app/LoginForm.component";
import { decorator } from "@/../__mocks__/next-auth";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [decorator],
  title: "Pages/Root/LoginForm",
  component: LoginForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Fill in the form with given values and submit it
 * @param {HTMLElement} canvasElement - The canvas element
 * @param {string} email - The email to fill in
 * @param {string} password - The password to fill in
 * @returns {Promise<void>} - A promise that resolves when the form is submitted
 * @example
 * await FillForm({
 *  canvasElement,
 * email: "bla@bla.bla"
 * password: "bla"
 * });
 */
const FillForm = async ({
  canvasElement,
  email,
  password,
}: {
  canvasElement: HTMLElement;
  email: string;
  password: string;
}) => {
  // Get the canvas element
  const canvas = within(canvasElement);

  // Fill in email input
  const emailInput = canvas.getByLabelText("Email", {
    selector: "input",
  });
  await userEvent.type(emailInput, email, { delay: 100 });

  // Fill in password input
  const passwordInput = canvas.getByLabelText("Password", {
    selector: "input",
  });
  await userEvent.type(passwordInput, password, { delay: 100 });

  // Submit the form
  const submitButton = canvas.getByRole("button", { name: "Open sesami!" });
  await userEvent.click(submitButton);

  return canvas;
};

export const LoginFormExample: Story = {
  play: async ({ canvasElement }) => {
    await FillForm({
      canvasElement,
      email: "bla@bla.bla",
      password: "bla",
    });
  },
  parameters: {
    signIn: {
      jwt: "success",
    },
  },
};

export const LoginFormError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = await FillForm({
      canvasElement,
      email: "bla@bla.bla",
      password: "bla",
    });
    // 👇 Assert DOM structure
    await expect(
      canvas.getByText("Incorrect password, are you a spy?"),
    ).toBeInTheDocument();
  },
  parameters: {
    signIn: {
      error: "Error",
    },
  },
};

export const LoginFormTimeout: Story = {
  parameters: {
    signIn: {
      timeout: 6,
    },
  },
};
