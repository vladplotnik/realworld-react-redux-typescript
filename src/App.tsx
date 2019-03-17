import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { ROUTE_INDEX } from './config'
import ArticleFeed from './pages/Feed';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path={ROUTE_INDEX} component={ArticleFeed} />
                    <Redirect to={ROUTE_INDEX} />
                </Switch>
            </div>
        )
    }
}

export default App;
