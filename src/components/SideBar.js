import React from 'react'

const SideBar = ({customers}) => {
    console.log(customers);
    return (
        <>
            <div>
                <button className="button big">Create</button>
            </div>
            {!customers 
            ? <div>Loading...</div>
            :(
            <div className="button-group">
                 {customers.map((customer) => (
                    <div key={customer.id} >
                        <button className="button small">Update</button>
                        <button className="button small"  onClick={() => this.props.deleteCustomer(customer)}>Delete</button>
                    </div>
                ))}
            </div>
            )}
        </>
    )
}
export default SideBar;