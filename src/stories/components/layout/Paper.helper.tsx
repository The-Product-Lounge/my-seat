import MuiPaper, { PaperProps as MuiPaperProps } from "@mui/material/Paper";

interface PaperProps extends MuiPaperProps {
	/**
	 * The variant to use.
	 * @default 'elevation'
	 */
	variant: "login" | "logo" | "elevation" | "outlined";
}

export const Paper = (props: PaperProps) => <MuiPaper {...props} />;
