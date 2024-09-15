import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://accomplished-quietude-production.up.railway.app/add", { name, email })
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add New User</h1>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="form-button">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
