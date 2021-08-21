import {buyerOrderDebtAction} from "../actions/breadcrumb_action";

const debt = true

export default function buyerOrderDebt(preState=debt, action) {
    const {data} = action
    if (data)
        return !preState
    return preState
}