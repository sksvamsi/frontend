import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';  

const App = () => {
  return (
    <div className='main-body'>
      <BrowserRouter>
        {/* Custom Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <Link className="navbar-brand" to="/">User Management</Link>
            <div className="nav-links">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/add">Add User</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add" element={<AddUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
