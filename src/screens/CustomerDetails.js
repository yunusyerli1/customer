import React, { Component } from 'react';
import SideBarProfile from '../components/SideBarProfile';
import SideBarMap from '../components/SideBarMap';
import SideBarAbout from '../components/SideBarAbout';

class CustomerDetails extends Component {
    state={customer:{}}
    componentDidMount = () => {
        const customer=this.props.location.state.customer[0];
        
        this.setState({customer:customer})
    }
    render() {
    
    console.log(this.state.customer);
    return (
        <div className="content-details">
            <div className="sidebar-details">
                    <SideBarProfile customer={this.state.customer} />
                    <SideBarMap />
                    <SideBarAbout />
            </div>
            <div className="main-details">
                    szf
            </div>
                
        </div>
    )
}}
export default CustomerDetails;