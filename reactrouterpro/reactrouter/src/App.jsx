import {Route, Routes } from 'react-router-dom' ;
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Nevigationbar from './components/Nevigationbar';
import { useState } from 'react';
import Privateroute from './components/Privateroute';
 function App() {
   const[isloggedin,setloggedin]=useState(false);
    return ( 
    <div className='bg-black text-white h-[100vh]'> 
      <Nevigationbar isloggedin={isloggedin} setloggedin={setloggedin}/>
      <Routes> 
      <Route path='/' element={<Home isloggedin={isloggedin}/>} ></Route> 
      <Route path='/login' element={<Login setloggedin={setloggedin}/>} ></Route>
      <Route path='/signup' element={<Signup setloggedin={setloggedin}/>} ></Route>
      <Route path='/dashboard' element={ <Privateroute isloggedin={isloggedin}><Dashboard/></Privateroute> } ></Route> 
      </Routes> 
    </div> ) } 
export default App