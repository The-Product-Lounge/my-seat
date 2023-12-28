/*import React from "react";
import dayjs from "dayjs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import PlaceMarkIcon from "@/../public/images/events/mark icon.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import { EventCardMetadata } from "@/lib/components/events/EventCardMetadata";

interface EventCardProps {
	details: string;
	startTime?: Date; // Change the type from string to Date
	endTime?: Date;
	place?: string;
	image?: {
		url: string;
		alt?: string;
	};
	loungers?: number;
	tables?: number;
}

export const EventCard: React.FC<EventCardProps> = ({ image, ...props }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={image?.url}
					alt={image?.alt}
				/>
				<CardContent>
					<EventCardMetadata {...props} />
				</CardContent>
			</CardActionArea>
		</Card>
	);
};*/
