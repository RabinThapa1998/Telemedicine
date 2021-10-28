import React,{Component} from 'react';
import SideBar from './components/Sidebar/SideBar.js'

import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Schedules from './components/Schedule/Schedules.js';
import Patients from './components/Patients/Patients.js';
import Doctors from './components/Doctors/Doctors.js';
import Messages from './components/Message/Messages.js';
import DashBoard from './components/Dashboard/DashBoard.js';
import CreatePatient from './components/Patients/CreatePatient/CreatePatient.js'; 


function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid row  m-0 p-0'>
        <SideBar />   
          <Route exact path='/' component={DashBoard}></Route>       
          <Route  path='/schedules' component={Schedules}></Route>       
          <Route  path='/patients' component={Patients}></Route>       
          <Route  path='/doctors' component={Doctors}></Route>       
          <Route  path='/messages' component={Messages}></Route> 
          <Route  path='/createpatient' component={CreatePatient}></Route>      
      </div>
    </BrowserRouter>
  );
}

export default App;
