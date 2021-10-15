import React, { Component } from "react";
import InfoViewSecondSec from './InfoViewSecondSec'
const PatientInfoView = (props) => {
    const { currentid } = props;
    const { patientlist } = props;

    const patientdashboard = patientlist.filter((data) => { return data.id === currentid })
    
    return (
        <div className='col-lg ' >
            <div className="row bg-white mb-3 shadow-sm rounded" style={{ height: "200px" }}>
                <div className='row m-0 p-0' style={{ height: '10px' }} >
                    <div className='text-end'>
                        <button className='btn border '>Edit</button>
                        <button className='btn border '>OPD</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex flex-row'>
                        <img src={patientdashboard[0].img} alt="profile" className='mbsc-avatar-custom' width="80" height="80" />
                        <div className="ms-2 " style={{width:'100%',fontSize:'14px'}}>
                            <p className='fw-bold  p-0 m-0' style={{fontSize:'25px'}}>{patientdashboard[0].name}</p>
                            <span> {patientdashboard[0].age}|{patientdashboard[0].gender}  </span>
                            <div className='d-flex flex-row mt-2 justify-content-between'>
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
                                    <p className='m-0'>CitizenshipNumber</p>
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