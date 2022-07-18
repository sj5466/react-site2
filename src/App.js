import React from "react";
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ImgText from "./components/ImgText";
import Image from "./components/Image";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import Footer from "./components/Footer";

import Contents
 from "./components/Contents";
function App() {
  return (
    <>
      <Header/>
      <Contents>
        <Slider/>
        <Image />
        <ImgText />
        <Text/>
        <Banner />
        <Card />
      </Contents>
      <Footer />
    </>
  );
}

export default App;