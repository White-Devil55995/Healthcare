import 'remixicon/fonts/remixicon.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";
import Slider from '../Slider/Slider';
import profile from "../../assets/doctor-profile.png"
const Header = () =>{
    return(
       <>
         <div className="Header-part">
            {/* this is for creating logo-text */}
            <div className="logo-text-block">
                <span className='logo-1' >Health</span>
                <span className="logo-sub-text">care.</span>
            </div>
            {/* this is for creating search and notificatioin fields */}
            <div className="search-block">
                  <div className='search'> <i className="ri-search-line search-icon"></i> <input type="text" placeholder='Search' id='search-input'/></div>
                  <div className='notification-block'><i className="ri-notification-3-fill notification"></i></div>
            </div>
            {/* this is for creating profile-block */}
            <div className="profil-block">
                <div className='profile'>
                    <img src={profile} alt="profile-image" className='profile-pic' />
                    <span className='profile-name'>Dr.Jyothi</span>
                </div>
                <div className="add-block">+</div>
                {/* this is for creating show dashboard section in small screens */}
                <div className="handburgar">
                    <button className="btn btn-primary custom-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="ri-menu-line"></i></button>
                 <div className="offcanvas offcanvas-end custom-canvas"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                 <h5 id="offcanvasRightLabel">Dashboard</h5>
               <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body custom-canvas">
                <Slider />
              </div>
              </div>
                </div>
            </div>
         </div>
       </>
    )
}
export default Header