import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`

`

const HeaderCart = styled.img`

`

const AppHeader = ({ total }) => {
    return (
        <Header>
            <Link to={'/'} className="header__link">Menu</Link>
            <Link to="/cart" className="header__link">
                <HeaderCart src='#' alt="cart"></HeaderCart>
                Total: {total} $
            </Link>
        </Header>
    )
};

export default AppHeader;