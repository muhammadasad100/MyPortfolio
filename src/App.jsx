import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
//import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import { GlobalStyle } from "./Components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
//import { ThemeProvider } from "styled-components";
//import { AppProvider } from "./Components/context";
//import ScrollButton from "./Components/Scrollbtn";
//import Error from "./Components/Error";
//import { Education } from "./Components/Education";
//import { Skills } from "./Components/Skills";
//import { Experience } from "./Components/Experience";
import { Provider } from "../context/contextdata";

const App = () => {
  // const theme = {
  //   header: {
  //     bg: "#007bff",
  //     TextColor: "#ffffff",
  //     LogoColor: "#ffffff",
  //     BorderColor: "#eeeeee",
  //   },

  //   media: {
  //     mobile: "768px",
  //     tablet: "998px",
  //   },
  // };
  return (
    <>
      {/* for show on mobile npm run dev -- --host */}

      <Provider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="" element={<Error />} /> */}
        </Routes>

        {/* <Footer /> */}
      </Provider>
    </>
  );
};

export default App;
