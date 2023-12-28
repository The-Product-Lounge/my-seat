import React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import CalendarIcon from "@/../public/images/events/calendar icon.svg";
import PlaceMarkIcon from "@/../public/images/events/mark icon.svg";
import LoungerIcon from "@/../public/images/events/lounger icon.svg";
import TableIcon from "@/../public/images/events/table icon.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";

interface NewEventProps {
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

export const EventCardMetadata: React.FC<NewEventProps> = ({
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
						<Stack spacing={2}>
							<div></div>
							<Divider variant="middle" />
						</Stack>
						<Stack spacing={1.5}>
							<div>
								<Stack direction="row" spacing={1.75}>
									<div>
										<Image
											src={LoungerIcon}
											width={18}
											height={18}
											alt="Lounger Icon"
											style={{ marginRight: "2px" }}
											priority={true}
										/>
										{loungersText}
									</div>
									<div>
										<Image
											src={TableIcon}
											width={18}
											height={18}
											alt="Table Icon"
											style={{ marginRight: "2px" }}
											priority={true}
										/>
										{tablesText}
									</div>
								</Stack>
							</div>
						</Stack>
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
