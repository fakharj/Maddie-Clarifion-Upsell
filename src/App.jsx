import { Box } from "@mui/material";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Stepper from "./components/Stepper";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Box component={'div'} className="wrapperSpacing">
        <NavBar />
        <Stepper />
        <HeroSection />
      </Box>
      <Footer />
    </>
  );
}

export default App;
