import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import AllSchoolsPage from './pages/AllSchoolsPage';
import SingleSchoolPage from './pages/SingleSchoolPage';

function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <AllSchoolsPage/>
                </Route>
                <Route path='/school/:id'>
                    <SingleSchoolPage/>
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