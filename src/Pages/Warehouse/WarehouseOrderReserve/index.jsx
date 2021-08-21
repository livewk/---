import React, {Component} from 'react';
import WarehouseHead from "../../../components/ContentHaXu/Warehouse/WarehouseHead";
import {Card} from "antd";

class WarehouseOrderReserve extends Component {
    // 入库申请
    render() {
        return (
            <div>
                <Card title="入库申请">
                    < WarehouseHead/>
                </Card>
            </div>
        );
    }
}
export default WarehouseOrderReserve;