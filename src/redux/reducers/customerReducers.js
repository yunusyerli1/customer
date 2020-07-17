import { FETCH_CUSTOMERS } from "../types";

export const customerReducer = (state={}, action) => {

    switch(action.type) {
        case FETCH_CUSTOMERS:
            return {customers: action.payload};
        default:
            return state;
    }
}