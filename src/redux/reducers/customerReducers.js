import { FETCH_CUSTOMERS, DELETE_CUSTOMER, UPDATE_CUSTOMER, CREATE_CUSTOMER } from "../types";

export const customerReducer = (state={}, action) => {

    switch(action.type) {
        case FETCH_CUSTOMERS:
            return {customers: action.payload};
            case CREATE_CUSTOMER:
            return {customers: [...state.customers, action.payload]};
        case DELETE_CUSTOMER:
            return {customers: state.customers.filter(x => x.id !== action.payload)};
        case UPDATE_CUSTOMER:
            return {customers: [...state.customers.filter(x => x.id !== action.payload.id), action.payload]};
        default:
            return state;
    }
}