import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App
import App from './App'
// 引入路由
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,
    document.getElementById('root')
)

store.subscribe(()=>{
    // 只要调用这个就能重新加载render,这样redux数据才能显示
    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('root')
    )
})