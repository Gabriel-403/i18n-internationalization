import React, { Component } from 'react';
import store from "./store"

class Redux extends Component {
    constructor(props) {
        super(props);

        console.log(store.getState());

    }
    render() {
        return (<h1>5555555555</h1>);
    }
}

export default Redux;