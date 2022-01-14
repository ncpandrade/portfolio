import React, { useState } from 'react';
import Nav from './Nav';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';


function Header() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState('About');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
      switch (currentPage) {
        case 'Resume':
          return <Resume />;
        case 'Portfolio':
          return <Portfolio />;
        case 'Contact':
          return <Contact />;
        default:
          return <About />;
      }
    };

  return (
    <div className=" bg-ming border-b border-gray-800 shadow-xl">
      <div className="ml-1 flex flex-col items-start justify-center">
        <h1 className="text-xl uppercase font-bold tracking-tighter leading-none">
          Nadine
          <div className="inline-flex mx-1 w-1 h-1 bg-red-500"/>
          Paez Andrade
        </h1>
        <h1 className="text-md tracking-wider leading-none">
          Fullstack Web Developer
        </h1>
      </div>
      <div className="items-end">
      </div>
      
      {/* nested Nav container */}
      <div>
      {/* Pass the state value and the setter as props to Nav */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  
  </div>
  );
}

export default Header;