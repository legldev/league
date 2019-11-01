import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario';
import NotFound from './components/common/not-found/NotFound';

const Router = () => (
   <HashRouter basename='/'>
        <Switch>
            <Route exact path='/league' component={Liga} />
            <Route exact path='https://luisgarcesleon.github.io/league/' component={Liga} />
            <Route path='https://luisgarcesleon.github.io/league/liga' component={Liga} />
            <Route path='https://luisgarcesleon.github.io/league/calendario/:equipo' component={Calendario} />
            <Route path='https://luisgarcesleon.github.io/league/calendarios' component={Calendario} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
) 

export default Router;