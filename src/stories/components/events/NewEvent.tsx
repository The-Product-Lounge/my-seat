import React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import CalendarIcon from "@/../public/images/Calendar.svg";
import PlaceMarkIcon from "@/../public/images/PlaceMark.svg";

interface NewEventProps {
	details: string;
	startTime?: Date; // Change the type from string to Date
	endTime?: Date;
	place?: string;
}

function checkDateValid(startTime?: Date, endTime?: Date) {
	let fullDateText = "Not Set";
	if (startTime && endTime) {
		const dateText = dayjs(startTime).format("DD/MM/YYYY");
		const startTimeText = dayjs(startTime).format("HH:mm");
		const endTimeText = dayjs(endTime).format("HH:mm");
		fullDateText = dateText + " " + startTimeText + "-" + endTimeText;
	}
	return fullDateText;
}

const NewEvent: React.FC<NewEventProps> = ({
	details,
	startTime,
	endTime,
	place,
}) => {
	let dateText = checkDateValid(startTime, endTime);
	const lineStyle: React.CSSProperties = {
		marginBottom: "4px",
	};
	return (
		<Stack spacing={0.5}>
			<Typography variant="poppinsBold" fontSize="16pt" color="#282941">
				{details}
			</Typography>

			<Typography variant="poppins" fontSize="13pt" color="#777781">
				<Image
					src={CalendarIcon}
					width={18}
					height={18}
					alt="Calendar Icon"
					style={{ marginRight: "3.75px" }}
					priority={true}
				/>
				{dateText}
			</Typography>

			<Typography variant="poppins" fontSize="13pt" color="#777781">
				<Image
					src={PlaceMarkIcon}
					width={18}
					height={18}
					alt="PlaceMark Icon"
					style={{ marginRight: "4px" }}
					priority={true}
				/>
				{place ? place : "Not Set"}
			</Typography>
		</Stack>
	);
};

export default NewEvent;
