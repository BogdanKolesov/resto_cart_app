import React, { Component } from 'react';
import styled from 'styled-components';
import MenuListItem from '../../molecules/MenuListItem';
import { connect } from 'react-redux';
import { WithRestoService } from '../HighOrderComponents';
import { menuLoaded, menuRequested, addedToCart } from '../../../actions/';
import { Loader } from '../../atoms';

const MenuUnorderedList = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`


class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res));

    }

    render() {
        const { menuItems, loading, addedToCart } = this.props;

        if (loading) {
            return <Loader />
        }

        return (
            <MenuUnorderedList>
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem
                            key={menuItem.id}
                            menuItem={menuItem}
                            onAddToCart={() => addedToCart(menuItem.id)}
                        />
                    })
                }
            </MenuUnorderedList>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    addedToCart
};

const View = ({ items }) => {
    return (
        <ul>
            {items}
        </ul>
    )
}

export default WithRestoService()
    (connect(mapStateToProps, mapDispatchToProps)
        (MenuList));