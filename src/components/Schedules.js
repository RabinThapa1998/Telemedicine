import React, { Component } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './Schedules.css'
import profile from './images/profile.jpg';


import DepartmentDetails from './Schedule/DepartmentDetails';
import NotificationBar from "./NotificationBar";
import ScheduleChart from "./Schedule/ScheduleChart";

class Schedules extends Component {

    state={departdetails:[
        {id:1,dname: 'anesgthesiology'},
        {id:2,dname: 'cardiology & cardiac surgery'},
        {id:3,dname: 'cardiothoracic & vascular surgery'},
        {id:4,dname: 'Critical Care medicine'},
        {id:5,dname: 'Dentistry & Dental Surgery'},
        {id:6,dname: 'Department of Neuro Sciences'},
        {id:7,dname: 'Dermatovenerology & Cosmetic'},
        {id:8,dname: 'Dermatology'},
        {id:9,dname: 'Emergency Medicine & EMS'},
        {id:10,dname: 'Endocrinology and Diabetology'},
        {id:11,dname: 'ENT & Head Neck Surgery'},
        {id:12,dname: 'Urology & Kidney Transplant Surgery'},
        {id:13,dname: 'Wellness & Family Medicine'},
        {id:14,dname: 'Gastroenterology & Hepatology'},
        {id:15,dname: 'General Surgery, Digestive Diseases and Laparoscopic Surgery'},
        {id:16,dname: 'Geriatric Medicine'},
        {id:17,dname: 'Infectious Diseases'},
        {id:18,dname: 'Internal Medicine'},
        {id:19,dname: 'Laboratory Services'},
        {id:20,dname: 'Neonatal & Pediatric Surgery'},
        {id:21,dname: 'Neonatal Critical Care'},
        {id:22,dname: 'Nephrology & Transplant Medicine'},
        {id:23,dname: 'Obstetrics & Gynecology'},
        {id:24,dname: 'Oncology'},
        {id:25,dname: 'Ophthalmology & Vision Sciences'},
        {id:26,dname: 'Orthopedics & Traumatology'},
        {id:27,dname: 'Pediatrics & Neonatology'},
        {id:28,dname: 'Physical Therapy and Rehabilitation'},
        {id:29,dname: 'Plastic, Reconstructive & Cosmetic Surgery'},
        {id:30,dname: 'Psychiatry'},
        {id:31,dname: 'Pulmonary Medicine'},
        {id:32,dname: 'Radiology & Interventions'},
        {id:33,dname: 'Transfusion Medicine and Blood Bank'}
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