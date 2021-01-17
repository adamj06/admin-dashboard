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
          <h1>{page}</h1>
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
          <h1>{page}</h1>
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
          <h1>{page}</h1>
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
          <h1>{page}</h1>
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
          <h1>Home</h1>
          <Home />
        </div>
      </div>
    );
  }


}

export default App;
