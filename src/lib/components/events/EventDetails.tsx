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
		{[
			{ icon: CalendarIcon, label: dateText },
			{ icon: PlaceMarkIcon, label: place || "Not Set" },
		].map(({ icon, label }, index) => (
			<div key={index}>
				<Image
					src={icon}
					width={18}
					height={18}
					alt={`${label} Icon`}
					style={{ marginRight: index === 0 ? "3.75px" : "4px" }}
					priority={true}
				/>
				{label}
			</div>
		))}
	</Stack>
);

export default EventDetails;
