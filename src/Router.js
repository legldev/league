import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario';
import NotFound from './components/common/not-found/NotFound';

const Router = () => (
    <HashRouter basename={process.env.PUBLIC_URL + '/#/'}>
        <Switch>
        <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendario/:equipo' component={Calendario} />
            <Route path='/calendarios' component={Calendario} />
            <Route component={NotFound} />
            </Switch>
    </HashRouter>
)

export default Router;