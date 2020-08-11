import React from "react"
import Mynax from "./mynax"
import Statecomponent from "./statecomponent"


class App extends React.Component

{
    render(){
        const var1=["首页","学习"];
        const var2=["次页","荒芜"];
        return  (<div><h1>hello react</h1>
        <Mynax nav={var1} title="学习指导"/>
        <Mynax nav={var2} title="学习误导"/>
        <Statecomponent />
        </div>)


    }
}
export default App