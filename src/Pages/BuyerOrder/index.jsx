import React, {Component} from 'react';
import {Card} from "antd";
import OrderHead from "../../components/ContentHaXu/Buyer/OrderHead";
import BuyerTable from "../../components/ContentHaXu/Buyer/BuyerTable";
import {BUYER_ORDER} from "../../configs/buyerTableConstant";

class BuyerOrder extends Component {
    render() {
        return (
            <>
                <Card title="采购单">
                    <OrderHead />
                    <BuyerTable buyerType={BUYER_ORDER} />
                </Card>
            </>
        );
    }
}

export default BuyerOrder;