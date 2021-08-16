import React, {Component} from 'react';
import { Menu, Dropdown, Avatar, Col, Row, Button  } from 'antd';
import { DownOutlined,
} from '@ant-design/icons';
import "./index.css"

export default class HeadHaXu extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="user_0">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        个人信息
                    </a>
                </Menu.Item>
                <Menu.Item key="user_1">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                        业绩查看
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="user_3">
                    退出
                </Menu.Item>
            </Menu>
        );

        return (
            <Row className="rowHeader">
                <Col span={8}><h1 className="headerLogo">海旭恒业管理系统-1.0</h1></Col>
                <Col span={8}></Col>
                <Col span={7}>
                    <Dropdown overlay={menu} >

                        <Button  type="link"  className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            吴魁  <DownOutlined />
                        </Button>
                    </Dropdown>
                </Col>
                <Col span={1}></Col>
            </Row>
        );
    }
}
