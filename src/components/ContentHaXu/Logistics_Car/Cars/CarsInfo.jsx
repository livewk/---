import React, {Component} from 'react';
import {Card, Col, Row, Statistic} from "antd";
import {ArrowUpOutlined} from "@ant-design/icons";
import Cars from "./index";
import CarsTable from "./CarsTable";

export default class CarsInfo extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col span={4} >
                        <Card size="small">
                            <Statistic
                                title="公里数"
                                value={118181231}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                            />
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card size="small">
                            <Statistic
                                title="加油费"
                                value={351}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="元"
                            />
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card size="small">
                            <Statistic
                                title="过路费"
                                value={1518}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                suffix="元"
                            />
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card size="small">
                            <Statistic
                                title="停车费"
                                value={358}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                precision={2}
                                suffix="元"
                            />
                        </Card>
                    </Col>
                    <Col span={4} offset={1}>
                        <Card size="small">
                            <Statistic
                                title="维修费"
                                value={358}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<ArrowUpOutlined />}
                                precision={2}
                                suffix="元"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row style={{padding:"35px 0"}}>
                    <Col span={22} offset={1}>
                        <CarsTable />
                    </Col>
                </Row>
            </>
        );
    }
}