import React, { Component } from "react";
import InfoViewSecondSec from './InfoViewSecondSec'
const PatientInfoView = (props) => {
    const { currentid } = props;
    const { patientlist } = props;

    const patientdashboard = patientlist.filter((data) => { return data.id === currentid })
    
    return (
        <div className='col-xl col-12 ' >
            <div className="row bg-white mb-3 shadow-sm rounded p-2" style={{ height: "12.5rem" }}>
                <div className='col-12 m-0 p-0' style={{ height: '0.625rem' }} >
                    <div className='text-end'>
                        <button className='btn border text-secondary py-1 px-2 edit-btn me-2'> 
                        <i className="far fa-edit px-1"></i>
                        <span className='px-1'>Edit</span>
                        </button>
                        <button className='btn  add-btn text-white py-1 m-0'>
                        <i class="fas fa-plus px-1"></i>
                        <span className='px-1'>OPD</span>
                        </button>
                    </div>
                </div>
                <div className='col-12 ps-3 m-0' style={{boxSizing:'border-box'}}>
                    <div className='d-flex flex-row'>

                        <div>
                        <img src={patientdashboard[0].img} alt="profile" className='mbsc-avatar-custom' width="80" height="80" />
                        </div>
                        <div className="ms-2 " style={{width:'100%',fontSize:'0.75rem', overflowX:'hidden'}}>
                            <p className='fw-bold  p-0 m-0 patientdashboardname' style={{fontSize:'1.563rem'}}>{patientdashboard[0].name}</p>
                            <span> {patientdashboard[0].age}|{patientdashboard[0].gender}  </span>
                            <div className='d-flex flex-row mt-2 justify-content-between patient-info-details overflow-auto' style={{scrollbarGutter:'stable',whiteSpace:'nowrap'}}>
                                <div>
                                    <p className='m-0'>Address:</p>
                                    <span className='text-secondary'>{patientdashboard[0].address}</span>
                                </div>
                                <div className="vl"></div>
                                <div>
                                    <p className='m-0'>Phone No:</p>
                                    <span className='text-secondary'>{patientdashboard[0].phone}</span>
                                </div>
                                <div className="vl"></div>
                                <div>
                                    <p className='m-0'>ID Type:</p>
                                    <span className='text-secondary'>{patientdashboard[0].idtype}</span>
                                </div>
                                <div className="vl"></div>
                                <div>
                                    <p className='m-0'>Citizenship No.</p>
                                    <span className='text-secondary'>{patientdashboard[0].citizenshipno}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="row bg-white" >
                <InfoViewSecondSec />
            </div>
        </div>
    );
}

export default PatientInfoView;