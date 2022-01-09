import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
        <Nav></Nav>
      <Project></Project>
      <Footer></Footer>
    </main>
  );
}

export default App;
