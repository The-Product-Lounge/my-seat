import type { ReactRenderer, StoryObj } from "@storybook/react";
import type { PlayFunctionContext } from "@storybook/types";

/**
 * Storybook's `StoryObj` type have a `play` property that is optional.
 * This type is a copy of `StoryObj` but with the `play` property required.
 * This type returns an HTMLElement or a Promise of an HTMLElement.
 */
type StoryObjWithPlayReturnElement<T> = Omit<StoryObj<T>, "play"> & {
	play: (
		context: PlayFunctionContext<ReactRenderer, StoryObj<T>["args"]>,
	) => HTMLElement | Promise<HTMLElement>;
};

/**
 * Storybook's `StoryObj` type have a `play` property that is optional.
 * This type is a copy of `StoryObj` but with the `play` property required.
 */
type StoryObjWithPlay<T> = Omit<StoryObj<T>, "play"> & {
	play: (
		context: PlayFunctionContext<ReactRenderer, StoryObj<T>["args"]>,
	) => void | Promise<void>;
};
