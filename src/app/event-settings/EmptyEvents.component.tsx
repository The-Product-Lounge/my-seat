import Image from "next/image";
import Link from "next/link";

import { Button } from "@/lib/components/inputs/Button.component";
import EmptyEventsImg from "@/../public//images/events/EmptyEvents.png";
import CreateEventImg from "@/../public/images/events/create event.svg";
import { EmptyEventsText } from "./EmptyEventsText.component";

export const EmptyEvents = () => {
	return (
		<div className="mt-16 flex flex-col items-center justify-center space-y-8">
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
