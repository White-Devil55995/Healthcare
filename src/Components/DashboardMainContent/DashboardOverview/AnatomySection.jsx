import 'remixicon/fonts/remixicon.css';
import "./AnatomySection.css"
import body from "../../../assets/humanbody.png";
import leg from "../../../assets/leg.png";
const AntomySection = () => {
    return(
        <>
          <div className="humanbody">
            <div className="body">
                <img src={body} alt="human-body"  className='human-body'/>
                <p className='healthy-heart'><i className="ri-heart-fill heart-icon"></i> Healthly Heart</p>
                <p className='search-block1'><i className="ri-search-eye-line search-icon1" ></i></p>
                <p className='leg-status'><img src= {leg} alt="leg-pic" className='leg-pic' /> Healthly leg </p>
            </div>
          </div>
        </>
    )
}
export default AntomySection