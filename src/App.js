import React,{Component} from 'react';
import SideBar from './components/SideBar.js'
import DashBoard1 from './components/DashBoard1'
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Schedules from './components/Schedules.js';
import Patients from './components/Patients.js';
import Doctors from './components/Doctors.js';
import Messages from './components/Messages.js';

function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid row no-gutters m-0 p-0'>
        <SideBar />   
          <Route exact path='/' component={DashBoard1}></Route>       
          <Route  path='/schedules' component={Schedules}></Route>       
          <Route  path='/patients' component={Patients}></Route>       
          <Route  path='/doctors' component={Doctors}></Route>       
          <Route  path='/messages' component={Messages}></Route>       
      </div>
    </BrowserRouter>
  );
}

export default App;
