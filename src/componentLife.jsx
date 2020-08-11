import React from "react"


export default class ComponentLife extends React.Component{

constructor(props){
    super(props)
    this.state={
        count:10
    }
}
componentWillMount(){
console.log("componentWillMount")

}
componentDidMount(){
    console.log("componentDidMount")

}
shouldComponentUpdate(){
   return true
}
componentWillUpdate(){
    console.log("componentWillUpdate")

}
componentDidUpdate(){
    console.log("componentDidUpdate")

}
componentWillReceiveProps(){
    console.log("componentWillReceiveProps")
}
componentWillUnmount(){
    console.log("componentWillUnmount")
}


changehandle(){
    this.setState({
        count:this.state.count+=1
    })
}

render(){
    return(
        <div>
            生命周期函数{this.state.count}
            <button onClick={this.changehandle.bind(this)}></button>
        </div>
    )
}
}