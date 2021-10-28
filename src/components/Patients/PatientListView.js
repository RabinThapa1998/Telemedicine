import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class PatientListView extends Component {

    
    render()
    {
    const {patientlist} = this.props
    const {hover} = this.props
   

    const listviewdata = patientlist.map(each=>{

        return(
            <a href="#" className='text-decoration-none ' onClick={ (e)=>this.props.handlelistclick(each.id,e) }>
            <div className={`d-flex flex-row list-group-item justify-content-between p-1 list-hover ${hover=== each.id ? 'active2':' '} `} key={each.id} >
                <div className='d-flex flex-row'> 
                <img src={each.img} alt="profile" className="mbsc-avatar me-1" width="34" height="34"  />
                <div className='' style={{fontSize:'0.75rem' }}>
                    <p className='m-0 me-2 fw-bold'>{each.name}</p>
                    <span className='text-muted'>{each.gender},</span>
                    <span className='text-muted'>{each.age}</span>
                </div>
                </div>
                <i class="fas fa-ellipsis-h"></i>

            </div>
            </a>
        )
    })
    
    return (
        <div className='col-xl-3 col-12 order-xl-first  order-last me-2 bg-white shadow-sm rounded ' >
            <Link to='/createpatient'>
            <button className='btn   fw-bold my-4' style={{borderRadius:'2.5rem', backgroundColor:'#7682EF', color:'white'}}>Create Patient</button>
            </Link>
            <div className="input-group mb-3 input-group-sm  px-2 py-1 border  " style={{borderRadius:'3.125rem'}} >
                <input type="search" className="form-control border-0" placeholder="Patient List" aria-label="Patient List" aria-describedby="inputGroup-sizing-sm"
                style={{fontSize:'0.75rem', margin:'auto'}}
                ></input>
                {/* <div className="input-group-append "> */}
                    <button type="button" className="btn" style={{fontSize:'1rem', float:'right',right:"-0.438rem" }}>
                        <i className="fas fa-search text-secondary p-0 m-0 "></i>
                    </button>
                {/* </div> */}
            </div>
        
            <div className=' overflow-auto scrollbar ' style={{height:'25rem', scrollbarGutter:'stable'}}>
                <ul class="list-group list-group-flush ">
                    {listviewdata}
                </ul>

            </div>

        </div>
    );
    }
}

export default PatientListView;