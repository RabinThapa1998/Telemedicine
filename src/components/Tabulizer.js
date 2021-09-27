import React from "react";
import ashok from './images/ashok.jpg'
import ravi from './images/ravi.jpg'
import sonam from './images/sonam.jpg'
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

const Tabulizer = (props) => {
    const { data } = props
    const table_list = data.map(d=>{
        
        return (
            <tr key={d.id} className='border-bottom border-top table-line-height'>
                {/* <th scope='row'>{d.id}</th> */}

                <td >
                    <Tippy content={
                        <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Department</p>
                            <p className=' fw-bold'>DENTAL</p>
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Doctor</p>
                            <p className='mb-2 fw-bold'>DR Acchalshail</p>
                            <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '10px', textAlign: 'center' }}>BOOKNOW</button>
                        </div>
                    } 
                    placement='bottom-start' theme='light' arrow={false} >
                        <span>{ d.d1 != ' ' ? <img src={require(`./images/${d.d1}.jpg`).default} className='profile shadow-sm' alt={d.d1} />  : ' '} &nbsp;</span>                        
                    </Tippy>
                </td>
                <td >
                    <Tippy content={
                        <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Department</p>
                            <p className=' fw-bold'>DENTAL</p>
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Doctor</p>
                            <p className='mb-2 fw-bold'>DR Acchalshail</p>
                            <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '10px', textAlign: 'center' }}>BOOKNOW</button>
                        </div>
                    } 
                    placement='bottom-start' theme='light' arrow={false} >
                        <span>{ d.d2 != ' ' ? <img src={require(`./images/${d.d2}.jpg`).default} className='profile shadow-sm' alt={d.d2} />  : ' '} &nbsp;</span>                        
                    </Tippy>
                 </td>
                <td > <Tippy content={
                        <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Department</p>
                            <p className=' fw-bold'>DENTAL</p>
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Doctor</p>
                            <p className='mb-2 fw-bold'>DR Acchalshail</p>
                            <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '10px', textAlign: 'center' }}>BOOKNOW</button>
                        </div>
                    } 
                    placement='bottom-start' theme='light' arrow={false} >
                        <span>{ d.d3 != ' ' ? <img src={require(`./images/${d.d3}.jpg`).default} className='profile shadow-sm' alt={d.d3} />  : ' '} &nbsp;</span>                        
                    </Tippy> </td>
                <td >
                <Tippy content={
                        <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Department</p>
                            <p className=' fw-bold'>DENTAL</p>
                            <p className=' text-muted' style={{ fontSize: '9px' }}>Doctor</p>
                            <p className='mb-2 fw-bold'>DR Acchalshail</p>
                            <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '10px', textAlign: 'center' }}>BOOKNOW</button>
                        </div>
                    } 
                    placement='bottom-start' theme='light' arrow={false} >
                        <span>{ d.d4 != ' ' ? <img src={require(`./images/${d.d4}.jpg`).default} className='profile shadow-sm' alt={d.d4} />  : ' ' } &nbsp;</span>                        
                    </Tippy> </td>
            </tr>)

    })
    return (


        <div className='row row-margin' >
            <div className="col-1 my-auto ms-5 me-0 table-condensed ">
                <span className='fw-bold text-muted'> {props.date}</span>

            </div>
            <div className="col">

                <table className=' mx-left my-3 ms-0 table-condensed row-margin' id='table' style={{ width: '80%' }}>
                    <thead>

                        <tr className=' text-muted text-center table-line-height' >

                            <th scope='col' className='pb-3'>6:00 AM</th>
                            <th scope='col' className='pb-3'>8:00 AM</th>
                            <th scope='col' className='pb-3'>2:00 PM</th>
                            <th scope='col' className='pb-3'>7:00 PM</th>

                        </tr>

                    </thead>


                    <tbody className='text-center '></tbody>
                    {table_list}
                </table>
            </div>
        </div>


    );
}

export default Tabulizer;