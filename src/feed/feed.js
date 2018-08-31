import React, { Component } from 'react'

import Navigation from '../Navigation/Navigation'

export default class feed extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="content">
                <Navigation />
                { children }
            </div>
        )
    }
}