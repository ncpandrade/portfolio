import React, { useState } from 'react';
import "./styles/tailwind.css";
import Header from "./components/Header";
import Nav from './components/Nav'
import Project from "./components/Project";
import Footer from "./components/Footer";


function App() {

  const [categories] = useState([
    {
      name: 'About',
      description: 'Info about myself',
    },
    { name: 'Contact', description: 'Contact me' },
    { name: 'Portfolio', description: 'My Portfolio' },
    { name: 'Resume', description: 'Download my resumee' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      </Header>
    
    </div>
  );
}

export default App;
