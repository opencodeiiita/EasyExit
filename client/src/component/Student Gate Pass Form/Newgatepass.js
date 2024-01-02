// NewGatePass.js

import React, { useEffect } from 'react';
import './Newwgatepass.css';

const Newgatepass = () => {
  useEffect(() => {
    const contLabels = document.querySelectorAll('.cont-label');

    contLabels.forEach((label) => {
      label.addEventListener('click', () => {
        contLabels.forEach((otherLabel) => {
          otherLabel.classList.remove('active');
        });

        label.classList.add('active');
      });
    });

    return () => {
      contLabels.forEach((label) => {
        label.removeEventListener('click', () => {
          // Clean up event listeners when the component unmounts
        });
      });
    };
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <h3>
            Easy<span style={{ color: '#8968FF' }}>Exit</span>
          </h3>
        </div>
        <div className="profile-icon">Profile Icon</div>
      </header>
      <div className="container1">
        <label htmlFor="name" className="cont-label active">
          Request for Pass
        </label>
        <label htmlFor="name" className="cont-label">
          Past Passes
        </label>
        <label htmlFor="name" className="cont-label">
          Status
        </label>
      </div>
      <div className="form-container">
        <div className="container">
          <h1 className="heading">Outpass Form</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="enroll" className="form-label">
                Enroll Number:
              </label>
              <input type="text" id="enroll" name="enroll" className="form-input" required />
            </div>

            {/* Add other form fields */}
            
            <div className="Dateandtime" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '20px 0px 20px 0px' }}>
              <label htmlFor="date" className="form-label">
                Date:
              </label>
              <input type="date" style={{ width: '35%' }} id="date" name="date" />

              <label htmlFor="time" className="form-label">
                Time:
              </label>
              <input type="time" style={{ width: '35%' }} id="time" name="time" />
            </div>

            <div className="form-group">
              <label className="form-label">Responsibility:</label>
              <div className="responsibility-group">
                <div className="responsibility-option">
                  <input type="radio" id="yes" name="responsibility" value="yes" required />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div className="responsibility-option">
                  <input type="radio" id="no" name="responsibility" value="no" required />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newgatepass;
