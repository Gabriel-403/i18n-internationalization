import React from "react"
import Mynax from "./mynax"
import Statecomponent from "./statecomponent"
import ComponentLife from "./componentLife"
import IfDemo from "./ifdemo"
import KeyDemo from "./keydemo"
import I18n from "./components/I18n"

import axios from 'axios'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [{
                label: "中文",
                value: 'zh_cn'
            }, {
                label: "English",
                value: 'en_us'
            }],
            language: "zh_cn",

        }
    }

    onUpload = (e) => {
        const { files } = e.target;
        const file = files[0];

        const fm = new FormData();
        fm.append(file.name, file);

        const config = {
            headers: { "Content-Type": "multipart/form-data" }
        };

        axios.post('/api/file', fm, config);
    }


    render() {
        const { language, languages } = this.state;

        const var1 = ["首页", "学习"];
        const var2 = ["次页", "不学习"];
        return (<div>
            <select id="language" value={language} onChange={(e) => this.changelanguage(e)}>
                {languages.map(({ label, value }, index) => {
                    return (
                        <option label={label} value={value} key={value}>{label}</option>
                    )
                })}
            </select>
            <I18n language={language}>姓名</I18n>
            <I18n language={language}>年龄</I18n>

            <input type="file" onChange={this.onUpload} />
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