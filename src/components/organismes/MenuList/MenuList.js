import React, { Component } from 'react';
import MenuListItem from '../../molecules/MenuListItem';
import { connect } from 'react-redux';
import { WithRestoService } from '../HighOrderComponents';
import { menuLoaded, menuRequested } from '../../../actions/';
import { Loader } from '../../atoms';


class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res));
    }

    render() {
        const { menuItems, loading } = this.props;

        if (loading) {
            return <Loader />
        }

        return (
            <ul>
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem
                            key={menuItem.id}
                            menuItem={menuItem} />
                    })
                }
            </ul>
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
    menuRequested
};

export default WithRestoService()
    (connect(mapStateToProps, mapDispatchToProps)
        (MenuList));