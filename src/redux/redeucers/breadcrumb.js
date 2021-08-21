/*
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {BREADCRUMB, MENU} from "../constant";
// 初始化数据
const breadcrumb = [
        { title: '首页', key: '1', link: '/home'}
]

export default function buyerReducer(preState=breadcrumb, action) {
    const {type, data} = action

    switch (type){
        case MENU :
            // 去重复的操作
            if (preState.find((item)=>item.title===data.title))
                return preState
            // 改变key的值 取最后一个值进行改变
            data.key = ((preState[preState.length-1].key)*1+1).toString()
            return [...preState,data]
        case BREADCRUMB:
            return [...data]
        default:
            return preState
    }
}