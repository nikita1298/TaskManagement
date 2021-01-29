import React, { Component } from 'react';
import withCounter from "./withCounter";

class List extends Component {


    render() {
        const { count, incrementCount } = this.props;

        return (
            <div>
                <button onClick={incrementCount}>  Clicked {count} times</button>
            </div>
        );
    }
}

export default withCounter(List);
