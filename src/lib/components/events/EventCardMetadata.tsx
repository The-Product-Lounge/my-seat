import React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import EventDetails from "./EventDetails";
import EventStats from "./EventStats";

interface EventCardMetadataProps {
	details: string;
	startTime?: Date;
	endTime?: Date;
	place?: string;
	image: {
		url: string;
		alt: string;
	};
	loungers?: number;
	tables?: number;
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

function checkLoungersAndTablesValid(
	nameOfItem: string,
	numberOfItems?: number,
) {
	let loungersOrTablesText = `No ${nameOfItem}s`;
	if (numberOfItems) {
		if (numberOfItems > 1) {
			loungersOrTablesText = `${numberOfItems} ${nameOfItem}s`;
		}
		if (numberOfItems == 1) {
			loungersOrTablesText = `${numberOfItems} ${nameOfItem}`;
		}
	}
	return loungersOrTablesText;
}

export const EventCardMetadata: React.FC<EventCardMetadataProps> = ({
	details,
	startTime,
	endTime,
	place,
	image,
	loungers,
	tables,
}) => {
	const dateText = checkDateValid(startTime, endTime);
	const loungersText = checkLoungersAndTablesValid("lounger", loungers);
	const tablesText = checkLoungersAndTablesValid("table", tables);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<Image
					src={image?.url}
					width={400}
					height={150}
					alt={image?.alt}
					style={{ marginRight: "3.75px" }}
					priority={true}
				/>
				<CardContent>
					<Stack spacing={2}>
						<Typography variant="poppinsBold" fontSize="16pt" color="#282941">
							{details}
						</Typography>
					</Stack>

					<Typography variant="poppins" fontSize="13pt" color="#777781">
						<EventDetails dateText={dateText} place={place || "Not Set"} />
						<Stack spacing={2}>
							<div></div>
							<Divider variant="middle" />
						</Stack>
						<EventStats loungersText={loungersText} tablesText={tablesText} />
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
