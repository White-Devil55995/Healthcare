import AnatomySection from "./DashboardOverview/AnatomySection"
import  "./Dashboard.css";
import HealthStatusCards from "./DashboardOverview/HealthStatusCards";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
const DashboardMainContent = () => {
    return(
        <>
        <div className="header-part">
            <h1 className="dashboard-text1">Dashboard</h1>
            <p className="droup-down">This Week <i className="ri-arrow-down-s-line"></i></p>
        </div>
         <div className="part-1">
            <div className="anatomysection">
                <AnatomySection />
                <HealthStatusCards />
                </div>
            {/* <div><HealthStatusCards /></div> */}
         </div>
           <div className="part-2">
            <ActivityFeed />
           </div>
        </>
    )
}
export default DashboardMainContent