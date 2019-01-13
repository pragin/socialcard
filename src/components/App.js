import React, { Component } from "react";
import SocialCard from "./SocialCard";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

import "../css/App.css";

library.add(faIgloo);

class App extends Component {
  render() {
    return <SocialCard />;
  }
}

export default App;
