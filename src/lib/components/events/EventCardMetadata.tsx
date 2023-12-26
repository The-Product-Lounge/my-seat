import React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import CalendarIcon from "@/../public/images/events/calendar icon.svg";
import PlaceMarkIcon from "@/../public/images/events/mark icon.svg";

interface NewEventProps {
	details: string;
	startTime?: Date; // Change the type from string to Date
	endTime?: Date;
	place?: string;
}

function checkDateValid(startTime?: Date, endTime?: Date) {
	let fullDateText = "Not Set";
	if (startTime && endTime) {
		const startTimeText = dayjs(startTime).format("DD/MM/YYYY HH:mm");
		const endTimeText = dayjs(endTime).format("HH:mm");
		fullDateText = `${startTimeText} - ${endTimeText}`;
	}
	return fullDateText;
}

export const EventCardMetadata: React.FC<NewEventProps> = ({
	details,
	startTime,
	endTime,
	place,
}) => {
	const dateText = checkDateValid(startTime, endTime);
	return (
		<>
			<Typography variant="poppinsBold" fontSize="16pt" color="#282941">
				{details}
			</Typography>

			<Typography variant="poppins" fontSize="13pt" color="#777781">
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
			</Typography>
		</>
	);
};
