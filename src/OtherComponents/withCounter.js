import React, { Component } from 'react';

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
        state = { count: 0 }


        incrementCount = () => {
            this.setState({ count: this.state.count + 1 })
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                />
            );
        }
    }
    return WithCounter
}

export default withCounter;