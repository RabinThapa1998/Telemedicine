
import profile from '../images/ravi.jpg';
const NotificationBar = () => {
    return ( 

        <div className="row mt-0 m-left align-items-center justify-content-end g-0">
        <div className=" col-7 text-end me-3 ">
            <span className="material-icons text-secondary " >
                notifications </span>
        </div>
        {/* <div className=" col-3 crop-image me-2"> */}
            <img  src={profile} alt=" user" className="mbsc-avatar" width="34" height="34"  />
        {/* </div> */}
        

    </div>
     );
}
 
export default NotificationBar;