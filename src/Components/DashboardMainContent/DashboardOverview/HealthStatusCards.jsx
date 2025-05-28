import "./HealthStatusCards.css";
import 'remixicon/fonts/remixicon.css';
const HealthStatusCards = () =>{
    return(
        <>
         <div className="health-cards">
            <div className="health-card-1">
                <p className="lungs-block"><img src="./src/assets/lungs.png" alt="lungs-pic" className="lungs-pic" /> <span className="lungs-text">Lungs</span></p>
                <p className="data-block">Date : 26 oct 2021</p>
               <div className="update-bar"> 
                  <div className="status-bar">
                    <div className="status-bar-inner"></div>
                  </div>
               </div>
               {/* <p className="status-bar"> <p className="status-bar-inner"></p></p> */}
            </div>
            <div className="health-card-2">
                 <p className="lungs-block"><img src="./src/assets/teath.png" alt="lungs-pic" className="lungs-pic" /> <span className="lungs-text">Teeth</span></p>
                <p className="data-block">Date : 26 oct 2021</p>
               <div className="update-bar"> 
                  <div className="status-bar">
                    <div className="status-bar-inner1"></div>
                  </div>
               </div>
            </div>
            <div className="health-card-3">
                   <p className="lungs-block"><img src="./src/assets/bone.png" alt="lungs-pic" className="lungs-pic" /> <span className="lungs-text">Bone</span></p>
                <p className="data-block">Date : 26 oct 2021</p>
               <div className="update-bar"> 
                  <div className="status-bar">
                    <div className="status-bar-inner2"></div>
                  </div>
               </div>
            </div>
            <p className="details">Datails <i className="ri-arrow-right-line"></i></p>
         </div>
        </>
    )
}
export default HealthStatusCards