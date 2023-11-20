import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

function AuthRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/home" exact component={Home} />
            </Switch>
        </Router>
    )
}

export default AuthRoutes;
