import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import feed from './feed/feed';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/feed" component={feed} />
        </Switch>
    </ BrowserRouter>
    ,document.getElementById('root')
);
registerServiceWorker();
