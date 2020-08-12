import React from "react"

export default class Mynax extends React.Component {

    


    render() {
        console.log(this.props.nav)
        return (<div>
            <div>
                
                <h1>{this.props.title}</h1>
            </div>
            <ul>
                {
                this.props.nav.map((element, index) => { return <li key={index}>{element}</li> })
                }

            </ul>
        </div>
        )

    }


}
