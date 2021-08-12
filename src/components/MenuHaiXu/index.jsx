import React, {Component} from 'react';
// react路由
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    DesktopOutlined,
    CarOutlined ,
    LineChartOutlined,
    ShoppingCartOutlined,
    ShopOutlined,
    HomeOutlined,
    FileDoneOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import MyNavLink from "../MyNavLink";
import {breadcrumbAction} from "../../redux/breadcrumb_action";
import store from "../../redux/store";


const { SubMenu } = Menu;

export default class MenuHaiXu extends Component {
    state = {
        collapsed: false,
    };

    funcX = (link, value)=>{
        // 传递面包屑的方法
        const breadcrumb = { title: value, key: '1', link}
        store.dispatch(breadcrumbAction(breadcrumb))
    }

    render() {
        return (
            <div style={{ width: 256}}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="hx_1" icon={<HomeOutlined />}>
                        <MyNavLink to="/admin/IndexPage">首页</MyNavLink>
                    </Menu.Item>
                    <Menu.Item key="hx_" icon={<DesktopOutlined />}>
                        工作任务
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<FileDoneOutlined />} title="业务管理">
                        <SubMenu key="sub1_1" icon={<ShoppingCartOutlined />} title="采购管理">
                            <Menu.Item key="sub1_1-1">
                                <MyNavLink to="/admin/buyerOrderReserve" onClick={event=>this.funcX("/admin/buyerOrderReserve", "采购申请")}>采购申请</MyNavLink>
                            </Menu.Item>
                            <Menu.Item key="sub1_1-2">采购单</Menu.Item>
                            <Menu.Item key="sub1_1_3">查询明细</Menu.Item>
                            <Menu.Item key="sub1_1_4">往期商品价格</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1_2" icon={<ShopOutlined />} title="库房管理">
                            <Menu.Item key="sub1_2_1">入库申请</Menu.Item>
                            <Menu.Item key="sub1_2_2">入库单</Menu.Item>
                            <Menu.Item key="sub1_2_3">库存查询</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1_3" icon={<LineChartOutlined />} title="销售管理">
                            <Menu.Item key="sub1_3_1">客户管理</Menu.Item>
                            <Menu.Item key="sub1_3_2">销售单</Menu.Item>
                            <Menu.Item key="sub1_3_3">业绩管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1_4" icon={<CarOutlined />} title="物流管理">
                            <Menu.Item key="sub1_4_1">车辆管理</Menu.Item>
                            <Menu.Item key="sub1_4_2">物流费用单</Menu.Item>
                        </SubMenu>
                    </SubMenu>

                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="审核批复">
                        <Menu.Item key="sub2_1">采购审核批复</Menu.Item>
                        <Menu.Item key="sub2_2">库存审核批复</Menu.Item>
                        <Menu.Item key="sub2_3">销售审核批复</Menu.Item>
                        <Menu.Item key="sub2_4">物流审核批复</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub3" icon={<AppstoreOutlined />} title="统计报表">
                        <Menu.Item key="3_1">财务统计</Menu.Item>
                        <Menu.Item key="3_2">人员统计</Menu.Item>
                        <Menu.Item key="3_3">物流统计</Menu.Item>
                        <Menu.Item key="3_4">库房统计</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub4" icon={<AppstoreOutlined />} title="人员管理">
                        <Menu.Item key="4_1">通讯录</Menu.Item>
                        <Menu.Item key="4_2">考勤报表</Menu.Item>
                        <Menu.Item key="4_3">工资管理</Menu.Item>
                        <Menu.Item key="4_4">岗位管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<AppstoreOutlined />} title="建议投诉">
                        <Menu.Item key="5_1">建议</Menu.Item>
                        <Menu.Item key="5_2">投诉</Menu.Item>
                    </SubMenu>
                </Menu>

            </div>


    );
    }
}
