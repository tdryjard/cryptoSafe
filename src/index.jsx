import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './redux/';
import * as serviceWorker from './serviceWorker';
import Config from './configure';
import Spinner from './components/spinner/Spinner';
import App from './App'
import "./assets/fonts/feather/css/feather.css";
import "./assets/fonts/fontawesome/scss/font-awesome.scss";
import "./assets/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='https://confident-fermi-8be9f4.netlify.app'>
      <Suspense fallback={Spinner}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
