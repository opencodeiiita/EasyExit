import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./component/Landing , Sign up , Login page/Navbar"
import Body from './component/Landing , Sign up , Login page/Body';

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

