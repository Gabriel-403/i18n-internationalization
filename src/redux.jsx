import React, { Component } from 'react';
import store from "./store"

class Redux extends Component {
    constructor(props) {
        super(props);

        console.log(store.getState());

        this.state=store.getState();
    }
    render() {
        return (<h1>{this.state.InputVuale}</h1>);
    }
}

export default Redux;