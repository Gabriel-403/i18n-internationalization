import React from "react"

export default class statecomponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            count: 10
        }
    }

    decrement() {

        this.setState({ count: this.state.count -= 1 })
    }
    increment() {
        this.setState({ count: this.state.count += 1 },()=>{console.log(this.state.count)})//异步
    }

    setasync(state){return new Promise((resolve)  =>{this.setState(state,resolve)});}//同步


    clickhandle =()=> {
        console.log(this)

    }



    render() {

        return <div>
            <h3>组件state</h3>
            <p>{this.state.count}</p>
            <button onClick={this.increment.bind(this)}>增加</button>
            <button onClick={this.decrement.bind(this)}>减少</button>
            <button onClick={this.clickhandle}>关于this</button>
        </div>

    }


}