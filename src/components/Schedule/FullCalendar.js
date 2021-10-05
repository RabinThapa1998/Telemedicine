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
              left: 'title',
              right: 'timeGridWeek,dayGridMonth'
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