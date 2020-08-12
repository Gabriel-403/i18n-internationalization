import React from "react"
import Mynax from "./mynax"
import Statecomponent from "./statecomponent"
import ComponentLife from "./componentLife"
import IfDemo from "./ifdemo"
import KeyDemo from "./keydemo"
import I18ntitle from "./i18ntitle"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ["中文", "English"],
            language: "中文",
            
    }
}


    render() {
      
        const var1 = ["首页", "学习"];
        const var2 = ["次页", "荒芜"];
        return (<div>
            <select id="language" value={this.state.language} onChange={(e) => this.changelanguage(e)}>
                {this.state.languages.map((ele, index) => {
                    return (
                        <option key={index}>{ele}</option>
                    )
                })}
            </select> 
            <I18ntitle  language={this.state.language} />
            <Mynax nav={var1} title="学习指导" />
            <Mynax nav={var2} title="学习误导" />
            <Statecomponent />
            <ComponentLife />
            <IfDemo />
            <KeyDemo />
        </div>)


    }
    changelanguage(e) {
        this.setState({

            language: e.target.value
        })
    }
}
export default App