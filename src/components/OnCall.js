import React from "react";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

import ashok from './images/ashok.jpg'
import ravi from './images/ravi.jpg'
import sonia from './images/sonam.jpg'
const OnCall = (props) => {
    const { oncall } = props

    function handlefunc(code) {

        switch (code) {
            case 1:
                return {
                    name: 'Dr. Ashok Shail',
                    img: ashok,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'

                }
            case 2:
                return {
                    name: 'Dr.Sonia Setty',
                    img: sonia,
                    department: 'Physicist',
                    date: '25 June,2021 08:00 am'

                }
            case 3:
                return {
                    name: 'Emily',
                    img: ravi,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'
                }
            case 4:
                return {
                    name: 'Rose',
                    img: sonia,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'
                }
            case 5:
                return {
                    name: 'Matt',
                    img: ravi,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'
                }
            case 6:
                return {
                    name: 'Rick',
                    img: ashok,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'
                }
            case 7:
                return {
                    name: 'John',
                    img: ravi,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'
                }
            case 8:
                return {
                    name: 'Ethan',
                    img: ashok,
                    department: 'Dental',
                    date: '25 June,2021 08:00 am'
                }
        }
    }
    const onCalllist = oncall.map(eachdata => {

        return (
            <div key={eachdata} className="px-5">
                <Tippy content={
                    <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                        <p className=' text-muted' style={{ fontSize: '9px' }}>Department</p>
                        <p className=' fw-bold'>{handlefunc(eachdata).department}</p>
                        <p className=' text-muted' style={{ fontSize: '9px' }}>Doctor</p>
                        <p className='mb-2 fw-bold'>{handlefunc(eachdata).name}</p>
                        <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '10px', textAlign: 'center' }}>BOOKNOW</button>
                    </div>}
                    placement='bottom-start' theme='light' arrow={false}>
                    <img src={handlefunc(eachdata).img} alt="" className="mbsc-avatar p-0 shadow-sm border border-black" width="100" height="100" />
                </Tippy>
            </div>
        )
    })


    return (
        <div className="  px-4  d-flex justify-content-end">
           <div className='d-flex flex-row justify-content-between overflow-auto mx-0' style={{width:'95%', borderBottom:'1px solid rgba(255,84,75,0.7)', borderTop:"1px solid rgba(255,84,75,0.7)" }}>
            {onCalllist}
            </div>
        </div>
    )


}

export default OnCall;