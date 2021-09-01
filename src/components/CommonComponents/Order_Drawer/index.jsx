import React, {Component} from 'react';
import {Table} from 'antd';
import capitalAmount from "../../../utils/numToChinese";

class Order_Drawer extends Component {
    // 抽屉table
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
            ],
            count: 1,
        };

        this.columns = [
            {
                title: '编号',
                dataIndex: 'id',
                width: '5%',
            },
            {
                title: '产品名称',
                dataIndex: 'productName',
                width: '12%',
                dropDownData : [{ value: '龙虾' }, { value: '鲍鱼' }],
            },
            {
                title: '产品规格',
                dataIndex: 'productSize',
                width: '12%',
            },
            {
                title: '产地',
                dataIndex: 'productPlace',
                width: '12%',
            },
            {
                title: '单位',
                dataIndex: 'productUnit',
                width: '8%',
            },
            {
                title: '数量',
                dataIndex: 'productCount',
                width: '6%',

            },
            {
                title: '价格',
                dataIndex: 'productPrice',
                width: '6%',
            },
            {
                title: '小计',
                dataIndex: 'subTotal',
                width: '5%',
                // 从新组合columns
                render: (_, record) => {                    // 乘机
                    const sub = record.productCount * 1 * record.productPrice * 1
                    return sub;
                },
            },
            {
                title: '备注',
                dataIndex: 'remark',
                width: '20%',
            },
        ];
    }

    render() {
        // 抽屉table
        const {dataSource} = this.state
        return (
            <>
                <Table
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}  // 行的数据
                    columns={this.columns}  // 行的样式
                    size="small"
                    pagination={{pageSize:9}}   // 分页
                    summary={pageData => {
                        // 汇总
                        let totalPrice = 0;
                        let totalAll = 0;

                        pageData.forEach(({ productCount, productPrice }) => {
                            totalPrice += productCount*productPrice*1;
                        });

                        dataSource.map(({productCount, productPrice})=>{
                            totalAll += productCount*productPrice*1
                        });

                        return (    // 总结行
                            <Table.Summary fixed>
                                <Table.Summary.Row>
                                    <Table.Summary.Cell colSpan={2}>小计：</Table.Summary.Cell>
                                    <Table.Summary.Cell colSpan={5}>{capitalAmount(totalPrice)}</Table.Summary.Cell>
                                    <Table.Summary.Cell index={6}>{totalPrice}</Table.Summary.Cell>
                                    <Table.Summary.Cell index={0}/>

                                </Table.Summary.Row>
                                <Table.Summary.Row>
                                    <Table.Summary.Cell colSpan={2}>总计:</Table.Summary.Cell>
                                    <Table.Summary.Cell colSpan={4}>{capitalAmount(totalAll)}</Table.Summary.Cell>
                                    <Table.Summary.Cell colSpan={4}>{totalAll}</Table.Summary.Cell>
                                </Table.Summary.Row>
                            </Table.Summary>
                        )}}
                />
            </>
        );
    }
}

export default Order_Drawer;