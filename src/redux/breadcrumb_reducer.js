/*
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/
import {BREADCRUMB, MENU} from "./constant";
// 初始化数据
const breadcrumb = [
        { title: '首页', key: '1', link: '/home'}
]

export default function buyerReducer(preState=breadcrumb, action) {
    const {type, data} = action
    const newData = data

    switch (type){
        case MENU :
            const oldData = preState
            if (oldData.find((item)=>item.title===newData.title))
                return preState
            // 改变key的值 取最后一个值进行改变
            newData.key = ((preState[preState.length-1].key)*1+1).toString()
            return [...oldData,newData]
        case BREADCRUMB:
            return [...newData]
        default:
            return preState
    }
}