import React, { Component } from "react";
import './DashBoard1.css'
import user from './images/drstrange1.jpg';
import profile from './images/profile.jpg';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';
import Tabulizer from './Tabulizer';
import ravi from './images/ravi.jpg'
import NotificationBar from "./NotificationBar";


class DashBoard1 extends Component {
    state = {
        data: [
            { Name: 'Rabin Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 1 },
            { Name: 'Bivek Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 2 },
            { Name: 'Anil kumar Thakur', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 3 },
            { Name: 'Spiderman Singh', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 4 },
            { Name: 'King Kong', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 5 },
            { Name: 'Rock Thapa', Age: '23', Gender: 'M', LastVisit: '15 Dec 2020', id: 6 }],
        schedule_data: [
            {
                doctor: 'Dr.Acchal Shail',
                oncall: 'yes',
                department: 'Dental'
            },
            {
                doctor: 'Dr.Anil Kumar Thakur',
                oncall: 'no',
                department: 'Gynocologist',
                date: '25 june,2021 08:00 am'
            },
            {
                doctor: 'Dr.Bivek Thapa',
                oncall: 'no',
                department: 'Physician',
                date: '25 june,2021 06:00 am'
            },
            {
                doctor: 'Dr.Strange',
                oncall: 'no',
                department: 'Neurologist',
                date: '25 june,2021 06:00 am'
            }

        ],

        timeline: [
        { id: 1, d1: 'sonam', d2: 'ravi', d3: ' ', d4: ' ' },
        { id: 2, d1: 'ashok', d2: ' ', d3: 'sonam', d4: ' ' },
        { id: 3, d1: ' ', d2: ' ', d3: ' ', d4: ' ' },
        { id: 4, d1: 'ravi', d2: ' ', d3: 'profile', d4: 'ravi' }],
        date: null

    }
    // constructor() {
    //     this.state = {
    //       currentDateTime: Date().toLocaleString()
    //     }
    //     this.setState()
    //   }
    componentDidMount() {
        var mon_array = new Array();
        mon_array[0] = "January";
        mon_array[1] = "February";
        mon_array[2] = "March";
        mon_array[3] = "April";
        mon_array[4] = "May";
        mon_array[5] = "June";
        mon_array[6] = "July";
        mon_array[7] = "August";
        mon_array[8] = "Sep";
        mon_array[9] = "Oct";
        mon_array[10] = "Nov";
        mon_array[11] = "Dec"
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() ; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const newdate = mon_array[month] +- + day;
        console.log(newdate);
        this.setState({date:newdate})
    }

    render() {
        const patientList = this.state.data.map(eachdata => {
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


            <div className="page-content px-lg-5 py-2  container " id='content' >
                {/* <button id='sidebarCollapse' type='button' className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4" onClick={this.handleToggle}>
                        <small className='text-uppercase font-weight-bold'>Toggle</small>
                    </button>
                 */}
             
                 <NotificationBar />


                <div className="row mt-5">
                    <span className='col-6 fw-bold' style={{ fontSize: '20px' }}>Dashboard</span>
                    <span className='col-6  text-end'><i class="fas fa-redo-alt bg-white shadow-sm p-1 rounded-1 text-muted fs-6 "></i></span>
                </div>


                <div className="row  justify-content-center  timeline   row-margin" >
                    <div className="col-12  rounded-1 shadow-sm container bg-white row-margin">
                        <div className="row row-margin  " style={{ fontSize: '12px' }}>
                            <span className='col-6 fw-bold text-secondary mt-2'>Latest Schedule</span>
                            <a href="#" className='text-decoration-none col-6 text-end  fw-bold mt-2 pe-4 seemore'>See More</a>
                        </div>

                        <Tabulizer data={this.state.timeline} date={this.state.date}/>

                  

                </div>
                </div>
                


                <div className="row justify-content-between  mt-5 listings  row-margin" style={{ fontSize: '10px' }}  >

                    {/* <div className="patient-list   col-5   rounded-1 shadow-sm bg-white  " > */}
                    {/* <div className="row ">
                            <span className='col text-secondary text-start'>Patient List</span>
                            <span className='col  text-end text-danger'>See More</span>
                        </div> */}

                    {/* <div className='row'> */}
                    <div className="col-md-5  row-margin table-responsive " >
                        <table className='table  table-borderless table-sm rounded shadow-sm  bg-white table-hover ' >

                            <thead >
                                <tr className='list-fonts'>
                                    <td colSpan='4'>  <span className=' text-secondary text-start fw-bold ps-1'>Patient List</span></td>
                                    <td><a href="#" className='text-decoration-none text-end seemore fw-bold  me-2'> See More</a></td>
                                </tr>

                                <tr>
                                    <th scope="col" className='col-1'>SN</th>
                                    <th scope="col" className='col-2'>Name</th>
                                    <th scope="col" className='col-1'>Age</th>
                                    <th scope="col" className='col-1'>Gender</th>
                                    <th scope="col" className='col-1'  >Last Visit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientList}
                            </tbody>
                        </table>
                    </div>
                    {/* </div> */}
                    {/* <div className='row'> */}
                    <div className="col-md-5 row-margin  table-responsive ">
                        <table className='table  table-borderless table-sm rounded shadow-sm  bg-white   table-hover' >

                            <thead >
                                <tr className='list-fonts'>
                                    <td colSpan='4'>  <span className=' text-secondary text-start fw-bold ps-1'>Doctor List</span></td>
                                    <td><a href="#" className='text-decoration-none text-end seemore fw-bold  me-2'> See More</a></td>
                                </tr>
                                <tr >
                                    <th scope="col" className='col-1'>SN.</th>
                                    <th scope="col" className='col-2' >Name</th>
                                    <th scope="col" className='col-1'>Age</th>
                                    <th scope="col" className='col-1'>Gender</th>
                                    <th scope="col" className='col-1'>Last Visit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {patientList}
                            </tbody>
                        </table>
                        {/* </div> */}
                    </div>

                </div>





            </div>
        )
    }
}
export default DashBoard1;