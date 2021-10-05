import React from 'react'

const FullCalendarHover = (props) => {
    
    const ids = [...props.data.groupId]
    const id = ids.filter(word => word !== ',')
 
    

    const patient = [{
        name: 'Monalisa Sharma',
        img: 'https://img.mobiscroll.com/demos/f1.png',
        age: '25',
        gender: 'female',
        status: 'done',
        pid:'1'

    }, {
        name: 'Sharon',
        img: 'https://img.mobiscroll.com/demos/f2.png',
        age: '25',
        gender: 'female',
        status: 'running',
        pid: '2'
    }, {
        name: 'Emily',
        img: 'https://img.mobiscroll.com/demos/f3.png',
        age: '25',
        gender: 'female',
        status: 'waiting',
        pid: '3'
    }, {
        name: 'Rose',
        img: 'https://img.mobiscroll.com/demos/f4.png',
        age: '25',
        gender: 'female',
        status: 'done',
        pid: '4'
    }, {
        name: 'Matt',
        img: 'https://img.mobiscroll.com/demos/m1.png',
        age: '25',
        gender: 'female',
        status: 'running',
        pid: '5'
    }, {
        name: 'Rick',
        img: 'https://img.mobiscroll.com/demos/m2.png',
        age: '25',
        gender: 'female',
        status: 'waiting',
        pid: '6'
    }, {
        name: 'John',
        img: 'https://img.mobiscroll.com/demos/m3.png',
        age: '25',
        gender: 'female',
        status: 'done',
        pid: '7'
    }, {
        name: 'Ethan',
        img: 'https://img.mobiscroll.com/demos/m4.png',
        age: '25',
        gender: 'female',
        status: 'done',
        pid: '8'
    }]

    function getParticipant(id ) {
        return(    
        patient.find(data=> data.pid === id))
    }
    const handleClick=(e)=>{
        e.preventDefault()
    }
 

    return( 
        <div>
            <span className='text-muted ' style={{ fontSize: '10px' }}>Wating patient</span>
            <div className="md-cutom-event-img-cont mt-2 overflow-auto " style={{ height: '300px', width: '250px' }} >
            {id && id.map(function (p) {
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

export default FullCalendarHover;