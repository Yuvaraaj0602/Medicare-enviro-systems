import React from 'react'
import './Clients.css'
import Arrowline from "../Assets/Vector 1.png"
import clLogo1 from '../Assets/cl-logo-1.png'
import clLogo2 from '../Assets/cl-logo-2.png'
import clLogo3 from '../Assets/cl-logo-3.png'
import clLogo4 from '../Assets/cl-logo-4.png'
import clLogo5 from '../Assets/cl-logo-5.png'
import clLogo6 from "../Assets/cl-logo-6.png"
import clLogo7 from "../Assets/cl-logo-7.png"
import clLogo8 from '../Assets/cl-logo-8.png'


export default function Clients() {
  return (
    <div id='clients'>
        <h1 className='client-head'>OUR CLIENT</h1>
        <img src={Arrowline}  className='client-underline' alt='img'/>
        <div className='logos'>
          <div className='logo-slide'>
            <img src={clLogo1} alt='img'/>
            <img src={clLogo2} alt='img'/>
            <img src={clLogo3} alt='img'/>
            <img src={clLogo4} alt='img'/>
            <img src={clLogo5} alt='img'/> 
            <img src={clLogo6} alt='img'/>
            <img src={clLogo7} alt='img'/>
            <img src={clLogo8} alt='img'/>
            <img src={clLogo1} alt='img'/> 
            <img src={clLogo2} alt='img'/>
            <img src={clLogo3} alt='img'/>
          </div>
        </div>
    </div>
  )
}
