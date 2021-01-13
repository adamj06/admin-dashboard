import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Stats from "./Stats";
import Reports from "./Reports";
import Charts from "./Charts"

function App() {
  const [page, setPage] = useState("Home");

  function handleNavClick(navClicked) {
    setPage(navClicked);
  }

  if(page === "Home"){
    return(
      <div className="dashboard-container">
        <div className="nav-container">
          <Nav handleNavClick={handleNavClick}/>
        </div>
        <div className="content-container">
          <Home />
        </div>
      </div>
    );
  } else if(page === "Stats") {
    return(
      <div className="dashboard-container">
        <div className="nav-container">
          <Nav handleNavClick={handleNavClick}/>
        </div>
        <div className="content-container">
          <Stats />
        </div>
      </div>
    );
  } else if(page === "Reports") {
    return(
      <div className="dashboard-container">
        <div className="nav-container">
          <Nav handleNavClick={handleNavClick}/>
        </div>
        <div className="content-container">
          <Reports />
        </div>
      </div>
    );
  } else if (page === "Charts") {
    return(
      <div className="dashboard-container">
        <div className="nav-container">
          <Nav handleNavClick={handleNavClick}/>
        </div>
        <div className="content-container">
          <Charts />
        </div>
      </div>
    );
  } else {
    return(
      <div className="dashboard-container">
        <div className="nav-container">
          <Nav handleNavClick={handleNavClick}/>
        </div>
        <div className="content-container">
          <Home />
        </div>
      </div>
    );
  }


}

export default App;
