import React from "react";
import HeroSlider from "./components/HeroSlider";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSlider />

      <AnimatedBackground />
      <Categories />
      <Products />

      <Footer />
    </div>
  );
};

export default App;
