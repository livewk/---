import axios from 'axios'
import {getMaxScale} from "@antv/g2/lib/util/scale";

// 封装asios  接口
export const ajax = (url, data={}, type='GET')=> {
    if (type === 'GET'){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}

