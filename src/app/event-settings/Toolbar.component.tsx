import MuiToolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Grid from "@mui/material/Grid";

import LogoImg from "@/../public/images/Favicon.svg";
import CreateEventImg from "@/../public/images/events/create event.svg";
import Link from "next/link";

export const Toolbar = () => {
	return (
		<MuiToolbar
			role="toolbar"
			className="border-0 border-b border-solid border-gray-300"
		>
			<Grid container>
				<Grid item xs={2} className="flex flex-col items-center">
					<div className="h-9 w-9 rounded-md border border-gray-300">
						<Image src={LogoImg} alt="Logo" />
					</div>
				</Grid>
				<Grid item xs={8}></Grid>
				<Grid item xs={2} className="flex justify-center">
					<Link
						className="flex items-center"
						href="/event-settings/create-event"
					>
						<Image
							src={CreateEventImg}
							alt="Create Event"
							width={28}
							height={28}
						/>
					</Link>
				</Grid>
			</Grid>
		</MuiToolbar>
	);
};
