import {  FETCH_CUSTOMERS } from "../types"
import data from "../../data.json";

export const fetchCustomers = () => async (dispatch) => {
    const res = data.customers;

    dispatch({
      type: FETCH_CUSTOMERS,
      payload: res,
    });
  };