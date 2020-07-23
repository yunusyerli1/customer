import {  FETCH_CUSTOMERS, DELETE_CUSTOMER, CREATE_CUSTOMER, UPDATE_CUSTOMER } from "../types"
// import data from "../../../public/data.json";
import axios from 'axios';


export const fetchCustomers = () => async (dispatch) => {
    const res = await axios.get('/data.json')
  console.log(res.data.customers);
    dispatch({
      type: FETCH_CUSTOMERS,
      payload: res.data.customers,
    });
  };
  export const createCustomer = (customer) => async (dispatch) => {
    
    dispatch({type: CREATE_CUSTOMER, payload : customer});
    console.log(customer);
    
};
  export const deleteCustomer = (customer) => (dispatch) => {
    dispatch({type: DELETE_CUSTOMER, payload: customer.id});
  };
  export const updateCustomer = (customer) => async (dispatch) => {
      dispatch({type: UPDATE_CUSTOMER, payload : customer});
      console.log(customer);
  };


  /* const response = await axios.put(data.customers.map(c => c.id ===customer.id), customer);
    const res = data.customers;
  console.log(res);
    dispatch({type: "UPDATE_CUSTOMER", payload : response.data});
     //Redirect
     this.props.history.push('/');*/

     /*export const editStream = (id, formValues) => async dispatch => {
      const response = await streams.patch(`/streams/${id}`, formValues);
      dispatch({type:EDIT_STREAM, payload: response.data});
      history.push('/');
  };*/