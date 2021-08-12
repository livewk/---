import React, {Component} from 'react';
import {Card, Statistic, Col, Row, Tabs} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

export default class InventoryHaXu extends Component {
    // 库房信息卡
    render() {
        return (
            <Card title="库存分析">
                <Row>
                    <Col span={12}>
                        <Statistic
                            title="安全库存"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                        />
                    </Col>
                    <Col span={12}>
                        <Statistic
                            title="超量库存"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: 'red' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Col>
                    <Col span={24}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="库存情况" key="1">
                                Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="临期产品" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="过期产品" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Card>

        );
    }
}
