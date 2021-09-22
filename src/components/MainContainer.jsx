import React from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';

const showRoures = (routes) => {
    let result = null;
    if(routes.length > 0) {
        result = routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
        });
        return result;
    }
    return result;
}

const Main = () => {
    return (
        <div className="main">
            <Navbar />
            <Switch>
                {showRoures(routes)}
            </Switch>
        </div>
    );
}

export default Main;
