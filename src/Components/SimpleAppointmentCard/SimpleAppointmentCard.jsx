import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = () => {
  return (
    <div className="upcoming-schedule-container">
      <h2 className="schedule-main-title">The Upcoming Schedule</h2>

      <div className="day-section">
        <h3 className="day-title">On Thursday</h3>
        <div className="appointments-grid">
          <div className="appointment-card">
            <span className="card-title">Health checkup complete</span>
            <span className="card-icon" role="img" aria-label="syringe">💉</span>
            <span className="card-time">11:00 AM</span>
          </div>
          <div className="appointment-card">
            <span className="card-title">Ophthalmologist</span>
            <span className="card-icon" role="img" aria-label="eye">👁️</span>
            <span className="card-time">14:00 PM</span>
          </div>
        </div>
      </div>

      <div className="day-section">
        <h3 className="day-title">On Saturday</h3>
        <div className="appointments-grid">
          <div className="appointment-card">
            <span className="card-title">Cardiologist</span>
            <span className="card-icon" role="img" aria-label="red heart">❤️</span>
            <span className="card-time">12:00 AM</span>
          </div>
          <div className="appointment-card">
            <span className="card-title">Neurologist</span>
            <span className="card-icon" role="img" aria-label="man doctor">👨‍⚕️</span>
            <span className="card-time">16:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;