import React, {Component} from 'react';
import {DatePicker, Space, Input, AutoComplete, Row, Col, Button} from 'antd';
import {UserSwitchOutlined} from "@ant-design/icons";
import moment from 'moment'
import './index.css'
import {BUYER_ORDER_RESERVE} from "../../../../configs/buyerTableConstant";





export default class Index extends Component {
    state = {
        size: 'large',
    };

    render() {
        const { size } = this.state;

        const reshow = ()=>{
            //    头部的显示状态
            const {buyerType} = this.props
            switch (buyerType) {
                case  BUYER_ORDER_RESERVE:
                    return <><Col span={4}/></>
                default:
                    return   (
                        <>
                            <Col className="orderColStyle" span={1}><label>付款状态:</label></Col>
                            <Col span={3}>
                                <Input.Group compact style={{width:"70%"}}>
                                    <AutoComplete
                                        style={{ width: '100%' }}
                                        placeholder="请输入或选择姓名"
                                        options={[{ value: '已付款' }, { value: '未付款' }]}
                                    />
                                </Input.Group>
                            </Col>
                        </>)
            }
        }


//验证一位数还是两位数
        const orderId = ()=>{
            return "HX00" + moment().format('YYYYMMDDHHmmss') + Math.round(Math.random()*100)
        }

        return (
            <>
                <Row>
                    <Col className="orderColStyle" span={1}><label>单号:</label></Col>
                    <Col span={4}>
                        <Input
                            style={{width:"80%"}}
                            value={orderId()}
                            disabled ={false}/>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>日期:</label></Col>
                    <Col span={3}>{/*日期*/}
                        <Space direction="vertical">
                            <DatePicker />
                        </Space>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>订单类型:</label></Col>
                    <Col span={3}>
                        <Input.Group compact style={{width:"70%"}}>
                            <AutoComplete
                                style={{ width: '100%' }}
                                placeholder="请输入或选择姓名"
                                options={[{ value: '酒店鱼缸' }, { value: '酒店预定' }, { value: '档口入库' }]}
                            />
                        </Input.Group>
                    </Col>
                    <Col className="orderColStyle" span={1}><label>申请人:</label></Col>
                    <Col span={3}>
                        <Input.Group compact  style={{width:"70%"}}>
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
                <Row>
                    <Col className="orderColStyle" span={1}><label>客户名称:</label></Col>
                    <Col span={10}>
                        {/*客户*/}
                        <Input.Group compact >
                            <AutoComplete
                                style={{ width: '90%' }}
                                placeholder="请输入客户信息"
                                options={[{ value: '北京北辰集团股份有限公司国家会议中心' }, { value: 'text 2' }]}
                            />
                        </Input.Group>
                    </Col>

                    <Col span={1}></Col>
                    {reshow()}
                    <Col>
                        <Button type="primary" shape="round" icon={<UserSwitchOutlined />} size={size}>
                            提交申请
                        </Button>
                    </Col>
                </Row>
        </>
        );
    }
}
