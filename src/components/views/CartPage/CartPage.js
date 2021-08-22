import React from 'react';
import styled from 'styled-components';
import CartTable from '../../organismes/CartTable';

const Cart = styled.div`

`


const CartPage = () => {
    return (
        <Cart>
            <CartTable />
        </Cart>
    )
}

export default CartPage;