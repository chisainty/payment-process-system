import { BrowserRouter, Route, Routes as Routers } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "../components/styles/utils/Global";
import Index from "../pages/Dashboard";

const theme = {
  colors: {
    primaryColor: "#2a41cb",
    blueColor: "#0087D4",
    whiteColor: "#ffffff",
    primaryDark: "#0d1440",
    whiteShade: "#f2f8ff",
    gradientPrimary: "linear-gradient(90deg, #2a41cb 31.27%, #6177f2 99.25%)",
    primary70: "#91a0f2",
  },
  mobile: "768px",
  tabs: "992px",
};

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routers>
          <Route exact path="/" element={<Index />} />
        </Routers>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
