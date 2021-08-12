import React, {Component} from 'react';
import { Col, Row, Card,Progress } from 'antd';
import { PieChart } from 'bizcharts';


export default class SalesAnalysis extends Component {
    // 销售分析卡
    render() {
        // 数据源
        const data = [
            {
                type: '分类一',
                value: 27,
            },
            {
                type: '分类二',
                value: 25,
            },
            {
                type: '分类三',
                value: 18,
            },
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '其它',
                value: 5,
            },
        ];
        return (
            <Card title="销售情况">
                <Row>
                    <Col span={3}>年度目标</Col>
                    <Col span={21}><Progress percent={50} status="active" strokeColor="red" /></Col>
                </Row>
                <PieChart
                    data={data}
                    radius={0.8}
                    angleField='value'
                    colorField='type'
                    label={{
                        visible: true,
                        type: 'outer',
                        offset: 20,
                    }}
                />
            </Card>
        );
    }
}
