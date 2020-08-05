import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HelpPage from '../components/Help';
import NotFoundPage from '../components/404NotFound';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;