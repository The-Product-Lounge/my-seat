import Image from "next/image";
import EmptyProfileImg from "@/../public/images/events/event signin/Empty Profile Pic.png";
import PencilImg from "@/../public/images/events/event signin/Profie Pic Pencil.svg";

export const ProfilePic = () => {
	return (
		<>
			<div
				style={{
					height: "74px",
					width: "74px",
					position: "relative",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "50%",
					backgroundColor: "#fcfcfc",
					borderRadius: "50%",
					border: "1px solid #e0e0e0",
					marginBottom: "4px",
					cursor: "pointer",
				}}
			>
				<Image
					src={EmptyProfileImg}
					alt="Profile Picture"
					height={74}
					width={74}
					style={{ borderRadius: "50%", height: "100%", objectFit: "cover" }}
				/>

				<div
					style={{
						position: "absolute",
						top: "0",
						right: "0",
						boxShadow: "0 4px 8px rgba(96,97,112,.161)",
						borderRadius: "50%",
						height: "20px",
						width: "20px",
					}}
				>
					<Image
						src={PencilImg}
						alt="Edit Profile"
						height={12}
						width={12}
						style={{
							transform: "translate(40%, -20%)",
						}}
					/>
				</div>
			</div>
		</>
	);
};
