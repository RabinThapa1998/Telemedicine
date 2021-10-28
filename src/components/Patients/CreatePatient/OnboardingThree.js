const OnboardingThree = () => {
    const handleAddClick=(event)=>{
            event.preventDefault()
         
    }
    return (
        <div className='container-fluid bg-white shadow-sm fw-bold p-2 cp-fontsizemediaquery' style={{ fontSize: '0.875rem', boxSizing: 'border-box' }}>
            <form action="">
                <div className="row my-2">
                    <div className="col fw-bold fs-5"><p>Lab Report</p></div>
                    <div className="col text-end">
                        <a href='#' onClick={(e)=>handleAddClick(e)} className='btn  add-btn text-white py-1'><i class="fas fa-plus px-2"></i><span className='px-2'>Add</span></a>
                    </div>
                </div>

                <div className="row my-2 labreportimgdiv mx-0">


                </div>
                <div className="row m-0 p-3" style={{ backgroundColor: '#F9F8F8' }}>
                    <p className='fw-bold fs-5 row'>Psychiatric Details</p>

                    <div className="bg-white shadow-sm rounded m-0 p-2 row">
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='presentingcomplaintsanditshistory ' >Presenting Complaints & its History</label>
                                <textarea id="presentingcomplaintsanditshistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='objectiveexamination' style={{ whiteSpace: 'nowrap' }}>Objective Examination/ General Findings</label>
                                <textarea id="objectiveexamination" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='medicine'>Medicine</label>
                                <textarea id="medicine" rows="4" className='textarea'></textarea>
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='pastmedicalhistory'>Past Medical History</label>
                                <textarea id="pastmedicalhistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='diagnosis'>Diagnosis(Provisional or Final)</label>
                                <textarea id="diagnosis" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='advice'>Advice</label>
                                <textarea id="advice" rows="4" className='textarea'></textarea>
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='pastpsychiatrichistory'>Past Psychiatric History</label>
                                <textarea id="pastpsychiatrichistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='queries'>Queries</label>
                                <textarea id="queries" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2  g-0'>
                                <label for="remarks" className=''>Remarks</label>
                                <input type="text" placeholder='Remarks' className='form-control form-control-sm' />
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='pastfamilyandpersonalhistory'>Past Family & Personal History</label>
                                <textarea id="pastfamilyandpersonalhistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='treatment'>Treatment</label>
                                <textarea id="treatment" rows="4" className='textarea'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2 " style={{whiteSpace:'nowrap'}}>
                    <div className='d-flex flex-md-row flex-column'>
                      <label for='furtherreferto' className='fw-bold fs-5'>Further Refer to &nbsp;</label>
                        <select className="form-select form-select-sm " aria-label=".form-select-sm example" id='furtherreferto' style={{width:'18.75rem'}}>
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">None</option>
                        </select>
                    </div>
                </div>

            </form>

        </div>
    );
}

export default OnboardingThree;