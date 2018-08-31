import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import App from './main/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render (    
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root')
);
registerServiceWorker();
