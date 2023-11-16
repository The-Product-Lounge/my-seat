import { Paper } from "@/lib/components/layout/Paper.component";
import { LoginForm } from "./LoginForm";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Image from "next/image";
import logo from "@/../public/images/logo/logo@2x.png";
import bgImage from "@/../public/images/wave background.svg";

export default function Home() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{
        background: `#fafafa url('${bgImage.src}') center`,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      {/* Center elements to the middle of the screen horizontally */}
      <Grid container justifyContent={"center"} alignItems={"center"}>
        {/* Keeping space from the screen border on the left and right side */}
        <Grid item xs={11}>
          <Paper variant="login">
            <Paper
              variant="logo"
              style={{
                position: "absolute",
                width: 68,
                height: 68,
                left: "50%",
                right: "50%",
                top: 0,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={logo}
                alt="logo"
                style={{
                  display: "block",
                  width: 26,
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  height: "auto",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Paper>
            <Stack
              style={{ paddingTop: "50px" }}
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Stack alignItems="center" justifyContent="center">
                <Typography
                  variant="poppinsBold"
                  fontSize="16px"
                  color="#1C1C28"
                >
                  Wait!
                </Typography>
                <Typography variant="poppins" fontSize="14px" color="#555770">
                  What is the secret word?
                </Typography>
              </Stack>
              <LoginForm />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
