import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { ROUTE_INDEX, ROUTE_REGISTER, ROUTE_LOGIN } from './config'
import ArticleFeed from './pages/Feed';
import Register from './pages/User/Register';
import Login from './pages/User/Login';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path={ROUTE_INDEX} component={ArticleFeed} />
                    <Route path={ROUTE_REGISTER} component={Register} />
                    <Route path={ROUTE_LOGIN} component={Login} />
                    <Redirect to={ROUTE_INDEX} />
                </Switch>
            </div>
        )
    }
}

export default App;
