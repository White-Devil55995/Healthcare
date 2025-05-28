import Header from "./Components/Header/Header"
import "./App.css"
import Slider from "./Components/Slider/Slider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, History, Calender, Appointment, Statistics, Chart, Phone, Settings } from "./Components/Slider/ContentSlider";
import DashboardMainContent from "./Components/DashboardMainContent/DashboardMainContent";
import CalendarView from "./Components/DashboardMainContent/CalendarView/CalendarView";
import SimpleAppointmentCard from "./Components/SimpleAppointmentCard/SimpleAppointmentCard";

const App = () =>{
  return(
    <>
      <BrowserRouter> {/* ✅ Wrap entire app in Router */}
      <div className="main-content-block">
        <div className="actual-content-block">
          <Header />
           <div className="content-block">
               <div className="slider-block"><Slider /></div>
               <div className="Dashboard">
                <DashboardMainContent />
                </div>
                <div className="content-block-2">
                   <div className="calender-block">
                     <CalendarView />
                   </div>
                   <div className="updates-block">
                      <SimpleAppointmentCard />
                   </div>
           </div>
           </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/phone" element={<Phone />} />
            <Route  path="/settings" element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}
export default App