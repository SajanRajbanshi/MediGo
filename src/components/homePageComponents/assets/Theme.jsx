import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'K2D', sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
  },
  shadows: Array(25).fill('none').map((_, index) => `0px ${index}px ${index * 2}px rgba(0,0,0,0.14)`),
  shape: {
    borderRadius: 12,
  },
  spacing: (val) => `${val}px`,
});

export default theme;
