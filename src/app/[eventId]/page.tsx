import { EventBackground } from "@/lib/components/events/EventBackground";
import { EventCardDetailsComponent } from "@/lib/components/events/EventCardDetails";
import Typography from "@mui/material/Typography";

export default function Page({ params }: { params: { eventId: string } }) {
	return (
		<>
			<div className="relative">
				<EventBackground />
				<div className="absolute left-1/2 top-16 z-40 w-11/12 -translate-x-1/2 ">
					<EventCardDetailsComponent title="fddf" />
				</div>
			</div>
			<div className="mt-16">
				<Typography fontWeight="bold" fontSize="16px" color="#1C1C28">
					Wait!
				</Typography>
			</div>
			{params.eventId}
		</>
	);
}
