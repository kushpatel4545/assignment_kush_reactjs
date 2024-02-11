import React, { useState } from 'react';
import './App.css';

const YourProfile = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [shippingAddress, setShippingAddress] = useState(user.shippingAddress || '');
  const [postcode, setpostcode] = useState(user.postcode || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || '');

  const handleSave = () => {
    updateUser({ ...user, name, email, shippingAddress, phoneNumber,postcode });
  };

  return (
    <div className="container">
      <h1>Your Profile Information</h1>
      <div className="inputfield">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="inputfield">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="inputfield">
        <label className="form-label">Shipping Address</label>
        <input type="text" className="form-control" id="Street Address" value={shippingAddress} onChange={e => setShippingAddress(e.target.value)} />
      </div>
      <div className="inputfield">
        <label className="form-label">Post Code</label>
        <input type="text" className="form-control" id="Street Address" value={postcode} onChange={e => setpostcode(e.target.value)} />
      </div>
      <div className="inputfield">
        <label className="form-label">Phone Number</label>
        <input type="tel" className="form-control" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default YourProfile;