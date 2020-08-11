import React from "react"

export default class statecomponent extends React.Component {
    
    constructor(props)
    {
        super(props)
        this.state={

            count:10
        }
    }
    
    decrement(){

        this.setState({count:this.state.count-=1})
    }
    increment(){
        this.setState({count:this.state.count+=1})
    }
    
    
    
    render() {

        return <div>
            <h3>组件state</h3>
    <p>{this.state.count}</p>
    <button onClick={this.increment.bind(this)}></button>
    <button onClick={this.decrement.bind(this)}></button>
        </div>

    }


}