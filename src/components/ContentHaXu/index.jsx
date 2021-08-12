import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import BuyerOrderReserve from "../../Pages/Admin/BuyerOrderReserve";
import BreadcrumbHaXu from "./BreadcrumbHaXu";
import IndexPage from "../../Pages/Admin/IndexPage";


export default class ContentHaXu extends Component {
    render() {
        return (
            <>
                <BreadcrumbHaXu/>
                {/* Switch可以提高路由匹配效率(单一匹配)。 */}
                <Switch>
                    {/* 注册路由 */}
                    <Route path="/admin/indexPage" component={IndexPage}/>
                    <Route path="/admin/buyerOrderReserve" component={BuyerOrderReserve}/>
                    <Redirect to="/admin/indexPage"/>
                </Switch>
            </>

        );
    }
}
