import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    background-color: gray;
    margin-bottom: 10px;
        a{
            color: #fff;
            text-decoration: none;
            &:hover{
                color: red;
            }
        }
`

const HeaderCart = styled.img`

`

const AppHeader = ({ total }) => {
    return (
        <Header>
            <Link to={'/'} className="header__link">Menu</Link>
            <Link to="/cart" className="header__link">
                {/* <HeaderCart src='#' alt="Cart"></HeaderCart> */}
                Total: {total} $
            </Link>
        </Header>
    )
};

export default AppHeader;