import React from "react"

export default class I18ntitle extends React.Component {

    constructor(props) {
        super(props)
        this.state = [{id:1, cha: "你好！react",eng: "hello！react" },{ id:2, cha: "你不好！react",eng: "Fuck！react" }]


    }


    render() {
        {
            var lang = this.props.language == "中文" ?"cha":"eng"
        }
        return (
            this.state.map(item=>item.id==1?<h1 key={this.state.id}  >{lang=="cha"?item.cha:item.eng}</h1>:null)
        )
    }


}