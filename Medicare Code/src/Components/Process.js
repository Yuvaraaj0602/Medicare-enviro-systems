import React from 'react'
import './Process.css'
import  prochr from "../Assets/Group 25360.png"

import Arrowline  from "../Assets/Vector 1.png" 
import { Link } from 'react-router-dom'


export default function Process() {
  return (
    <div id='process'>
      <h1 className="process-head"> Process</h1>
      <img src={Arrowline} className='process-underline' />
      <hr className="biglineProcess" />
      <hr className="smalllineProcess" />
      <div  className="hex" ><div className='empty'></div>
      <img src={prochr} className='img-1'/>
     
      </div>
       
    </div>
  )
}
