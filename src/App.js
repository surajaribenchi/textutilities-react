
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const[alert,setalert]=useState("null");
  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert("null")
    },1500);
  }
  const[mode,setmode]=useState("light"); //weather dark  mode is enabled or not
   const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey';
      showalert(" dark mode has enabled","success");
      document.title="Textutils-Dark mode"
      // setInterval(() => {
      //   document.title="Textutils is amazing"
      // },1000);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert(" light mode has enabled","success");
      document.title="Textutils-Light mode"
    }
  }
  return (
  <>
   {/* <Router> */}
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">

{/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showalert={showalert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}

</div>
{/* </Router> */}

 </>
  );
}

export default App;
