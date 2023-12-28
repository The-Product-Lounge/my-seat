import React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import LoungerIcon from "@/../public/images/events/lounger icon.svg";
import TableIcon from "@/../public/images/events/table icon.svg";

interface EventStatsProps {
	loungersText: string;
	tablesText: string;
}

const EventStats: React.FC<EventStatsProps> = ({
	loungersText,
	tablesText,
}) => (
	<Stack spacing={1.5}>
		<Stack direction="row" spacing={1.75}>
			{[
				{ icon: LoungerIcon, text: loungersText },
				{ icon: TableIcon, text: tablesText },
			].map(({ icon, text }, index) => (
				<div key={index}>
					<Image
						src={icon}
						width={18}
						height={18}
						alt={`${text} Icon`}
						style={{ marginRight: "2px" }}
						priority={true}
					/>
					{text}
				</div>
			))}
		</Stack>
	</Stack>
);

export default EventStats;
