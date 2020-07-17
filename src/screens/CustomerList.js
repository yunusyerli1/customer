import React, { Component } from 'react';
import List from '../components/List';
import SideBar from '../components/SideBar'


 class CustomerList extends Component {
    render() {
        return (
            <div className="content">
                <div className="main">
                    <List />
                </div>
                <div className="sidebar">
                    <SideBar />
                </div>
            </div>
        )
    }
}
export default CustomerList;