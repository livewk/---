// 引入创建store的关键对象
import {applyMiddleware, createStore} from "redux";
import reducer from './redeucers'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
