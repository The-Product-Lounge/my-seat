import { LoginForm } from "./LoginForm.component";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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
			className={`absolute inset-0 bg-[#fafafa] bg-cover bg-center bg-no-repeat`}
			style={{ backgroundImage: `url('${bgImage.src}')` }}
		>
			{/* Center elements to the middle of the screen horizontally */}
			<Grid container justifyContent={"center"} alignItems={"center"}>
				{/* Keeping space from the screen border on the left and right side */}
				<Grid item xs={11}>
					<Paper variant="login">
						<Paper
							variant="logo"
							className="absolute left-1/2 right-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
						>
							<Image
								src={logo}
								alt="logo"
								className="relative left-1/2 top-1/2 block h-auto w-6 -translate-x-1/2 -translate-y-1/2 transform"
							/>
						</Paper>
						<Stack
							className="pt-12"
							alignItems="center"
							justifyContent="center"
							spacing={3}
						>
							<Stack alignItems="center" justifyContent="center">
								<Typography fontWeight="bold" fontSize="16px" color="#1C1C28">
									Wait!
								</Typography>
								<Typography fontSize="14px" color="#555770">
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
