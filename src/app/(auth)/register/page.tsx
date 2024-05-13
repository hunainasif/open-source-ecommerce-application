import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-section">
        <h3>Personal Information</h3>
        <div className="info-item">
          <label>Name:</label>
          <span>[Your Name]</span>
        </div>
        <div className="info-item">
          <label>Email:</label>
          <span>[Your Email]</span>
        </div>
        <div className="info-item">
          <label>Phone Number:</label>
          <span>[Your Phone Number]</span>
        </div>
      </div>

      <div className="profile-section">
        <h3>Account Settings</h3>
        <button className="btn">Change Password</button>
        <button className="btn">Update Profile</button>
        <button className="btn">Notification Preferences</button>
      </div>

      <div className="profile-section">
        <h3>Orders</h3>
        <button className="btn">View Orders</button>
        <button className="btn">Pending Orders</button>
        <button className="btn">Order History</button>
      </div>

      <div className="profile-section">
        <h3>Wishlist</h3>
        <button className="btn">Wishlist</button>
      </div>

      <div className="profile-section">
        <h3>Chat with Admin</h3>
        <button className="btn">Live Support</button>
        <button className="btn">Feedback & Suggestions</button>
      </div>

      <div className="profile-section">
        <h3>Help & Support</h3>
        <button className="btn">FAQs</button>
        <button className="btn">Contact Us</button>
      </div>

      <div className="logout">
        <button className="btn">Logout</button>
      </div>

      <div className="stay-connected">
        <h3>Stay Connected</h3>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
