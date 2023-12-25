import type { Meta, StoryObj } from "@storybook/react";
// src/components/Button/Button.stories.js
import React from "react";
import NewEvent from "./NewEvent";
import dayjs from "dayjs";

const meta = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
	title: "events/NewEvent",
	component: NewEvent,
	argTypes: {
		startTime: { control: "date" },
		endTime: { control: "date" },
	},
} satisfies Meta<typeof NewEvent>;

export default meta;
type Story = StoryObj<typeof meta>;

const withTime24hourFormat = dayjs(new Date()).format("MM/DD/YYYY HH:mm:ss A"); // 03/19/2022 15:57:25 PM"

export const NewEventExample: Story = {
	args: {
		details: "Mesibulbul",
		startTime: new Date(2023, 11, 31, 18, 30, 0, 0),
		endTime: new Date(2023, 11, 31, 19, 30, 0, 0),
		place: "Shay's roof",
	},
};

const HomePage = () => {
	const date = new Date(2022, 2, 19, 15, 57, 25);
	// pass the date, and use the format function, specify a format.
	const shortDateFormat = dayjs(date).format("MM/DD/YYYY"); // 03/19/2022

	const withTime12HourFormat = dayjs(date).format("MM/DD/YYYY hh:mm:ss A"); // 03/19/2022 03:57:25 PM"
	return (
		<div className="container">
			<div className="grid place-content-center min-h-screen">
				<div className="flex flex-col items-center gap-4">
					<h1 className="text-4xl my-8">React Format Date Tutorial</h1>
					<p>Short date format: {shortDateFormat}</p>
					<p>format with Time (24-hour): {withTime24hourFormat}</p>
					<p>format with Time (12-hour): {withTime12HourFormat}</p>
				</div>
			</div>
		</div>
	);
};
