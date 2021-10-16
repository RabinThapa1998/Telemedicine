const OnboardingTwo = () => {
    return (
        <div className='container-fluid m-0 py-5  px-3 bg-white shadow-sm rounded text-secondary'>
            <form>
                <div className="row my-2">
                    <div className="col d-flex flex-column">
                        <label for='height'>Height</label>
                        <input type="text" className="form-control form-control-sm" id="height" />
                        <div className='mt-3 d-flex flex-column'>
                            <label for='weight'>Weight</label>
                            <input type="text" id="weight" className="form-control form-control-sm" />
                        </div>

                    </div>
                    <div className="col d-flex flex-column">
                        <label for='chiefcomplaint'>Chief Complaint</label>
                        <textarea name="" id="chiefcomplaint" className='textarea' rows="4"></textarea>
                    </div>
                    <div className="col d-flex flex-column">
                        <label for='presentillnesshistory'>Present Illness History</label>
                        <textarea name="" id="presentillnesshistory" className='textarea' rows="4"></textarea>
                    </div>
                    <div className="col d-flex flex-column">
                        <label for='respiration'>Respiration</label>
                        <textarea name="" id="respiration" className='textarea' rows="4"></textarea>
                    </div>
                </div>

                <div className="row  my-4">
                    <div className="col d-flex flex-column">
                        <label for='temperature'>Temperature</label>
                        <input type="text" id="temperature" className="form-control form-control-sm" />
                    </div>
                    <div className="col d-flex flex-column">
                        <label for='bpsystolic'>BP Systolic</label>
                        <input type="text" id="bpsystolic" className="form-control form-control-sm"/>
                    </div>
                    <div className="col d-flex flex-column">
                        <label for='bpdiastolic'>BP Diastolic</label>
                        <input type="text" id="bpdiastolic" className="form-control form-control-sm"/>
                    </div>
                    <div className="col d-flex flex-column ">
                        <label for='jaundice'>Jaundice</label>
                        <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='jaundice'>
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </div>

                <div className="row my-4">
                    <div className="col d-flex flex-column ">
                    <label for='cyanosis'>Cyanosis</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='cyanosis'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className="col d-flex flex-column ">
                    <label for='dehydration'>Dehydration</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='dehydration'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className="col d-flex flex-column ">
                    <label for='anemia'>Anemia</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='anemia'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                    <div className="col d-flex flex-column ">
                    <label for='edema'>Edema</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='edema'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                </div>
                <div className="row  my-2">
                    <div className="col-3 d-flex flex-column ">
                        <label for='lymphadenopathy'>Lymphadenopathy</label>
                        <select className="form-select form-select-sm col  align-self-start" aria-label=".form-select-sm example" id='lymphadenopathy'>
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-3 d-flex flex-column">
                        <label for='finding'>Finding </label>
                        <textarea name="" id="finding" className='textarea' rows="4"></textarea>
                    </div>
                    <div className="col-3 d-flex flex-column">
                        <label for='remarks'>Remarks</label>
                        <textarea name="" id="remarks" className='textarea' rows="4"></textarea>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default OnboardingTwo;