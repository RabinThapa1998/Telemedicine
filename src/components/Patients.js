import React,{Component} from "react";

class Patients extends Component{
    
    render(){
        
const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];        
        return(
            <div className='page-content px-lg-5 py-2  container' style={{overflow:'hidden'}} >
                <h1>Patients</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque eveniet exercitationem sed libero aliquid ab quasi error soluta, iusto excepturi aspernatur adipisci illo, accusantium dolorum alias dolorem placeat quaerat?</p>

                <div>
                    
                    </div>
            </div>
        )
    }
}
export default Patients;