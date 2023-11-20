import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/react";
import "@testing-library/jest-dom";

import * as stories from "@/stories/components/inputs/Button.stories";

const { ButtonWithOnlyLabel, ButtonWithDisabled, ButtonWithLoading } =
  composeStories(stories);

test("Button works with only label", () => {
  render(<ButtonWithOnlyLabel />);

  const buttonElement = screen.getByRole("button");
  // Testing against values coming from the story itself! No need for duplication
  expect(buttonElement.textContent).toEqual(ButtonWithOnlyLabel.args.children);
});

test("Button is disabled", () => {
  render(<ButtonWithDisabled />);

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
  expect(buttonElement.textContent).toEqual(ButtonWithDisabled.args.children);
});

test("Button shows loading indicator", () => {
  render(<ButtonWithLoading />);

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toContainElement(screen.getByRole("progressbar"));
  expect(buttonElement).toBeDisabled();
});
