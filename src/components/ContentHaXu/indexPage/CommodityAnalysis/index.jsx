import React, {Component} from 'react';
import { Card, Table} from 'antd';
const { Column} = Table;

export default class CommodityAnalysis extends Component {
    // 商品分析排行
    render() {
        const data = [
            {
                key: '1',
                firstName: '桂鱼↑',
                lastName: 'Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                firstName: '鲈鱼',
                lastName: 'Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                firstName: '白虾',
                lastName: 'Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ];

        return (
            <Card title="商品排行">
                <Table dataSource={data}>
                    <Column title="排行" dataIndex="key" key="key" />
                    <Column title="商品名称" dataIndex="firstName" key="firstName" />
                    <Column title="单价" dataIndex="lastName" key="lastName" />
                    <Column title="使用总量" dataIndex="age" key="age" />
                    <Column title="总金额" dataIndex="address" key="address" />
                </Table>
            </Card>

        );
    }
}
