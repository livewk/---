import React, {Component} from 'react';
// react路由
import { Menu } from 'antd';
import {withRouter} from 'react-router-dom'
import PubSub from 'pubsub-js'
import MyNavLink from "../MyNavLink";
import menuList from "../../configs/menuConfig";
import memoryUtils from "../../utils/memoryUtils";



const { SubMenu } = Menu;

class MenuHaiXu extends Component {
    state = {
        collapsed: false,
        breadcrumb : memoryUtils.breadcrumb
    };

    funcX = (link, value)=>{
        // 传递面包屑的方法
        const breadcrumb_menu = { title: value, key: '1', link}
        // 数据合并的方法
        this.buyerReducer( breadcrumb_menu)
    }

    buyerReducer = (breadcrumb)=> {
        // 向内存中存入数据
        const preState = memoryUtils.breadcrumb
        // 去重复的操作
        if (preState.find((item)=>item.title===breadcrumb.title))
            return
        // 改变key的值 取最后一个值进行改变
        breadcrumb.key = ((preState[preState.length-1].key)*1+1).toString()
        // 存入内容
        memoryUtils.breadcrumb = [...preState,breadcrumb]
        // 发送广播
        PubSub.publish('reBreadcrumb')
    }

    //
    getMenuNodes = (menuList, isFirst="")=>{
        // 递归循环菜单
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

// // 容器组件
// export default connect(
//     state=>({}),
//     {menuAction})
//     // 包含UI组件
//(withRouter(MenuHaiXu))
export default withRouter(MenuHaiXu)