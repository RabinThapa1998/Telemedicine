import React from "react";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonia from '../images/sonam.jpg'


const TimeLineRender = (props) => {
    const { code } = props

    function handlefunc(code) {
    
        switch (code) {
            case 1:
                return {
                    name: 'Dr. Ashok Shail',
                    img: ashok,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                    

                }
            case 2:
                return {
                    name: 'Dr.Sonia Setty',
                    img: sonia,
                    department:'Physicist',
                    date:'25 June,2021 08:00 am' 
                    
                }
            case 3:
                return {
                    name: 'Emily',
                    img: ravi,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                }
            case 4:
                return {
                    name: 'Rose',
                    img: sonia,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                }
            case 5:
                return {
                    name: 'Matt',
                    img: ravi,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                }
            case 6:
                return {
                    name: 'Rick',
                    img: ashok,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                }
            case 7:
                return {
                    name: 'John',
                    img: ravi,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                }
            case 8:
                return {
                    name: 'Ethan',
                    img: ashok,
                    department:'Dental',
                    date:'25 June,2021 08:00 am' 
                }
        }

    }

    const datatodisplay = handlefunc(code);
    
    
    return (

        <>
        <Tippy content={
        <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                <p className=' text-muted' style={{ fontSize: '0.563rem' }}>Department</p>
                <p className=' fw-bold'>{datatodisplay.department}</p>
                <p className=' text-muted' style={{ fontSize: '0.563rem' }}>Doctor</p>
                <p className='mb-2 fw-bold'>{datatodisplay.name}</p>
                <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '0.625rem', textAlign: 'center' }}>BOOKNOW</button>
            </div>} 
            placement='bottom-start' interactive={true}  inlinePositioning= {true}  theme='light' arrow={false}>

        <img src={datatodisplay.img}  className="mbsc-avatar p-0 shadow-sm border border-black" width="100" height="100"     alt="" />
        </Tippy>
            
        </>
    );
}

export default TimeLineRender;