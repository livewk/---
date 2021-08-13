import store from 'store'
const USER_KEY = 'user_key'

/* 用于存储登入用户数据 */
export default {
    // 保存user
    seveUser(user){
        store.set(USER_KEY, user)
    },
    // 读取user
    getUser(){
        // 有可能读取不到
        return store.get(USER_KEY) || {}
    },
    // 删除user
    removeUser(){
        return store.remove(USER_KEY)
    }
}