import "./Slider.css"
import 'remixicon/fonts/remixicon.css';
import { NavLink } from "react-router-dom";
import React from 'react';
const Slider = () =>{
    return(
      <>
        <div className="Slider-block">
          <p className="general-text">General</p>
           <div className="first-part">
              <NavLink to= "/" className= "nav-link">
             <div className="dashboard-block dashboard">
             <i className="ri-dashboard-fill dashboard-icon"></i> 
             <span className="dashboard-text">Dashboard</span>
            </div>
              </NavLink>
              <NavLink to="/history" className= "nav-link">
                  <div className="history-block dashboard"><i className="ri-arrow-up-down-fill history-icon"></i> <span className="history-text">History</span></div>
              </NavLink>
              <NavLink to= "/calender" className= "nav-link">
                   <div className="calender-block dashboard"><i className="ri-calendar-2-line calender-icon"></i><span className="calender-text">Calender</span></div>
              </NavLink>
              <NavLink to="/appointment" className= "nav-link">
                  <div className="appointment-block dashboard">
                     <i className="ri-add-box-fill appointment-icon"></i>
                     <span className="appointment-text ">Appointments</span>
                  </div>
              </NavLink>
              <NavLink to="/statistics" className= "nav-link">
                <div className="statistics-block dashboard"><i className="ri-bar-chart-box-fill statistics-icon"></i><span className="statistics-text">Statistics</span></div>
              </NavLink>
           </div>
            <p className="general-text">Tools</p>
           <div className="second-part">
              <NavLink to="/chart" className= "nav-link"> 
              {/* in this case i am not chenging the className of the div because i am reusing that "history-block dashboard" block of styles */}
                 <div className="history-block dashboard"><i className="ri-chat-3-fill chat-icon"></i><span className="history-text">Chat</span></div>
              </NavLink>
              <NavLink to="/phone" className= "nav-link">
              {/* in this case i am not chenging the className of the div because i am reusing that "history-block dashboard" block of styles */}
                  <div className="history-block dashboard"><i className="ri-phone-fill phone-icon"></i><span className="history-text">Chat</span></div>
              </NavLink>
           </div>
           <div className="thired-part">
               {/* in this case i am not chenging the className of the div because i am reusing that "history-block dashboard" block of styles */}
                <NavLink to="/settings" className= "nav-link">
                  <div className="history-block dashboard"><i className="ri-settings-3-line phone-icon"></i><span className="history-text">Settings</span></div>
              </NavLink>
           </div>
        </div>
      </>
    )
}
export default Slider