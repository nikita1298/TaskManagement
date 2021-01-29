import React, { Component } from 'react';
import withCounter from "./withCounter";

class ListItem extends Component {

    render() {
        const { count, incrementCount } = this.props;

        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hoverd {count} time </h2>
            </div>
        );
    }
}

export default withCounter(ListItem);
