
import './App.css';
import React from "react"
import FullName from "./Component/Profile/FullName"
import Address from "./Component/Profile/Address"
import image from "./Component/Profile/images123.png"

function App() {
  return (
    <div className="App">
     <FullName/>
      <Address/>
      <img src={image} />
    </div>
  );
}

export default App;
