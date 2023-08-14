import React from "react";
import { useState } from "react";

const Button=({handling})=>{
    
    
    return(
        <div>
            <button onClick={handling}>Show Modal</button>
        </div>
    )
}

export default Button