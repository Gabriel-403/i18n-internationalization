import React from "react"
import zh_cn from './config/zh-cn.language';
import en_us from './config/en-us.language';

const i12n = {
    zh_cn,
    en_us
}

export default class I18n extends React.Component {

    //constructor(props) {
        //super(props)

    //}


    render() {
        const { language, children } = this.props;
        const recentLanguageConfig = i12n[language];

        return <span>{recentLanguageConfig[children] || children}</span>
    }


}