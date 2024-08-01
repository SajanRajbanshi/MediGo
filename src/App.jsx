import { createTheme, ThemeProvider } from "@mui/material";
import MedigoLandingPage from "./pages/MedigoLandingPage";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "K2D", 
        "Roboto", 
        "Segoe UI", 
        "sans-serif", 
        "Arial"
      ].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <MedigoLandingPage />
    </ThemeProvider>
  );
}
export default App;
