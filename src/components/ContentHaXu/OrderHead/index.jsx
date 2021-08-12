import React, {Component} from 'react';
import {DatePicker, Space, Input, AutoComplete, Row, Col, Button} from 'antd';
import {UserSwitchOutlined} from "@ant-design/icons";
import moment from 'moment'


export default class Index extends Component {
    state = {
        size: 'large',
    };
    render() {
        const { size } = this.state;

//验证一位数还是两位数
        const orderId = ()=>{
            return "HX00" + moment().format('YYYYMMDDHHmmss') + Math.round(Math.random()*100)
        }

        return (
            <>
                <Row>
                    <Col span={1}>单号:</Col>
                    <Col span={4}>
                        <Input
                            style={{width:"80%"}}
                            value={orderId()}
                            disabled ={false}/>
                    </Col>
                    <Col span={1}>日期:</Col>
                    <Col span={3}>{/*日期*/}
                        <Space direction="vertical">
                            <DatePicker />
                        </Space>
                    </Col>
                    <Col span={1}>订单类型</Col>
                    <Col span={3}>
                        <Input.Group compact style={{width:"70%"}}>
                            <AutoComplete
                                style={{ width: '100%' }}
                                placeholder="请输入或选择姓名"
                                options={[{ value: '酒店鱼缸' }, { value: '酒店预定' }, { value: '档口入库' }]}
                            />
                        </Input.Group>
                    </Col>
                    <Col span={1}>申请人:</Col>
                    <Col span={3}>
                        <Input.Group compact  style={{width:"70%"}}>
                        <AutoComplete
                                style={{ width: '100%' }}
                                placeholder="请输入或选择姓名"
                                options={[{ value: '吴魁' }, { value: 'text 2' }]}
                            />
                        </Input.Group>
                    </Col>
                    <Col span={1}>审核员:</Col>
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
                    <Col span={1}><label>客户名称:</label></Col>
                    <Col span={16}>
                        {/*客户*/}
                        <Input.Group compact>
                            <AutoComplete
                                style={{ width: '70%' }}
                                placeholder="请输入客户信息"
                                options={[{ value: '北京北辰集团股份有限公司国家会议中心' }, { value: 'text 2' }]}
                            />
                        </Input.Group>
                    </Col>
                    <Col span={1}/>
                    <col span={2}>
                        {/*<script async*/}
                        {/*        id="chevereto-pup-src"*/}
                        {/*        src="https://imgtu.com/sdk/pup.js"*/}
                        {/*        data-url="https://imgtu.com/upload"*/}
                        {/*        data-auto-insert="bbcode-embed-medium"></script>*/}
                    </col>
                    <Col span={1}/>
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
