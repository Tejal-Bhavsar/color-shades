import React, { useState } from 'react';

const ShadeInput = () =>{

    const [color, setColor] = useState("black")

    const inputColor = (event) => {
        setColor(event.target.input)
    }

    return (
        <>
        <div className="shade-search"> 
            <div className="emojis"> &#128512; &#128512; &#128512; &#128512;</div>
            <input type="text"   className="shade-input" onChange={inputColor} /> 
            <div className="emojis">&#128512; &#128512;&#128512;&#128512; </div>
        </div>
        </>
    )

}

 export default ShadeInput;