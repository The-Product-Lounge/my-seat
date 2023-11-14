import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "@/app/LoginForm";
import { decorator } from "../../../../__mocks__/next-auth";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [decorator],
  title: "pages/Root/LoginForm",
  component: LoginForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LoginFormExample: Story = {
  parameters: {
    signIn: {
      jwt: "success",
    },
  },
};

export const LoginFormError: Story = {
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
