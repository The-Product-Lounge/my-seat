import Image from "next/image";
import Link from "next/link";

import { Button } from "@/lib/components/inputs/Button.component";
import EmptyEventsImg from "@/../public//images/events/EmptyEvents.png";
import CreateEventImg from "@/../public/images/events/create event.svg";
import { EmptyEventsText } from "./EmptyEventsText.component";

export const EmptyEvents = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "32px",
				marginTop: "64px",
			}}
		>
			<Image src={EmptyEventsImg} width="243" alt="Empty events" />
			<EmptyEventsText />
			<Link href="/event-settings/create-event">
				<Button
					color="secondary"
					startIcon={<Image src={CreateEventImg} alt="Create Event" />}
				>
					Create Event
				</Button>
			</Link>
		</div>
	);
};
