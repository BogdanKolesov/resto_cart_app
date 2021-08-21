import React, { Component } from 'react';
import MenuListItem from '../MenuListItem';
import { connect } from 'react-redux';
import WithRestoService from '../../organismes/HighOrderComponents';

class MenuList extends Component {
    componentDidMount() {
        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => HTMLFormControlsCollection.log(res))
    }

    render() {
        const { menuItems } = this.props;
        return (
            <ul>
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem} />
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu
    }
}

export default WithRestoService()
    (connect(mapStateToProps)
        (MenuList));