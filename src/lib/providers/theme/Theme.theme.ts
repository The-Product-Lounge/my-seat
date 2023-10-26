import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    error: {
      main: "#FF3B3B",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
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
