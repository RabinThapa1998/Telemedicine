const PaymentForm = () => {
    return (
        <div className='container-fluid m-0 py-3  px-3 bg-white shadow-sm rounded cp-fontsizemediaquery' style={{ fontSize: '1.1rem', boxSizing: 'border-box' }}>
            <form>
                <div className="row g-0">
                    <p className='col-12 fw-bold fs-5'>Payment</p>
                </div>
                <div className="row g-0 text-white paymentfontclamp" style={{ height: '140px' }}>
                    <div className="col-lg payment-background me-1 d-flex align-items-center justify-content-start flex-row">
                        <div className="row ps-3">

                            <ul className='list-unstyled'>
                                <li>
                                    <span className='fw-bold'>Patient Name:</span>
                                    <span className='ms-2' style={{ fontWeight: '200' }}>Malvika Subba</span></li>
                                <li className='mt-1'>
                                    <span className='fw-bold'>Appointment Time:</span>
                                    <span className='ms-2' style={{ fontWeight: '200' }}>10:00AM-11:00AM</span></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg payment-background ms-lg-1 mt-2 mt-lg-0  d-flex align-items-center justify-content-start flex-row">
                        <div className="row ps-3 ">
                            <ul className='list-unstyled'>
                                <li >
                                    <span className='fw-bold'>Doctor Name:</span>
                                    <span className='ms-2' style={{ fontWeight: '200' }}>Arun Pandey</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="row g-0 payment-background my-2 text-white overflow-auto" style={{ height: '140px',whiteSpace:'pre-wrap' }}>
                    <div className="col-12 p-3 chiefcomplain" >
                        <p className='fw-bold'>Cheif Complain:</p>
                        <span style={{ fontWeight: '200' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ullam non voluptatum omnis doloremque, ad expedita optio. Aut similique at vitae cum tempora? Nostrum, similique.</span>
                    </div>
                </div>

                <div class="row  text-white ">
                    <div class="col-lg  d-flex flex-row justify-content-around my-2 p-4">
                        <div class="row d-flex flex-column  justify-content-between p-4 payment-cards">
                            <div>
                                <h2 class='text-start '>REGULAR</h2>
                                <h4 class='text-start xxx-text-shadow'>RS: XXX</h4>
                            </div>
                            <div class="my-3">
                                <button class="btn  btn-light text-danger rounded shadow-sm m-auto">Pay</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg d-flex flex-row justify-content-around my-2 p-4">
                        <div class="row d-flex flex-column  justify-content-between p-4 payment-cards">
                            <div>
                                <h2 class='text-start '>Follow Up</h2>
                                <h4 class='text-start xxx-text-shadow'>RS: XXX</h4>
                            </div>
                            <div class="my-3">
                                <button class="btn  btn-light text-danger rounded shadow-sm m-auto">Pay</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg d-flex flex-row justify-content-around my-2 p-4">
                        <div class="row d-flex flex-column justify-content-between p-4 payment-cards">
                            <div>
                                <h2 class='text-start'>Emergency</h2>
                                <h4 class='text-start xxx-text-shadow'>RS: XXX</h4>
                            </div>
                            <div class="my-3">
                                <button class="btn  btn-light text-danger rounded pay-btn-shadow m-auto ">Pay</button>
                            </div>
                        </div>
                    </div>


                </div>



            </form>
        </div>
    );
}

export default PaymentForm;