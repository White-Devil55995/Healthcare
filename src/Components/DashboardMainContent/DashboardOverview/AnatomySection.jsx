import 'remixicon/fonts/remixicon.css';
import "./AnatomySection.css"
const AntomySection = () => {
    return(
        <>
          <div className="humanbody">
            <div className="body">
                <img src="./src/assets/humanbody.png" alt="human-body"  className='human-body'/>
                <p className='healthy-heart'><i className="ri-heart-fill heart-icon"></i> Healthly Heart</p>
                <p className='search-block1'><i className="ri-search-eye-line search-icon1" ></i></p>
                <p className='leg-status'><img src="./src/assets/leg.png" alt="leg-pic" className='leg-pic' /> Healthly leg </p>
            </div>
          </div>
        </>
    )
}
export default AntomySection