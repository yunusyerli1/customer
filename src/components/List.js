import React from 'react'

const List = () => {
    return (
        <div className="list">
                <table id="customers">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Type</th>
                        <th>Related Firm</th>
                        <th>Address</th>
                        <th>GSM</th>
                        <th>Email</th>
                        <th>Portal Information</th>
                    </tr>    
                </thead> 
                <tbody>
                    
                        <tr>
                            <td>id</td>
                            <td>createdAt</td>
                            <td>order.total</td>
                            <td>order.name</td>
                            <td>order.email</td>
                            <td>order.address</td>
                            <td>order.cartItems.map</td>
                        </tr>
                </tbody>   
            </table>   
         </div>
    )
}
export default List;