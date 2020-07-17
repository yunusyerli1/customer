import React from 'react';
import circleName from '../util';

const List = ({customers}) => {
    
    return (
        !customers 
            ? <div>Loading...</div>
            :(
        <div className="list">
            
                <table id="customers">
                <thead>
                    <tr>
                        <th className="hiddenBorder" > </th>
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
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td><span className="round" >{circleName(customer.name)}</span></td>
                                <td key={customer}>{customer.name}</td>
                                <td>{customer.customerType}</td>
                                <td>{customer.relatedFirm}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.email}</td>
                                <td>{customer.portalInformation}</td>
                                
                            </tr>
                        ))}
                    </tbody>   
            </table>   
         </div>)
    )
}
export default List;