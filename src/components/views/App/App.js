import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage';
import CartPage from '../CartPage';
import AppHeader from '../../organismes/AppHeader';
import { Wrapper } from '../../atoms';

const App = () => {
    return (
        <Wrapper>
            <AppHeader />
            <Switch>
                <Route
                    path="/"
                    component={MainPage}
                    exact
                />
                <Route
                    path="/cart"
                    component={CartPage}
                    exact
                />
                <Route
                    exact
                    component={MainPage}
                />
            </Switch>
        </Wrapper>
    );
};

export default App;