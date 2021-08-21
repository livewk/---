import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//引入App
import App from './App'
// 引入路由
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

// 初始化登入状态
const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
)
