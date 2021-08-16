import React, {Component} from 'react';
// react路由
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom'
import MyNavLink from "../MyNavLink";
import {menuAction} from "../../redux/breadcrumb_action";
import store from "../../redux/store";
import menuList from "../../configs/menuConfig";


const { SubMenu } = Menu;

class MenuHaiXu extends Component {
    state = {
        collapsed: false,
    };

    funcX = (link, value)=>{
        // 传递面包屑的方法
        const breadcrumb = { title: value, key: '1', link}
        // redux
        store.dispatch(menuAction(breadcrumb))
    }
    //
    getMenuNodes = (menuList, isFirst="")=>{
        const path = this.props.location.pathname
        return menuList.map(item=>{
            if (!item.children){
                 return <Menu.Item key={item.key} icon={item.icon}>
                            <MyNavLink to={item.key} onClick={()=>this.funcX(item.key, item.title)}>{item.title}</MyNavLink>
                        </Menu.Item>
            }else {
                // 查找一个与当前请求路径匹配的子Item
                const cItem =item.children.find(cItem => path.indexOf(cItem.key) === 0)
                // 如果存在, 说明当前item的子列表需要打开
                if (cItem) {
                    this.openFirst = isFirst
                    this.openKey = item.key
                }
                return   <SubMenu key={item.key} icon={item.icon} title={item.title}>
                            {this.getMenuNodes(item.children, item.key)}
                         </SubMenu>
            }
        })
    }
    /*
        在第一次render()之前执行一次
        为第一个render()准备数据(必须同步的)
     */
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render(){
        // 得到当前请求的路由路径
        let path = this.props.location.pathname

        // 得到需要打开菜单项的key
        const open_key = this.openKey
        const open_first = this.openFirst
        return (
            <div style={{ width: 246}}>
                <Menu
                    // selectedKeys动态更新
                    selectedKeys={[path]}
                    // 父节点打开，可以是两个
                    defaultOpenKeys={[open_key, open_first]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.menuNodes
                    }
                </Menu>

            </div>
        );
    }
}

export default withRouter(MenuHaiXu)