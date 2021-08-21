/*
	该文件专门为Count组件生成action对象
*/
import {BREADCRUMB, MENU} from '../constant'

export const menuAction = data => ({type:MENU, data})
export const breadcrumbAction = data => ({type:BREADCRUMB, data})

