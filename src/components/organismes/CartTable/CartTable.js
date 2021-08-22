import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../../actions/'



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



const CartTable = ({ items, deleteFromCart }) => {
    return (
        <>
            <CartTitle>Ваш заказ:</CartTitle>
            <CartList>
                {
                    items.map(item => {
                        const { title, price, url, id } = item;
                        return (
                            <CartItem>
                                <CartItemImg src={url} alt={title}></CartItemImg>
                                <CartItemTitle>{title}</CartItemTitle>
                                <CartItemPrice>{price}$</CartItemPrice>
                                <CartClose onClick={() => deleteFromCart(id)}>&times;</CartClose>
                            </CartItem>
                        )
                    })
                }

            </CartList>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

const mapDispathToProps = {
    deleteFromCart
};

export default connect(mapStateToProps, mapDispathToProps)(CartTable);