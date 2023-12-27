import ThemeProvider from "./theme/ThemeProvider.provider";

export default function Provider(props: { children: React.ReactNode }) {
	const { children } = props;
	return <ThemeProvider>{children}</ThemeProvider>;
}
