import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'


import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import './FullCalendar.css'
import FullCalendarHover from './FullCalendarHover'

function renderEventContent(eventInfo) {
  console.log("###############",eventInfo)
  
  return (
    <>
    <Tippy content={<FullCalendarHover  data={eventInfo.event}/>} placement='bottom-end' theme='light'
     arrow={false} interactive={true}  inlinePositioning= {true} zIndex= {99999} 
     appendTo= {document.body} >
    <div className="fc-event-main">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    </Tippy>
    </>
  )
}

class MyFullCalendar extends React.Component {

  
    myEvents =   [{
    start: "2021-10-04T06:00:00",
    end: "2021-10-04T08:00:00",
    title: "one",
    id:'1',
    color:"red",
    groupId:[ 1, 2 ,4]
  },
    {
    start: "2021-10-05T10:00:00",
    end: "2021-10-05T12:30:00",
    title: "two",id:'2',color:"green"
    ,groupId:[5,1,2]
  },
    
    {
    start: "2021-10-06T11:00:00",
    end: "2021-10-06T13:30:00",
    title: "three",id:'3',
    groupId:[2,5,6]
  },
    
    {
    start: "2021-10-07T06:00:00",
    end: "2021-10-07T09:30:00",
    title: "four",id:'4'
  ,groupId:[5,7,8]},
    {
    start: "2021-10-06T14:00:00",
    end: "2021-10-06T15:00:00",
    title: "five",id:'5',
    groupId:[3,5,7]},
    {
      start: "2021-10-04T06:00:00",
      end: "2021-10-04T08:00:00",
      title: "one",
      id:'2',
      color:"red",
      groupId:[8,4]
    },
    {
      start: "2021-10-04T06:00:00",
      end: "2021-10-04T08:00:00",
      title: "one",
      id:'3',
      color:"red",
      groupId:[5,4]
    },
    ]

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

      const newdate =  day+' '+ mon_array[month]+ ', ' +year;
      
      this.setState({date:newdate})

      var today = new Date();
      var time = today.getHours()
      this.setState({time:time})
  }


  render() {
    function handleDateClick(info){
      // console.log(info.event.groupId)
      info.jsEvent.preventDefault();
    }
  
    return (
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
              center: 'prev today next',
              left: 'myCustomButton',
              right: 'timeGridWeek,dayGridMonth'
            }}
            // views= {{
            //           timeGrid: { // name of view
            //             titleFormat: {  month: 'short',day: '2-digit' }
            //             // other view-specific options here
            //           }
            //   }}
            dayHeaderFormat={{ weekday: 'short',day: 'numeric',omitCommas: true }}
            customButtons={{
              myCustomButton:{
                text: this.state.date  }
                
            }}
           
            initialView='timeGridWeek'
            events={this.myEvents}
            eventClick = {(info)=>{handleDateClick(info)}}
            eventContent={renderEventContent}
            height= '490px'
            allDaySlot= {false}
            nowIndicator={true}
            businessHours={{
              daysOfWeek: [ 0,1, 2, 3, 4,5,6 ], // Monday - Thursday

              startTime: '06:00', // a start time (10am in this example)
              endTime: '14:00',
            }}
            
            // slotDuration={'01:00:00'}
            slotLabelInterval={'02:00'}
            slotMinTime={'06:00:00'}
            slotMaxTime={'14:00:00'}
            // Duration = {{hours:2}}
            // contentHeight= '100'
            // aspectRatio='4'

          />
        </div>
      
    )
  }
}

export default MyFullCalendar;