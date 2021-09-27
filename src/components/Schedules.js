import React, { Component } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Schedules.css'
import profile from './images/profile.jpg';


import DepartmentDetails from './DepartmentDetails';
import NotificationBar from "./NotificationBar";
import ScheduleChart from "./ScheduleChart";

class Schedules extends Component {

    state={departdetails:[
        {id:1,dname: 'anesgthesiology'},
        {id:2,dname: 'anesgthesiology'},
        {id:3,dname: 'anesgthesiology'},
        {id:4,dname: 'anesgthesiology'},
        {id:5,dname: 'anesgthesiology'},
        {id:6,dname: 'anesgthesiology'},
        {id:7,dname: 'anesgthesiology'},
        {id:8,dname: 'anesgthesiology'},
        {id:9,dname: 'anesgthesiology'},
        {id:10,dname: 'anesgthesiology'},
        {id:11,dname: 'anesgthesiology'},
        {id:12,dname: 'anesgthesiology'},
        {id:13,dname: 'anesgthesiology'},
        {id:14,dname: 'anesgthesiology'},
        {id:15,dname: 'anesgthesiology'},
        {id:16,dname: 'anesgthesiology'},
        {id:17,dname: 'anesgthesiology'},
        {id:18,dname: 'anesgthesiology'},
        {id:19,dname: 'anesgthesiology'},
        {id:20,dname: 'anesgthesiology'},
        {id:21,dname: 'anesgthesiology'},
        {id:22,dname: 'anesgthesiology'},
        {id:23,dname: 'anesgthesiology'},
        {id:24,dname: 'anesgthesiology'},
        {id:25,dname: 'anesgthesiology'},
        {id:26,dname: 'anesgthesiology'},
        {id:27,dname: 'anesgthesiology'},
        {id:28,dname: 'anesgthesiology'},
        {id:29,dname: 'anesgthesiology'},
        {id:30,dname: 'anesgthesiology'},
        {id:31,dname: 'anesgthesiology'},
        {id:32,dname: 'anesgthesiology'},
        {id:33,dname: 'anesgthesiology'}
]}

    render() {
        return (
            
            <div className='page-content px-lg-5 py-2  container overflow-hidden' id='schedule-content' >
                <NotificationBar />
                <h4 className='fw-bold row '>Schedule</h4>
                <ScheduleChart />
                <DepartmentDetails departdetails={this.state.departdetails} />
            </div>
        )
    }
}
export default Schedules;