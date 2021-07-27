import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    AllSchools
                </Route>
                <Route path='/school/:id'>
                    OneSchool
                </Route>
                <Route path='/category/:id'>
                    Category
                </Route>
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;