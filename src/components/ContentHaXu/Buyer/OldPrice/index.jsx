import React, {Component} from 'react';
import { Table } from 'antd';
import PriceChar from "./PriceChart";

const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
];

const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];


class OldPrice extends Component {
    render() {
        return (
            // 可展开的表格，显示往期价格
            <>
                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => <p style={{margin: 0}}><PriceChar/> </p>
                    }}
                    dataSource={data}
                />,
            </>
        );
    }
}

export default OldPrice;