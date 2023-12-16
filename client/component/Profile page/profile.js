// Profile.js code as follows
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
          <span className="name">Shrutika</span>
          <span className="email">Shrutikarathi6</span>
          <span className="prof">Student</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
