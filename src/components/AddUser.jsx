import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("https://accomplished-quietude-production.up.railway.app/add", { name, email })
      .then(response => {
        console.log(response.data);
        setSuccessMessage('User added successfully!'); // Set success message
        setName(''); // Clear name field
        setEmail(''); // Clear email field

        // Navigate to home page after 5 seconds
        setTimeout(() => {
          navigate('/'); // Navigate to home page
        }, 2000);

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 1000);
      })
      .catch(error => {
        console.error('There was an error adding the user:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add New User</h1>
      
      {/* Show success message if available */}
      {successMessage && (
        <div className="alert alert-success text-center">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
