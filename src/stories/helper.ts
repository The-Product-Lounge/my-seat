import { screen, within } from "@storybook/test";

/**
 * Function to get relevant canvas for the given element.
 * @param canvasElement HTMLElement | typeof screen
 * @returns canvas typeof screen
 */
export const getCanvas = (canvasElement: HTMLElement | typeof screen) => {
	/* v8 ignore next 3 */
	return (canvasElement instanceof HTMLElement
		? within(canvasElement)
		: canvasElement) as unknown as typeof screen;
};
