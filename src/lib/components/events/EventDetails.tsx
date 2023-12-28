// EventDetails.tsx
import React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import CalendarIcon from "@/../public/images/events/calendar icon.svg";
import PlaceMarkIcon from "@/../public/images/events/mark icon.svg";

interface EventDetailsProps {
	dateText: string;
	place: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ dateText, place }) => (
	<Stack spacing={0.5}>
		<div>
			<Image
				src={CalendarIcon}
				width={18}
				height={18}
				alt="Calendar Icon"
				style={{ marginRight: "3.75px" }}
				priority={true}
			/>
			{dateText}
		</div>
		<div>
			<Image
				src={PlaceMarkIcon}
				width={18}
				height={18}
				alt="PlaceMark Icon"
				style={{ marginRight: "4px" }}
				priority={true}
			/>
			{place || "Not Set"}
		</div>
	</Stack>
);

export default EventDetails;
