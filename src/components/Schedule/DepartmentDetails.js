import React from'react';

const DepartmentDetails = (props) => {
    const {departdetails} = props
    const departdata = departdetails.map(eachdata =>{ 
          
       return( 
           <div key={eachdata.id} className='row  px-0 mx-lg-3  mx-2 justify-content-end '>
                <span className='fw-bolder col-1  p-0 ' style={{width:'25px', textAlign:'center'}}>{eachdata.id}.</span>
                 <span  className='fw-bold col mx-1 p-0'>{eachdata.dname}</span>
           </div>
      
       )
    } )
    
    return (
        <div className='bg-white shadow-sm row mt-2 p-0 m-0 mt-5' style={{fontSize:"13px" }}>
            <h5 className='fw-bolder pt-4 ps-3'>Department Details</h5>
            <div className="bg-white d-flex flex-column  flex-wrap p-3 align-item-start  " style={{width:'100%',height:'260px',overflow:'auto'}}>
            {departdata}</div>
        </div>
      );
}
 
export default DepartmentDetails;