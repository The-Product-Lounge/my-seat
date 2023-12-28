// EventStats.tsx
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
);

export default EventStats;
