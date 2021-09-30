import React, { Component } from "react";
import './DashBoard1.css'
import user from './images/drstrange1.jpg';
import profile from './images/profile.jpg';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import ravi from './images/ravi.jpg'
import NotificationBar from "./NotificationBar";
import Listing from "./Dashboard/Listing";
import Timeline from "./Dashboard/Timeline";
import  OnCall from './Dashboard/OnCall'

class DashBoard extends Component {
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
                    dname: 'Dr.Acchal Shail',
                    oncall: 'yes',
                    department: 'Dental',
                    date: '25 june,2021',
                    time: '08:00 am',
                    code: 1
                },
                {
                    dname: 'Dr.Anil Kumar Thakur',
                    oncall: 'no',
                    department: 'Gynocologist',
                    date: '25 june,2021',
                    time: '12:00 am',
                    code: 2
                },
                {
                    dname: 'Dr.Bivek Thapa',
                    oncall: 'no',
                    department: 'Physician',
                    date: '25 june,2021',
                    time: '10:00 am',
                    code: 3
                },
                {
                    dname: 'Dr.Strange',
                    oncall: 'no',
                    department: 'Neurologist',
                    date: '25 june,2021',
                    time: '06:00 am',
                    code: 4
                }
    
            ],
    

        timeline: [
        { id: 1, d1: 'sonam', d2: 'ravi', d3: ' ', d4: ' ' },
        { id: 2, d1: 'ashok', d2: ' ', d3: 'sonam', d4: ' ' },
        { id: 3, d1: ' ', d2: ' ', d3: ' ', d4: ' ' },
        { id: 4, d1: 'ravi', d2: ' ', d3: 'profile', d4: 'ravi' },
        { id: 5, d1: 'ravi', d2: ' ', d3: 'profile', d4: 'ravi' },
        { id: 6, d1: 'ravi', d2: ' ', d3: 'profile', d4: 'ravi' },
        { id: 7, d1: 'ravi', d2: ' ', d3: 'profile', d4: 'ravi' },
    
    
    ],
        timeline2:[
            {id:1, col1: 1, col2:" ", col3:" ", col4:" ", col5:" ", col6:" ",col7:" ",col8:" ", col9:8 },
            {id:2, col1: " ", col2:2, col3:" ", col4:" ",col5:2, col6:" ",col7:" ",col8:2, col9:" " },
            {id:3, col1: " ", col2:" ", col3:" ", col4:" ",col5:" ", col6:" ",col7:5,col8:" ", col9:" " },
            {id:4, col1: " ", col2:" ", col3: 4, col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:5, col1: " ", col2:1 , col3:" ", col4:2,col5:" ", col6:" ",col7:" ",col8:4, col9:" " },
            {id:6, col1: 3, col2:" ", col3:" ", col4:" ",col5:" ", col6:" ",col7:3 ,col8:" ", col9:" " },
            {id:8, col1: " ", col2:" ", col3:7 , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:9, col1: " ", col2:" ", col3:1 , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:10, col1: 8, col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:11, col1: " ", col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:1,col8:" ", col9:" " },
            {id:12, col1: " ", col2:" ", col3:" " , col4:5,col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:13, col1: " ", col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:15, col1: 4, col2:" ", col3:3 , col4:" ",col5:" ", col6:" ",col7:4, col8:" ", col9:5 },
            {id:16, col1: " ", col2:1 , col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:17, col1: " ", col2:" ", col3:3 , col4:2 ,col5:" ", col6:" ",col7:" ",col8:" ", col9:" " },
            {id:18, col1: 8 , col2:" ", col3:" " , col4:" ",col5:" ", col6:" ",col7:" ",col8:" ", col9:" " }
        ],

        oncall:[1,5,8,2,3,4],
        date: null,
        time:null

    }
    
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
        
        this.setState({date:newdate})

        var today = new Date();
        var time = today.getHours()
        this.setState({time:time})
    }


    render(){

        return(
            <div className="page-content px-lg-5  py-2 overflow-hidden container " id='content'>

                <NotificationBar />
                <div className="row mt-5 ">
                    <span className='col-6 fw-bold' style={{ fontSize: '20px' }}>Dashboard</span>
                    <span className='col-6  text-end'><i class="fas fa-redo-alt bg-white shadow-sm p-1 rounded-1 text-muted fs-6 "></i></span>
                </div>


                <div className="row mt-5 mx-0 ">
                    <div className="col-lg-6 col-12 ps-lg-0  overflow-hidden ">
                    {/* <Tabulizer data={this.state.timeline} date={this.state.date}/> */}
                        <Timeline timeline_data={this.state.timeline2} date={this.state.date} schedule_data={this.state.schedule_data} time={this.state.time}/>
                    </div>
                    <div className="col-lg-6 col-12  pe-lg-0">
                    <Listing data={this.state.data}/>
                    </div>
                </div>

                <div className="row mt-3 mx-lg-0 mx-2 bg-white rounded shadow-sm py-3">
                    <p className='seemore'>ON call duty</p>

                    <OnCall oncall={this.state.oncall} />

                </div>
            </div>

        )
    }


}
 
export default DashBoard