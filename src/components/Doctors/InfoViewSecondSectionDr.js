import React from "react";
import squareprofile from '../images/squareprofile.jpg'

const InfoViewSecondSectionDr = () => {
    return (
        <div className='col-12' >
            <div className='row p-lg-3 p-2 appointment-button-group g-0' style={{ width: '85%' }}>
                <div className='col d-flex flex-row align-items-center justify-content-around p-3' style={{ backgroundColor: '#f6f6f6', height: '3rem', overflowY: 'hidden', overflowX: 'auto' }}>
                    <button className='btn  appointment-btn-group appointment-btn-group-active'>Patient List</button>
                    <button className='btn appointment-btn-group'>Appointment</button>
                    <button className='btn appointment-btn-group'>Comments</button>
                </div>
            </div>
            <div className='row justify-content-end pe-3'>
                <div className="input-group mb-2 px-2 py-0 border  input-group-sm" style={{ width: '9.375rem', backgroundColor: '#f6f6f6', borderRadius: '1.5625rem' }}  >
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

            </div>
            <div className="row  px-4 justify-content-center" style={{ fontSize: '0.75rem' }}>
                <div className="col p-lg-4  p-2" style={{ backgroundColor: '#f6f6f6' }}>

                    <div className='row p-0 m-0'>
                        <div className="col-12 my-2 d-flex flex-row bg-white align-items-center justify-content-between p-3 overflow-auto" style={{ width: '100%' }}>
                            <div className='d-flex flex-row m-0 p-0' style={{ flexShrink: '0' }}>
                                <img src={squareprofile} className='m-0 rounded me-2 square-profile' height='75' width='75' alt="img" />
                                <div className='align-self-center'>
                                    <span className="p-0 m-0 text-secondary" >Patient</span>
                                    <p className="p-0 m-0 fw-bold">Ful Kumari Tamang</p>
                                </div>
                            </div>
                            <div className="vl"></div>
                            <div className='align-self-center ' style={{ flexShrink: '0' }}>
                                <p className="p-0 m-0  text-secondary text-center">Station</p>
                                <p className="p-0 m-0 fw-bold text-center">Taplejung District Hospital</p>
                            </div>
                            <div className="vl"></div>

                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                <span className=' ' style={{ fontSize: '19px', fontWeight: '900' }}>1</span>
                                <span className=' ' style={{ fontSize: '19px', fontWeight: '900' }}>AUG</span>
                                <small className='text-secondary text-center' style={{whiteSpace:'nowrap'}}>1:00 PM-2:00 PM</small>
                            </div>
                            <div className="vl"></div>

                            <div style={{ flexShrink: '0' }}>
                                <a className='see-more-from-appoint'>See More</a>
                            </div>
                        </div>
                        <div className="col-12 my-2 d-flex flex-row bg-white align-items-center justify-content-between p-3 overflow-auto" style={{ width: '100%' }}>
                            <div className='d-flex flex-row m-0 p-0' style={{ flexShrink: '0' }}>
                                <img src={squareprofile} className='m-0 rounded me-2 square-profile' height='75' width='75' alt="img" />
                                <div className='align-self-center'>
                                    <span className="p-0 m-0 text-secondary" >Patient</span>
                                    <p className="p-0 m-0 fw-bold">Ful Kumari Tamang</p>
                                </div>
                            </div>
                            <div className="vl"></div>
                            <div className='align-self-center ' style={{ flexShrink: '0' }}>
                                <p className="p-0 m-0  text-secondary text-center">Station</p>
                                <p className="p-0 m-0 fw-bold text-center">Taplejung District Hospital</p>
                            </div>
                            <div className="vl"></div>

                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                <span className=' ' style={{ fontSize: '19px', fontWeight: '900' }}>1</span>
                                <span className=' ' style={{ fontSize: '19px', fontWeight: '900' }}>AUG</span>
                                <small className='text-secondary text-center' style={{whiteSpace:'nowrap'}}>1:00 PM-2:00 PM</small>
                            </div>
                            <div className="vl"></div>

                            <div style={{ flexShrink: '0' }}>
                                <a className='see-more-from-appoint'>See More</a>
                            </div>
                        </div>
                    </div>
                   
                </div>


            </div>




        </div>
    );
}

export default InfoViewSecondSectionDr;