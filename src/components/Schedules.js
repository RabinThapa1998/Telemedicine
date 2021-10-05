import React, { Component } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Schedules.css'
import profile from './images/profile.jpg';


import DepartmentDetails from './Schedule/DepartmentDetails';
import NotificationBar from "./NotificationBar";
import ScheduleChart from "./Schedule/ScheduleChart";
import MyFullCalendar from './Schedule/FullCalendar'

import { connect } from "react-redux";

class Schedules extends Component {

    render() {
        return (
            
            <div className='page-content px-lg-5 py-2  container overflow-hidden' id='schedule-content' >
                <NotificationBar />
                <h4 className='fw-bold row '>Schedule</h4>
                {/* <ScheduleChart /> */}
                <MyFullCalendar />
                <DepartmentDetails departdetails={this.props.departdetails} />
            </div>
        )
    }
}

const mapStateToProps =  (state)=>{
    return{
        departdetails: state.scheduleReducer.departdetails
    }
}

export default connect(mapStateToProps)(Schedules);