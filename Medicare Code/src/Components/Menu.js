import React, { useState } from 'react'
import "./Menu.css"
import logo from '../Assets/Group 25054 (1).png'
import { Link, useNavigate } from 'react-router-dom'
import Homepage from '../HomePage'
import Legal from '../Legal/Legal'
import Gallery from '../Gallery/Gallery'
import Process from '../Processes/processes'

export default function Menu() {
  const navigate =useNavigate();
  let [nav, setNav]= useState(false);
  return (
    <div className='menu'>
        <nav>
            <div className="logo">
                <img src={logo} className='mes' />
            </div>
                <div className='menubutton' onClick={()=>setNav(nav=true)}> ☰</div>
                <ul className={nav ? "nav-list active":"nav-list"}>
                  <div className='cut' onClick={()=>setNav(nav=false)}>X</div>
                    <li className='nav-items'><a onClick={()=>navigate('/')}>HOME</a></li>
                    <li className='nav-items'><a href='#about'>ABOUT US</a></li>
                    <li className='nav-items'><a href='#service'>OUR SERVICES</a></li>
                    <li className='nav-items'><a onClick={()=>navigate('/process')}>PROCESS</a></li>
                    <li className='nav-items'><a href='#clients'>CLIENT</a></li>
                    <li className='nav-items'><a onClick={()=>{navigate('/Legal')}}>LEGAL</a></li>
                    <li className='nav-items'><a onClick={()=>{navigate('/gallery')}}>GALLERY</a></li>
                    <li className='nav-items'><a href='#contact'>CONTACT US</a></li>
                </ul>
            </nav>   
        

    </div>
  )
}
