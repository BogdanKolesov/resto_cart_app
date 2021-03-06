import React, { Component } from 'react';

class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }
    render() {
        if (this.state.error) {
            return <div />
        }
        return this.props.children;
    }
}

export default ErrorBoundry;