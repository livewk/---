import React, {Component} from 'react';
import { Layout } from 'antd';
import MenuHaiXu from "../../components/MenuHaiXu";
import ContentHaXu from "../../components/ContentHaXu";
import HeadHaXu from "../../components/HeadHaXu";
import './index.css'


const { Header, Sider, Content } = Layout;

export default class Admin extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="layoutBody">
                {/* Logo 栏 */}
                <Header className="headerHeight"><HeadHaXu/></Header>
                <Layout>
                    {/* 左边菜单栏 */}
                    <Sider className="siderMenu" width={{width: 256}}><MenuHaiXu/></Sider>
                    <Layout>
                        {/* 内容页 */}
                        <Content><ContentHaXu/></Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
