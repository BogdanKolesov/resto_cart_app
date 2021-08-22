import React from 'react';
import styled from 'styled-components';


const CartTitle = styled.h3`

`

const CartList = styled.div`

`

const CartItem = styled.div`

`

const CartItemImg = styled.img`

`

const CartItemTitle = styled.h4`

`

const CartItemPrice = styled.span`

`

const CartClose = styled.div`

`

const CartTable = () => {
    return (
        <>
            <CartTitle>Ваш заказ:</CartTitle>
            <CartList>
                <CartItem>
                    <CartItemImg src="#" alt="Cesar salad"></CartItemImg>
                    <CartItemTitle>Cesar salad</CartItemTitle>
                    <CartItemPrice>12$</CartItemPrice>
                    <CartClose>&times;</CartClose>
                </CartItem>
            </CartList>
        </>
    );
};

export default CartTable;