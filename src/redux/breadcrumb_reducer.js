/*
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {BREADCRUMB} from "./constant";
// 初始化数据
const breadcrumb = [
        { title: '首页', key: '1', link: '/admin/IndexPage'}
]

export default function buyerReducer(preState=breadcrumb, action) {
    const {type, data} = action
    const newData = data
    switch (type){
        case BREADCRUMB :
            // 改变key的值
            newData.key = (breadcrumb.length+1).toString()
            return [...breadcrumb,newData]
        default:
            return preState
    }
}