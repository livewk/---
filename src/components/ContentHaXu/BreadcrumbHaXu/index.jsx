import React, {Component} from 'react';
import {Tabs} from 'antd';
import {withRouter } from "react-router-dom";
import store from "../../../redux/store";

const { TabPane } = Tabs;


class BreadcrumbHaXu extends Component {
    constructor(props) {
        super(props);
        // 新选项卡ID
        this.newTabIndex = 0;
        // 监听redux 数据，发生改变就执行
        const panes = store.getState() //[{ title: '首页', key: '1', link: '/IndexPage'}];
        this.state = {
            // 选中的tab编号
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = activeKey => {
        // 保存tab的编号
        this.setState({ activeKey });
        const checkedTab = this.state.panes.filter(pane => pane.key === activeKey)
        // 跳转到相应的页面
        this.props.history.push(checkedTab[0].link)
    };

    onEdit = (targetKey, action) => {
        // action 是方法的名字
        this[action](targetKey);
    };

    remove = targetKey => {
        // targetKey 删除的tab编号
        // activeKey 选中的tab编号
        let { activeKey} = this.state;
        let lastIndex;
        // 循环遍历
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        // 如果是第一个数据不删除
        if (lastIndex === -1){return}
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        // 数据非空且 选中的tab与targetKey 值相等
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                // 将选中的tab 向前移动
                activeKey = panes[lastIndex].key;
            }else {
                // 选中的tab等于1
                activeKey = panes[0].key
            }
        }

        this.setState({ panes, activeKey });
        // 跳转到前一个tab的页面
        this.props.history.push(panes[lastIndex].link)
    };

    componentDidMount() {
        store.subscribe(()=>{
            this.setState({panes:store.getState()})
        })
    }

    render() {
        return (
            <div>
                <Tabs
                    hideAdd
                    activeKey={this.state.activeKey}
                    onChange={this.onChange}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {/* 遍历tab */}
                    {this.state.panes.map(pane => (
                        <TabPane tab={pane.title} key={pane.key}/>
                    ))}
                </Tabs>

            </div>
        );
    }
}
// withRouter 将组件装饰成路由
export default withRouter(BreadcrumbHaXu)