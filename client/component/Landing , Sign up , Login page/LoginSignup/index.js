import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./Navbar"
import Body from './Body';

function App(){
  return(
    <div>
       <Navbar />
       <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

