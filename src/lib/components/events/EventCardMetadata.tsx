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
	image?: {
		url?: string;
		alt?: string;
	};
	loungers?: number;
	tables?: number;
}

const checkImageValid = (url?: string, alt?: string) => (
	<div
		style={{
			width: 400,
			height: 150,
			backgroundColor: "black",
			marginRight: "3.75px",
		}}
	>
		{url && alt && (
			<Image
				src={url}
				width={400}
				height={150}
				alt={alt}
				style={{ marginRight: "3.75px" }}
				priority={true}
			/>
		)}
	</div>
);

const checkDateValid = (startTime?: Date, endTime?: Date) => {
	if (!startTime || !endTime) return "Not Set";
	return `${dayjs(startTime).format("DD/MM/YYYY HH:mm")} - ${dayjs(
		endTime,
	).format("HH:mm")}`;
};

const checkLoungersAndTablesValid = (
	nameOfItem: string,
	numberOfItems?: number,
) =>
	numberOfItems
		? `${numberOfItems} ${nameOfItem}${numberOfItems > 1 ? "s" : ""}`
		: `No ${nameOfItem}s`;

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
				{checkImageValid(image?.url, image?.alt)}
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
