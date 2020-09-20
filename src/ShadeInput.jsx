import React from 'react';

const ShadeInput = (props) =>{

    return (
        <>
        <div className="shade-search"> 
            <div className="emojis"> &#128512; &#128512; &#128512; &#128512;</div>
            <input type="text"   
            className="shade-input"
            onChange={(e) => props.onInputChange(e.target.value)} 
             value={props.color}/> 
            
            <div className="emojis"><span>&#128512; &#128512;&#128512;&#128512;</span> </div>
        </div>
        </>
    )

}

 export default ShadeInput;