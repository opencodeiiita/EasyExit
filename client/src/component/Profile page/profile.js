// Profile.js
import React from 'react';
import './Profile.css'; 

const Profile = () => {
  return (
    <div>
      <ul className="nav-links">
        <li><a href="#">Easy<span style={{ color: '#8968FF' }}>Exit</span></a></li>
        <li className="profile-icon" style={{ color: '#8968FF', fontSize: '35px', marginLeft: '87%' }}>
          <i className='bx bx-user'></i>
        </li>
      </ul>

      <div className="profile-card">
        <div className="image">
          {/* add profile image */}
        </div>

        <div className="text-data">
          <span className="name"><span class="name-text">Name:</span>Shrutika</span>
          <span className="email"><span class="name-text">Email id:</span>Shrutikarathi6</span>
          <span className="prof"><span class="name-text">Logged in as:</span>Student</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
