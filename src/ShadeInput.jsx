import React, { useState } from 'react';

const ShadeInput = (props) =>{

    return (
        <>
        <div className="shade-search"> 
            <div className="emojis"> &#128512; &#128512; &#128512; &#128512;</div>
            <input type="text"   
            className="shade-input"
             value={props.color}
             onChange={(e) => props.oninputchange(e.target.value)} /> 
            <div className="emojis">&#128512; &#128512;&#128512;&#128512; </div>
        </div>
        </>
    )

}

 export default ShadeInput;