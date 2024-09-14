import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='main-body'>
      <BrowserRouter>
        {/* Enhanced Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">User Management</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light fw-bold" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light fw-bold" to="/add">Add User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="container mt-5 p-3">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0">
                <div className="card-body">
                  <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/add" element={<AddUser />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
