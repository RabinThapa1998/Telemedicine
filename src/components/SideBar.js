import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './SideBar.css'
import { Link } from "react-router-dom";
import logo from './images/hospital-logo.png';

class SideBar extends Component{
    state={
        navlink: false,
        triggered: 'dashboard'
    }
  
    handleClick= (e)=>{
        if (this.state.navlink == false){
            this.setState({navlink:true})
        }else{
            this.setState({navlink:false})
        }

        console.log(e.currentTarget.id)
   }
   
   render() {
      
       return (
           <div id='main-sidebar'>

               <div className="vertical-nav bg-white"  id='sidebar'>
                    
                    <input type="checkbox" id='check' />
                    <label for="check" className="checkbtn"><i className="fas fa-bars"></i></label>

                   <div className="py-4 px-3 mb-4 " id='mediabar' >
                     
                       <div className="media d-flex " >
                            <i class="fas fa-plus" style={{fontSize:'3rem',color:'blue'}} id='fas'></i>
                           {/* <img src={logo} alt="logo"  class='align-self-start mr-3 logo '/> */}
                           <div className="media-body align-self-center ">
                               <h6 className='mb-0 pb-0 ms-2 mt-2' id='rural' >Rural</h6>
                               <p className="font-weight-normal text-muted mb-0 ms-1" >
                                   Telemedicine
                               </p>
                           </div>
                       </div>
                   </div>

                   <ul className="nav nav-pills flex-column bg-white mb-0" id='navigationbar'>
                       <li className="nav-item mt-2 ">
                           <Link to='/' className="nav-link  text-dark d-flex flex-row pb-2">
                           <span className="material-icons   md-dark me-2 " >dashboard</span>
                                <span className='spantext'>Dashboard</span>
                           </Link>
                       </li>
                       <li className="nav-item mt-3 ">
                           <Link to='/schedules' className="nav-link text-dark d-flex flex-row text-secondary pb-2">
                           <span class="material-icons   md-dark me-2" >event_available</span>
                                <span className='spantext'>Schedules</span>
                           </Link>
                       </li>
                       <li className="nav-item mt-3 ">
                           <Link to='/patients' className="nav-link text-dark  d-flex flex-row text-secondary pb-2">
                           <span class="material-icons   md-dark me-2" >directions_walk</span>
                                <span className='spantext'>Patients</span>
                           </Link>
                       </li>
                       <li className="nav-item mt-3 ">
                           <Link to='/doctors' className="nav-link text-dark d-flex flex-row text-secondary pb-2">
                           {/* <span class="material-icons   md-dark me-2 "  >medication</span> */}
                           <span class="material-icons md-dark me-2">
                                    medical_services
                                    </span>
                                <span className='spantext'>Doctors</span>
                           </Link>
                       </li>
                       <li className="nav-item mt-3 ">
                           <Link to='/messages' className="nav-link text-dark d-flex flex-row text-secondary pb-2">
                           <span class="material-icons  md-dark me-2" >chat</span>
                                <span className='spantext'>Messages</span>
                           </Link>
                       </li>
                   </ul>

               </div>

                {/* end of navbar  */}

                
           </div>
       
       )
   }
}
export default SideBar;