import React,{Component} from "react";
import NotificationBar from "./NotificationBar";
import PatientListView from './Patients/PatientListView'
import PatientInfoView from "./Patients/PatientInfoView";
import './Patients.css'
import ashok from './images/ashok.jpg'
import ravi from './images/ravi.jpg'
import sonia from './images/sonam.jpg'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

class Patients extends Component{
    state={
        patientlist:[
            {id:1, name:'Ram Prasad Gajurel',img: ashok, age:'25', gender:'Male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425'  },
            {id:2, name:'Krishna Ghale',img: ravi, age:'26', gender:'Male' ,address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425'},
            {id:3, name:'Goma Devi Adhikari ',img: sonia, age:'32', gender:'Female' ,address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425'},
            {id:4, name:'Ram Prasad Gajurel',img: ravi, age:'26', gender:'Male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:5, name:'Ram Prasad Gajurel',img: ravi, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:6, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:7, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:8, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:9, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:10, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:11, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male' ,address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425'},
            {id:12, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:13, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:14, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:15, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:16, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
            {id:17, name:'Ram Prasad Gajurel',img: ashok, age:'26', gender:'male',address:'Pathari 1,Morang', phone:'9842078988', idtype:'Citizenship',citizenshipno:'014234242425' },
        ],
        currentid:1
    }

     handlelistclick = (id,event)=>{
       
        event.preventDefault()
        this.setState({currentid:id})
    }
    
    render(){
        
        
        
        return(
            <div className='page-content px-lg-5 py-2  container overflow-hidden' id='patients-content'>
                <NotificationBar />
                <div className='row mt-4 mx-0' >
                    <PatientListView patientlist={this.state.patientlist} handlelistclick={this.handlelistclick}/>
                    <PatientInfoView currentid={this.state.currentid} patientlist={this.state.patientlist}/>
                </div>
                
            </div>
        )
    }
}
export default Patients;