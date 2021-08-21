import React, {Component} from 'react';
import "./App.css"
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";


export default class App extends Component {
    render() {
        return (
            <Switch>
                {/* 注册路由 */}
                <Route path="/login" component={Login}/>
                <Route path="/" component={Admin}/>
                <Redirect to="/login"/>
            </Switch>
        );
    }
}
