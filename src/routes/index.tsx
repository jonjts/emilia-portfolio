import React from 'react';

import Home from '../pages/Home'
import Contato from '../pages/Contato'
import QuemSou from "../pages/QuemSou";
import Indicacoes from "../pages/Indicacoes";

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
                <Route path="/quem-sou" exact>
                    <QuemSou />
                </Route>
                <Route path="/contato" exact>
                    <Contato />
                </Route>
                <Route path="/indicacoes" exact>
                    <Indicacoes />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;