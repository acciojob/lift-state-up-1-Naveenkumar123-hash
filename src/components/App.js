
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Button from "./Button";

const App = () => {
  let [showModal,setShowModal]=useState(false);

  function handling(){
     setShowModal(true)
  }

  return (
    <div className="parent">
             <h1>Parent Component</h1>
             <p>Child Component</p>
             <Button handling={handling}/>
             {
             (showModal)&&<div className="child">
             <h3>Modal Content</h3>
             <p>This is a Modal Content</p>
             </div>
             } 
        </div>
  )
}

export default App
