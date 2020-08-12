import React from "react"
export default class IfDemo extends React.Component {
    constructor() {
        super();
        this.State = {
            islogin: false

        }


    }
    clickHandle=()=>{
        this.setState({
            islogin:this.State.islogin?this.State.islogin=false:this.State.islogin=true
        })


    }
    render() {
        let showView = this.State.islogin ? <div>登录状态</div> : <div>未登录</div>
        return (<div>
            <div>条件渲染：{showView}</div>
            <button onClick={this.clickHandle}>登录</button></div>

)



    }


}