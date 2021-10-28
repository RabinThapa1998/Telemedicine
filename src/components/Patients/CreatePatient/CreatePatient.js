import React,{Component} from "react";
import NotificationBar from '../../Notification/NotificationBar'
import OnboardingOne from './OnboardingOne'
import OnboardingTwo from './OnboardingTwo'
import './CreatePatient.css'
import OnboardingThree from "./OnboardingThree";
import PaymentForm from "./PaymentForm";
class CreatePatient extends Component{
    state={
        page: 1
    }
    handleClick = ()=>{    
        if (this.state.page === 4 )return
        this.setState({page: this.state.page+1})
       }
       
    handleGoBack = () =>{
        this.setState({page: this.state.page-1})
      
    }
    render(){
       
        return(
            <div className='page-content px-lg-5  py-2 overflow-hidden container ' id='CreatePatient-content' >
                <NotificationBar />
                <div className="row g-0">
                    { this.state.page === 1 &&<p className='fw-bold' style={{fontSize:'1.563rem'}}>Patient Info</p>}
                    { this.state.page === 2 &&<p className='fw-bold' style={{fontSize:'1.563rem'}}>General Examination</p>}
                    { this.state.page === 3 &&<p className='fw-bold' style={{fontSize:'1.563rem'}}>&nbsp;</p>}
                    { this.state.page === 4 &&<p className='fw-bold' style={{fontSize:'1.563rem'}}>&nbsp;</p>}
                    
                </div>
                <div className='row g-0'>
                    <div className={`progressbar ${this.state.page === 1? 'progressbar-active': ' '}`}></div>
                    <div className='progressbar-divider'></div>
                    <div className={`progressbar ${this.state.page === 2? 'progressbar-active': ' '}`}></div>
                    <div className='progressbar-divider'></div>
                    <div className={`progressbar ${this.state.page === 3? 'progressbar-active': ' '}`}></div>
                </div>
                <div className="row g-0">
                    {this.state.page === 1 && <OnboardingOne />}
                    {this.state.page === 2 && <OnboardingTwo />}
                    {this.state.page === 3 && <OnboardingThree />}
                    {this.state.page === 4 && <PaymentForm />}
                </div>
                <div className="row mt-4">
                    <div className='d-flex flex-row justify-content-end'>
                        {this.state.page !== 1 && <button className='btn me-4' onClick={this.handleGoBack}> <i class="fas fa-chevron-left"></i></button>}

                        
                        {this.state.page !== 3 && <button className='btn cp-btn shadow-sm me-4' onClick={this.handleClick}>Next</button>}
                        {this.state.page === 3 && <button className='btn  cp-btn shadow-sm me-4' onClick={this.handleClick}>Submit</button>}

                        { <span className='text-primary text-decoration-underline'> showing {this.state.page} of 3</span>}
                    </div>
                </div>
            </div>
        )
    }
} 

export default CreatePatient;