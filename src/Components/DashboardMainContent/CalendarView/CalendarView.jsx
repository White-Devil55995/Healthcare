
import React from 'react';
import './CalendarView.css';
import 'remixicon/fonts/remixicon.css';
const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="month-header">
        <span>October 2021</span>
        <div className="navigation">
          <button><i className="ri-arrow-left-long-fill"></i></button>
          <button><i className="ri-arrow-right-long-fill"></i></button>
        </div>
      </div>

      <div className="week-days">
        <div>Mon</div>
        <div>Tues</div>
        <div>Wed</div>
        <div>Thurs</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="date-grid">
        <div className="date">
          <span className="day">25</span>
          <div className="time">10:00</div>
          <div className="time">11:00</div>
          <div className="time">12:00</div>
        </div>
        <div className="date active">
          <span className="day">26</span>
          <div className="time unavailable">08:00</div>
          <div className="time booked">09:00</div>
          <div className="time">10:00</div>
        </div>
        <div className="date">
          <span className="day">27</span>
          <div className="time">12:00</div>
          <div className="time unavailable">—</div>
          <div className="time">13:00</div>
        </div>
        <div className="date">
          <span className="day">28</span>
          <div className="time">10:00</div>
          <div className="time booked">11:00</div>
          <div className="time unavailable">—</div>
        </div>
        <div className="date">
          <span className="day">29</span>
          <div className="time unavailable">—</div>
          <div className="time">14:00</div>
          <div className="time">16:00</div>
        </div>
        <div className="date">
          <span className="day">30</span>
          <div className="time booked-start">12:00</div>
          <div className="time">14:00</div>
          <div className="time">15:00</div>
        </div>
        <div className="date">
          <span className="day">31</span>
          <div className="time booked-end">09:00</div>
          <div className="time">10:00</div>
          <div className="time">11:00</div>
        </div>
      </div>

      <div className="appointments">
        <div className="appointment dentist">
          <div className="title">Dentist <span role="img" aria-label="tooth">🦷</span></div>
          <div className="time time2">09:00-11:00</div>
          <div className="doctor">Dr. Cameron Williamson</div>
        </div>
        <div className="appointment physiotherapy">
          <div className="title title1">Physiotherapy Appoinment <span role="img" aria-label="person-doing-massage">💆</span></div>
          <div className="time time2">11:00-12:00</div>
          <div className="doctor doctor1">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;