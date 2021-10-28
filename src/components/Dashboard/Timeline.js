import React from "react";
import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonam from '../images/sonam.jpg'
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';
import TimeLineRender from "./TimeLineRender";

const Timeline = (props) => {
    const { schedule_data,timeline_data,time } = props

    const table_list = timeline_data.map(d=>{   

       
        return (
            <tr key={d.id} className='border-bottom border-top table-line-height'  style={{fontSize:"0.938rem"}}>
               

                <td >
                {d.col1 != ' ' ? <TimeLineRender code={d.col1}/> : <span>&nbsp;</span>}
                </td>
                <td>
                {d.col2 != ' '?  <TimeLineRender code={d.col2}/>  : <span>&nbsp;</span> }
                </td>
                <td>
                {d.col3 != ' '?  <TimeLineRender code={d.col3}/> : <span>&nbsp;</span> }
                </td>
                <td>
                {d.col4 != ' '?  <TimeLineRender code={d.col4}/> : <span>&nbsp;</span> }
                </td>
                <td>
                {d.col5 != ' '?  <TimeLineRender code={d.col5}/> : <span>&nbsp;</span> }
                </td>
                <td>
                {d.col6 != ' '?  <TimeLineRender code={d.col6}/> : <span>&nbsp;</span> }
                </td>
                <td>
                {d.col7 != ' '?  <TimeLineRender code={d.col7}/> : <span>&nbsp;</span> }
                </td>
                <td>
                {d.col8 != ' '?  <TimeLineRender code={d.col8}/> : <span>&nbsp;</span> }
                </td>
                
            </tr>)

    })
    return (


        <div className='row  bg-white rounded shadow-sm m-0 px-2 mb-3 py-1'>
            <div className="row py-2 ">
                <p className="text-secondary fw-bold">LatestSchedule</p>
            </div>
            <div className="col-lg-1 my-auto ms-1 me-3 table-condensed " style={{whiteSpace:'nowrap'}}>
                <span className='fw-bold text-muted'> {props.date}</span>

            </div>
            <div className="col-lg  scrollbar " style={{ height:"460px",overflow:'auto' ,fontSize:'0.625rem',boxSizing:'border-box',scrollbarGutter:'stable',overflowY:'scroll',overflowX:'scroll', width: '100vw'}}>
           
                <table className=' table ' id='table' style={{boxSizing:'border-box'}} >             
                    <thead >
                    
                        <tr className=' text-muted text-center table-line-height bg-white' style={{position:'sticky', top:'0px'}} >

                            <th scope='col' className='pb-3  px-4'>
                            { 6 == time? <span className='bg-primary text-white '>6:00 AM</span>: <span>6:00 AM</span>
                            }</th>
                            <th scope='col' className='pb-3  px-4'>
                            { 8 == time? <span className='bg-primary text-white shadow-sm p-2 '>8:00 AM</span>: <span>8:00 AM</span>
                            }</th>
                            <th scope='col' className='pb-3  px-4'>
                            { 14 == time? <span className='bg-primary text-white shadow-sm p-2 '>2:00 PM</span>: <span>2:00 PM</span>
                            }</th>
                            <th scope='col' className='pb-3  px-4'>
                            { 19 == time? <span className='bg-primary text-white shadow-sm p-2 '>7:00 PM</span>: <span>7:00 PM</span>
                            }
                            </th>
                            <th scope='col' className='pb-3  px-4'>
                            { 20 == time? <span className='bg-primary text-white shadow-sm p-2 '>8:00 PM</span>: <span>8:00 PM</span>
                            }</th>
                            <th scope='col' className='pb-3  px-4'>
                            { 22 == time? <span className='bg-primary text-white shadow-sm p-2 '>10:00 PM</span>: <span>10:00 PM</span>
                            }
                            </th>
                            <th scope='col' className='pb-3  px-4'>
                            { 1 == time? <span className='bg-primary text-white shadow-sm p-2 '>1:00 AM</span>: <span>1:00 AM</span>
                            }</th>
                            <th scope='col' className='pb-3  px-4'>
                            { 2 == time? <span className='bg-primary text-white shadow-sm p-2 '>2:00 AM</span>: <span>2:00 AM</span>
                            }</th>
                            <th scope='col' className='pb-3  px-4'>
                            { 3 == time? <span className='bg-primary text-white shadow-sm p-2 '>3:00 AM</span>: <span>3:00 AM</span>
                            }</th>

                        </tr>

                    </thead>


                    <tbody className='text-center '></tbody>
                    {table_list}
                </table>
            </div>
        </div>


    );
}

export default Timeline;