import React from 'react';
import MainPage from '../MainPage';
import CartPage from '../CartPage';
import AppHeader from '../../organismes/AppHeader';
import WithRestoService from '../../organismes/HighOrderComponents'

const App = ({ RestoService }) => {
    return (
        <Wrapper>
            <AppHeader />
            <MainPage />
            <CartPage />
        </Wrapper>
    );
};

export default WithRestoService()(App);