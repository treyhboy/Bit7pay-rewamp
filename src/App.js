import React, { Component } from 'react';

import Home from "./Components/Home/Home";

import {createBrowserHistory} from 'history';
import {Router,Route} from 'react-router-dom';
import "./style.css";


class App extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <Router history={createBrowserHistory()} >
                <Route path="/" component={Home}/>
            </Router>
        );
    }
}

export default App;
