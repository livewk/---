import React, {Component} from 'react';
import { Table } from 'antd';

class DrawerTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // 数据源
            dataSource: [
                {
                    key:'0',
                    id: '1',
                    productName: '南美白虾',
                    productSize: '10-12---3.8斤',
                    productPlace: '越南',
                    productUnit: 'kg',
                    productCount: '1',
                    productPrice: '120',
                    remark: '.',
                },
                {
                    key:'0',
                    id: '合计',
                    productName: '',
                    productSize: '',
                    productPlace: '',
                    productUnit: 'kg',
                    productCount: '1',
                    productPrice: '120',
                    remark: '.',
                },

            ],
            count: 1,
        };

        this.columns = [
            {
                title: '编号',
                dataIndex: 'id',
                width: '5%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return text;
                    }else {
                        return ++index;
                    }
                }
            },
            {
                title: '产品名称',
                dataIndex: 'productName',
                width: '12%',
                dropDownData : [{ value: '龙虾' }, { value: '鲍鱼' }],
                editable: true,
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '产品规格',
                dataIndex: 'productSize',
                width: '12%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '产地',
                dataIndex: 'productPlace',
                width: '12%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '单位',
                dataIndex: 'productUnit',
                width: '8%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '数量',
                dataIndex: 'productCount',
                width: '6%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }
            },
            {
                title: '价格',
                dataIndex: 'productPrice',
                width: '6%',
                render:(text, record, index)=>{
                    if (record.id === "合计"){
                        return "";
                    }else {
                        return text || '--';
                    }
                }

            },
            {
                title: '小计',
                dataIndex: 'subTotal',
                width: '5%',
                // 从新组合columns
                render: (_, record) => {
                    const {dataSource} = this.state

                    if (record.id === "合计"){
                        let subAll = 0
                        dataSource.map((item)=>{
                            if (item.id === "合计"){
                                return
                            }
                            subAll += (item.productPrice * item.productCount*1)
                        })
                        return subAll;
                    }else {
                        // 乘法
                        let sub
                        dataSource.map((item) => {
                            if (item.key === record.key)
                                sub = item.productCount * 1 * item.productPrice * 1
                        })
                        return sub;
                    }
                },
            },
            {
                title: '备注',
                dataIndex: 'remark',
                width: '20%',
            },
        ];
    }

    subNumber = ()=>{
        // 求和
        const {dataSource} = this.state
        let count = 0
        dataSource.map((data)=>{
            count = (data.productPrice*data.productCount)+count
        })

        return count
    }

    render() {
        const {dataSource} = this.state
        return (
            <>
                <Table
                    columns={ this.columns}
                    dataSource={dataSource}
                    size="middle"
                />
            </>
        );
    }
}

export default DrawerTable;