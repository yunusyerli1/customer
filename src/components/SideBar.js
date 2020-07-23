import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer, updateCustomer, createCustomer} from '../redux/actions/customerActions';
import Fade from 'react-reveal/Fade';
var uniqid = require('uniqid');

const SideBar = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [customerType, setCustomerType] = useState('');
    const [title, setTitle] = useState('');
    const [relatedFirm, setRelatedFirm] = useState('');
    const [identity, setIdentity] = useState('');
    const [note, setNote] = useState('');

    const [submit, setSubmit] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [text, setText] = useState("");
    const [buttonName, setButtonName] = useState("");
    const list = useSelector(state => state.list);
    const {customers} = list;
    const dispatch = useDispatch();

const onHandleDelete = (customer) => {
    dispatch(deleteCustomer(customer));
}
const onHandleCreate = () => {
    setVisibility(true);
    setText("Create New Customer");
    setButtonName("Create");

    setId("");
    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
    setWebsite("");
    setCustomerType("");
    setTitle("");
    setRelatedFirm("");
    setIdentity("");
    setNote("");

    
}
const onHandleUpdate = (customer) => {
    setVisibility(true);
    setText("Update the Customer");
    setButtonName("Update");

    setId(customer.id);
    setName(customer.name);
    setPhone(customer.phone);
    setAddress(customer.address);
    setEmail(customer.email);
    setWebsite(customer.website);
    setCustomerType(customer.customerType);
    setTitle(customer.title);
    setRelatedFirm(customer.relatedFirm);
    setIdentity(customer.identity);
    setNote(customer.note);

    
}
const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(buttonName);
    
    buttonName==="Update"
    ?
    dispatch(updateCustomer({
        id, name, phone, address, email, website,
        customerType, title, relatedFirm, identity, note
      }))
    :
    dispatch(createCustomer({
        id:uniqid(), name, phone, address, email, website,
        customerType, title, relatedFirm, identity, note
      }));
      
      setVisibility(false);
      submit && onHandleCreate();
      
    
}

    return (
        <>
        {!visibility 
        ? (
        <div>
            <div>
                <button className="button big" onClick={() => onHandleCreate()}>Create</button>
            </div>
            {!customers 
            ? <div>Loading...</div>
            :(
            <div className="button-group">
                 {customers.map((customer) => (
                    <div key={customer.id} >
                        <button className="button small" onClick={() => onHandleUpdate(customer)}>Update</button>
                        <button className="button small" onClick={() => onHandleDelete(customer)}>Delete</button>
                    </div>
                ))}
            </div>
            )}
        </div>) 
        : (<Fade right cascade>
            <div className="sidebar-form">
                
            
              <form onSubmit={onSubmitHandler}>
                <div>
                    <p>{text}</p>
                    <p className="close-sidebar" onClick={()=>setVisibility(false)}>X</p>
                </div>
                
                <ul className="form-container">
                    <p>Customer Type</p>

                 <li className="radio form-row">
                    
                    <input
                      name="radio"
                      type="radio"
                      id="gercek"
                      checked={customerType==="Gerçek"}
                      value="Gerçek"
                      onChange={(e) => setCustomerType(e.target.value)}
                    />
                    <label htmlFor="tuzel">Gerçek</label>
                    
                    <input 
                      name="radio"
                      type="radio"
                      id="tuzel"
                      checked={customerType==="Tüzel"}
                      value="Tüzel"
                      onChange={(e) => setCustomerType(e.target.value)}
                    />
                    <label htmlFor="tuzel">Tüzel</label>
                  </li>
                  <li className="form-row">
                    <label htmlFor="name">İsim</label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </li>
                  <li className="form-row">
                    <label htmlFor="title">Ünvan</label>
                    <input
                      name="title"
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </li>
                  <li className="form-row">
                    <label htmlFor="phone">GSM</label>
                    <input type="tel" id="phone" name="phone"
                        pattern="[0-9]{11}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required 
                        />
                  </li>
                  <li className="form-row">
                    <label htmlFor="email">E-mail Address</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="yunus@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </li>
                  <li className="form-row">
                    <label htmlFor="website">Website</label>
                    <input
                      name="website"
                      type="text"
                      id="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </li>
                  <li className="form-row">
                    <label htmlFor="identity">TCKN/VKN</label>
                    <input
                      name="identity"
                      type="text"
                      id="identity"
                      value={identity}
                      placeholder={customerType==="Gerçek"?"Lütfen TCKN girin" : "Lütfen VKN girin"}
                      onChange={(e) => setIdentity(e.target.value)}
                      required
                    />
                  </li>
                  <li className="form-row">
                    <label htmlFor="relatedFirm">İlgili Firması</label>
                    <input
                      name="relatedFirm"
                      type="text"
                      id="relatedFirm"
                      value={relatedFirm}
                      onChange={(e) => setRelatedFirm(e.target.value)}
                    />
                  </li>
                  
                  <li className="form-row">
                    <label htmlFor="address">Address</label>
                    <input
                      name="address"
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value.substring(0,20))}
                      required
                    />
                  </li>
                  <li className="form-row">
                    <label htmlFor="not">Not</label>
                    <input
                      name="not"
                      type="text"
                      id="not"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </li>
                  
                
                  <li className="button-line">
                  {buttonName === "Create" ? (<button className="button primary another" type="submit" onClick={(e)=>setSubmit(true)} >Create Another</button>):<></>}
                    <button className="button primary" type="submit" onClick={(e)=>setSubmit(false)}>
                        {buttonName}
                    </button>
                    
                  </li>
                </ul>
                
              </form>
            </div>
          </Fade>)
        }
        </>
    )
}
export default SideBar;

