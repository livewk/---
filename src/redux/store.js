// 引入创建store的关键对象
import {createStore} from "redux";
import buyerReducer from "./breadcrumb_reducer";

export default createStore(buyerReducer)
