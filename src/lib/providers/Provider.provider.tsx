import ThemeRegistry from "./theme/MuiThemeRegistry.provider";

export default function Provider(props: { children: React.ReactNode }) {
	const { children } = props;
	return <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>;
}
