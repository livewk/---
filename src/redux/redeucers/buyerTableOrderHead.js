import {buyerOrderDebtAction} from "../actions/breadcrumb";

const debt = true

export default function buyerTableOrderHead(preState=debt, action) {
    const {data} = action
    if (data)
        return !preState
    return preState
}