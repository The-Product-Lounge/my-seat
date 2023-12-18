import poppins from "@/lib/helpers/fonts.helper";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		poppins: React.CSSProperties;
		poppinsBold: React.CSSProperties;
		poppinsSemiBold: React.CSSProperties;
	}
	interface TypographyVariantsOptions {
		poppins?: React.CSSProperties;
		poppinsBold?: React.CSSProperties;
		poppinsSemiBold?: React.CSSProperties;
	}
}

declare module "@mui/material/Paper" {
	interface PaperPropsVariantOverrides {
		logo: true;
		login: true;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		poppins: true;
		poppinsBold: true;
		poppinsSemiBold: true;
	}
}

let theme = createTheme({
	typography: {
		allVariants: {
			textTransform: "none",
		},
		fontFamily: poppins.style.fontFamily,
		poppins: {
			fontFamily: poppins.style.fontFamily,
		},
		poppinsBold: {
			fontFamily: poppins.style.fontFamily,
			fontWeight: "bold",
		},
		poppinsSemiBold: {
			fontFamily: poppins.style.fontFamily,
			fontWeight: "600",
		},
	},
	palette: {
		error: {
			main: "#FF3B3B",
		},
		primary: {
			main: "#28293D",
		},
		secondary: {
			main: "#FFFFFF",
		},
	},
	components: {
		MuiPaper: {
			variants: [
				{
					props: { variant: "logo" },
					style: {
						padding: "15px",
						borderRadius: "12px",
						backgroundColor: "#fff",
						border: "0.5px solid #E0E0E0",
						opacity: "1",
						filter: "drop-shadow(#0000000F 0px 8px 16px)",
					},
				},
				{
					props: { variant: "login" },
					style: {
						padding: "24px",
						borderRadius: "16px",
						backgroundColor: "#fff",
						border: "0.5px solid #EBEBEB",
						opacity: "1",
						filter: "drop-shadow(#0000001A 0px 0.5px 2px)",
					},
				},
			],
		},
		MuiButton: {
			defaultProps: {
				variant: "contained",
			},
			styleOverrides: {
				root: {
					fontSize: "14px",
					borderRadius: "8px",
					paddingTop: "14px",
					paddingBottom: "14px",
					"&.MuiButton-sizeMedium": {
						paddingLeft: "24px",
						paddingRight: "24px",
					},
					"&.MuiButton-sizeLarge": {
						paddingLeft: "50px",
						paddingRight: "50px",
					},
					"&.MuiButton-containedSecondary": {
						color: "#28293D",
					},
					"&.Mui-disabled": {
						color: "#9899A7",
						backgroundColor: "#E4E4EB",
						border: "1px solid #EBEBEB",
					},
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					"& .MuiFormHelperText-root.Mui-error": {
						color: "#555770",
						fontSize: "12px",
					},
					"& label.Mui-focused:not(.Mui-error)": {
						color: "#1C1C29",
					},
					"& .MuiInput-underline:after": {
						borderBottomColor: "#1C1C29",
					},
					"& .MuiOutlinedInput-root:not(.Mui-error)": {
						"& fieldset": {
							border: "1px solid #EBEBEB",
							borderRadius: "8px",
						},
						"&:hover fieldset": {
							borderColor: "#1C1C29",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#1C1C29",
						},
					},
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);
export { theme };
