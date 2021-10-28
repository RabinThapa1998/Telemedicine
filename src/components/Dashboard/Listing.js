import React from "react";

const Listing = (props) => {

    const {data} = props
    const patientList = data.map(eachdata => {
        return (
            <tr key={eachdata.id} >
                <th scope='row'>{eachdata.id}</th>
                <td className=' text-secondary'>{eachdata.Name}</td>
                <td className=' text-secondary'>{eachdata.Age}</td>
                <td className=' text-secondary'>{eachdata.Gender}</td>
                <td className=' text-secondary'>{eachdata.LastVisit}</td>
            </tr>
        )
    })
    return (

        // <div className="row justify-content-between  mt-5 listings  row-margin" style={{ fontSize: '10px' }}  >
        <>
          
            <div className="row table-responsive p-0 m-0 rounded shadow-sm  bg-white" >
            <div className=' col g-0 px-sm-2 scrollbar' style={{height:'250px',overflow:'auto',scrollbarGutter:'stable'}}>
                <table className='table  table-borderless  table-hover  ' style={{fontSize:"0.688rem" ,boxSizing:'border-box'}} >

                    <thead >
                        <tr className='list-fonts'>
                            <td colSpan='4'>  <span className=' text-secondary text-start fw-bold ps-1'>Patient List</span></td>
                            <td><a href="#" className='text-decoration-none text-end seemore fw-bold  me-2'> See More</a></td>
                        </tr>

                        <tr>
                            <th scope="col" className='col'>SN</th>
                            <th scope="col" className='col'>Name</th>
                            <th scope="col" className='col'>Age</th>
                            <th scope="col" className='col'>Gender</th>
                            <th scope="col" className='col'>Last Visit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList}
                    </tbody>
                </table>
                </div>
            </div>
     
            <div className="row mt-3 table-responsive p-0 m-0 rounded shadow-sm  bg-white " >
            <div className='scrollbar col g-0 px-sm-2' style={{height:'250px',overflow:'auto',scrollbarGutter:'stable'}}>
                <table className='table  table-borderless  table-hover' style={{fontSize:"0.688rem" ,boxSizing:'border-box'}} >

                    <thead >
                        <tr className='list-fonts'>
                            <td colSpan='4'>  <span className=' text-secondary text-start fw-bold ps-1'>Doctor List</span></td>
                            <td><a href="#" className='text-decoration-none text-end seemore fw-bold  me-2'> See More</a></td>
                        </tr>
                        <tr >
                            <th scope="col" className='col'>SN.</th>
                            <th scope="col" className='col' >Name</th>
                            <th scope="col" className='col'>Age</th>
                            <th scope="col" className='col'>Gender</th>
                            <th scope="col" className='col'>Last Visit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList}
                    </tbody>
                </table>
                </div>
           
            </div>
    </>

    );
}

export default Listing;