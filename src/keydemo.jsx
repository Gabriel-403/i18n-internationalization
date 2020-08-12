import React from "react"

export default class KeyDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            userinfo: [{ name: "2", age: "3", sex: "4" }, { name: "2", age: "3", sex: "4" }]

        }


    }
    render() {
        return (<div>
            <div>
                <h1>{this.state.userinfo.name}</h1>
            </div>
            <ul>
                {this.state.userinfo.map((element, index) => {
                     return(<li key={index }>
                         <span>{element.age}</span>
                         </li> )})
                }

            </ul>
        </div>
        )

    }

}