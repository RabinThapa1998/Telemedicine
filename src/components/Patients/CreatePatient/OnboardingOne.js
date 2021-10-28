const OnboardingOne = () => {
    return (
        <div className='row bg-white shadow-sm rounded p-0 m-0 ' >

            <form className='p-3 m-0 container-fluid cp-fontsizemediaquery' style={{ fontSize: '0.875rem', boxSizing: 'border-box' }}>
                <div className="row justify-content-center">
                    <div className="profile-button-circle"></div>
                </div>
                <div className=' mt-3 row p-3 m-0  ' style={{ backgroundColor: '#fbfafb' }}>
                    <div className='col-sm m-0' >
                        <div className='row '>
                            <label className='form-label col-sm-5 text-sm-end m-0 align-self-center ps-0' for='fullname'>Full Name:</label>
                            <input type=" " className="form-control form-control-sm col" id='fullname' />
                        </div>
                        <div className='row mt-2'>   
                            <label className='form-label m-0 align-self-center text-sm-end col-sm-5 ps-0'>Date Of Birth(BS):</label>
                            <div className='col g-0 text-start py-1 '>
                            <i class="far fa-calendar-alt fs-5 px-2 m-0" ></i>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <label className='form-label m-0 align-self-start text-sm-end col-sm-5 ps-0' for='gender'>
                                Gender:
                            </label>
                            <div className='col d-flex justify-content-around '>


                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="radiobutton" id="flexRadioDefault1" value='male' />
                                    <label className='form-check-label ' for="flexRadioDefault1">Male</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="radiobutton" id="flexRadioDefault2" value='female' />
                                    <label className='form-check-label' for="flexRadioDefault2">Female</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="radiobutton" id="flexRadioDefault3" value='others' />
                                    <label className='form-check-label' for="flexRadioDefault3">Others</label>
                                </div>


                            </div>
                        </div>
                        

                    </div>
                    <div className='col-sm m-0'>
                        <div className='row p-sm-1'>
                            <label className='form-label col-sm-5  m-0 align-self-center text-sm-end ps-0' for='idtype'>Identification type:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='idtype'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='row p-sm-1 '>
                            <label className='form-label col-sm-5 m-0 align-self-center text-sm-end ps-0' for='idnum'>Identification No:</label>
                            <input type=" " className="form-control form-control-sm col" id='idnum' />
                        </div>
                        <div className='row p-sm-1'>
                            <label className='form-label  col-sm-5 m-0 align-self-center text-sm-end ps-0' for='mobile'>Mobile:</label>
                            <input type="phoneno" className="form-control form-control-sm col" id='mobile' />
                        </div>
                        <div className='row p-sm-1'>
                            <label className='form-label  col-sm-5 m-0 align-self-center text-sm-end ps-0' for='email'>Email:</label>
                            <input type="Email" className="form-control form-control-sm col" id='email' />
                        </div>
                    </div>

                    <p className='fw-bold text-secondary px-0'>Address:</p>
                    <div className='row  g-0 gx-md-2 '>

                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                            <label className='form-label  m-0' for='district'>District:</label>
                        
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='district'>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center" >
                            <label className='form-label m-0' for='localbody' style={{ whiteSpace: 'nowrap' }}>Local body:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='localbody'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                            </select>
                        </div>
                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                            <label className='form-label m-0 ' for='ward'>Ward:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='ward'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1"></option>
                                <option value="2"></option   >
                                <option value="3"></option>
                            </select>
                        </div>
                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                            <label className='form-label  m-0' for='street'>Street:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='street'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                            </select>
                        </div>


                    </div>
                </div>
                <div className="row fw-bold  p-0 m-0 mt-3 " style={{ backgroundColor: '#fbfafb' }}>
                    <div className='col-lg col-sm-6 d-flex flex-column'>
                        <label for='pastillnesshistory '>Past Illness History</label>
                        <textarea id="pastillnesshistory" className='textarea' rows='4' ></textarea>
                    </div>
                    <div className='col-lg  col-sm-6 d-flex flex-column'>
                        <label for='familyandpersonalhistory'>Family & Personal History</label>
                        <textarea id="familyandpersonalhistory" className='textarea' rows='4'></textarea>
                    </div>
                    <div className='col-lg col-sm-6  d-flex flex-column'>
                        <label for='allergyhistory'>Allergy History</label>
                        <textarea id="allergyhistory" className='textarea' rows='4'></textarea>
                    </div>
                    <div className='col-lg  col-sm-6 d-flex flex-column'>
                        <label for='medicinehistory'>Medicine History</label>
                        <textarea id="medicinehistory" className='textarea' rows='4'></textarea>
                    </div>
                </div>



            </form>

        </div>
    );
}

export default OnboardingOne;