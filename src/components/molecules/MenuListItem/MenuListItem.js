import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';

const MenuItem = styled.li`

`

const MenuTitle = styled.h4`

`

const MenuImg = styled.img`

`
const MenuCategory = styled.div`

`

const MenuSpan = styled.span`

`

const MenuPrice = styled.div`

`




const MenuListItem = ({ menuItem }) => {
    const { title, price, url, category } = menuItem;
    return (
        <MenuItem>
            <MenuTitle>{title}</MenuTitle>
            <MenuImg src={url}></MenuImg>
            <MenuCategory>Category: <MenuSpan>{category}</MenuSpan></MenuCategory>
            <MenuPrice>Price: <MenuSpan>{price}$</MenuSpan></MenuPrice>
            <Button>Add to cart!</Button>
        </MenuItem>
    );
};

export default MenuListItem;