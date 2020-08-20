import React from 'react';
import Home from '../pages/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;