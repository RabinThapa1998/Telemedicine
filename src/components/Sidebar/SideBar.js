import React,{Component} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './SideBar.css'
import { Link ,withRouter} from "react-router-dom";
import logo from '../images/hospital-logo.png';

class SideBar extends Component{
   
    state={
        hover:1
    }
     handleClick = (id,e)=>{
        e.preventDefault()
        this.setState({hover:id})

    }
    handleChange=(e)=>{
        // e.preventDefault()
        // console.log("@@@!@!@@@@@",e)
    }
    componentDidMount=()=>{
          
    if (this.props.location.pathname === '/schedules'){
        this.setState({hover:2})
    }
    else if (this.props.location.pathname === '/patients'){
        this.setState({hover:3})
    }
    else if (this.props.location.pathname === '/doctors'){
        this.setState({hover:4})
    }
    else if (this.props.location.pathname === '/messages'){
        this.setState({hover:5})
    }
    else{
     this.setState({hover:1})
    }
  
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

                   <ul className="nav nav-pills flex-column bg-white mb-0 ps-3 " id='navigationbar' style={{fontSize:"0.875rem"}}>
                        <a href="#" className="text-decoration-none" onClick={(e)=>this.handleClick(1,e)} onChange={this.handleChange}>
                       <li className="nav-item mt-0 ">
                           <Link to='/' className= {`nav-link  text-dark d-flex flex-row pb-2 ${this.state.hover=== 1 ? 'active':' '}`}>
                           <span className="material-icons   md-dark me-2 " >dashboard</span>
                                <span className='fw-bold  my-auto ' >Dashboard</span>
                           </Link>
                       </li>
                       </a>

                       <a href="#" className="text-decoration-none" onClick={(e)=>this.handleClick(2,e)} onChange={this.handleChange}>
                       <li className="nav-item mt-2 ">
                           <Link to='/schedules' className={`nav-link  text-dark d-flex flex-row pb-2 ${this.state.hover=== 2 ? 'active':' '}`}>
                           <span class="material-icons   md-dark me-2" >event_available</span>
                                <span className='fw-bold my-auto'>Schedules</span>
                           </Link>
                       </li>
                       </a>

                       <a href="#" className="text-decoration-none" onClick={(e)=>this.handleClick(3,e)} onChange={this.handleChange}>
                       <li className="nav-item mt-2 ">
                           <Link to='/patients' className={`nav-link  text-dark d-flex flex-row pb-2 ${this.state.hover=== 3 ? 'active':' '}`}>
                           <span class="material-icons   md-dark me-2" >directions_walk</span>
                                <span className='fw-bold my-auto'>Patients</span>
                           </Link>
                       </li>
                       </a>

                       <a href="#" className="text-decoration-none" onClick={(e)=>this.handleClick(4,e)} onChange={this.handleChange}>
                       <li className="nav-item mt-2 ">
                           <Link to='/doctors' className={`nav-link  text-dark d-flex flex-row pb-2 ${this.state.hover=== 4 ? 'active':' '}`}>
                           <span class="material-icons md-dark me-2">
                                    medical_services
                                    </span>
                                <span className='fw-bold my-auto'>Doctors</span>
                           </Link>
                       </li>
                       </a>

                       <a href="#" className="text-decoration-none" onClick={(e)=>this.handleClick(5,e)} onChange={this.handleChange}>
                       <li className="nav-item mt-2 ">
                           <Link to='/messages' className={`nav-link  text-dark d-flex flex-row pb-2 ${this.state.hover=== 5 ? 'active':' '}`}>
                           <span class="material-icons  md-dark me-2" >chat</span>
                                <span className='fw-bold my-auto'>Messages</span>
                           </Link>
                       </li>
                       </a>

                   </ul>

               </div>

                
           </div>
       
       )
   }
}
export default withRouter(SideBar);