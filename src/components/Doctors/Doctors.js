import React,{Component} from "react";
import NotificationBar from "../Notification/NotificationBar";
import DoctorInfoView from "./DoctorInfoView";
import DoctorListView from "./DoctorListView";
import '../Patients/Patients.css'
import './Doctor.css'
import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonia from '../images/sonam.jpg'

class Doctors extends Component{
    state={
        doctorlist:[
            {id:1, name:'Dr.Ramlal Chaudhary',img: ashok, age:'25', gender:'Male',workplace: 'B&B Hospital', qualification:'M.O.',department:'Gyanecologist' ,status:'Active'},
            {id:2, name:'Dr.Hari Singh',img: ravi, age:'26', gender:'Male' ,workplace: 'B&B Hospital', qualification:'M.O.',department:'Physician' ,status:'Offline'},
            {id:3, name:'Dr.Sweta Sharma ',img: sonia, age:'32', gender:'Female' ,workplace: 'B&B Hospital', qualification:'M.O.',department:'Neurologist',status:'Offline' },
            // {id:4, name:'Ram Prasad Gajurel',img: ravi, age:'26', gender:'Male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:5, name:'Ram Prasad Gajurel',img: ravi, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:6, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:7, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:8, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:9, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:10, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:11, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male' ,address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425'},
            // {id:12, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:13, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:14, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:15, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:16, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            // {id:17, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
        ],
        currentid:1,
        hover:1

    }

     handlelistclick = (id,event)=>{
       
        event.preventDefault()
        this.setState({currentid:id})
        this.setState({hover:id})
    }
    
    render(){
        
        
        
        return(
            <div className='page-content px-lg-5 py-2  container overflow-hidden' id='patients-content'>
                <NotificationBar />
                <div className='row mt-4 mx-0' >
                    <DoctorListView doctorlist={this.state.doctorlist} handlelistclick={this.handlelistclick} hover={this.state.hover}/>
                    <DoctorInfoView currentid={this.state.currentid} doctorlist={this.state.doctorlist}/>
                </div>
                
            </div>
        )
    }
}
export default Doctors;