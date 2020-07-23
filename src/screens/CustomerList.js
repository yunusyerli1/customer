import React, { Component } from 'react';
import List from '../components/List';
import SideBar from '../components/SideBar';
import { fetchCustomers } from '../redux/actions/customerActions';
import {connect} from 'react-redux';


 class CustomerList extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
      }
    render() {
        const {customers} = this.props.customers;
        
        return (
            <div className="content">
                <div className="main">
                    <List customers={customers}/>
                </div>
                <div className="sidebar">
                    <SideBar/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        customers: state.list
    };
  }
  export default  connect(mapStateToProps,{fetchCustomers})(CustomerList);