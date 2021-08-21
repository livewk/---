import React, {Component} from 'react';
import {AutoComplete, Col, DatePicker, Input, Row, Space} from "antd";
import moment from "moment";

class WarehouseHead extends Component {
    render() {
        const orderId = ()=>{
            // 生成订单号
            return "HX-kf0" + moment().format('YYYYMMDDHHmmss') + Math.round(Math.random()*100)
        }

        return (
            <>
                <Row>
                    <Col className="orderColStyle" span={1}><label>单号:</label></Col>
                    <Col span={3}>
                        <Input
                            style={{width:"90%"}}
                            value={orderId()}/>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>采购单号:</label></Col>
                    <Col span={3}>
                        <Input
                            style={{width:"90%"}}
                            value={orderId()}/>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>入库日期:</label></Col>
                    <Col span={3}>{/*日期*/}
                        <Space direction="vertical" style={{width:"100%"}}>
                            <DatePicker />
                        </Space>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>库房选择:</label></Col>
                    <Col span={3}>
                        <Input.Group compact style={{width:"70%"}}>
                            <AutoComplete
                                style={{ width: '100%' }}
                                placeholder="请输入或选择姓名"
                                options={[{ value: '杂物库' }, { value: '冷冻库' }, { value: '常温库' }]}
                            />
                        </Input.Group>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>经手人:</label></Col>
                    <Col span={3}>
                        <Input.Group compact style={{width:"70%"}}>
                            <AutoComplete
                                style={{ width: '100%' }}
                                placeholder="请输入或选择姓名"
                                options={[{ value: '吴魁' }, { value: 'text 2' }]}
                            />
                        </Input.Group>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>审核员:</label></Col>
                    <Col span={3}>
                        <Input.Group compact style={{width:"70%"}}>
                            <AutoComplete
                                style={{ width: '100%' }}
                                placeholder="请输入或选择姓名"
                                options={[{ value: '吴魁' }, { value: 'text 2' }]}
                            />
                        </Input.Group>
                    </Col>
                </Row>
                <br/>
            </>
        );
    }
}

export default WarehouseHead;