import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/lib/providers/theme/Theme.theme";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import "@/app/globals.css";

const customViewports = {
  iphone14promax: {
    name: "iPhone 14 Pro Max",
    styles: {
      height: "852px",
      width: "393px",
    },
    type: "mobile",
  },
  ...INITIAL_VIEWPORTS,
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    expanded: true, // Adds the description and default columns
    viewport: {
      viewports: customViewports,
      defaultViewport: "iphone14promax",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
