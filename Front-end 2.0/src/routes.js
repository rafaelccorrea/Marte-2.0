import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import user from './componentes/user'
import logado from './componentes/logado'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={user} />
                <Route path="/logado" exact component={logado} />
            </Switch>
        </BrowserRouter>
    )
}