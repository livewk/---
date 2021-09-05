import React, {Component} from 'react';
import { Table, Tag, Space } from 'antd';
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

const columns = [
    {
        title: '日期',
        dataIndex: 'carDate',
        key: 'carDate',
    },
    {
        title: '车辆',
        dataIndex: 'carID',
        key: 'carID',
    },
    {
        title: '清理消毒',
        dataIndex: 'isDisinfect',
        key: 'isDisinfect',
    },
    {
        title: '加油费',
        dataIndex: 'AddOil',
        key: 'AddOil',
    },
    {
        title: '维修费',
        dataIndex: 'maintain',
        key: 'maintain',
    },
    {
        title: '公里数',
        dataIndex: 'KMNub',
        key: 'KMNub',
    },
];

const data = [
    {
        key: '1',
        carDate: "2020-5-8",
        carID: '京N 5UD00',
        isDisinfect: <CheckOutlined /> ||<CloseOutlined />,
        AddOil: 344,
        maintain: 351,
        KMNub:15484,
    },
    {
        key: '2',
        carDate: "2020-5-8",
        carID: '京N 5UD00',
        isDisinfect: <CheckOutlined />,
        AddOil: 684,
        maintain: 351,
        KMNub:15484,
    },
    {
        key: '3',
        carDate: "2020-5-8",
        carID: '京N 5UD00',
        isDisinfect: <CheckOutlined />,
        AddOil: 245,
        maintain: 351,
        KMNub:15484,
    },
];

export default class CarsTable extends Component {
    render() {
        return (
                <Table columns={columns} dataSource={data} />
        );
    }
}