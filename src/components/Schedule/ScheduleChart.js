import React from 'react';
import { Eventcalendar, getJson, toast, setOptions, CalendarNav, Button, CalendarToday, SegmentedGroup, SegmentedItem } from '@mobiscroll/react';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import './ScheduleChart.css'
import ScheduleChartHover from './ScheduleChartHover';
import mobiscroll from '@mobiscroll/react';
const ScheduleChart = () => {
    // const [myEvents, setEvents] = React.useState([]);

    // React.useEffect(() => {
    //     getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
    //         setEvents(events);
    //     }, 'jsonp');
    // }, []);
    setOptions({
        theme: 'material',
        themeVariant: 'light'
    });


    const [view, setView] = React.useState('schedule');
    // const [myEvents, setEvents] = React.useState([]);
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [calView, setCalView] = React.useState(
        {
            schedule: {
                type: 'week',
                allDay: false,
                startTime: '06:00',
                endTime: '12:00'
                // timeLabelStep: 120
            }
        }
    );

    const myEvents = React.useMemo(() => {
        return [
            {
                start: "2021-09-30T06:00:00.000Z",
                end: "2021-09-30T08:00:00.000Z",
                title: "1",
                color: "#ff6d42",
                category: 1,
                participants: [1, 5,2,7,6,3,4]
            },
            {
                start: "2021-09-25T10:00:00.000Z",
                end: "2021-09-25T11:00:00.000Z",
                title: "2",
                color: "#228c73",
                category: 2,
                participants: [1, 2, 6]
            },
            {
                start: "2021-09-24T06:00:00.000Z",
                end: "2021-09-24T10:00:00.000Z",
                title: "3",
                color: "#cc9911"
                ,
                category: 3,
                participants: [1, 5, 2]
            },
            {
                start: "2021-09-28T10:00:00.000Z",
                end: "2021-09-28T12:20:00.000Z",
                title: "4",
                color: "#cc99323"
                ,
                category: 4,
                participants: [1, 5, 3]
            },
            {
                start: "2021-09-29T10:00:00.000Z",
                end: "2021-09-29T12:20:00.000Z",
                title: "5",
                labels: 'the game of time',
                color: "#f8f3f6f6"
                ,
                category: 5,
                participants: [5, 4, 1]
            },
            {
                start: "2021-09-29T10:00:00.000Z",
                end: "2021-09-29T12:20:00.000Z",
                title: "6",
                labels: 'the game of time',
                color: "#2596be"
                ,
                category: 6,
                participants: [1, 2, 4]
            },
            {
                start: "2021-09-29T10:00:00.000Z",
                end: "2021-09-29T12:20:00.000Z",
                title: "7",
                labels: 'the game of time',
                color: "#abdbe3"
                ,
                category: 7,
                participants: [2, 5, 3]
            }
            ,]
    }, []);

    const getCategory = (id) => {


    }

    const showPopup = () => {
        this.refs.popup.instance.show();
    }

    const hidePopup = () => {
        this.refs.popup.instance.hide();
    }
    const handleAnchorClick = (e)=>{
            e.preventDefault()
    }

    const renderScheduleEvent = React.useCallback((data) => {
        // const cat = getCategory(data.original.category);
        // if (data.allDay) {
        //     return <div style={{background: cat.color}} className="md-custom-event-allday-title">{data.title}</div>;
        // }

        return <Tippy  content={<ScheduleChartHover hoverdata={data}></ScheduleChartHover>}  
        placement='bottom-end' theme='light' arrow={false} interactive={true}  inlinePositioning= {true} zIndex= {99999} appendTo= {document.body} >
        <a href="#" id={data.category} onClick={handleAnchorClick} >
        <div className="md-custom-event-cont" style={{ background: data.color }}>
            <div className="md-custom-event-wrapper">
                <div style={{ background: data.color }} className="md-custom-event-category">{data.title}</div>
                <div className="md-custom-event-details">
                    {/* <div className="md-custom-event-title">{data.title}</div> */}
                    {/* <div className="md-custom-event-time">{data.start} - {data.end}</div> */}
                    {/* <Button className="md-custom-event-btn" color="dark" variant="outline" onClick={edit}>Edit</Button> */}

                    
                    

                    
                </div>
            </div>
        </div>
        </a>
        </Tippy>
                    

    });



    const changeView = React.useCallback((event) => {
        let calendarView;
        switch (event.target.value) {
            case 'calendar':
                calendarView = {
                    calendar: {
                        labels: true
                    }
                };
                break;
            case 'schedule':
                calendarView = {
                    schedule: {
                        type: 'week',
                        allDay: false,
                        startTime: '06:00',
                        endTime: '12:00',
                        timeLabelStep: 120
                    }
                };
                break;
        }
        setView(event.target.value);
        setCalView(calendarView);
    }, [setView, setCalView]);



    // const view = React.useMemo(() => {
    //     return {
    //         schedule: { type: 'day' }
    //     };
    // }, []);

    const onSelectedDateChange = React.useCallback((event) => {
        setCurrentDate(event.date);
    }, [setCurrentDate]);

    const getFirstDayOfWeek = React.useCallback((d, prev) => {
        const day = d.getDay();
        const diff = d.getDate() - day + (prev ? -7 : 7);
        return new Date(d.setDate(diff));
    }, []);

    const navigatePage = React.useCallback((prev) => {
        if (view == 'calendar') {
            const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
            setCurrentDate(prevNextPage);
        } else {
            const prevNextSunday = getFirstDayOfWeek(currentDate, prev);
            setCurrentDate(prevNextSunday);
        }
    }, [view, currentDate, setCurrentDate, getFirstDayOfWeek]);

    // const customWithNavButtons = () => {
    //     return <React.Fragment >
    //         <CalendarNav className="md-custom-header-nav "  />


    //         <div className="md-custom-header-controls ">
    //             <Button onClick={() => navigatePage(true)} icon="material-arrow-back" variant="flat" className="md-custom-header-button border border-primary  "></Button>
    //             <CalendarToday className="md-custom-header-today text-black" />

    //             <Button onClick={() => navigatePage(false)} icon="material-arrow-forward" variant="flat" className="md-custom-header-button"></Button>
    //         </div>
    //         <div className="md-custom-header-view">
    //             <SegmentedGroup value={view} onChange={changeView}>
    //                 <SegmentedItem value="schedule" icon="material-list" />
    //                 <SegmentedItem value="calendar" icon="calendar" />
    //             </SegmentedGroup>
    //         </div>
    //     </React.Fragment>;
    // }

    const customTemplate = () => {
        return <>


            <div className=' d-flex flex-row justify-content-between  ' style={{width:'100%',margin:'0',padding:'0'}}>
            <CalendarNav className="bg-white shadow-sm " />
            <div className="d-flex flex-row   " style={{fontSize:'1em'}}>
                {/* <Button onClick={() => navigatePage(true)} icon="material-arrow-back" variant="flat" className="bg-white m-0 shadow-sm "></Button> */}
                <Button onClick={() => navigatePage(true)} className="bg-white m-0 shadow-sm "  > <i className=" fas fa-arrow-left"></i> </Button>
                <CalendarToday className="md-custom-header-today text-black   bg-white shadow-sm px-lg-5 mx-lg-3 mx-2"   />

                {/* <Button onClick={() => navigatePage(false)} icon="material-arrow-forward" variant="flat" className="md-custom-header-button  "></Button> */}
                <Button onClick={() => navigatePage(false)} className="bg-white m-0 shadow-sm"  > <i className=" fas fa-arrow-right"></i> </Button>
            </div>

            <div className="md-custom-header-view ">
                <SegmentedGroup value={view} onChange={changeView}>
                    <SegmentedItem value="schedule" icon="material-list" />
                    <SegmentedItem value="calendar" icon="calendar" />
                </SegmentedGroup>
            </div>

            </div>
        </>
    }


    return (
        <div className="md-custom-header " >
            <Eventcalendar

                theme="material"
                themeVariant="light"
                onSelectedDateChange={onSelectedDateChange}
                selectedDate={currentDate}
                renderHeader={customTemplate}
                view={calView}
                data={myEvents}
                height={470}
                // onCellHoverIn={}
                renderScheduleEvent={renderScheduleEvent}

            />
        </div>
    );
}

export default ScheduleChart;