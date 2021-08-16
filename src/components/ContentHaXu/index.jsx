import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import BuyerOrderReserve from "../../Pages/BuyerOrderReserve";
import BreadcrumbHaXu from "./BreadcrumbHaXu";
import Home from "../../Pages/Home";
import Task from "../../Pages/Task";
import BuyerOrderInfo from "../../Pages/BuyerOrderInfo";
import BuyerOrder from "../../Pages/BuyerOrder";
import WarehouseOrderReserve from "../../Pages/Warehouse/WarehouseOrderReserve";
import WarehouseOrders from "../../Pages/Warehouse/WarehouseOrders";
import WarehouseOrderInfo from "../../Pages/Warehouse/WarehouseOrderInfo";
import SalesOrder from "../../Pages/Sales/SalesOrder";
import SalesOrders from "../../Pages/Sales/SalesOrders";
import SalesInfo from "../../Pages/Sales/SalesInfo";
import ClientInfo from "../../Pages/Sales/ClientInfo";
import Cars from "../../Pages/Logistics/Cars";
import LogisticsOrder from "../../Pages/Logistics/LogisticsOrder";
import OldBuyerPrice from "../../Pages/OldBuyerPrice";
import SuggestInfo from "../../Pages/Suggest/SuggestInfo";
import Complaint from "../../Pages/Suggest/Complaint";
import SalesOrderReserve from "../../Pages/Sales/SalesOrderReserve";
import Reply from "../../Pages/Reply";
import Post from "../../Pages/User/Post";
import Users from "../../Pages/User/Users";
import Salary from "../../Pages/User/Salary";
import Checking from "../../Pages/User/Checking";


export default class ContentHaXu extends Component {
    render() {
        return (
            <>
                <BreadcrumbHaXu/>
                {/* Switch可以提高路由匹配效率(单一匹配)。 */}
                <Switch>
                    {/* 注册路由 */}
                    <Route path="/home" component={Home}/>
                    <Route path="/task" component={Task}/>
                    <Route path="/buyerOrderReserve" component={BuyerOrderReserve}/>
                    <Route path="/buyerOrder" component={BuyerOrder}/>
                    <Route path="/buyerOrderInfo" component={BuyerOrderInfo}/>
                    <Route path="/OldBuyerPrice" component={OldBuyerPrice}/>
                    <Route path="/WarehouseOrderReserve" component={WarehouseOrderReserve}/>
                    <Route path="/WarehouseOrder" component={BuyerOrder}/>
                    <Route path="/WarehouseOrders" component={WarehouseOrders}/>
                    <Route path="/WarehouseOrderInfo" component={WarehouseOrderInfo}/>
                    <Route path="/SalesOrderReserve" component={SalesOrderReserve}/>
                    <Route path="/SalesOrder" component={SalesOrder}/>
                    <Route path="/SalesOrders" component={SalesOrders}/>
                    <Route path="/SalesInfo" component={SalesInfo}/>
                    <Route path="/ClientInfo" component={ClientInfo}/>
                    <Route path="/Reply" component={Reply}/>
                    <Route path="/Post" component={Post}/>
                    <Route path="/Users" component={Users}/>
                    <Route path="/Salary" component={Salary}/>
                    <Route path="/Checking" component={Checking}/>
                    <Route path="/Cars" component={Cars}/>
                    <Route path="/LogisticsOrder" component={LogisticsOrder}/>
                    <Route path="/SuggestInfo" component={SuggestInfo}/>
                    <Route path="/Complaint" component={Complaint}/>
                    <Redirect to="/home"/>
                </Switch>
            </>

        );
    }
}
