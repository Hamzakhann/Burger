import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#DDD087",
      contrastText: "#070707",
    },
    error: {
      main: "#C6112E", // custom button color (red)
    },
  },
  typography: {
    fontFamily: ["Oswald, sans-serif"].join(","),
  },
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          [theme.breakpoints.up("xl")]: {
            maxWidth: "1800px",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
