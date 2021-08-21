import React, {Component} from 'react';
import WarehouseHead from "../../../components/ContentHaXu/Warehouse/WarehouseHead";
import WarehouseTable from "../../../components/ContentHaXu/Warehouse/WarehouseTable";
import {Card} from "antd";

class WarehouseOrder extends Component {
    // 任务页
    render() {
        return (
            <>
                <Card title="采购单">
                    <WarehouseHead />
                    <WarehouseTable />
                </Card>
            </>
        );
    }
}

export default WarehouseOrder;