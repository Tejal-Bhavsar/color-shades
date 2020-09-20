import React, { useState } from 'react';
import './App.css';
import Shades from './Shades';
import ShadeInput from  './ShadeInput'
 
 
function App() {
  const [color,setcolor] = useState();

  const oninputchange = (value) => {
    setcolor(value)
  }


  return (

    <div className="App">
      <ShadeInput color={color} oninputchange={oninputchange} />
      <Shades />

    </div>
  );
}

export default App;
