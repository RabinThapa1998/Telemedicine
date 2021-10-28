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
  // console.log("###############",eventInfo)
  
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
    start: "2021-10-23T06:00:00",
    end: "2021-10-23T08:00:00",
    title: "1",
    id:'1',
    color:"cyan",
    groupId:[ 1, 2 ,4]
  },
    {
    start: "2021-10-26T10:00:00",
    end: "2021-10-26T12:30:00",
    title: "2",id:'2',color:"pink"
    ,groupId:[5,1,2]
  },
    
    {
    start: "2021-10-27T11:00:00",
    end: "2021-10-27T12:30:00",
    title: "3",id:'3',color:"black",
    groupId:[2,5,6]
  },
    
    {
    start: "2021-10-25T06:00:00",
    end: "2021-10-25T09:30:00",
    title: "4",id:'4'
  ,groupId:[5,7,8]},
    {
    start: "2021-10-26T14:00:00",
    end: "2021-10-26T15:00:00",
    title: "5",id:'5',
    groupId:[3,5,7]},
    {
      start: "2021-10-23T06:00:00",
      end: "2021-10-23T08:00:00",
      title: "4",
      id:'6',
      color:"red",
      groupId:[8,4]
    },
    {
      start: "2021-10-21T06:00:00",
      end: "2021-10-21T07:30:00",
      title: "3",
      id:'7',
      color:"purple",
      groupId:[1,2]
    },
    {
      start: "2021-10-23T09:00:00",
      end: "2021-10-23T10:00:00",
      title: "1",
      id:'8',
      color:"orange",
      groupId:[2,3,5,4]
    },
    {
      start: "2021-10-24T10:00:00",
      end: "2021-10-24T14:30:00",
      title: "2",
      id:'9',
      color:"grey",
      groupId:[7]
    }
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
        <div style={{scrollbarGutter:'stable'}}  >
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
            height= '500px'
            allDaySlot= {false}
            nowIndicator={true}
            businessHours={{
              daysOfWeek: [ 0,1, 2, 3, 4,5,6 ], //all days of a weeek

              startTime: '06:00', // a start time (10am in this example)
              endTime: '15:00',
            }}
            
            // slotDuration={'01:00:00'}
            slotLabelInterval={'02:00'}
            slotMinTime={'06:00:00'}
            slotMaxTime={'15:00:00'}
            // Duration = {{hours:2}}
            // contentHeight= '100'
            // aspectRatio='4'

          />
        </div>
      
    )
  }
}

export default MyFullCalendar;