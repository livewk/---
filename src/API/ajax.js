import axios from 'axios'
import {message} from "antd";
import qs from 'qs';

// 封装asios  接口
export const ajax = (url, data={}, type='GET')=> {
    return new Promise((resolve, reject)=>{
        let promise
        if (type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            // 后台接受的键值的形式，所以用qs转化
            promise = axios.post(url,qs.stringify(data))
        }
        // 成功后读取response
        promise.then(response=>{
            resolve(response.data)
        // 失败出现错误提示
        }).catch(error =>{
            message.error("请求出错了：" + error.message)
        })
    })
}

