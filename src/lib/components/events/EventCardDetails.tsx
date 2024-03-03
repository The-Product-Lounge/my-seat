import Card from "@mui/material/Card";
import Image from "next/image";

import EmptyEventImage from "@/../public/images/events/empty-event-thumbnail.svg";
import { useMemo } from "react";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

/**
 * Get EmptyThumbnail component for empty event thumbnail
 * @returns EmptyThumbnail component
 */
const EmptyThumbnail = () => (
	<>
		<Image
			src={EmptyEventImage}
			alt="Empty Event Thumbnail"
			width={15}
			height={15}
		/>
	</>
);

/**
 * EventCardDetailsProps interface for EventCardDetails component props
 * @description
 * Props for EventCardDetails component to display event thumbnail, title and start and end date
 */
export interface EventCardDetailsProps {
	/**
	 * Event thumbnail image URL
	 * @default EmptyEventImage
	 * @example "https://via.placeholder.com/150"
	 * @type string
	 */
	thumbnail?: string;

	/**
	 * Event title
	 * @type string
	 * @example "Event Title"
	 */
	title: string;

	/**
	 * Start Date of the event
	 * @default ""
	 * @type string
	 */
	startDate?: string;

	/**
	 * End Time of the event
	 * @default ""
	 * @type string
	 */
	endDate?: string;
}

/**
 * EventCardDetails component
 * @description
 * Displays event thumbnail, title and start and end date
 * @example
 * <EventCardDetails
 * 	thumbnail="https://via.placeholder.com/150"
 * 	title="Event Title"
 * 	startDate="2024-08-01"
 * 	endDate="2024-08-02"
 * />
 */
export const EventCardDetailsComponent: React.FC<EventCardDetailsProps> = ({
	thumbnail,
	title,
	startDate,
	endDate,
}) => {
	// useMemo to get display date from start and end date
	const displayedDate = useMemo(() => {
		if (startDate && endDate) {
			return (
				dayjs(startDate).format("YYYY/MM/DD HH:mm - ") +
				dayjs(endDate).format("HH:mm")
			);
		}
		return "Not set";
	}, [startDate, endDate]);
	return (
		<Card
			elevation={3}
			className=" grid h-24 grid-cols-10  place-items-center rounded-lg"
			sx={{
				border: "0.5px solid #E0E0E0",
			}}
		>
			<div
				style={{
					borderColor: "#E0E0E0",
				}}
				className="col-span-2 box-border grid h-11 w-11 place-content-center rounded-lg border border-solid shadow-sm"
			>
				{thumbnail ? (
					<Image
						src={thumbnail}
						alt={`${title} thumbnail`}
						width={45}
						height={45}
						className="box-border rounded-lg border shadow-sm"
					/>
				) : (
					<EmptyThumbnail />
				)}
			</div>
			<div className="col-span-8 justify-self-start">
				<Typography
					color="#282941"
					component="span"
					fontSize="16px"
					fontWeight="600"
				>
					{title}
				</Typography>
				<br />{" "}
				<Typography color="#777781" component="span" fontSize="13px">
					{displayedDate}
				</Typography>
			</div>
		</Card>
	);
};
