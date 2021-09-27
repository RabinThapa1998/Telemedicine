import React from'react';

const DepartmentDetails = (props) => {
    const {departdetails} = props
    const departdata = departdetails.map(eachdata =>{ 
          
       return( 
           <div key={eachdata.id} className='d-flex flex-row '>
                <span className='fw-bolder '>{eachdata.id}. </span>
                 <span  className='fw-bold'>{eachdata.dname}</span>
           </div>
      
       )
    } )
    
    return (
        <div className='bg-white shadow-sm row mt-2 p-0 m-0 mt-5' style={{fontSize:"13px"}}>
            <h5 className='fw-bolder pt-4 ps-3'>Department Details</h5>
            <div className="bg-white d-flex flex-column flex-wrap  p-3 justify-content-around " style={{width:'100%',height:'200px',overflow:'auto'}}>
            {departdata}</div>
        </div>
      );
}
 
export default DepartmentDetails;