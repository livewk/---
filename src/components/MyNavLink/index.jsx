import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            // 借助路由库配置自己的MyNavLink
            <NavLink className="list-group-item" {...this.props}/>
        );
    }
}
