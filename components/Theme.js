import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-manrope), sans-serif",
  },
  palette: {
    primary: {
      main: "#6956E5",
    },
    warning: {
      main: "#FABE7A",
    },
    error: {
      main: "#F6866A",
    },
    info: {
      main: "#59E6F6",
    },
  },
});

export default theme;
