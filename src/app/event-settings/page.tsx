import Image from "next/image";
import { Toolbar } from "./Toolbar.component";

import EmptyEvents from "@/../public//images/events/EmptyEvents.png";
import { EmptyEventsText } from "./EmptyEventsText.component";
import { Button } from "@/lib/components/inputs/Button.component";
import CreateEventImg from "@/../public/images/events/create event.svg";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Toolbar />
      {/* Empty events */}
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
        <Image src={EmptyEvents} width="243" alt="Empty events" />
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
    </>
  );
}
