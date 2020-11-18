//类组件
import React, { Component } from 'react';

class Secondcomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>这是类组件</h2>
                <p>{this.props.message}</p>
            </div>
        );
    }
}


rp

export default Secondcomponent;