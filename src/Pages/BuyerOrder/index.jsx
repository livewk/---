import React, {Component} from 'react';
import {Card} from "antd";
import OrderHead from "../../components/ContentHaXu/Buyer/OrderHead";
import BuyerTable from "../../components/ContentHaXu/Buyer/BuyerTable";

class BuyerOrder extends Component {
    render() {
        return (
            <>
                <Card title="采购申请单">
                    <OrderHead />
                    <BuyerTable />

                </Card>
            </>
        );
    }
}

export default BuyerOrder;