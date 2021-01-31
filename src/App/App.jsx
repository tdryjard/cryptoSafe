import React from "react";
import Demo from '../containers/templateConfig/mainLayout';
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../components/login/Login'
import HomePage from '../view/HomePage'

import fontAwesomeIcon from "../utility/icons/fontawesome";
library.add(fontAwesomeIcon);


function App() {
    return (
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }

export default App;
