import './ajax'
import {ajax} from "./ajax";

// 登入的验证 ajax
export const reqLogin = (username,password)=> ajax('/login', {username,password}, 'POST')
// 添加用户 ajax   user是个对象类型
export const reqAddUser = (user)=> ajax('/login', user, 'POST')