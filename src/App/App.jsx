import React from "react";
import Demo from '../containers/templateConfig/mainLayout';
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../components/login/Login'
import Landing from '../view/HomePage'

import fontAwesomeIcon from "../utility/icons/fontawesome";
library.add(fontAwesomeIcon);

window.$ = window.jQuery = require('jquery')

function App() {
    return (
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }

export default App;
