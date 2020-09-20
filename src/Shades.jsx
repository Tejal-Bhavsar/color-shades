import React, { useEffect, useState } from 'react';
import Values from 'values.js';
 

const Shades = (props) => {
    const  [shades, setShades] = useState([]);
    useEffect(() => { 
        createshades();
    }, [props.color]);

    const createshades = () => {
        const shades = new Values(props.color).shades(1);
        setShades(shades)
    }

    return (
        <div className="shades"> 
         {shades.map((shade) => (
                 <div className="shade" style={{backgroundColor: shade.hexString()}}>{shade.hexString()}</div> )
                  )}
        </div>
    
    )

}


export default Shades;