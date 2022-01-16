import React, { useState } from "react";
import Nav from "./Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function Header() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div id="Header container">
      <nav className="bg-alice-blue">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-start space-x-4 flex items-center">
              <h1 className="text-xl uppercase font-bold tracking-tighter leading-none">
                Nadine
                <div className="inline-flex mx-1 w-1 h-1 " />
                Paez Andrade
              </h1>
              <h1 className="text-md tracking-wider leading-none">
                Fullstack Web Developer
              </h1>
            </div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>

        </nav>
        <div className=" bg-middle-blue-green px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="justify-end">

            <div>{renderPage(currentPage)}</div>
          </div>
        </div>
      
    </div>

    //   <div className=" bg-ming border-b border-gray-800 shadow-xl">
    //     <div className="ml-1 flex flex-col items-start justify-center">
    //       <h1 className="text-xl uppercase font-bold tracking-tighter leading-none">
    //         Nadine
    //         <div className="inline-flex mx-1 w-1 h-1 "/>
    //         Paez Andrade
    //       </h1>
    //       <h1 className="text-md tracking-wider leading-none">
    //         Fullstack Web Developer
    //       </h1>
    //     </div>
    //     <div className="items-end">
    //     </div>

    // </div>
  );
}

export default Header;
