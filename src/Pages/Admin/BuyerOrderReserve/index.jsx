import React, {Component} from 'react';
import {Card} from "antd";
import OrderHead from "../../../components/ContentHaXu/OrderHead"
import BuyerTable from "../../../components/ContentHaXu/BuyerTable";

export default class Index extends Component {
    render() {
        return (
            <Card title="采购申请单">
                <OrderHead />
                <BuyerTable />
            </Card>
        );
    }
}

