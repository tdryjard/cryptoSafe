import React from "react";
import Demo from './containers/templateConfig/mainLayout';
import Routes from './containers/routes/mainRoutes'
import { library } from "@fortawesome/fontawesome-svg-core";

import ReactDOM from 'react-dom';

import fontAwesomeIcon from "./utility/icons/fontawesome";
library.add(fontAwesomeIcon);

window.$ = window.jQuery = require('jquery')

const App = () => <Demo />;

export default App;
