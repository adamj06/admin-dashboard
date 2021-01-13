import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

function Nav(props) {
  return(
    <div className="nav">
      <nav>
        <a href="./" onClick={(e) => {e.preventDefault(); props.handleNavClick("Home")}}><FontAwesomeIcon icon={faHome}/> Home</a>
        <a href="./" onClick={(e) => {e.preventDefault(); props.handleNavClick("Stats")}}><FontAwesomeIcon icon={faBook}/> Statistics</a>
        <a href="./" onClick={(e) => {e.preventDefault(); props.handleNavClick("Reports")}}><FontAwesomeIcon icon={faNewspaper}/> Reports</a>
        <a href="./" onClick={(e) => {e.preventDefault(); props.handleNavClick("Charts")}}><FontAwesomeIcon icon={faChartArea}/> Charts</a>
      </nav>
    </div>
  );
}

export default Nav;
