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
import {connect} from 'react-redux'

class DashBoard extends Component {
    state = {
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
                    <div className="col-lg-6 col-12 pe-lg-2  px-0  overflow-hidden ">
                    {/* <Tabulizer data={this.state.timeline} date={this.state.date}/> */}
                        <Timeline timeline_data={this.props.timeline_root} date={this.state.date} schedule_data={this.state.schedule_data} time={this.state.time}/>
                    </div>
                    <div className="col-lg-6 col-12  ps-lg-2 px-0">
                    <Listing data={this.props.data}/>
                    </div>
                </div>

                <div className="row mt-3 mx-auto  bg-white rounded shadow-sm py-3">
                    <p className='seemore'>ON call duty</p>

                    <OnCall oncall={this.props.oncall} />

                </div>
            </div>

        )
    }

}

const mapStateToProps = (state)=>{
    return {
        timeline_root: state.dashboardReducer.timeline_root,
        oncall: state.dashboardReducer.oncall,
        data: state.dashboardReducer.data
    }
}
 
export default connect(mapStateToProps)(DashBoard)