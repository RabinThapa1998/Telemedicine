import React from "react";
import squareprofile from '../images/squareprofile.jpg'

const InfoViewSecondSec = () => {
    return (
        <div className='col-12' >
            <div className='row p-lg-3 p-2 appointment-button-group g-0' style={{ width: '85%' }}>
                <div className='col d-flex flex-row align-items-center justify-content-around p-3' style={{ backgroundColor: '#f6f6f6', height: '3rem',overflowY:'hidden',overflowX:'auto' }}>
                    <button className=' text-primary p-lg-1 px-1 fw-bold' 
                    style={{ backgroundColor: 'white', height: '1.875rem', border: '0' ,fontSize:'0.75rem'}}>Upcoming Appointment</button>
                    <button className='btn fw-bold' style={{fontSize:'0.75rem'}}>Previous Appointment</button>
                    <button className='btn fw-bold' style={{fontSize:'0.75rem'}}>Medical Records</button>
                </div>
            </div>
            <div className='row justify-content-end pe-3'>
                <div className="input-group mb-5 px-2 py-0 border  input-group-sm" style={{ width: '9.375rem', backgroundColor: '#f6f6f6',borderRadius:'1.5625rem' }}  >
                    <input type="text" className="form-control border-0" placeholder="Search..." aria-label="Patient List" aria-describedby="inputGroup"
                        style={{ backgroundColor: '#f6f6f6', fontSize: '1rem' }}></input>
                    {/* <div className="input-group-append "> */}
                    <button type="button" className="btn" style={{ fontSize: '1rem', float: 'right', right: "-0.438rem" }}>
                        <i className="fas fa-search text-secondary p-0 m-0 "></i>
                    </button>
                    {/* </div> */}
                </div>
            </div>

            <div className='row '>
                <div className="col-12">
                <div className="d-flex flex-row col align-items-center m-auto justify-content-center">
                    <div className='circle'><div className='inner_circle'></div></div>

                    <div className='smallline'></div>

                    <div className='filledcircle'>
                        <p className='hovers' >1 AUG 2021</p>
                    </div>

                    <div className='longline'></div>


                    <div className='hollowcircle'><div className="hollow_inner_circle">
                        <p className='hovers' >7 AUG 2021</p>
                    </div></div>

                    <div className='smallline'></div>
                    <div className='circle'><div className='inner_circle'></div></div>
                </div>
                </div>
            </div>
            <div className="row mt-5 px-4 justify-content-center" style={{fontSize:'0.75rem'}}>
                <div className="col p-lg-4  p-2" style={{backgroundColor:'#f6f6f6'}}>
                    <div className='row p-0 m-0'>
                        <div className="col d-flex flex-row bg-white align-items-center justify-content-between p-3 overflow-auto" style={{width:'100%'}}>
                            <div className='d-flex flex-row m-0 p-0' style={{flexShrink:'0'}}>
                                <img src={squareprofile} className='m-0 rounded me-2 square-profile' height='75' width='75' alt="img" />
                                <div>
                                    <p className="p-0 m-0 text-secondary" >Doctor</p>
                                    <p className="p-0 m-0 fw-bold">Dr.Juneli Adhikari</p>
                                    <span className='badge active-badge'>Active</span>
                                    
                                </div>
                            </div>
                            <div className="vl"></div> 
                            <div className='align-self-center ' style={{flexShrink:'0'}}>
                                <p className="p-0 m-0  text-secondary">Station Master</p>
                                <p className="p-0 m-0 fw-bold">Bale Bahadur</p>
                                <p className='text-secondary p-0 my-2' >1:00PM-2:00PM</p>
                            </div>
                            <div className="vl"></div>

                            <div style={{flexShrink:'0'}}>
                                <button className='btn btn-primary  start-call-btn ' 
                                style={{border:'0', backgroundColor:'#7682EF', color:'white'}}>
                                 <i className="fas fa-video me-1 p-0"></i> 
                                <span>start call</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row m-0 mt-3 ' style={{height:'18.75rem'}}>
                        <div className='bg-white'>
                            <p className='text-start fw-bold'>OPD CARD</p>
                            <span>Prescription card:Medicine Azithromycin</span>
                    </div>
                </div>
                </div>


            </div>




        </div>
    );
}

export default InfoViewSecondSec;