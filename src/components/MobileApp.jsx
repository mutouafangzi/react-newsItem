import React, {Component} from 'react'
import MobileHeader from './MobileHeader'
import NewsFooter from './news_footer'



export default class MobileApp extends Component {

    render() {
        return (<div>
            <MobileHeader></MobileHeader>
            {this.props.children}
            <NewsFooter></NewsFooter>
        </div>)
    }
}