import React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/Home';
import ImagePage from './pages/Image';
import * as ROUTES from './constants/routes';
import MapPage from './pages/Map';

export default function Routes() {
    return (
        <Switch>
            <Route path={ROUTES.ROOT} exact={true} component={HomePage}/>
            <Route path={ROUTES.IMAGE} exact={true} component={ImagePage}/>
            <Route path={ROUTES.MAP} exact={true} component={MapPage}/>
            <Route render={() => <p>Page not found</p> }/>
        </Switch>
    );
}