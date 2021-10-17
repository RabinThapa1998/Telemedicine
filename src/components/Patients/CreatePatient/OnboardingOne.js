const OnboardingOne = () => {
    return (
        <div className='row bg-white shadow-sm rounded p-0 m-0 ' >

            <form className='p-3 m-0 container-fluid cp-fontsizemediaquery' style={{ fontSize: '12px',boxSizing:'border-box' }}>
                <div className="row justify-content-center">
                    <div className="profile-button-circle"></div>
                </div>
                <div className=' mt-3 row fw-bold p-3 m-0' style={{ backgroundColor: '#fbfafb' }}>
                    <div className='col m-0' >
                        <div className='row'>
                            <label className='form-label col-5' for='fullname'>Full Name:</label>
                            <input type=" " className="form-control form-control-sm col" id='fullname' />
                        </div>
                        <div>
                            <label className='form-label'>Date Of Birth(BS):</label>
                        </div>
                        <div className='d-flex flex-row'>
                            <label className='form-label' for='gender'>
                                Gender:
                            </label>
                            <div className='form-check'>
                                <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className='form-check-label' for="flexRadioDefault1">Male</label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className='form-check-label' for="flexRadioDefault2">Female</label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className='form-check-label' for="flexRadioDefault3">Others</label>
                            </div>
                        </div>
                        <p className=' fw-bold mt-5'>Address:</p>

                    </div>
                    <div className='col m-0'>
                        <div className='row p-1'>
                            <label className='form-label col-5 ' for='idtype'>Identification type:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='idtype'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='row p-1'>
                            <label className='form-label col-5' for='idnum'>Identification Number:</label>
                            <input type=" " className="form-control form-control-sm col" id='idnum' />
                        </div>
                        <div className='row p-1'>
                            <label className='form-label  col-5' for='mobile'>Mobile:</label>
                            <input type="phoneno" className="form-control form-control-sm col" id='mobile' />
                        </div>
                        <div className='row p-1'>
                            <label className='form-label  col-5' for='email'>Email:</label>
                            <input type="Email" className="form-control form-control-sm col" id='email' />
                        </div>
                    </div>

                    <div className='row m-0 p-0'>

                        <div className="col d-flex flex-row align-items-center">
                            <label className='form-label m-0' for='district'>District:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='district'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="col d-flex flex-row align-items-center" >
                            <label className='form-label m-0' for='localbody' style={{whiteSpace:'nowrap'}}>Local body:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='localbody'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col d-flex flex-row align-items-center">
                            <label className='form-label m-0 ' for='ward'>Ward:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='ward'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option   >
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col d-flex flex-row pe-0 align-items-center">
                            <label className='form-label  m-0' for='street'>Street:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='street'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>


                    </div>
                </div>
                <div className="row fw-bold p-0 m-0 mt-3" style={{ backgroundColor: '#fbfafb' }}>
                    <div className='col d-flex flex-column'>
                        <label for='pastillnesshistory '>Past Illness History</label>
                        <textarea  id="pastillnesshistory" className='textarea' rows='4' ></textarea>
                    </div>
                    <div className='col d-flex flex-column'>
                        <label for='familyandpersonalhistory'>Family & Personal History</label>
                        <textarea  id="familyandpersonalhistory" className='textarea' rows='4'></textarea>
                    </div>
                    <div className='col d-flex flex-column'>
                        <label for='allergyhistory'>Allergy History</label>
                        <textarea  id="allergyhistory" className='textarea' rows='4'></textarea>
                    </div>
                    <div className='col d-flex flex-column'>
                        <label for='medicinehistory'>Medicine History</label>
                        <textarea  id="medicinehistory" className='textarea' rows='4'></textarea>
                    </div>
                </div>



            </form>

        </div>
    );
}

export default OnboardingOne;