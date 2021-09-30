import React from "react";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonam from '../images/sonam.jpg'
const ScheduleChartHover = (props) => {
    const { hoverdata } = props;

    const getParticipant = (id) => {
        switch (id) {
            case 1:
                return {
                    name: 'Monalisa Sharma',
                    img: 'https://img.mobiscroll.com/demos/f1.png',
                    age: '25',
                    gender: 'female',
                    status: 'done'

                }
            case 2:
                return {
                    name: 'Sharon',
                    img: 'https://img.mobiscroll.com/demos/f2.png',
                    age: '25',
                    gender: 'female',
                    status: 'running'
                }
            case 3:
                return {
                    name: 'Emily',
                    img: 'https://img.mobiscroll.com/demos/f3.png',
                    age: '25',
                    gender: 'female',
                    status: 'waiting'
                }
            case 4:
                return {
                    name: 'Rose',
                    img: 'https://img.mobiscroll.com/demos/f4.png',
                    age: '25',
                    gender: 'female',
                    status: 'done'
                }
            case 5:
                return {
                    name: 'Matt',
                    img: 'https://img.mobiscroll.com/demos/m1.png',
                    age: '25',
                    gender: 'female',
                    status: 'running'
                }
            case 6:
                return {
                    name: 'Rick',
                    img: 'https://img.mobiscroll.com/demos/m2.png',
                    age: '25',
                    gender: 'female',
                    status: 'waiting'
                }
            case 7:
                return {
                    name: 'John',
                    img: 'https://img.mobiscroll.com/demos/m3.png',
                    age: '25',
                    gender: 'female',
                    status: 'done'
                }
            case 8:
                return {
                    name: 'Ethan',
                    img: 'https://img.mobiscroll.com/demos/m4.png',
                    age: '25',
                    gender: 'female',
                    status: 'done'
                }
        }
    };
    const handleClick=(e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <span className='text-muted ' style={{ fontSize: '10px' }}>Wating patient</span>
            <div className="md-cutom-event-img-cont mt-2 overflow-auto " style={{ height: '300px', width: '250px' }} >
                {hoverdata.original.participants && hoverdata.original.participants.map(function (p) {
                    return (
                        <div key={p} className='d-flex flex-row py-2 border-bottom' >
                            <img className="md-custom-event-img" src={getParticipant(p).img} />

                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between">
                                    <span className='fw-bold'> {getParticipant(p).name}</span>
                                    <span className='badge' id={getParticipant(p).status}>{getParticipant(p).status}</span>
                                </div>
                                <div className="d-flex text-muted ">
                                    <span className='pe-2'>{getParticipant(p).age}years</span>
                                    <span className='pe-4'>{getParticipant(p).gender}</span>
                                    <a href="#" className='' onClick={handleClick}>See More</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>




    );
}

export default ScheduleChartHover;