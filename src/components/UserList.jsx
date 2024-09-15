import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; 

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://accomplished-quietude-production.up.railway.app/")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="userlist-container">
      <h1 className="userlist-title">User List</h1>
      <div className="user-cards">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h5 className="user-name">{user.name}</h5>
            <p className="user-email">Email: {user.email}</p>
            <button className="view-profile-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
