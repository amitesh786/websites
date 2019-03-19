import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import "./css/bootstrap.min.css";
import './css/index.css';

import WebApp from './components/webapp';

window.addEventListener("load", () => {
    ReactDOM.render(
        <Router>
            <WebApp />
        </Router>, document.getElementById('app'));
});

serviceWorker.unregister();
