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
      sx={{
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "6px",
              border: "0.5px solid #EBEBEB",
              width: "38px",
              height: "36px",
            }}
          >
            <Image src={LogoImg} alt="Logo" />
          </div>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            style={{
              display: "flex",
              alignItems: "center",
            }}
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
