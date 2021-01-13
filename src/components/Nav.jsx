import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return(
    <div className="nav">
      <nav>
        <a href="./"><FontAwesomeIcon icon={faHome}/> Home</a>
        <a href="./"><FontAwesomeIcon icon={faBook}/> Statistics</a>
        <a href="./"><FontAwesomeIcon icon={faNewspaper}/> Reports</a>
        <a href="./"><FontAwesomeIcon icon={faChartArea}/> Charts</a>
      </nav>
    </div>
  );
}

export default Nav;
