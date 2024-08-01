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
    <MedigoLandingPage></MedigoLandingPage>
  )
}
export default App;
