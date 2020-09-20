import React, { useEffect, useState } from 'react';
import './App.css';
import Shades from './Shades';
import ShadeInput from  './ShadeInput';
import randomcolor from 'randomcolor';
 
 
function App() {
  const [color,setColor] = useState();

  useEffect(() => {
    setColor(randomcolor())
  },[])

  const onInputChange = (value) => {
    setColor(value);
  }


  return (

    <div className="App">
      <ShadeInput color={color} onInputChange={onInputChange} />
      <Shades color={color} />

    </div>
  );
}

export default App;
