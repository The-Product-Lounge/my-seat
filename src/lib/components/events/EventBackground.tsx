// Imports
import Card from "@mui/material/Card";
import bgImage from "@/../public/images/wave background.svg";
import Image from "next/image";
import logo from "@/../public/images/logo/logo white.svg";

/**
 * EventBackground component
 */
export const EventBackground = () => (
	<Card className="rounded-none shadow">
		<div className="relative z-10 flex h-32 justify-between overflow-hidden p-5">
			<Image src={logo} className="z-30 " alt="Logo"></Image>
			<Image
				src={bgImage}
				className="absolute left-0 top-0 z-20 -translate-x-1/2 scale-x-90 opacity-20"
				alt="Lines for Background Image"
			></Image>
			<div
				className="absolute left-0 top-0 h-full w-full"
				style={{
					backgroundColor: "#282828",
				}}
			></div>
		</div>
	</Card>
);
