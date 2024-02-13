import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-themes",
		"@storybook/addon-storysource",
		"@storybook/addon-designs",
		"@storybook/addon-a11y",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				"next-auth/react": require.resolve("../__mocks__/next-auth.ts"),
				"@": path.resolve(__dirname, "../src/"),
			};
		}
		return config;
	},
	staticDirs: [
		{
			from: "../public",
			to: "public",
		},
	],
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			// Speeds up Storybook build time
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			// Makes union prop types like variant and size appear as select controls
			shouldExtractLiteralValuesFromEnum: true,
			// Makes string and boolean types that can be undefined appear as inputs and switches
			shouldRemoveUndefinedFromOptional: true,
			// Filter out third-party props from node_modules except @mui packages
			propFilter: (prop) =>
				prop.parent
					? !/node_modules\/(?!.*@mui.*)/.test(prop.parent.fileName)
					: true,
		},
	},
};
export default config;
