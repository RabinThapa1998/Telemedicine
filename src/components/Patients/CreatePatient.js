import React,{Component} from "react";
import NotificationBar from '../NotificationBar'
class CreatePatient extends Component{

    render(){
        return(
            <div className='page-content px-lg-5  py-2 overflow-hidden container'>
                <NotificationBar />
                
            </div>
        )
    }
} 

export default CreatePatient;