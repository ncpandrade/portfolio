import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Project></Project>
      <Footer></Footer>
    </main>
  );
}

export default App;
