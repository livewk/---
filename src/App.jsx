import React, {Component} from 'react';
import "./App.css"
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";


export default class App extends Component {
    render() {
        return (
            <Switch>
                {/* 注册路由 */}
                <Route path="/admin" component={Admin}/>
                <Route path="/login" component={Login}/>
                <Redirect to="/login"/>
            </Switch>
        );
    }
}
