"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { theme } from "./Theme.theme";

export default function ThemeProvider(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<AppRouterCacheProvider options={{ enableCssLayer: true }}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</AppRouterCacheProvider>
	);
}
