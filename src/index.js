import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import StatusBPJS from './statusbpjs';
import BPJSValidation from './bpjsvalidation';
import BPJSHelper1 from './helpbpjs1';
import BPJSHelper2 from './helpbpjs2';
import BPJSHelper3 from './helpbpjs3';
import Navbar from './navbar';


ReactDOM.render(
  <BrowserRouter>
    <div className="App">
        <Route exact path="/bpjsvalidation" component={BPJSValidation} />
        <Route exact path="/statusbpjs" component={StatusBPJS} />
        <Route exact path="/helpbpjs/first" component={BPJSHelper1} />
        <Route exact path="/helpbpjs/next" component={BPJSHelper2} />
        <Route exact path="/helpbpjs/last" component={BPJSHelper3} />
        <Route exact path="/" component={Navbar} />
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
