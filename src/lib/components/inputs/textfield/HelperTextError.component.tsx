import Stack from "@mui/material/Stack";
import Image from "next/image";
import { ReactNode } from "react";

import redError from "@/../public/images/inputs/textfield/ErrorIcon.svg";

export const HelperTextError = ({ children }: { children: ReactNode }) => {
	return (
		<Stack direction="row" alignItems="center">
			<Image src={redError} alt={"Error Icon"} height={16} width={16} />
			{children}
		</Stack>
	);
};
